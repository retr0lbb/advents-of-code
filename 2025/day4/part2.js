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

function replaceCharAt(str, index, newChar){
    return str
        .split("")
        .map((char, i) => i === index ? newChar : char)
        .join("")
}

function replaceOlderPapes(arrOfPos, grid){
    console.log('replacing ', arrOfPos.length, " positions")
    const newGrid = [...grid]
    arrOfPos.forEach(([y, x]) => {
        newGrid[y] = replaceCharAt(newGrid[y], x, ".")
    });

    return newGrid
}

function part2(){
    const inputs = read_input_file("./inputs/input.txt")

    let numsOfValids = 0
    let canRemoveMore = true
    let removeArr = []

    let grid = inputs

    while(canRemoveMore === true){
        removeArr = []

        for(let y = 0; y < grid.length; y++){
            for(let x = 0; x < grid[y].length; x++){
                if(grid[y][x] === "@"){
                    const { numOfPapers } = propagateEight(x, y, grid)
                    if(numOfPapers < 4){
                        numsOfValids++
                        removeArr.push([y, x])
                    }
                }
            }
        }

        if(removeArr.length === 0){
            canRemoveMore = false
        } else {
            grid = replaceOlderPapes(removeArr, grid)
        }

        console.log(`AAAAAAAAAAAAAAAAA ${numsOfValids}`)
    }

   

}

part2()