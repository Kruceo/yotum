import Color from "../lib/Color.mjs"
import { hexToMatrix } from "../lib/matrix.mjs"

export default function hue(color = Color, rot = Number) {

    let rgb = [...color.rgba]
    let result = [0, 0, 0, 0]
    let rotation = rot
    if (rotation > 360) {
        rotation = rotation - (parseInt(rotation / 360) * 360)
    }
    const bigger = rgb.indexOf(rgb.slice(0, 3).sort((a, b) => b - a)[0])
    console.log(bigger)
    let addRGB = [0, 0, 0]
    let coef = (rotation * 1.666666) / 100
    let full = 1

    let index = bigger
    let next1 = index + 1

    if (next1 > 2) next1 -= 3
    let next2 = next1 + 1
    if (next2 > 2) next2 -= 3
    console.log(index, "next:" + next1, next2)
    if (coef >= 0 && coef < 1) {

        // addRGB[next] = parseInt((rgb[bigger]))
        addRGB[index] = rgb[bigger]
        addRGB[next1] = parseInt((rgb[next1] * (1 - coef)) + (rgb[bigger] * (coef)))
        addRGB[next2] = rgb[next2]
        // addRGB[2] = parseInt((rgb[2]))
    }

    if (coef >= 1 && coef < 2) {

        addRGB[index] = parseInt((rgb[bigger] * (1 - (coef - 1))) + (rgb[next1] * (coef-1)))
        
        addRGB[next1] = rgb[bigger]
        
        addRGB[next2] = rgb[next2]
        
    }
    if (coef >= 2 && coef < 3) {

        addRGB[index] = rgb[next1]

        addRGB[next1] = rgb[bigger]
        
        addRGB[next2] = parseInt((rgb[next2] * (1 - (coef - 2))) + (rgb[bigger] * (coef -2)))

    }
    if (coef >= 3 && coef < 4) {
        addRGB[index] = rgb[next1]
        
        addRGB[next1] = parseInt((rgb[bigger] * (1 - (coef - 3))) + (rgb[next1] * (coef -3)))
        
        addRGB[next2] = rgb[bigger]
        
    }
    if (coef >= 4 && coef < 5) {
        addRGB[index] = parseInt((rgb[next1] * (1 - (coef - 4))) + (rgb[bigger] * (coef -4)))

        addRGB[next1] = rgb[next1]

        addRGB[next2] = rgb[bigger]
       
    }
    if (coef >= 5 && coef < 6) {
        
        addRGB[index] = rgb[bigger]

        addRGB[next1] = rgb[next1]

        addRGB[next2] = parseInt((rgb[bigger] * (1 - (coef - 5))) + (rgb[next2] * (coef -5)))
      
    }






    // if (coef >= 1 && coef < 2) {
    //     addRGB[0] = parseInt((rgb[2] * (1 - (coef - 1))) + (rgb[1] * (coef - 1)))
    //     addRGB[1] = parseInt((rgb[0] * (1 - (coef - 1))) + (rgb[2] * (coef - 1)))
    //     addRGB[2] = parseInt((rgb[1] * (1 - (coef - 1))) + (rgb[0] * (coef - 1)))
    // }
    // if (coef >= 2 && coef <= 3) {
    //     addRGB[0] = parseInt((rgb[1] * (1 - (coef - 2))) + (rgb[0] * (coef - 2)))
    //     addRGB[1] = parseInt((rgb[2] * (1 - (coef - 2))) + (rgb[1] * (coef - 2)))
    //     addRGB[2] = parseInt((rgb[0] * (1 - (coef - 2))) + (rgb[2] * (coef - 2)))
    // }
    // if (coef >= 0 && coef < 1) {
    //     addRGB[0] = parseInt((rgb[0]))
    //     addRGB[1] = parseInt((rgb[1] * (1 - coef)) + (rgb[0] * (coef)))
    //     addRGB[2] = parseInt((rgb[2]))
    // }
    // if (coef >= 1 && coef < 2) {
    //     addRGB[0] = parseInt((rgb[0] * (1 - (coef - 1))) + (rgb[1] * (coef - 1)))
    //     addRGB[1] = parseInt((rgb[0]))
    //     addRGB[2] = parseInt((rgb[2]))
    // }
    // if (coef >= 2 && coef < 3) {
    //     addRGB[0] = parseInt((rgb[1]))
    //     addRGB[1] = parseInt((rgb[0]))
    //     addRGB[2] = parseInt((rgb[2] * (1 - (coef - 2))) + (rgb[0] * (coef - 2)))

    // }
    // if (coef >= 3 && coef < 4) {
    //     addRGB[0] = parseInt((rgb[1]))
    //     addRGB[1] = parseInt((rgb[0] * (1 - (coef - 3))) + (rgb[2] * (coef - 3)))
    //     addRGB[2] = parseInt((rgb[0]))
    // }
    // if (coef >= 4 && coef < 5) {
    //     addRGB[0] = parseInt((rgb[1] * (1 - (coef - 4))) + (rgb[0] * (coef - 4)) )
    //     addRGB[1] = parseInt((rgb[2]))
    //     addRGB[2] = parseInt((rgb[0]))
    // }
    // if (coef >= 5 && coef < 6) {
    //     addRGB[0] = parseInt((rgb[0]))
    //     addRGB[1] = parseInt((rgb[2]))
    //     addRGB[2] = parseInt((rgb[0] * (1 - (coef - 5))) + (rgb[1] * (coef - 5)) ) 
    // }
    result[0] = addRGB[0]
    result[1] = addRGB[1]
    result[2] = addRGB[2]
    result[3] = rgb[3]

    return new Color(result)
}
