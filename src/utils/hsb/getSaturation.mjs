import Color from "../../lib/Color.mjs";

export function getSaturation(color = Color.prototype) {
    let rgb = color.rgb
    const sorted = color.rgb.sort((a, b) => b - a)
    const indexSorted = sorted.map(each => { return rgb.indexOf(each) })

    let max =  (rgb[indexSorted[0]])
    let diff = (rgb[indexSorted[0]] - (rgb[indexSorted[2]]))
    let percent = ((diff) * 100 / max)
  

    return parseInt(percent)

}