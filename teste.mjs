import additive from './src/additive.mjs';
import { matrixToHex } from './src/lib/matrix.mjs';
import hue from './src/hue.mjs'

let colors =  ['r','g','b','a']

colors.map(each=>{
    const div = document.createElement('div')
    div.id = each
    document.body.appendChild(div)
})
let rot = 360
setInterval(() => {
    console.log()
    let ll = hue('#800',document.querySelector('input').value)
    document.querySelector('h2').innerText = document.querySelector('input').value
    ll.forEach((each,index)=>{
        let c = ['red','green','blue']
        const div = document.querySelector('#'+colors[index])
        div.style.width = parseInt(each) +'px '
        div.innerHTML = each
        div.style.background = c[index]
        document.body.appendChild(div)
    })

    document.querySelector('#a').innerHTML = 'A'
    document.querySelector('#a').style.background = 'rgb(' + ll.toString() + ')'
    
    rot += 0
    if(rot > 360)rot = 0

}, 1000/15);
