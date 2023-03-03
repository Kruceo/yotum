import Color from "../lib/Color.mjs";
import brightness from "../utils/brightness.mjs";
import {binToDec, decToBin, inverseBin} from "../utils/binaries.mjs";
import getHue from "../utils/hsb/getHue.mjs";
import hue from "../utils/hsb/hue.mjs";

export function square(baseColor = Color.prototype, hues = Number) {
    let result = []
    const color = baseColor
   for (let i = 0; i < 4; i++) {
    const newColor = hue(color,90*i)
    result.push(newColor)
   }
    return result
}