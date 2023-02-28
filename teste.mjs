import Color from "./src/lib/Color.mjs";
import brightness from "./src/utils/bright.mjs";
import hue from "./src/utils/hue.mjs";

let red = new Color('#08f')
let blue= new Color('#01f')
console.log(red.hex,red.rgb)
console.log(red.hex,blue.rgb)
for (let i = 0; i < 5; i++) {
    const element = document.createElement('div')
    element.innerText = i
    const c = brightness(red, i* 25)

    element.style.width = '500px'
    element.style.height = '100px'
    element.style.background = 'rgb(' + c.rgb+")"
    document.body.appendChild(element)
}