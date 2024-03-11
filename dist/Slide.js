import { Timeout } from "./Timeout.js";
export class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slide;
    timeout;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.index = 0;
        this.slide = this.slides[this.index];
        this.timeout = null;
        this.init();
    }
    hide(el) {
        el.classList.remove('active');
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[this.index];
        this.slides.forEach(el => this.hide(el));
        this.slide.classList.add('active');
        this.auto(this.time);
    }
    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);
        // const id = setTimeout(() => this.next(), time)
        // clearTimeout(id)
    }
    prev() {
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
    }
    next() {
        const next = (this.index + 1) < this.slides.length ? this.index + 1 : 0;
        this.show(next);
    }
    addControls() {
        const prevBtn = document.createElement('button');
        const nextBtn = document.createElement('button');
        prevBtn.innerText = 'Slide Anterior';
        nextBtn.innerText = 'Próximo Slide';
        this.controls.appendChild(prevBtn);
        this.controls.appendChild(nextBtn);
        nextBtn.addEventListener('pointerup', () => this.next());
        prevBtn.addEventListener('pointerup', () => this.prev());
    }
    init() {
        this.addControls();
        this.show(this.index);
    }
}
