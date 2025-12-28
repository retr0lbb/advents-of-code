import { read_input_file } from "../../utils/read_input_file.js"

function propagateEight(x, y, grid){
    let numOfPapers = 0

    const directions = [
        [-1, -1], // top-left
        [ 0, -1], // top
        [ 1, -1], // top-right
        [-1,  0], // left
        [ 1,  0], // right
        [-1,  1], // bottom-left
        [ 0,  1], // bottom
        [ 1,  1]  // bottom-right
    ]

    directions.forEach(([dx, dy]) => {
        const newX = x + dx
        const newY = y + dy

        if(
            newY >= 0 &&
            newY < grid.length &&
            newX >= 0 &&
            newX < grid[newY].length
        ){
            grid[newY][newX] === "@" ? numOfPapers++ : null
        }
    })

    return { numOfPapers }
}

function part1(){
    const inputs = read_input_file("./inputs/input.txt")

    let numsOfValids = 0

    for(let y = 0; y<inputs.length; y++){
        for(let x=0; x<inputs[y].length; x++){
            if(inputs[y][x] === "@"){
                const {numOfPapers} = propagateEight(x, y, inputs)
                console.log(`O caracter ${inputs[y][x]} na posição Y: ${y} X: ${x} tem ${numOfPapers} adjacentes`)

                if(numOfPapers < 4){
                    numsOfValids += 1
                }
            }
        }
    }

    console.log(numsOfValids)

    
}

part1()