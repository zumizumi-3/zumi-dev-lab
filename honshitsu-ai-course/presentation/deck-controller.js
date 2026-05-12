class PresentationDeck {
  constructor() {
    this.slides = Array.from(document.querySelectorAll(".presentation-deck .slide"));
    this.counter = document.querySelector(".deck-counter");
    this.progress = document.querySelector(".deck-progress span");
    this.notesDrawer = document.querySelector(".notes-drawer");
    this.notesContent = document.querySelector(".notes-content");
    this.notesToggle = document.querySelector(".deck-notes-toggle");
    this.current = this.resolveInitialIndex();
    this.lastWheelAt = 0;
    this.touchStart = null;

    this.bind();
    this.updateScale();
    this.goTo(this.current, { replace: true });
  }

  bind() {
    document.querySelectorAll("[data-deck-action]").forEach((control) => {
      control.addEventListener("click", () => this.handleAction(control.dataset.deckAction));
    });
    window.addEventListener("keydown", (event) => this.onKeydown(event));
    window.addEventListener("wheel", (event) => this.onWheel(event), { passive: false });
    window.addEventListener("touchstart", (event) => this.onTouchStart(event), { passive: true });
    window.addEventListener("touchend", (event) => this.onTouchEnd(event), { passive: true });
    window.addEventListener("resize", () => this.updateScale());
    window.addEventListener("hashchange", () => this.goTo(this.resolveInitialIndex(), { replace: true }));
  }

  handleAction(action) {
    if (action === "prev") this.goTo(this.current - 1);
    if (action === "next") this.goTo(this.current + 1);
    if (action === "notes") this.toggleNotes();
    if (action === "notes-close") this.closeNotes();
  }

  onKeydown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const nextKeys = ["ArrowRight", "ArrowDown", "PageDown", " "];
    const prevKeys = ["ArrowLeft", "ArrowUp", "PageUp", "Backspace"];
    if (nextKeys.includes(event.key)) {
      event.preventDefault();
      this.goTo(this.current + 1);
    } else if (prevKeys.includes(event.key)) {
      event.preventDefault();
      this.goTo(this.current - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      this.goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      this.goTo(this.slides.length - 1);
    } else if (event.key.toLowerCase() === "n") {
      event.preventDefault();
      this.toggleNotes();
    }
  }

  onWheel(event) {
    if (Math.abs(event.deltaY) < 34) return;
    event.preventDefault();
    const now = Date.now();
    if (now - this.lastWheelAt < 430) return;
    this.lastWheelAt = now;
    this.goTo(this.current + (event.deltaY > 0 ? 1 : -1));
  }

  onTouchStart(event) {
    const touch = event.changedTouches[0];
    this.touchStart = { x: touch.clientX, y: touch.clientY };
  }

  onTouchEnd(event) {
    if (!this.touchStart) return;
    const touch = event.changedTouches[0];
    const diffX = this.touchStart.x - touch.clientX;
    const diffY = this.touchStart.y - touch.clientY;
    const primary = Math.abs(diffX) > Math.abs(diffY) ? diffX : diffY;
    if (Math.abs(primary) > 48) this.goTo(this.current + (primary > 0 ? 1 : -1));
    this.touchStart = null;
  }

  goTo(index, options = {}) {
    const next = Math.max(0, Math.min(index, this.slides.length - 1));
    this.current = next;
    this.slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === next;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
    this.updateChrome(options);
    this.updateNotes();
  }

  updateChrome({ replace = false } = {}) {
    const currentSlide = this.slides[this.current];
    const total = this.slides.length;
    const progressValue = total <= 1 ? 100 : (this.current / (total - 1)) * 100;

    if (this.counter) this.counter.textContent = `${this.current + 1} / ${total}`;
    if (this.progress) this.progress.style.width = `${progressValue}%`;
    document.title = `${currentSlide.dataset.slide || currentSlide.id} | ${document.title.replace(/^D[12]-\d{2} \| /, "")}`;

    const hash = `#${currentSlide.id}`;
    if (window.location.hash !== hash) {
      const method = replace ? "replaceState" : "pushState";
      window.history[method](null, "", hash);
    }
  }

  updateScale() {
    const isCompact = window.innerWidth <= 760;
    const availableWidth = window.innerWidth - (isCompact ? 20 : 40);
    const availableHeight = window.innerHeight - (isCompact ? 104 : 92);
    const scale = Math.min(availableWidth / 1280, availableHeight / 720, 1);
    document.documentElement.style.setProperty("--deck-scale", String(Math.max(scale, 0.1)));
  }

  updateNotes() {
    if (!this.notesContent) return;
    const activeSlide = this.slides[this.current];
    const note = activeSlide.querySelector(".speaker-notes pre");
    this.notesContent.textContent = note ? this.normalizeNote(note.textContent) : "このスライドの講師ノートはありません。";
  }

  normalizeNote(value) {
    return value.trim().replace(/\n {8}/g, "\n");
  }

  toggleNotes() {
    const willOpen = !document.body.classList.contains("show-notes");
    document.body.classList.toggle("show-notes", willOpen);
    this.notesDrawer?.setAttribute("aria-hidden", String(!willOpen));
    this.notesToggle?.setAttribute("aria-pressed", String(willOpen));
  }

  closeNotes() {
    document.body.classList.remove("show-notes");
    this.notesDrawer?.setAttribute("aria-hidden", "true");
    this.notesToggle?.setAttribute("aria-pressed", "false");
  }

  resolveInitialIndex() {
    const id = decodeURIComponent(window.location.hash.replace("#", ""));
    const index = this.slides.findIndex((slide) => slide.id === id || slide.dataset.slide === id);
    return index >= 0 ? index : 0;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".presentation-deck .slide")) new PresentationDeck();
});
