import Color from "../lib/Color.mjs";


export default function additive(color=Color,add,times){

    const timeAdd = parseInt(times/2)
    const timeSub = times - timeAdd
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
    for (let i = 0; i < timeSub; i++) {
        let result = [...rgb]
        result[0] -= add * i
        result[1] -= add * i
        result[2] -= add * i
       
        results.push(new Color(result))
    }

    console.log(results)
    return results
}