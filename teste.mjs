import Color from "./src/lib/Color.mjs";
import { square } from "./src/palletes/square.mjs";
import brightness from "./src/utils/brightness.mjs";
import hue from "./src/utils/hsb/hue.mjs";
// import saturate from "./src/utils/linearToThis.mjs";
import saturate from "./src/utils/saturate.mjs";
let c = new Color('#20f')
let slider = document.createElement('input')
document.body.appendChild(slider)
slider.max = 360
slider.value = 0
slider.style.width =  100+ '%'
slider.type = 'range'

let slider1 = document.createElement('input')
document.body.appendChild(slider1)
slider1.max = 100
slider1.value = 0
slider1.style.width =  100+ '%'
slider1.type = 'range'

let slider2 = document.createElement('input')
document.body.appendChild(slider2)
slider2.max = 100
slider2.value = 0
slider2.style.width =  100+ '%'
slider2.type = 'range'

let mess = document.createElement('h2')
mess.style.color = 'white'
let css = document.querySelector('#huecss')
css.style.background = "#"+c.hex


document.body.appendChild(mess)

slider.value = 0
slider1.value = 100
slider2.value = 100

setInterval(() => {
    let hues = hue(c,slider.value)
    hues = saturate(hues,slider1.value)
    hues = brightness(hues,slider2.value)
    mess.innerHTML = hues.hex + '  ' + slider.value+"  "+ ((slider.value * 1.666666) / 100)
    mess.style.background = '#' + hues.hex 
    css.style.filter = "hue-rotate("+slider.value + "deg)"
}, 1000/1);


square(c,0).slice(0,180).forEach((each,index)=>{
    const e = document.createElement('div')
    e.style.width = '100px'
    e.style.background = "#"+each.hex
    document.body.querySelector('#c1').append(e)
    e.innerHTML =(index+"").padStart(2,0) + ' - '+ each.hex
})
square(c,0).slice(180,720).forEach((each,index)=>{
    const e = document.createElement('div')
    e.style.width = '100px'
    e.style.background = "#"+each.hex
    document.body.querySelector('#c2').append(e)
    e.innerHTML =(index+"").padStart(2,0) + ' - '+ each.hex
})

console.log(new Color('#0f08'))