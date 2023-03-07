import Color from "../lib/Color.mjs";
import brightness from "../utils/brightness.mjs";
import {binToDec, decToBin, inverseBin} from "../utils/binaries.mjs";
import getHue from "../utils/hsb/getHue.mjs";
import hue from "../utils/hsb/hue.mjs";
import saturate from "../utils/saturate.mjs";
import geometricHue from "../utils/geometricHue.mjs";

export default function square(baseColor = Color.prototype, divisions = Number.prototype,saturationPerRound) {
    const result = []
    let saturationAddPerRound = saturationPerRound??20 
    for (let i = 0; i < 4; i++) {

    let saturation = 0//parseInt(i/4)*saturationAddPerRound
    const color = saturate(baseColor,100-saturation)
    
    let add = 0
        result.push(geometricHue(color,i*90))
    // for (let k = 0; k < rot ; k++) {
        
    //     if (k > 0    && k < 60) add += 0.5
    //     if (k > 60    && k < 100) add += 0.5
    //     if (k > 100 && k < 300) add += 1.1
    //     if (k > 300 && k < 360) add += 1.5
    //     // if (k > 120 && k < 360) add += 1
    //     // if (k <= 360 && k >= 300) add += 2
    //     // if (k > 360) rot -= 360
    //     // if (k <= 360 && k >= 300) add += 1
    //     // if (k >  360) rot -= 360
       
    // }
    
    // result.push(hue(new Color('f00'),add))
   }
    return result
}