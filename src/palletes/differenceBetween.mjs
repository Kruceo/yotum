import Color from "../lib/Color.mjs"
import { hexToMatrix, matrixToHex } from "../lib/matrix.mjs"

export default function diffBetween(color1=Color.prototype, color2=Color.prototype,division=Number.prototype) {
    let results = []
    let rgb1 = color1.rgba
    let rgb2 = color2.rgba
    let diff =
        [
            rgb2[0] - rgb1[0],
            rgb2[1] - rgb1[1],
            rgb2[2] - rgb1[2],
            rgb2[3] - rgb1[3]
        ]
    for (let i = 0; i < division; i++) {

        let result = [...rgb1]

        const segment = [
            diff[0] / (division - 1),
            diff[1] / (division - 1),
            diff[2] / (division - 1),
            diff[3] / (division - 1)
        ]
        result[0] += parseInt(segment[0] * i)
        result[1] += parseInt(segment[1] * i)
        result[2] += parseInt(segment[2] * i)
        result[3] += parseInt(segment[3] * i)



        results.push(new Color(result))
        // console.log(parseInt(value,16))

    }
    return results
}
