import Color from "../lib/Color.mjs"
import brightness from "../utils/brightness.mjs"
import geometricHue from "../utils/geometricHue.mjs"
import saturation from "../utils/saturate.mjs"

/**
 * Creates a pallete based in compost system.
 * @param {Color} color - Base color to init.
 * @param {number} division - Number of colors to be returned.
 * @param {number} saturationPerRound - Value to be decreased from total saturation per round.
 * @returns {Color[]} Color pallete.
 */
export default function compost(color = Color.prototype, division = Number.prototype,saturationPerRound = Number.prototype) {
    const c = color
    const results = []
    let sat = 100
    const degrees = [0,37,164,164-19]
    for (let i = 0; i < division; i++) {

        let index = i - parseInt(i/4)*4
        let newColor = c
        if(index != 0)
        newColor = geometricHue(c, degrees[index])

        newColor = saturation(newColor,sat)
        results.push(newColor)
        if(index == 3)
        sat -= saturationPerRound??35
       
    }
   
    return results
}
