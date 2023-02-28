export function hexToMatrix(hexColor=String) {
    let divisor = (hexColor.length / 3)
    if(!Number.isInteger(divisor))divisor = parseInt(divisor) 
    console.log(divisor)
    let rgb = ['', '', '','']
    
    rgb.forEach((each, index) => {
        
        let value = hexColor.slice(index * divisor, (1 + index) * (divisor))
        console.log(value)
        value = value.padEnd(2,value)
        rgb[index] = parseInt(value, 16)
        
    })



    if(!Number.isNaN(rgb[3])){
        rgb[3] =parseFloat((rgb[3]/255).toFixed(4))
    }
    else rgb[3] = 1
    return rgb
}

export function matrixToHex(matrix=Array){
    const result = matrix.reduce((acum,next)=>{
        return acum+''+next.toString(16).padStart(2, 0)
    },'')
    return result
}