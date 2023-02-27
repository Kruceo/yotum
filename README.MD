# Yotum

<br>
<div align='center'>
<img src="./icon.png" width=128px>


<a href="https://yotum.kruceo.com">📚 <strong>Example</strong></a> ╽
<a href="https://home.kruceo.com">🧒🏼 <strong>Author</strong></a> ╽
<a href="https://home.kruceo.com/donation">🎁 <strong>Donation</strong></a>
</div>
<br>
<br>

## Introduction

Yotum as created for generate automatic color palletes with js.
<br><br>
## Technologies

* Javascript
* CSS

<br><br>
## Installation
```
npm install -g kruceo/yotum

```
<br><br>
## Getting started

Using directly js:

```js
import gen from 'yotum/src/genColor.mjs';

const green = { command:"#0f0 ^ 50 / 9" };

console.log(gen(green));
```
output:
```json
{
  '0': [
    'c8ffc8', '96ff96',
    '64ff64', '32ff32',
    '00ff00', '00cd00',
    '009b00', '006900',
    '003700'
  ]
}
```
<br><br>

## Understanding a collection

### Object:

```js
const green = {
    name:green,
    command: '#21f092 ^ 50 / 9',
    out:"rgb"
    }
```

* ***Name -*** It's the object name that the array use, can be used to generate CSS tokens.
* ***Command -*** It's the instrunction to generator.
* ***Out-*** It's the output format [ rgb | hex ].

### Command:

```js
const c = '#4f1' //base color
const f = '^'    //function
const v = 50     //second value
const d = 9      //divisions

const cmd = `${c} ${f} ${v} / ${d}`
```

* ***Base color -*** It's the color that will generate the others.

* ***Function -*** It's the function that will be used to generate all colors.

* ***Value -*** It can be other color in different cases, it will be used by the function as a parameter.

* ***Division -*** It's the number of colors that will be generated.

<br><br>

### Functions:

```js
additive = '^' // additive(color1,value,division)
diffBetween = '~' // diffBetween(color1,color2,division) 
```
## Other ways to use

### With js array:

```js
import gen from 'yotum/src/genColor.mjs';


const colors = [
    { name:'blue',command:"#00f ^ 50 / 5" },
    { name:'green',command:"#0f0 ^ 50 / 5" },
    { name:'red',command:"#f00 ^ 50 / 5" }
    ];

console.log(gen(colors));
```
Output:
```json
{
  blue: [ '6464ff', '3232ff', '0000ff', '0000cd', '00009b' ],
  green: [ '64ff64', '32ff32', '00ff00', '00cd00', '009b00' ],
  red: [ 'ff6464', 'ff3232', 'ff0000', 'cd0000', '9b0000' ]
}
```

<br><br>
### With directly functions:

```js
import additive from 'yotum/src/additive.mjs';
import { matrixToHex } from 'yotum/src/lib/matrix.mjs';

const yellow = additive('ff0',40,5)
.map(each=>{return matrixToHex(each)}) //if you want a hex return

console.log(yellow);
```
Output:
```json
[ 'ffff50', 'ffff28', 'ffff00', 'd7d700', 'afaf00' ]
```
<br><br>
## Author
Visit Kruceo website for more projects: <a href='https://home.kruceo.com'>home.kruceo.com