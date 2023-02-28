export function hexToMatrix(hexColor=String) {
    let divisor = (hexColor.length / 3)
    if(!Number.isInteger(divisor))divisor = parseInt(divisor) 
    let rgb = ['', '', '','']
    
    rgb.forEach((each, index) => {
        
        let value = hexColor.slice(index * divisor, (1 + index) * (divisor))
        value = value.padEnd(2,value)
        rgb[index] = parseInt(value, 16)
        
    })



    if(!Number.isNaN(rgb[3])){
        rgb[3] =parseFloat((rgb[3]/255).toFixed(2))
    }
    else rgb[3] = 1
    return rgb
}

export function matrixToHex(matrix=Array){
    let newMatrix = matrix
    newMatrix[3] *=255
    let result = newMatrix.reduce((acum,next)=>{
        return acum+''+next.toString(16).padStart(2, 0)
    },'')
    result[3]
    return result
}