import Color from "../lib/Color.mjs";
import brightness from "../utils/brightness.mjs";
import {binToDec, decToBin, inverseBin} from "../utils/binaries.mjs";
import getHue from "../utils/hsb/getHue.mjs";
import hue from "../utils/hsb/hue.mjs";
import saturate from "../utils/saturate.mjs";

export default function square(baseColor = Color.prototype, divisions = Number.prototype,saturationPerRound) {
    const result = []
    let saturationAddPerRound = saturationPerRound??20 
   for (let i = 0; i < divisions; i++) {

    let saturation = parseInt(i/4)*saturationAddPerRound
    const color = saturate(baseColor,100-saturation)

    

    
    const newColor = hue(color,90*i)
    result.push(newColor)
   }
    return result
}