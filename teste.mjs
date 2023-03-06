import Color from "./src/lib/Color.mjs"
import hue from "./src/utils/hsb/hue.mjs"
import square from './src/palletes/square.mjs'
import additive from "./src/palletes/additive.mjs"
import diffBetween from "./src/palletes/differenceBetween.mjs"
import invert from "./src/utils/invert.mjs"

let wheelframe = document.querySelector('#wheel')
let pointer = document.querySelector('#pointer')

let saturationPoiter = pointer.querySelector('p')

let pointers = []

let img = document.querySelector('img')
let c = new Color('#2f22')
let b = new Color('#f222')

console.log(invert(c))
img.style.filter = "brightness("+ c.hsb.brightness+'%)'
console.log(c.rgba)
console.log(hue(c,180))

diffBetween(c,b,10).forEach(each => {
    console.log(each)
    let np = pointer.cloneNode(true)
    let sp = np.querySelector('#saturation')
    pointers.push(np)
    wheelframe.appendChild(np)
    np.style.top = img.clientHeight / 2 - 35 + 'px'
    np.style.left = img.clientWidth / 2-10 + 'px'
    sp.style.left =
        (((img.clientWidth / 2) * each.hsb.saturation) / 100) + 'px'
    

    let pallete = document.createElement('div')
    document.body.appendChild(pallete)
    pallete.innerText = '#'+each.hexAplha
    pallete.style.background = '#'+each.hex
    setInterval(() => {


        np.style.transform = "rotateZ(" + -each.hsb.hue + "deg)"

        sp.style.background = '#' + each.hex

    }, 1000 / 5);
})

// let l = 0
// pointer.style.display = 'none'
