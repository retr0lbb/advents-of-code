import {  read_input_file_as_line } from "../../utils/read_input_file.js";

function part1(){
    const inputs = read_input_file_as_line("./inputs/input.txt")
    const ranges = inputs.split(",")
    let sumOfAll = 0

    ranges.forEach(range => {

    const [start, finish] = range.split("-")

        for (let i = Number(start); i <= Number(finish); i++) {
            const str = i.toString()

            if (str.length % 2 !== 0) continue

            const half = str.length / 2
            const first = str.slice(0, half)
            const second = str.slice(half)

            if (first === second) {
                sumOfAll += i
            }
        }

    })

    console.log(sumOfAll)
}

part1()