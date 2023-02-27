import { getMatrix } from "./lib/matrix.mjs"

export default function hue(color,rot){
    const original = color.replaceAll('#','')
    let rgb = getMatrix(original)
    console.log(rgb)
    let addRGB = [0,0,0]
    let coef = (rot * 1.666) / 100
   console.log(rot,coef)
   
    
    

    if(coef >= 0){
        addRGB[0] = 255
        addRGB[2] = 255 - ((coef) * 255)
    }
    if(coef > 1){
        addRGB[0] = coef * 255 - ((coef-1) * 255)
        addRGB[1] = (coef - 1) * 255
        addRGB[2] = 0
    }
    if(coef > 2){
        addRGB[0] = 255 - ((coef -2)*255)
        addRGB[1] = coef * 255 - ((coef-1) * 255)
        addRGB[2] = 0
    }
    if(coef > 3){
        addRGB[0] = 0
        addRGB[1] = coef * 255 - ((coef-1) * 255)
        addRGB[2] = (coef - 3) * 255
    }
    if(coef > 4){
        addRGB[0] = 0
        addRGB[1] = 255 - ((coef -4)*255)
        addRGB[2] = 255
    }
    if(coef > 5){
        addRGB[0] = (coef - 5) * 255
        addRGB[1] = 0
        addRGB[2] = 255
    }
    


    console.log(addRGB)
    return addRGB
}