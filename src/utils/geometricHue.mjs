import Color from "../lib/Color.mjs"
import getGeometricHue from "./getGeometricHue.mjs"
import hue from "./hsb/hue.mjs"

export default function geometricHue(color = Color.prototype, value = Number.prototype) {
    let rot = value

    rot -= parseInt(rot / 360) * 360
    let add = 0
    console.log(getGeometricHue(color))
    for (let k = 0; k < rot; k++) {

        if (k > 0 && k < 60) add += 0.5
        if (k > 60 && k < 100) add += 0.5
        if (k > 100 && k < 300) add += 1.1
        if (k > 300 && k < 360) add += 1.5
        // if (k > 120 && k < 360) add += 1
        // if (k <= 360 && k >= 300) add += 2
        // if (k > 360) rot -= 360
        // if (k <= 360 && k >= 300) add += 1
        // if (k >  360) rot -= 360

    }
   
    return hue(new Color('f00'),add)
}