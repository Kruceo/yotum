import { hexToMatrix, matrixCorrector, matrixToHex } from "./matrix.mjs"

export default class Color {

    constructor(color = String | Array) {
       
        const type = typeof (color)
        if (type == 'object') {
            this.rgba = matrixCorrector(color)
        }
        else if(type == 'string') {
            
            this.rgba = hexToMatrix(color.replaceAll('#', ''))
        }
    }
    get hex() {

        return matrixToHex([...this.rgb]).slice(0,6)
    }
    get hexAplha() {

        return matrixToHex([...this.rgba])
    }
    get rgb() {

        return [this.rgba[0],this.rgba[1],this.rgba[2]]
    }

}