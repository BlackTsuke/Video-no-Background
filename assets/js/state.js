export default class State {
  constructor() {
    this.isPlaying = false
  }
  init() {
    this.isPlaying()
    return this
  }
}