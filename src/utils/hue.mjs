import Color from "../lib/Color.mjs"
import { hexToMatrix } from "../lib/matrix.mjs"

export default function hue(color = Color, rot = Number) {

    let rgb = color.rgba
    let result = [0, 0, 0, 0]
    let rotation = rot
    if (rotation > 360) {
        rotation = rotation - (parseInt(rotation/360)*360)
    }
    console.log(rotation)
    let addRGB = [0, 0, 0]
    let coef = (rotation * 0.8333333333333334) / 100


    if (coef >= 0 && coef < 1) {
        // addRGB[0] = parseInt((rgb[0] * (1 - coef)) + (rgb[2] * (coef)))
        addRGB[1] = parseInt((rgb[1] * (1 - coef)) + (rgb[0] * (coef)))
        // addRGB[2] = parseInt((rgb[2] * (1 - coef)) + (rgb[1] * (coef)))
    }
    
    if (coef >= 1 && coef < 2) {
        addRGB[0] = parseInt((rgb[2] * (1 - (coef - 1))) + (rgb[1] * (coef - 1)))
        addRGB[1] = parseInt((rgb[0] * (1 - (coef - 1))) + (rgb[2] * (coef - 1)))
        addRGB[2] = parseInt((rgb[1] * (1 - (coef - 1))) + (rgb[0] * (coef - 1)))
    }
    if (coef >= 2 && coef <= 3) {
        addRGB[0] = parseInt((rgb[1] * (1 - (coef - 2))) + (rgb[0] * (coef - 2)))
        addRGB[1] = parseInt((rgb[2] * (1 - (coef - 2))) + (rgb[1] * (coef - 2)))
        addRGB[2] = parseInt((rgb[0] * (1 - (coef - 2))) + (rgb[2] * (coef - 2)))
    }

    result[0] = addRGB[0]
    result[1] = addRGB[1]
    result[2] = addRGB[2]
    result[3] = rgb[3]
   
    return new Color(result)
}
