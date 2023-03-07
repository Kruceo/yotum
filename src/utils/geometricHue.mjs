import Color from "../lib/Color.mjs"
import brightness from "./brightness.mjs"
import getGeometricHue from "./getGeometricHue.mjs"
import hue from "./hsb/hue.mjs"
import saturation from "./saturate.mjs"

export default function geometricHue(color = Color.prototype, value = Number.prototype) {
    let rot = value + getGeometricHue(color)

    rot -= parseInt(rot / 360) * 360
    let add = 0
   
    for (let k = 0; k < rot; k++) {

        if (k > 0 && k < 60) add += 0.5
        if (k > 60 && k < 100) add += 0.5
        if (k > 100 && k < 300) add += 1.1
        if (k > 300 && k < 360) add += 1.5
    }
    let newColor = new Color('f00')
    newColor = hue(newColor,add)
    newColor = saturation(newColor,color.hsb.saturation)
    newColor = brightness(newColor,color.hsb.brightness)
    return newColor
}