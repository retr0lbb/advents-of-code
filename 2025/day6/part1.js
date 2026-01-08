import { read_input_file } from "../../utils/read_input_file.js";

function part1() {
  const input = read_input_file("./inputs/input.txt")

  let total = 0

  const mathArr = input.map(row => {
    let chars = row.trim().split(" ")
    chars = chars.filter(value => value !== '')
    return chars
  })

  console.log(mathArr)


  for(let column = 0; column < mathArr[0].length; column ++){
    let operator = mathArr[mathArr.length -1][column]

    let columValue = 0


    for(let row = 0; row < mathArr.length -2; row ++){
        const current = Number.parseInt(mathArr[row][column])
        const next = Number.parseInt(mathArr[row+1][column])

        if(columValue == 0 ){
            columValue = current
        }

        const result = makeTheCalculo(operator, columValue, next )
        columValue = result
    }

    total += columValue

    console.log(`resultado da coluna ${column}: ${columValue} com o operador: ${operator}`)
  }

  console.log("total: ", total)
}

function makeTheCalculo(operator, a, b){
    let sum = 0
    switch (operator) {
        case "*":
            sum = a * b
            break;
        
        case "+":
            sum = a + b
            break;
        case "-":
            sum = a-b
            break;
    }

    return sum
}

part1()