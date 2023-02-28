import { getMatrix } from "./lib/matrix.mjs"

export default function hue(color,rot){
    const original = color.replaceAll('#','')
    let rgb = getMatrix(original)
    let result = [0,0,0]
    const bigger = (    rgb.sort((a,b)=>b-a))[0]

    let addRGB = [0,0,0]
    let coef = (rot * 1.666) / 100
   
    
    function less(max,coef,index){
        return parseInt(max - ((coef - index) * max))
    }

    if(coef >= 5 && coef < 6){
        addRGB[0] = bigger
        addRGB[1] = 0
        addRGB[2] = parseInt(bigger - ((coef - 5) * bigger))
    }
    if(coef >= 0 && coef < 1){
        addRGB[0] = bigger
        addRGB[1] = parseInt((coef) * bigger)
        addRGB[2] = 0
    }
    if(coef >= 1 && coef < 2){
        addRGB[0] = parseInt(bigger - ((coef -1 )*bigger))
        addRGB[1] = bigger
        addRGB[2] = 0
    }
    if(coef >= 2 && coef < 3){
        addRGB[0] = 0
        addRGB[1] = bigger
        addRGB[2] = parseInt((coef - 2) * bigger)
    }
    if(coef >= 3 && coef < 4){
        addRGB[0] = 0
        addRGB[1] = parseInt(bigger - ((coef -3)*bigger))
        addRGB[2] = bigger
    }
    if(coef >= 4 && coef < 5){
        addRGB[0] = parseInt((coef - 4) * bigger)
        addRGB[1] = 0
        addRGB[2] = bigger
    }
    
    result[0] = Math.max(rgb[0] ,addRGB[0])
    result[1] = Math.max(rgb[1] ,addRGB[1])
    result[2] = Math.max(rgb[2] ,addRGB[2])

    result = result.map(each=>{
        if(each > bigger)return bigger
        return each
    })
    console.log(
        rgb,
    (addRGB[0] - rgb[0]),
    (addRGB[1] - rgb[1]),
    (addRGB[2] - rgb[2]),)
    return result
}