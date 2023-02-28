import { hexToMatrix, matrixToHex } from "../lib/matrix.mjs"

export default function diffBetween(color1, color2,division) {
    let results = []
    let rgb1 = getMatrix(color1)
    let rgb2 = getMatrix(color2)
    let diff =
        [
            rgb2[0] - rgb1[0],
            rgb2[1] - rgb1[1],
            rgb2[2] - rgb1[2]
        ]
    for (let i = 0; i < division; i++) {

        let result = [...rgb1]

        const segment = [
            diff[0] / (division - 1),
            diff[1] / (division - 1),
            diff[2] / (division - 1)
        ]
        result[0] += parseInt(segment[0] * i)
        result[1] += parseInt(segment[1] * i)
        result[2] += parseInt(segment[2] * i)



        results.push((result))
        // console.log(parseInt(value,16))

    }
    return results
}
