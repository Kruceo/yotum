import Color from "./src/lib/Color.mjs";
import { square } from "./src/palletes/square.mjs";
import brightness from "./src/utils/bright.mjs";
import hue from "./src/utils/hsb/hue.mjs";
// import saturate from "./src/utils/linearToThis.mjs";
import saturate from "./src/utils/saturate.mjs";
let c = new Color('#00ff00')
let slider = document.createElement('input')
let mess = document.createElement('h2')
mess.style.color = 'white'
let css = document.querySelector('#huecss')
css.style.background = "#"+c.hex
slider.type = 'range'
document.body.appendChild(slider)
document.body.appendChild(mess)
slider.max = 100
slider.value = 0
slider.style.width =  100+ '%'
slider.addEventListener('change',(e)=>{
   
})
slider.value = 100

setInterval(() => {
    let hues = brightness(c,slider.value)
    mess.innerHTML = hues.hex + '  ' + slider.value+"  "+ ((slider.value * 1.666666) / 100)
    mess.style.background = '#' + hues.hex 
    css.style.filter = "hue-rotate("+slider.value + "deg)"
}, 1000/5);


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