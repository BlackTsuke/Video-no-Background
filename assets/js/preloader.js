export default class Preloader {
  constructor(preloader) {
    this.preloader = document.querySelector(preloader)
  }
  paginaCarregada() {
    this.preloader.style.zIndex = '-100'
  }
  addPreloaderEvents() {
    window.addEventListener('load', this.paginaCarregada)
  }
  bindEvents() {
    this.paginaCarregada = this.paginaCarregada.bind(this)
  }
  init() {
    this.bindEvents()
    this.addPreloaderEvents()
    return this
  }
}