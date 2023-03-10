import Color from "../lib/Color.mjs";
import brightness from "../utils/hsb/brightness.mjs";
/**
 * Return a color pallete generated with shade system.
 * Reduce a amount of bright per division.
 * @param {Color} color - Base color to init.
 * @param {*} brgt - Brightness to add per round.
 * @param {*} divisions  - Number of colors to be returned.
 * @returns {Color[]} Color pallete.
 */
export default function shades(color=Color.prototype,brgt=Number.prototype,divisions){
    let results = []
    for (let i = 0; i < divisions??5; i++) {
        const newColor = brightness(color,100-i*(brgt??10))
        results.push(newColor)
    }
    return results
}