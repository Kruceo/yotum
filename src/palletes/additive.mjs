import Color from "../lib/Color.mjs";

/**
 * Creates a color pallete with addition system.
 * @param {Color} color - Base color to init.
 * @param {number} add - Value to be increased in color.
 * @param {number} division - Number of colors to be returned.
 * @returns {Color[]}Color pallete. 
 */
export default function additive(color,add,division){

    const timeAdd = parseInt(division/2)
    let rgb = color.rgb
    let results = []
    for (let i = 1; i <= timeAdd; i++) {
        let result = [...rgb]
        result[0] += add * i
        result[1] += add * i
        result[2] += add * i
        
        results.push(new Color(result))
    }
    results = results.reverse()
    for (let i = 0; i < timeAdd; i++) {
        let result = [...rgb]
        result[0] -= add * i
        result[1] -= add * i
        result[2] -= add * i
       
        results.push(new Color(result))
    }

    console.log(results)
    return results
}