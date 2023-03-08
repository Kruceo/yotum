import Color from "../../lib/Color.mjs"
import brightness from "./brightness.mjs"
import getGeometricHue from "./getGeometricHue.mjs"
import hue from "./hue.mjs"
import saturation from "./saturate.mjs"

/**
 * Different of normal hue, this is sync with the color wheel rotation, can be used to create colors inline with other.
 * @param {Color} color - Base color that will be rotated.
 * @param {number} value - Rotation in degrees.
 * @returns Color
 */

export default function geometricHue(color = Color.prototype, value = Number.prototype) {
    let rot = value + getGeometricHue(color)

    rot -= parseInt(rot / 360) * 360
    let add = 0

    add += calcChunk(rot,0,60,0.5)
    add += calcChunk(rot,60,100,0.5)
    add += calcChunk(rot,100,300,1.1)
    add += calcChunk(rot,300,360,1.5)
    let newColor = new Color('f00')
    newColor = hue(newColor,add)
    newColor = saturation(newColor,color.hsb.saturation)
    newColor = brightness(newColor,color.hsb.brightness)
    return newColor
}

/**
 * Calculate a part of all rotation, returning the parsed value to match with wheel color rotation.
 * @param value - The rotation to calculate. 
 * @param min - Init of the chunk.
 * @param max - End of the chunk.
 * @param addition - coefficient to add per inner value between min and max.
 *  */
export function calcChunk(
    value=Number.prototype,
    min=Number.prototype,
    max=Number.prototype,
    addition=Number.prototype){
    /**
 * consert
 */
    let res = 0
    if(value>min)
    {
        let diff = max - value
        if(diff < 0 )diff = 0
        res += addition * (max - diff - min)
        // console.log(rot+'/'+max,max-diff)
    }
    return res
}


