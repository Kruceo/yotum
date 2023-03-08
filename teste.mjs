import Color from "./src/lib/Color.mjs";
import compost from "./src/palletes/compost.mjs";
import square from "./src/palletes/square.mjs";
import geometricHue from "./src/utils/geometricHue.mjs";
import getGeometricHue from "./src/utils/getGeometricHue.mjs";
import { getSaturation } from "./src/utils/hsb/getSaturation.mjs";
import hue from "./src/utils/hsb/hue.mjs";
import saturation from "./src/utils/saturate.mjs";

let slider = document.querySelector('#range')
let colorbox = document.querySelector('#color')
let colorbox1 = document.querySelector('.color2')
let c = new Color('#f82')

slider.style.width = '100%'
slider.value = 19
slider.min = 0
slider.max = 360
setInterval(() => {
    let hued = geometricHue(c, slider.value)
    colorbox.innerHTML = '#' + hued.hex + '||| gh:' + slider.value + ' ||| H:' + hued.hsb.hue
    colorbox1.style.filter= 'hue-rotate('+slider.value+'deg)'
    colorbox.style.background = '#' + hued.hex
}, 1000);
compost(c, 5,50).forEach(each => {
    let e = document.createElement('div')
    document.body.append(e)

    e.style.background = "#" + each.hex
    e.innerHTML = each.hex
    let frame = document.querySelector('#wheel')
    let img = frame.querySelector('img')
    let pointer = frame.querySelector('#pointer').cloneNode(true)
    let sat = pointer.querySelector('#saturation')
    frame.appendChild(pointer)


    sat.style.padding = '10px'
    sat.style.borderRadius = '100%'
    sat.style.border = '1px black solid'
    pointer.style.position = 'absolute'
    // pointer.innerText = 'YX'
    pointer.style.left = img.clientWidth / 2 - 8 + 'px'
    pointer.style.top = img.clientWidth / 2 + 8 + 'px'
    sat.style.position = 'absolute'
    sat.style.left = (getSaturation(each) * (img.clientWidth / 2) / 100) + 'px'

    let rot = each.hsb.hue
    let add = 0


    for (let i = 0; i < rot; i++) {

        let ch = each
        if (i > 0 && i < 60) add += 2.15
        if (i <= 300 && i >= 60) add += 0.85
        if (i <= 360 && i >= 300) add += 0.45
        if (i > 360) rot -= 360
        pointer.style.transform = 'rotateZ(-' + (add) + 'deg)'
        sat.style.background = '#' + ch.hex
    }









    // console.log(rot,add)

})