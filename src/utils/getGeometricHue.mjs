import Color from "../lib/Color.mjs"


export default function getGeometricHue(color = Color.prototype, value = Number.prototype) {
    let rot = color.hsb.hue 

    // rot -= parseInt(rot / 360) * 360
    let add = 0
    
    for (let k = 0; k < rot; k++) {

        if (k > 0 && k < 55) add    += 2 +0.12
        if (k > 55 && k < 100) add  += 1 -0.12
        if (k > 100 && k < 300) add += 0.912
        if (k > 300 && k < 360) add += 0.3
    }
    // console.log(rot,color.hsb.hue,add)
    return Math.round(add)
}