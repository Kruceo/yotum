import Color from "../lib/Color.mjs";
import geometricHue from "../utils/geometricHue.mjs";
import saturation from "../utils/saturate.mjs";
/**
 * Create a square pallete. (90°)
 * @param {Color} baseColor - Base color to init.
 * @param {*} divisions - Number of colors to be returned.
 * @param {*} saturationPerRound - Every 360 degrees, this value is removed from total saturation of the initial color.
 * @returns {Color[]} Color pallete.
 */
export default function square(color = Color.prototype, divisions = Number.prototype, saturationPerRound) {

    const result = []
    let saturationAddPerRound = saturationPerRound ?? 20
    for (let i = 0; i < divisions ?? 4; i++) {
        let sat = parseInt(i / 4) * saturationAddPerRound
        const c = saturation(color, 100 - sat)
        const res = geometricHue(c, i * 90)
        result.push(res)
    }
    return result
}