import Button from './btn.js'
import Preloader from './preloader.js'

const preloader = new Preloader('.preloader')
const button = new Button()

preloader.init()

console.log(button, preloader)