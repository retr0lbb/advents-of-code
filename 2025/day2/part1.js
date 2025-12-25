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


function part2() {
    const inputs = read_input_file_as_line("./inputs/input.txt");
    const ranges = inputs.split(",");
    let sumOfAll = 0;

    ranges.forEach(range => {
        const [start, finish] = range.split("-");

        for (let num = Number(start); num <= Number(finish); num++) {
            const str = num.toString();
            const len = str.length;

            let isInvalid = false;

            for (let size = 1; size <= len / 2; size++) {

                if (len % size !== 0) continue;

                const times = len / size;
                if (times < 2) continue;

                const pattern = str.slice(0, size);
                const rebuilt = pattern.repeat(times);

                if (rebuilt === str) {
                    isInvalid = true;
                    break;
                }
            }

            if (isInvalid) {
                sumOfAll += num;
            }
        }
    });

    console.log(sumOfAll);
}

part2();