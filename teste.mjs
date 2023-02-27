import additive from './src/additive.mjs';
import { matrixToHex } from './src/lib/matrix.mjs';

const red = additive('ff0',40,5).map(each=>{return matrixToHex(each)})
console.log(red)