import { getMatrix, matrixToHex } from "./lib/matrix.mjs";

export default function additive(color,add,times){

    const timeAdd = parseInt(times/2)
    const timeSub = times - timeAdd
    let rgb = getMatrix(color)
    let results = []
    for (let i = 1; i <= timeAdd; i++) {
        let result = [...rgb]
        result[0] += add * i
        result[1] += add * i
        result[2] += add * i
        result.forEach((value,index) => {
            if(value > 255){
                result[index] = 255
            }
        });
        results.push((result))
    }
    results = results.reverse()
    for (let i = 0; i < timeSub; i++) {
        let result = [...rgb]
        result[0] -= add * i
        result[1] -= add * i
        result[2] -= add * i
        result.forEach((value,index) => {
            if(value < 0){
                result[index] = 0
            }
        });
        results.push((result))
    }
    return results
}