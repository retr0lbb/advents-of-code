import { read_input_file } from "../../utils/read_input_file.js"

function part1(){
    const input = read_input_file("./inputs/input.txt")
    const inputMatrix = input.map(row => row.split(""))

    const countedSplits = new Set()
    const visited = new Set()
    let splitCount = 0

    let sCoordinates = {x: 0, y: 0}

    inputMatrix.forEach((row, y) => {
        row.forEach((col, x) => {
            if(input[y][x] === "S"){
                sCoordinates.x = x
            }
        })
    })

    function recursivellyReachDept(x, y, max_depth, max_width, input) {
        const visitKey = `${x},${y}`

        // 🔒 trava contra loop
        if (visited.has(visitKey)) return
        visited.add(visitKey)

        if (y + 1 === max_depth) return

        const bottomItem = input[y + 1][x]

        if (bottomItem === "^") {
            const splitKey = `${x},${y + 1}`

            if (!countedSplits.has(splitKey)) {
                countedSplits.add(splitKey)
                splitCount++
            }

            const leftX = x - 1
            const rightX = x + 1

            if (leftX >= 0) {
                createRod(leftX, y + 1, input)
                recursivellyReachDept(leftX, y + 1, max_depth, max_width, input)
            }

            if (rightX < max_width) {
                createRod(rightX, y + 1, input)
                recursivellyReachDept(rightX, y + 1, max_depth, max_width, input)
            }
        } else {
            createRod(x, y + 1, input)
            recursivellyReachDept(x, y + 1, max_depth, max_width, input)
        }
    }


    const result = recursivellyReachDept(
        sCoordinates.x, 
        sCoordinates.y, 
        inputMatrix.length, 
        inputMatrix[0].length,  
        inputMatrix
    )

    const output = inputMatrix
        .map(row => row.join(""))
        .join("\n")


    console.log(result)
    console.log(splitCount)
    console.log(output)

    
}

function createRod(x, y, input){
    input[y][x] = "|"
}




part1()