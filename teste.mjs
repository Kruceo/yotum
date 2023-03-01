import Color from "./src/lib/Color.mjs";
import { square } from "./src/palletes/square.mjs";
import hue from "./src/utils/hue.mjs";

let c = new Color('#F00')
let slider = document.createElement('input')
let mess = document.createElement('h2')
slider.type = 'range'
document.body.appendChild(slider)
document.body.appendChild(mess)
slider.max = 360
slider.addEventListener('change',(e)=>{
   
})

setInterval(() => {
    let hues = hue(c,slider.value)
    mess.innerHTML = hues.hex + '  ' + slider.value
}, 250);