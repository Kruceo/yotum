import Color from "../lib/Color.mjs";
import brightness from "../utils/bright.mjs";
import hue from "../utils/hsb/hue.mjs";

export function square(baseColor=Color.prototype,rotation=Number){
    let result = []
    const color = baseColor
    
    let values = [64,150,266,0]
    for (let i = 0; i < 4; i++) {
    
        const hued = brightness(hue(color,values[i] ),100)// 147   230    
         result.push(hued)
    }

    
    return result
}