class SlideDeck {
  constructor() {
    document.documentElement.classList.add("supports-reveal");
    this.slides = Array.from(document.querySelectorAll(".slide"));
    this.progress = document.querySelector(".progress");
    this.index = document.querySelector(".slide-index");
    this.current = 0;
    this.observer = new IntersectionObserver(this.onIntersect.bind(this), { threshold: 0.62 });
    this.slides.forEach((slide) => this.observer.observe(slide));
    window.addEventListener("keydown", this.onKeydown.bind(this));
    window.addEventListener("wheel", this.onWheel.bind(this), { passive: false });
    window.addEventListener("touchstart", this.onTouchStart.bind(this), { passive: true });
    window.addEventListener("touchend", this.onTouchEnd.bind(this), { passive: true });
    this.update();
  }

  onIntersect(entries) {
    const active = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    this.current = this.slides.indexOf(active.target);
    this.update();
  }

  onKeydown(event) {
    const nextKeys = ["ArrowDown", "ArrowRight", "PageDown", " "];
    const prevKeys = ["ArrowUp", "ArrowLeft", "PageUp"];
    if (nextKeys.includes(event.key)) {
      event.preventDefault();
      this.goTo(this.current + 1);
    }
    if (prevKeys.includes(event.key)) {
      event.preventDefault();
      this.goTo(this.current - 1);
    }
    if (event.key === "Home") this.goTo(0);
    if (event.key === "End") this.goTo(this.slides.length - 1);
  }

  onWheel(event) {
    if (Math.abs(event.deltaY) < 38) return;
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    window.clearTimeout(this.wheelTimer);
    this.wheelTimer = window.setTimeout(() => this.goTo(this.current + direction), 70);
  }

  onTouchStart(event) {
    this.touchY = event.changedTouches[0].clientY;
  }

  onTouchEnd(event) {
    if (this.touchY == null) return;
    const diff = this.touchY - event.changedTouches[0].clientY;
    if (Math.abs(diff) > 52) this.goTo(this.current + (diff > 0 ? 1 : -1));
  }

  goTo(index) {
    const next = Math.max(0, Math.min(index, this.slides.length - 1));
    this.slides[next].scrollIntoView({ behavior: "smooth", block: "center" });
  }

  update() {
    this.slides.forEach((slide, index) => slide.classList.toggle("is-active", index === this.current));
    const total = Math.max(this.slides.length - 1, 1);
    document.documentElement.style.setProperty("--progress", `${(this.current / total) * 100}%`);
    if (this.index) this.index.textContent = `${this.current + 1} / ${this.slides.length}`;
  }
}

window.addEventListener("DOMContentLoaded", () => new SlideDeck());
