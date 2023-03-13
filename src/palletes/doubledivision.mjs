import Color from '../lib/Color.mjs'
import geometricHue from '../utils/hsb/geometricHue.mjs'
/**
 * Return a color pallete generated with division system but with two more rounds.
 * @param {Color} color - Base color to init. 
 * @param {number?} degrees  - Rotation to add per round in degrees.
 * @param {number?} divisions - Number of colors to be returned.
 * @returns {Color[]} Color pallete.
 */
export default function doubleDivision(color, degrees, divisions) {
    let results = []
    let dvs = divisions??5
    let d = degrees??145
    const adds = [0,d,360-d,180-d,180 + d]
    for (let i = 1; i <= dvs; i++) {
        let y = i - parseInt(i/5) * 5
        results.push(geometricHue(color,adds[y]))
    }
    
    return results
}