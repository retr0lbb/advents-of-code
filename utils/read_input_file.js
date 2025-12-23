import fs from "node:fs"

export function read_input_file(filePath){
    const md = fs.readFileSync(filePath, "utf-8")
    const lines = md.split(/\r?\n/)


    return lines
    
}