

export  function getRaceName(obj) {
    return obj.raceName
}

export function getLap(obj){
    const lap =obj.currentLap
    const total = obj.totalLaps
    return {lap,total}
}

export function totalCarsRace(obj){
    return obj.cars.length
}

export function pitStopCompleted(obj){
    let count_pit_completed =0
    for (let car of obj.cars){
        if (car.status === "done"){
            count_pit_completed+=1
        }
    }
    return count_pit_completed
}

export function waitingPitStop(obj){
    const Filter = obj.cars.filter(car => car.status === "waiting" )
    console.log("Cars waiting for pit stop")
    for (let car of Filter){
        console.log(`-Car #${car.carNumber} | Driver: ${car.driverName}`)
    }
    console.log("Next car to enter the pit")
    console.log(`>> Car #${Filter[0].carNumber} | Driver: ${Filter[0].driverName}`)
    console.log(`Radio message to car #${Filter[0].carNumber}: Box box box, ${Filter[0].driverName}, pit this lap!`)
}

export function SearchCarByNumber(obj,numberCar){
    const Find = obj.cars.find(car => car.carNumber === numberCar )
    if (Find){
        console.log(`Found car #${Find.carNumber} | Driver: ${Find.driverName} | Status: ${Find.status}`)
    }
    else{
        console.error(`Error:No car founf with number #${numberCar} in the current race`)
    }

}




