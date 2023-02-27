export function getMatrix(hexColor) {
    let divisor = (hexColor.length / 3)
    let rgb = ['', '', '']
    rgb.forEach((each, index) => {
        let value = hexColor.slice(index * divisor, (1 + index) * (divisor))
        value = value.padEnd(2,value)
        rgb[index] = parseInt(value, 16)
    })
    return rgb
}

export function matrixToHex(matrix){
    return matrix[0].toString(16).padStart(2, 0) + matrix[1].toString(16).padStart(2, 0) + matrix[2].toString(16).padStart(2, 0)
}