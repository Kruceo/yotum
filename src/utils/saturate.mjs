import Color from "../lib/Color.mjs";

export default function saturate(color=Color.prototype,value=Number.prototype){

    let v = 100 - value
    if(v == 100)return new Color("FFF")

    let rgb = color.rgb
    const sorted = color.rgb.sort((a,b)=>b-a)
    const indexSorted = []
    sorted.forEach(each=>{
        let fkrgb = [...rgb]

        indexSorted.forEach(other=>fkrgb[other] = null)

        if(!indexSorted.includes(fkrgb.indexOf(each)))
        {
            console.log(1)
            indexSorted.push(fkrgb.indexOf(each))
        }
       
    })

    let addRgb = [0,0,0]
    addRgb[indexSorted[0]] = Math.round(rgb[indexSorted[0]])
    addRgb[indexSorted[1]] = Math.round(rgb[indexSorted[1]] +  (rgb[indexSorted[0]] - rgb[indexSorted[1]])/100 * v)
    addRgb[indexSorted[2]] = Math.round(rgb[indexSorted[2]] +  (rgb[indexSorted[0]] - rgb[indexSorted[2]])/100 * v)
    // console.log(addRgb,indexSorted)
    return new Color(addRgb)
}