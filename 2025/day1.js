import {read_input_file} from "../utils/read_input_file.js"

function main(){
    const inputs = read_input_file("./2025/inputs/part1.txt")
    console.log(inputs)

    let zeroCounter = 0;
    const pointerStartPosition = 50;

    let pointer = pointerStartPosition

    inputs.map(str => {
        const isL = str.startsWith("L") ? true : false
        
        const turnNumber = Number.parseInt(str.slice(1))

        if (isL) {
            pointer = (pointer - turnNumber + 100) % 100
        } else {
            pointer = (pointer + turnNumber) % 100
        }

        console.log("Pointer: ", pointer)

        if(pointer === 0){
            zeroCounter += 1
        }
    })

    console.log(zeroCounter)
}
main()