import Color from "../lib/Color.mjs"
import hue from "./hsb/hue.mjs"

export default function getGeometricHue(color = Color.prototype, value = Number.prototype) {
    let rot = color.hsb.hue 

    rot -= parseInt(rot / 360) * 360
    let add = 0
    
    for (let k = 0; k < rot; k++) {

        if (k > 0 && k < 60) add    += 1.02
        if (k > 60 && k < 100) add  += 1.02
        if (k > 100 && k < 300) add += 1.008
        if (k > 300 && k < 360) add += 1.01
        // if (k > 120 && k < 360) add += 1
        // if (k <= 360 && k >= 300) add += 2
        // if (k > 360) rot -= 360
        // if (k <= 360 && k >= 300) add += 1
        // if (k >  360) rot -= 360

    }
    // console.log(rot,color.hsb.hue,add)
    return Math.round(add)
}