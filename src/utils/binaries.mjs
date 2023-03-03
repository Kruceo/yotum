export function decToBin(value = Number.prototype) {
    let v = value
    if(v === 0)return '0'

    let binary = ''
    while (v > 0) {
        let res = parseInt(v / 2)
        if (res * 2 == v) {
            binary = '0' + binary
        }
        else {
            binary = '1' + binary
        }
        v = res
    }
    return binary

}

export function inverseBin(value = String.prototype) {
    let v = value
    let binary = v.split('').reduce((acum, each) => {
        if (each == '1') return acum + '' + 0
        else return acum + '' + 1
    }, '')

    return binary

}

export function binToDec(value = String.prototype) {
    return parseInt(value, 2)
}
