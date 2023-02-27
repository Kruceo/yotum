each.properties.forEach(propertie => {
    results.forEach((each, index) => {
        const obj = Object.entries(propertie)[0]
        toWrite += `.${obj[1]}-${value}-${index + 1} {${obj[0]}: #${each}}\n`
    })
})