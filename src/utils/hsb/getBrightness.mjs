import Color from "../../lib/Color.mjs";

export default function getbrightness(color= Color.prototype){
    let rgb = color.rgb
    const sorted = color.rgb.sort((a, b) => b - a)
    const indexSorted = sorted.map(each => { return rgb.indexOf(each) })

    let diff =  rgb[indexSorted[0]] 
    let percent = parseInt(diff* 100/255)

    return percent
}