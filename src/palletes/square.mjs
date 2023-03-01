import Color from "../lib/Color.mjs";
import brightness from "../utils/bright.mjs";
import hue from "../utils/hue.mjs";

export function square(baseColor=Color.prototype,rotation=Number){
    let result = []
    const color = baseColor
    
    let values = [53,147,230,0]
    for (let i = 0; i < 4; i++) {
    
        const hued = brightness(hue(color,45*(i+10.5) ),100)// 147   230    
        // result.push(hued)
    }

    for (let i = 0;i <360 ;i++) {
        
        const hued = brightness(hue(color,i),100)// 147   230 
        if(hued.hex ){
            result.push(hued)
           
        }
    }
    return result
}