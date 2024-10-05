import Button from './btn.js'
import Preloader from './preloader.js'

const preloader = new Preloader('.preloader')
const button = new Button('.btn', '.container video')

preloader.init()
button.init()
console.log(button, preloader)