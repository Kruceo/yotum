import gen from './src/genColors.mjs'

let divisions = 9
let addition = 50


let blue = {
    "command": "#00f ^ "+addition+" / " + divisions
}
let green = {
    "command": "#0f0 ^ 50 / 9"
}
let red = {
    "command": "#f50 ^ 50 / 9"
}
const config = [red,green,blue]

console.log(gen(config))

