// ctu: commenting to understand
import fs from "fs/promises"
import sf from "fs"
import path from "path"

try {
    const basepath = "/home/sanu/Documents/Web Deployment/New/priyojna/FilesOrganisation"
    const files = await fs.readdir(basepath)
    // console.log(files[0][0])

    for (const items of files) {
        if (items != "headquarter" && items != "testing") {

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
                    await fs.rename(items, items.split("_")[1])
                    break
                }
            }
        }
    }
} catch (error) {
    try {
        const basepath = "/home/sanu/Documents/Web Deployment/New/priyojna/FilesOrganisation"
        const files = await fs.readdir(basepath)
        // console.log(files[0][0]) 
        for (const items of files) {
            if (items != "headquarter" && items != "testing") {

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
                        await fs.rename(items, joined + "_" + items)
                        break
                    }
                }
            }
        }
    } catch (error) { 
        // console.log(error)
        console.log("WARNING! FIRST BRING BACK TO ORIGINAL PHASE USING free.js") }
}
