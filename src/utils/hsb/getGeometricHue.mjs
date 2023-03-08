import Color from "../../lib/Color.mjs"
import { calcChunk } from "./geometricHue.mjs"

/**
 * Returns the color rotation parsed to sync to color wheel.
 * @param {Color} color - Base color to get rotation.
 * @returns {number} Color rotation.
 */
export default function getGeometricHue(color = Color.prototype) {
    let rot = color.hsb.hue 

    let add = 0
   
    add += calcChunk(rot,0,55,       2+0.12)
    add += calcChunk(rot,60,100 ,    1-0.12)
    add += calcChunk(rot,100,300,    0.912)
    add += calcChunk(rot,300,360,    0.3)
    console.log(rot,color.hsb.hue,add)
    return Math.round(add)
}