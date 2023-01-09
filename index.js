function returnFirstTwoDrivers(array){
    return [array[0], array[1]]
}

function returnLastTwoDrivers(array){
    return [array[array.length - 2], array[array.length - 1]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(){return num * num}
}

function fareDoubler(num){
    return num * 2
}

function fareTripler(num){
    return num * 3
}

function selectDifferentDrivers(drivers, func){
    return func(drivers)
}