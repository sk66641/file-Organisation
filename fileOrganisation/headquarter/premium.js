// ctu: commenting to understand
import fs from "fs/promises" // asychronous
import sf from "fs" // synchronous
import { fileURLToPath } from "url";
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));

const BasePath = `${__dirname}/`

if (BasePath == "") {
    console.log("Please provide the base path")
    process.exit(1)
}
try {
    const basepath = `${BasePath}`
    const files = await fs.readdir(basepath)
    // console.log(files[0][0])

    for (const items of files) {
        if (items != "headquarter") {

            // console.log(items)
            let numPart = items.split("#")[1]
            let joining = " "
            // console.log(numPart, typeof(numPart))
            for (const chars of numPart) {
                // console.log(chars, typeof(chars), isNaN(chars))
                if (!isNaN(chars)) {
                    joining += chars

                }
                else {
                    await fs.rename(path.join(basepath, items), path.join(basepath, items.split("_")[1]))
                    break
                }
            }
        }
    }
} catch (error) {
    try {
        const basepath = `${BasePath}`
        const files = await fs.readdir(basepath)
        // console.log(files[0][0]) 
        for (const items of files) {
            if (items != "headquarter") {

                // console.log(items)
                let numPart = items.split("#")[1]
                let joining = " "
                // console.log(numPart, typeof(numPart))
                for (const chars of numPart) {
                    // console.log(chars, typeof(chars), isNaN(chars))
                    if (!isNaN(chars)) {
                        joining += chars

                    }
                    else {
                        // console.log(joining.split(" ")[1])
                        let joined = joining.split(" ")[1]
                        await fs.rename(path.join(basepath, items), path.join(basepath, joined + "_" + items))
                        break
                    }
                }
            }
        }
    } catch (error) {
        // console.log(error)
        console.log("WARNING! FIRST BRING BACK TO ORIGINAL PHASE USING free.js")
    }
}
