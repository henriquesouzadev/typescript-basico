import { Timeout } from "./Timeout.js";

export class Slide {
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  index: number;
  slide: Element;
  timeout: Timeout | null;
  pausedTimeout: Timeout | null;
  paused: boolean;

  constructor(container: Element, slides: Element[], controls: Element, time: number = 5000) {
    this.container = container
    this.slides = slides
    this.controls = controls
    this.time = time
    this.index = localStorage.getItem('activeSlide') ? Number(localStorage.getItem('activeSlide')) : 0
    this.slide = this.slides[this.index]
    this.timeout = null
    this.pausedTimeout = null
    this.paused = false

    this.init()
  }

  hide(el: Element) {
    el.classList.remove('active')

    if (el instanceof HTMLVideoElement) {
      el.currentTime = 0
      el.pause()
    }
  }

  show(index: number) {
    this.index = index
    this.slide = this.slides[this.index]
    this.slides.forEach(el => this.hide(el))
    this.slide.classList.add('active')

    localStorage.setItem('activeSlide', String(this.index))

    if (this.slide instanceof HTMLVideoElement) {
      this.autoVideo(this.slide)
    } else {
      this.auto(this.time)
    }
  }

  autoVideo(video: HTMLVideoElement) {
    let firstPlay = true
    video.muted = true
    video.play()

    video.addEventListener('playing', () => {
      if (firstPlay) {
        this.auto(video.duration * 1000)
        firstPlay = false
      } 
    })
  }

  auto(time: number) {
    this.timeout?.clear()
    this.timeout = new Timeout(() => this.next(), time)
  }

  prev() {
    if (this.paused) return
    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1
    this.show(prev)
  }

  next() {
    if (this.paused) return
    const next = (this.index + 1) < this.slides.length ? this.index + 1 : 0
    this.show(next)
  }

  pause() {
    this.pausedTimeout = new Timeout(() => {
      this.timeout?.pause()
      this.paused = true
      
      if (this.slide instanceof HTMLVideoElement) this.slide.pause()
    }, 300)
  }

  continue() {
    this.pausedTimeout?.clear()

    if (this.paused) {
      this.paused = false
      this.timeout?.continue()

      if (this.slide instanceof HTMLVideoElement) this.slide.play()
    }
  }

  private addControls() {
    const prevBtn = document.createElement('button')
    const nextBtn = document.createElement('button')

    prevBtn.innerText = 'Slide Anterior'
    nextBtn.innerText = 'Próximo Slide'

    this.controls.appendChild(prevBtn)
    this.controls.appendChild(nextBtn)

    this.controls.addEventListener('pointerdown', () => this.pause())
    this.controls.addEventListener('pointerup', () => this.continue())

    nextBtn.addEventListener('pointerup', () => this.next())
    prevBtn.addEventListener('pointerup', () => this.prev())
  }

  private init() {
    this.addControls()
    this.show(this.index)
  }
}