import { hexToMatrix, matrixToHex } from "./matrix.mjs"

export default class Color{

    constructor(color=String|Array){

        const type = typeof(color)
        if(type == 'string')this.rgb = hexToMatrix(color.replaceAll('#',''))
        else this.rgb = color
    }
    get hex(){
        return matrixToHex(this.rgb)
    }
    get () {
        return this.h
    }
}