import { read_input_file } from "../../utils/read_input_file.js";

function part1(){
    const input = read_input_file("./inputs/input.txt")
    const rangeArr = []
    const numberedArr = []
    let numberOfFreshFood = 0

    input.forEach(str => {
        if(str.match(/[0-90-9]-[0-90-9]/gm)){
            rangeArr.push(str)
        }else{
            if(str === ""){
                return
            }
            numberedArr.push(Number.parseInt(str))
        }
    })

    numberedArr.forEach(number => {
        let isFresh = false

        rangeArr.forEach(range => {
            const [left, right] = range.split("-")
            if(number >= Number.parseInt(left) && number <= Number.parseInt(right)){
                console.log(`Number: ${number} is between ${left}-${right}`)
                isFresh = true
            }
        })

        if(isFresh){
            numberOfFreshFood += 1
        }
    })

    console.log(`Number of fresh Food ${numberOfFreshFood}`)

}

part1()