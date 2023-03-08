import Color from "../../lib/Color.mjs";
/**
 * Returns the Hue rotation (HSB) value.
 * @param {Color} color - Color to get the hue rotation value.
 * @returns {number} Hue rotation.
 */
export default function getHue(color = Color.prototype || Array) {
    const [red, green, blue] = color.rgb
    const min = Math.min(...color.rgb)
    const max = Math.max(...color.rgb)
    let hue = 0

    const diff = max - min
    if (min == max) return 0

    if (max == red) hue = (green - blue) / diff
    else if (max == green) hue = 2 + (blue - red) / diff
    else hue = 4 + (red - green) / diff

    hue *= 60
    if(hue<0)hue+= 360
    hue =  Math.round(hue)
    return hue
}