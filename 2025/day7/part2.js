import { read_input_file } from "../../utils/read_input_file.js"

function part2() {
    const input = read_input_file("./inputs/input.txt")
    const inputMatrix = input.map(row => row.split(""))
    
    const rows = inputMatrix.length
    const cols = inputMatrix[0].length

    // Memoization map: stores the number of timelines starting FROM {x, y} to the bottom
    const memo = new Map()

    let sCoordinates = { x: 0, y: 0 }
    inputMatrix.forEach((row, y) => {
        row.forEach((char, x) => {
            if (char === "S") {
                sCoordinates.x = x
                sCoordinates.y = y
            }
        })
    })

    function countTimelines(x, y) {
        // If we reached the bottom row, this represents 1 completed timeline path
        if (y === rows - 1) {
            return 1
        }

        const key = `${x},${y}`
        if (memo.has(key)) return memo.get(key)

        let total = 0
        const nextY = y + 1

        // Look at what is directly below the current position
        const below = inputMatrix[nextY][x]

        if (below === "^") {
            // It's a splitter! The timeline splits into two.
            const leftX = x - 1
            const rightX = x + 1

            if (leftX >= 0) {
                total += countTimelines(leftX, nextY)
            }
            if (rightX < cols) {
                total += countTimelines(rightX, nextY)
            }
        } else {
            // It's a rod (|) or empty space (.) - continue straight down
            // In this specific problem context, particles follow the vertical path
            total += countTimelines(x, nextY)
        }

        memo.set(key, total)
        return total
    }

    const totalTimelines = countTimelines(sCoordinates.x, sCoordinates.y)

    console.log("Total Active Timelines:", totalTimelines)
}

part2()