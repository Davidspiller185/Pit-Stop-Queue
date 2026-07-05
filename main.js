import {raedApi,writeToFileJson,readFRomJson} from "/service/file_service.js"
import { getRaceName,getlap,totalCarsRace,pitStopCompleted,waitingPitStop,SearchCarByNumber  } from "./service/manager_service.js"
async function main() {
    let path = "https://server-for-test-week-13.onrender.com/api/race"
    const responce =await raedApi(path)
    await writeToFileJson(responce)
    const result = await readFRomJson()
    console.log(`Lap:${getRaceName(result)}`)
    const lap =getlap(result)
    console.log(`${lap.lap}/${lap.total}`)
    console.log(`total cars:${totalCarsRace(result)}`)
    console.log(`pit stop completed:${pitStopCompleted(result)}`)
    console.log(waitingPitStop(result))
    console.log(SearchCarByNumber(44))
    console.log("process completed successfully.the pit wal is up to date")

    


    
}
await main()