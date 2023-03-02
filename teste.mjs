import Color from "./src/lib/Color.mjs";
import { square } from "./src/palletes/square.mjs";
import hue from "./src/utils/hue.mjs";

let c = new Color('#8f0')
let slider = document.createElement('input')
let mess = document.createElement('h2')
let css = document.querySelector('#huecss')
css.style.background = "#"+c.hex
slider.type = 'range'
document.body.appendChild(slider)
document.body.appendChild(mess)
slider.max = 360
slider.style.width = 1000 + 'px'
slider.addEventListener('change',(e)=>{
   
})
slider.value = 180

setInterval(() => {
    let hues = hue(c,slider.value)
    mess.innerHTML = hues.hex + '  ' + slider.value+"  "+ ((slider.value * 1.666666) / 100)
    mess.style.background = '#' + hues.hex 
    css.style.filter = "hue-rotate("+slider.value + "deg)"
}, 1000/10);


square(c,0).forEach(each=>{
    const e = document.createElement('div')
    e.style.background = "#"+each.hex
    document.body.append(e)
    e.innerHTML = each.hex
})