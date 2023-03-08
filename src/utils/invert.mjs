import Color from "../lib/Color.mjs";
import { binToDec, decToBin, inverseBin } from "./binaries.mjs";
/**
 * Returns the inverse color of the base.
 * Invert color bits.
 * @param {Color} color - Base color to init. 
 * @returns {Color} Inverted color.
 */
export default function invert(color=Color.prototype){

    let [r,g,b,a] =color.rgba

    r = decToBin(r).padStart(8,0)
    g = decToBin(g).padStart(8,0)
    b = decToBin(b).padStart(8,0)

    r = inverseBin(r)
    g = inverseBin(g)
    b = inverseBin(b)

    r = binToDec(r)
    g = binToDec(g)
    b = binToDec(b)

    return new Color([r,g,b,a])


    

    
    
}