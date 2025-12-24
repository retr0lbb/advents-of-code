import {read_input_file} from "../utils/read_input_file.js"

function part1(){
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

        if(pointer === 0){
            zeroCounter += 1
        }
    })

    console.log(zeroCounter)
}

function part2() {
    const inputs = read_input_file("./2025/inputs/part1.txt")

    let zeroCounter = 0
    let pointer = 50

    function spin(dial, rot){
        const start = dial
        const end = ((dial + rot) % 100 + 100) % 100
        
        let revolutions = 0
        
        if(rot > 0) {
            if(start === 0) {
                if(rot >= 100) {
                    revolutions = Math.floor(rot / 100)
                }
            } else if(start + rot >= 100) {
                revolutions = Math.floor((start + rot) / 100)
            }
        } else if(rot < 0) {
            if(start === 0) {
                if(Math.abs(rot) >= 100) {
                    revolutions = Math.floor(Math.abs(rot) / 100)
                }
            } else if(start + rot < 0) {
                revolutions = Math.floor(Math.abs(start + rot) / 100) + 1
            }
        }
        
        console.log(`inputs(${dial}, ${rot}) -> new Dial: ${end}, passagens por 0: ${revolutions}`)
        
        return {newDial: end, rev: revolutions}
    }

    inputs.forEach(str => {
        const isL = str.startsWith("L")
        const turnNumber = Number.parseInt(str.slice(1))

        const rotation = isL ? -turnNumber : turnNumber
        const {newDial, rev} = spin(pointer, rotation)
        
        zeroCounter += rev
        
        if(newDial === 0 && rev === 0){
            zeroCounter++
        }
        
        pointer = newDial
    })

    console.log(`Total de passagens/paradas no zero: ${zeroCounter}`)
}
part2()