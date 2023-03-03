import Color from "../lib/Color.mjs"

export default function saturate(color=Color.prototype,value=Number.prototype){
    let v = 100 - value
    let rgb = color.rgb
    const sorted = color.rgb.sort((a,b)=>b-a)
    const indexSorted = []
    sorted.forEach(each=>
        {
            if(!indexSorted.includes(rgb.indexOf(each))){
                indexSorted.push(rgb.indexOf(each))
            }
            else{
                indexSorted.push(rgb.lastIndexOf(each))
            }
        })
    
    let addRgb = [0,0,0]
    console.log(indexSorted)
    addRgb[indexSorted[0]] = rgb[indexSorted[0]]
    addRgb[indexSorted[1]] = rgb[indexSorted[1]] +  (rgb[indexSorted[0]] - rgb[indexSorted[1]])/100 * v
    addRgb[indexSorted[2]] = rgb[indexSorted[2]] +  (rgb[indexSorted[0]] - rgb[indexSorted[2]])/100 * v
    
}