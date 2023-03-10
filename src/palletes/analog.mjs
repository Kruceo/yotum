import Color from '../lib/Color.mjs'
import geometricHue from '../utils/hsb/geometricHue.mjs'
/**
 * 
 * @param {Color} color - Base color to init. 
 * @param {*} degrees  - Rotation to add per round in degrees.
 * @param {*} divisions - Number of colors to be returned.
 * @returns {Color[]} Color pallete.
 */
export default function analog(color = Color.prototype, degrees = Number.prototype, divisions = Number.prototype) {
    const timeAdd = parseInt(divisions / 2)
    let results = []
    for (let i = 1; i <= timeAdd; i++) {
        results.push(geometricHue(color,i*degrees))
    }
    for (let i = 0; i < timeAdd; i++) {
        results.push(geometricHue(color,-i*degrees))
    }
    return results
}