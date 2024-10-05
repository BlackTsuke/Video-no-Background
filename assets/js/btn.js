import State from './state.js'
const state = new State()

export default class Button {
  constructor(button, video) {
    this.button = document.querySelector(button)
    this.video = document.querySelector(video)
    this.btnI = this.button.querySelector('i')
  }
  pausar() {
    if (state.isPlaying) {
      this.video.play()
      console.log('tocando')
      this.btnI.classList.remove('ph-pause')
      this.btnI.classList.add('ph-play')
    } else {
      this.video.pause()
      console.log('Parou de tocar')
      this.btnI.classList.remove('ph-play')
      this.btnI.classList.add('ph-pause')
    }
    state.isPlaying = !state.isPlaying
  }
  aoClicar() {
    this.button.addEventListener('click', this.pausar)
  }
  bindEvents() {
    this.pausar = this.pausar.bind(this)
  }
  init() {
    this.bindEvents()
    this.aoClicar()
    return this
  }
}