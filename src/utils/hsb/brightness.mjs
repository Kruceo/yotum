import Color from "../../lib/Color.mjs";
/**
 * Adds brightness to the color based in 100% of the same brightness.
 * @param {Color} color - Base color to init.
 * @param {number} value - Percent of total color brightness.
 * @returns {Color} Darker or lighter color.
 */
export default function brightness(color = Color.prototype, value = Number.prototype) {
    let v = value
    let rgb = color.rgb
    const sorted = color.rgb.sort((a, b) => b - a)
    const indexSorted = []

    sorted.forEach(each=>{
        let fkrgb = [...rgb]

        indexSorted.forEach(other=>fkrgb[other] = null)

        if(!indexSorted.includes(fkrgb.indexOf(each)))
        {
           
            indexSorted.push(fkrgb.indexOf(each))
        }
       
    })
    let addRgb = [0, 0, 0]
    
    addRgb[indexSorted[0]] = Math.round((rgb[indexSorted[0]] * 100) / 100 * (v)) / 100
    addRgb[indexSorted[1]] = Math.round((rgb[indexSorted[1]] * 100) / 100 * (v)) / 100
    addRgb[indexSorted[2]] = Math.round((rgb[indexSorted[2]] * 100) / 100 * (v)) / 100
    if(addRgb[indexSorted[0]]>255){
        console.log('wydasudsadijdaj')
    }
    
    return new Color(addRgb)
}