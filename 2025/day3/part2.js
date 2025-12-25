import {  read_input_file } from "../../utils/read_input_file.js";

function part2(){
    const inputs = read_input_file("./inputs/input.txt")

    function greedyCells(str, numOfCells = 12){
        let digits = str.split("")
        let result = ""
        let start = 0

        let k = numOfCells

        while(k>0){
            const end = digits.length - k

            let maxDigit = "0"

            let maxIndex = start

            for(let i = start; i<= end; i++){
                if(digits[i] > maxDigit){
                    maxDigit = digits[i]
                    maxIndex = i
                }
            }

            result += maxDigit;
            start = maxIndex +1
            k--
        }

        return result
    }

    let maxSum = 0
    inputs.forEach(row => {
        const result = greedyCells(row)

        maxSum += Number.parseInt(result)
    })

    console.log(maxSum)


}
part2()