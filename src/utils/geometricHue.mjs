import Color from "../lib/Color.mjs"
import brightness from "./brightness.mjs"
import getGeometricHue from "./getGeometricHue.mjs"
import hue from "./hsb/hue.mjs"
import saturation from "./saturate.mjs"

export default function geometricHue(color = Color.prototype, value = Number.prototype) {
    let rot = value + getGeometricHue(color)

    rot -= parseInt(rot / 360) * 360
    let add = 0
   
    // for (let k = 0; k < rot; k++) {
    //     break
    //     if (k > 0 && k < 60) add += 0.5
    //     if (k > 60 && k < 100) add += 0.5
    //     if (k > 100 && k < 300) add += 1.1
    //     if (k > 300 && k < 360) add += 1.5
    // }

    if(rot>0)
    {
        let diff = 60 - rot
        if(diff < 0 )diff = 0
        add += 0.5 * (60 - diff)
        console.log(rot+'/'+60,60-diff)
    }
    if(rot>60)
    {
        let diff = 100 - rot
        if(diff < 0 )diff = 0
        add += 0.5 * (100 - diff - 60)
        console.log(rot+'/'+100,100-diff-60)
    }
    if(rot>100)
    {
        let diff = 300 - rot
        if(diff < 0 )diff = 0
        add += 1.1 * (300 - diff - 100)
        console.log(rot+'/'+300,300-diff - 100)
    }
    if(rot>300)
    {
        let diff = 360 - rot
        if(diff < 0 )diff = 0
        add += 1.5 * (360 - diff - 300)
        console.log(rot+'/'+360,360-diff)
    }
    let newColor = new Color('f00')
    newColor = hue(newColor,add)
    newColor = saturation(newColor,color.hsb.saturation)
    newColor = brightness(newColor,color.hsb.brightness)
    return newColor
}