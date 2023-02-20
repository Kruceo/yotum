import fs from 'fs'

const file = fs.readFileSync('./config', 'utf-8')
const results = []
file.replaceAll('\n', '').split(';').forEach(each => {

    const parts = each.replaceAll(' ', '').split(',')

    const prefix = parts[0]
    const value = parts[1]
    const type = parts[2]
    if (!parts[3]) return
    const division = parts[3].split('/')[1]
    const startend = parts[3].split('/')[0].split('~')

    let value1 = (startend[0].replaceAll(' ', '').replaceAll('#', ''))
    let value2 = (startend[1].replaceAll(' ', '').replaceAll('#', ''))

    let rgb1 = getMatrix(value1)
    let rgb2 = getMatrix(value2)
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
        const hexResult = result[0].toString(16).padStart(2, 0) + result[1].toString(16).padStart(2, 0) + result[2].toString(16).padStart(2, 0)
        results.push('.' + prefix + '-' + value + '-' + (i + 1) + '{' + type + ':#' + hexResult + '};')

        console.log(rgb1, rgb2, diff, result)
        // console.log(parseInt(value,16))

    }


})

results.forEach(each => {
    fs.appendFileSync('classes.css', each + '\n')
})

function getMatrix(hexColor) {
    let divisor = (hexColor.length / 3)
    let rgb = ['', '', '']
    rgb.forEach((each, index) => {
        let value = hexColor.slice(index * divisor, (1 + index) * (divisor))
        if (value.length == 1) value += value
        rgb[index] = parseInt(value, 16)
    })
    return rgb
}