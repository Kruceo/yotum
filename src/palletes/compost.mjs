import Color from "../lib/Color.mjs"
import { hexToMatrix, matrixToHex } from "../lib/matrix.mjs"
import brightness from "../utils/brightness.mjs"
import hue from "../utils/hsb/hue.mjs"

export default function compost(color = Color.prototype, division = Number.prototype) {
    let c = color
    let results = []

    let color1 = hue(c, 170)
    let color2 = hue(c, 170-15)

    color2 = brightness(color2,80)

    let color3 = c
    let color4 = hue(c, 20)

    color4 = brightness(color4,62)
    results.push(color1)
    results.push(color2)
    results.push(color3)
    results.push(color4)
    return results
}
