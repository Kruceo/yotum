import Color from "./src/lib/Color.mjs";
import hue from "./src/utils/hue.mjs";

let red = new Color('#f109')
let blue= new Color('#01f')
console.log(red.hex,red.rgb)
console.log(red.hex,blue.rgb)
for (let i = 0; i < 5; i++) {
    const element = document.createElement('div')
    element.style.width = '500px'
    element.style.height = '100px'
    element.style.background = 'rgb(' + hue(red,i*360/20).rgb+")"
    document.body.appendChild(element)
}