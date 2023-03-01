export function hexToMatrix(hexColor=String) {

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

export function matrixToHex(matrix=Array){
    console.log(matrix)
    let newMatrix = [parseInt(matrix[0]),parseInt(matrix[1]),parseInt(matrix[2]),matrix[3]??1]
   
    newMatrix[3] *= 255
    newMatrix[3] = parseInt(newMatrix[3])
   
    let result = newMatrix.reduce((acum,next)=>{
        return acum+''+next.toString(16).padStart(2, 0)
    },'')
    result[3]
    return result
}
export function matrixCorrector(matrix){
    let newMatrix = [...matrix]
    if(!matrix[3] || Number.isNaN(matrix[3])){
        newMatrix[3] = 1
    }
    return newMatrix
}