import fs from 'fs/promises'


export async function raedAPi(path) {
    try{
    console.log("...Loading queue data")
    const responce = await fetch(path)
    if (!responce.ok) return console.log(`status:${responce.status} ${responce.statusText}`)
    return responce.json()
    }
    catch(err){
        return err.message

    }

    
}

export async function writeToFileJson(content) {
    await fs.writeFile("../data/data.json",JSON.stringify(content))

}