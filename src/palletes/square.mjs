import Color from "../lib/Color.mjs";
import brightness from "../utils/bright.mjs";
import {binToDec, decToBin, inverseBin} from "../utils/binaries.mjs";
import getHue from "../utils/hsb/getHue.mjs";
import hue from "../utils/hsb/hue.mjs";

export function square(baseColor = Color.prototype, hues = Number) {
    let result = []
    const color = baseColor
    let newColor = [0,0,0,0]
    color.rgb.forEach((each,index)=>{
        const bin = decToBin(each).padStart(8,0)
        
        const inv = inverseBin(bin)
        const val = binToDec(inv) 
        console.log(each,bin,inv)
        newColor[index] = val
    })
    console.log(newColor)
    result.push(new Color(newColor))
    return result
}