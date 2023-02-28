import additive from './src/additive.mjs';
import { matrixToHex } from './src/lib/matrix.mjs';
import hue from './src/hue.mjs'

let colors =  ['r','g','b','a']

colors.map(each=>{
    const div = document.createElement('div')
    div.id = each
    document.body.appendChild(div)
})

setInterval(() => {
    console.log()
    let cor = "#f00"
    let rot = document.querySelector('input').value
    let ll = hue(cor,rot)
    document.querySelector('h2').innerText = document.querySelector('input').value
    ll.forEach((each,index)=>{
        let c = ['red','green','blue']
        const div = document.querySelector('#'+colors[index])
        div.style.width = parseInt(each) +'px '
        div.innerHTML = each
        div.style.background = c[index]
        document.body.appendChild(div)
    })

    document.querySelector('#a').innerHTML = matrixToHex(ll) + '  ' + cor
    document.querySelector('#a').style.background = "#" +matrixToHex(ll) 
    
    rot += 0
    if(rot > 360)rot = 0

}, 1000/15);


for (let i = 0; i < 9; i++) {
    const el = document.createElement('div')
    let hues = hue('#4f9',i*30)
    hues = matrixToHex(hues)
    el.style.width = '50px'
    el.style.height = '50px'
    el.style.background = '#' + hues
    el.innerText = hues
    document.body.appendChild(el)
}
