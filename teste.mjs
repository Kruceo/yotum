import Color from "./src/lib/Color.mjs";
import brightness from "./src/utils/bright.mjs";
import hue from "./src/utils/hue.mjs";

let red = new Color('#08f5')
let blue= new Color('#01f5')
console.log(red.hex,red.rgb)
console.log(red.hex,blue.rgb)
for (let i = 1; i < 2; i++) {
    const element = document.createElement('div')
    
    const c = brightness(red, i* 120)
    console.log(c.hexAplha)
    const h = hue(c,i*20)
    console.log(h.hexAplha)
    element.style.background = "rgb(" + h.rgba+")"
    document.body.appendChild(element)

    element.innerText = h.rgba + '  |  ' + h.hexAplha
    element.style.width = '100%'
    element.style.height = '100px'
    element.style.border = 'solid black 1px'
}