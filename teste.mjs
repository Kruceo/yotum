import Color from "./src/lib/Color.mjs"
import hue from "./src/utils/hsb/hue.mjs"
import square from './src/palletes/square.mjs'
import additive from "./src/palletes/additive.mjs"

let wheelframe = document.querySelector('#wheel')
let pointer = document.querySelector('#pointer')

let saturationPoiter = pointer.querySelector('p')

let pointers = []

let img = document.querySelector('img')
let c = new Color('#f0f')
img.style.filter = "brightness("+ c.hsb.brightness+'%)'

additive(c,40,5).forEach(each => {
    console.log(each)
    let np = pointer.cloneNode(true)
    let sp = np.querySelector('#saturation')
    pointers.push(np)
    wheelframe.appendChild(np)
    np.style.top = img.clientHeight / 2 - 35 + 'px'
    np.style.left = img.clientWidth / 2 - 22 + 'px'
    sp.style.left =
        (((img.clientWidth / 2) * each.hsb.saturation) / 100) + 'px'
    

    let pallete = document.createElement('div')
    document.body.appendChild(pallete)
    pallete.innerText = '#\n#'
    pallete.style.background = '#'+each.hex
    setInterval(() => {


        np.style.transform = "rotateZ(" + -each.hsb.hue + "deg)"

        sp.style.background = '#' + each.hex

        l += 10
    }, 1000 / 5);
})

let l = 0
pointer.style.display = 'none'
