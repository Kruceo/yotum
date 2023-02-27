import additive from './additive.mjs'
import { diffBetween } from './differenceBetween.mjs'
import { matrixToHex } from './lib/matrix.mjs'

export default  function gen(obj) {
    let input = obj
    if(!Array.isArray(obj))
    input = [obj]
    const file = input
    let results = {}
    file.forEach((each,index) => {
        
        const out = each.out??'hex'
        const value = each.name ?? 'color' + index
        const division = each.command.split('/')[1]
        const startend = each.command.split('/')[0].split(/~|\^/)
        const signal = (() => {
            const index = each.command.indexOf(startend[0]) + startend[0].length
            return each.command.slice(index, index + 1)
        })()

        let value1 = (startend[0].replaceAll(' ', '').replaceAll('#', ''))
        let value2 = (startend[1].replaceAll(' ', '').replaceAll('#', ''))

       
        results[value] = []


        switch (signal) {
            case "^":
                additive(value1, value2, division).forEach((colorResult) => {
                    if(out == 'hex'){
                        results[value].push(matrixToHex(colorResult))
                    }
                    else
                    results[value].push(colorResult)
                })
                break;
            case "~":
                diffBetween(value1, value2, division).forEach((colorResult) => {
                    if(out == 'hex'){
                        results[value].push(matrixToHex(colorResult))
                    }
                    else
                    results[value].push(colorResult)
                })
                break;

            default:
                break;
        }
        return
    })
    return results
}