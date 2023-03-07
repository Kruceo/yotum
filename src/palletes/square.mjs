import Color from "../lib/Color.mjs";
import geometricHue from "../utils/geometricHue.mjs";
import saturation from "../utils/saturate.mjs";

export default function square(baseColor = Color.prototype, divisions = Number.prototype,saturationPerRound) {
    const result = []
    let saturationAddPerRound = saturationPerRound??20 
    for (let i = 0; i < divisions??4; i++) {

    let sat = parseInt(i/4)*saturationAddPerRound
    console.log(sat)
    const color = saturation(baseColor,100-sat)
    
    let add = 0
        const res = geometricHue(color,i*90)
        result.push(res)
   }
    return result
}