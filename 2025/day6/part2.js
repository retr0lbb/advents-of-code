import { read_input_file } from "../../utils/read_input_file.js";

function part2() {
    const input = read_input_file("./inputs/input.txt")

    let total = 0

    const rows = input.map(line => line.split(""))

    const width = rows[0].length
    const height = rows.length
    const arrGroup = []

    for (let col = 0; col < width; col++) {
        let columnChars = []

        for (let row = 0; row < height; row++) {
            columnChars.push(rows[row][col])
        }
        arrGroup.push(columnChars)
    }

    const chunks = splitByEmptyLines(arrGroup)


    const chunksObj = chunks.map((row, cIndex) => {
        let operator = ""
        const numbers = row.map(((line, index) => {
            if(index === 0){
                if(operator === ""){
                    operator = line[line.length-1]
                }
            }

            return convertLineToNumber(line)
        }))

        return {
            operator: operator,
            numbers: numbers
        }
    })

    const sumOfChunks = chunksObj.map(item => {
        let prev = 0;

        for(let i = 0; i < item.numbers.length -1; i++){
            if(prev === 0){
                prev = item.numbers[i]
            }
            const next = item.numbers[i+1]

            prev = makeTheCalculo(item.operator, prev, next )
        }

        console.log(`Resultado das contas do chunk com o operador ${item.operator} e com os numeros ${item.numbers} = ${prev}`)

        return prev
    })

    const sum = sumOfChunks.reduce((acc, curr) => acc + curr, 0)


    console.log(sum)

}

function isEmptyLine(line) {
    return line.every(ch => ch === ' ')
}

function splitByEmptyLines(lines) {
  const chunks = []
  let currentChunk = []

  for (const line of lines) {
    if (isEmptyLine(line)) {
      if (currentChunk.length > 0) {
        chunks.push(currentChunk)
        currentChunk = []
      }
    } else {
      currentChunk.push(line)
    }
  }

  // último chunk
  if (currentChunk.length > 0) {
    chunks.push(currentChunk)
  }

  return chunks
}

function convertLineToNumber(line){
    const convertedLine = line.filter(ch => /\d/.test(ch)).join('')
    return Number.parseInt(convertedLine)
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
    }

    return sum
}

part2()