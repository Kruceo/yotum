import fs from 'fs'
import additive from './src/additive.mjs'
import { diffBetween } from './src/differenceBetween.mjs'
let toWrite = ''
const file = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
file.forEach(each => {

    let results = []

    const value = each.name??'color'
    const division = each.command.split('/')[1]
    const startend = each.command.split('/')[0].split(/~|\^/)
    const signal = (() => {
        const index = each.command.indexOf(startend[0]) + startend[0].length
        return each.command.slice(index, index + 1)
    })()

    let value1 = (startend[0].replaceAll(' ', '').replaceAll('#', ''))
    let value2 = (startend[1].replaceAll(' ', '').replaceAll('#', ''))

    switch (signal) {
        case "^":
            additive(value1, value2, division).forEach((colorResult) => {
                results.push(colorResult)
            })
            break;
        case "~":
            diffBetween(value1, value2, division).forEach((colorResult) => {
                results.push(colorResult)
            })
            break;

        default:
            break;
    }
    each.properties.forEach(propertie=>{
        results.forEach((each,index)=>{
            const obj = Object.entries(propertie)[0]
            toWrite += `.${obj[1]}-${value}-${index+1} {${obj[0]}: #${each}}\n`
        })
    })
    console.log(toWrite)

    return




})

fs.writeFileSync('classes.css', toWrite)
