import Color from "../lib/Color.mjs";

export default function brightness(color=Color,percent=Number){
    let add = [0,0,0]

    const coef = (percent -100)/100 * 255
    console.log(coef)
    add = [color.rgb[0] + coef ,color.rgb[1] +coef,color.rgb[2] + coef]
   
    return new Color(add)
}