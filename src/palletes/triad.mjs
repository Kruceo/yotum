import Color from "../lib/Color.mjs";
import geometricHue from "../utils/hsb/geometricHue.mjs";
import saturation from "../utils/hsb/saturate.mjs";
/**
 * Return a color pallete generated with triad system.
 * 360/3 degrees per color difference.
 * @param {Color} color - Base color to init.
 * @param {number} divisions - Number of colors to be returned.
 * @param {number} satPerRound - Saturation to add per round.
 * @returns 
 */
export default function triad(color=Color.prototype,divisions=Number.prototype,satPerRound=Number.prototype){

    const result = []
    let saturationAddPerRound = satPerRound ?? 45
    for (let i = 0; i < divisions ?? 3; i++) {
        let sat = parseInt(i / 3) * saturationAddPerRound
        const c = saturation(color, 100 - sat)
        const res = geometricHue(c, i * 360/3)
        result.push(res)
    }
    return result

}