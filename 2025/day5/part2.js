import { read_input_file } from "../../utils/read_input_file.js";

function part2(){
    const input = read_input_file("./inputs/input.txt")
    const rangeArr = []
    let numberOfValidIds = 0

    input.forEach(str => {
        if(str.match(/[0-90-9]-[0-90-9]/gm)){
            rangeArr.push(str)
        }
    })

    const minifyedRanges = mergeRanges(rangeArr)
    minifyedRanges.forEach(range => {
        numberOfValidIds += (range.end - range.start)+1
    })

    console.log(numberOfValidIds)
}

function mergeRanges(ranges) {
  const parsed = ranges
    .map(r => {
      const [start, end] = r.split("-").map(Number)
      return { start, end }
    })
    .sort((a, b) => a.start - b.start)

  const merged = []
  let current = parsed[0]

  for (let i = 1; i < parsed.length; i++) {
    const next = parsed[i]

    if (next.start <= current.end + 1) {
      current.end = Math.max(current.end, next.end)
    } else {
      merged.push(current)
      current = next
    }
  }

  merged.push(current)
  return merged
}

part2()