import Color from "../lib/Color.mjs";

export default function brightness(color = Color, percent = Number) {
    let add = [0, 0, 0, 0]
    console.log(color)
    const coef = (percent - 100) / 100 * 255
    add = [
        color.rgb[0] + coef,
        color.rgb[1] + coef,
        color.rgb[2] + coef,
        color.rgba[3]]
    add = add.map(each => {
        if (each < 0) return 0
        if (each > 255) return 255
        return each
    })
    console.log(add)
    const newColor = new Color(add)
    console.log(newColor)
    return newColor
}