// ctu: commenting to understand
import fs from "fs/promises"
import sf from "fs"
import path from "path"

const BasePath = "/home/sanu/Documents/Web Deployment/fileOrganisation"
try {
    const basepath = `${BasePath}`
    const files = await fs.readdir(basepath)
    // console.log(files[0][0])
    for (const items of files) {
        if (items != "headquarter" && items != "testing") {

            // console.log(items)
            // ctu: step 1 is to split about '#'
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
                    // ctu: step2 to get that lecture number which is stored in joined variable
                    let joined = joining.split(" ")[1]
                    try { if (items.split("_")[0] == joined) throw err }
                    catch (error) {
                        // console.log("WARNING! FIRST BRING BACK TO ORIGINAL PHASE USING premium.js")
                        break
                    }

                    if (sf.existsSync(path.join(basepath, joined))) {
                        await fs.rename(path.join(basepath, items), path.join(basepath, joined, items))
                    }
                    else {
                        await fs.mkdir(joined)
                        await fs.rename(path.join(basepath, items), path.join(basepath, joined, items))

                    }
                    break
                }
            }

            let joined = joining.split(" ")[1]
            try { if (items.split("_")[0] == joined) throw err }
            catch (error) {
                console.log("WARNING! FIRST BRING BACK TO ORIGINAL PHASE USING premium.js")
                break
            }
        }
    }
} catch (error) {

    const basepath = `${BasePath}`
    let files = await fs.readdir(basepath)
    // console.log(files)
    for (const items of files) {
        if (items != "headquarter" && items != "testing") {

            let elements = await fs.readdir(path.join(basepath, items))
            // console.log(elements)
            // console.log(elements[elements.length-1])
            await fs.rename(path.join(basepath, items, elements[elements.length - 1]), path.join(basepath, elements[elements.length - 1]))
            sf.rmSync(path.join(basepath, items), { recursive: true, force: true })
        }
    }
}
