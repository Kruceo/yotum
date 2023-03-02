import Color from "../../lib/Color.mjs"
import { hexToMatrix } from "../../lib/matrix.mjs"
import brightness from "../bright.mjs"
import getHue from "./getHue.mjs"
import saturate from "../saturate.mjs"
import getbrightness from "./getBrightness.mjs"
import { getSaturation } from "./getSaturation.mjs"

export default function hue(color = Color, rot = Number) {

    let rgb = [...color.rgba]
    let result = [0, 0, 0, 0]
    let rotation = getHue(color) + parseInt(rot)
    
    if(rotation > 360) rotation = rotation - (parseInt(rotation / 360) * 360)

    const brgt = getbrightness(color)
    const strn = getSaturation(color)
    
    let addRGB = [0, 0, 0]
    let coef = (rotation * 1.6) / 100


    if (coef >= 0 && coef < 1) {
        // addRGB[next] = parseInt((rgb[bigger]))
        addRGB[0] = 255
        addRGB[1] = parseInt((255 * (coef)))
        addRGB[2] = 0
        // addRGB[2] = parseInt((rgb[2]))
    }
    if (coef >= 1 && coef < 2) {

        addRGB[0] = parseInt((255 * (1 - (coef - 1))) + (0 * (coef - 1)))

        addRGB[1] = 255

        addRGB[2] = 0

    }
    if (coef >= 2 && coef < 3) {

        addRGB[0] = 0

        addRGB[1] = 255

        addRGB[2] = parseInt((0 * (1 - (coef - 2))) + (255 * (coef - 2)))

    }
    if (coef >= 3 && coef < 4) {
        addRGB[0] = 0

        addRGB[1] = parseInt((255 * (1 - (coef - 3))) + (0 * (coef - 3)))

        addRGB[2] = 255

    }
    if (coef >= 4 && coef < 5) {
        addRGB[0] = parseInt((0 * (1 - (coef - 4))) + (255 * (coef - 4)))

        addRGB[1] = 0

        addRGB[2] = 255

    }
    if (coef >= 5 && coef < 6) {

        addRGB[0] = 255

        addRGB[1] = 0

        addRGB[2] = parseInt((255 * (1 - (coef - 5))) + (0 * (coef - 5)))

    }

    result[0] = addRGB[0]
    result[1] = addRGB[1]
    result[2] = addRGB[2]
    result[3] = rgb[3]
    let newColor = new Color(result)
    newColor = saturate(newColor, strn)
    newColor = brightness(newColor,brgt)

    console.log(strn,brgt)
    // const brightned = brightness(saturated,brgt)
    // const brigth = brightness(saturated, 99)
    return newColor
}
