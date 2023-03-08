/**
 * Transform a hex string to RGBA array.
 * @param {string} hexColor - The hex value to be transformed.
 * @returns {Array} RGB Array.
 */
export function hexToMatrix(hexColor=String.prototype) {

    let divisor = (hexColor.length / 3)
    if(!Number.isInteger(divisor))divisor = parseInt(divisor) 
    let rgb = ['', '', '','']
    
    rgb.forEach((each, index) => {
        
        let value = hexColor.slice(index * divisor, (1 + index) * (divisor))
        value = value.padEnd(2,value)
        rgb[index] = parseInt(value, 16)
        
    })
    rgb[3] = parseFloat((rgb[3]/255).toFixed(2))

    rgb = matrixCorrector(rgb)
    
    return rgb
}
/**
 * Transform rgba matrix to hex.
 * @param {Array} matrix - RGBA array to be transformed. 
 * @returns {String} Hexadecimal string.
 */
export function matrixToHex(matrix=Array.prototype){
   
    let newMatrix = [parseInt(matrix[0]),parseInt(matrix[1]),parseInt(matrix[2]),matrix[3]??1]
   
    newMatrix[3] *= 255
    newMatrix[3] = parseInt(newMatrix[3])
   
    let result = newMatrix.reduce((acum,next)=>{
        return acum+''+next.toString(16).padStart(2, 0)
    },'')
    result[3]
    return result
}

/**
 * Fix the array, things like values ​​greater than 255 or less than 0, and not alpha value included.
 * @param {Number[]} matrix 
 * @returns Number[]
 */
export function matrixCorrector(matrix = Array.prototype){
    let newMatrix = [...matrix]
    if(!matrix[3] || Number.isNaN(matrix[3])){
        newMatrix[3] = 1
    }

    newMatrix = newMatrix.map(each=>{
        if(each > 255) return 255
        if(each < 0) return 0
        return each
    })
    return newMatrix
}