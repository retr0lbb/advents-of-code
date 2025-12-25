import {  read_input_file_as_line, read_input_file } from "../../utils/read_input_file.js";

function part1(){
    const inputs = read_input_file("./inputs/input.txt")
    
    let totalCombination =0
    inputs.forEach(power_line => {
        let moreCombination = 0
        let number1Index = 0
        let number2Index = 0

        for(let i = 0; i< power_line.length; i++){
            const number1 = Number.parseInt(power_line[i])
            for(let j=i + 1; j<power_line.length; j++){
                const number2 = Number.parseInt(power_line[j])

                if(((number1 * 10) + number2) > moreCombination){
                    moreCombination = ((number1 * 10) + number2)
                    number1Index = i
                    number2Index = j
                }
            }
        }
        totalCombination += moreCombination

    })
    
    console.log(`Maiores celulas encontradas ${totalCombination}`)


}

part1()