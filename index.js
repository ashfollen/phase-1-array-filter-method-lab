// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(el => el.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(el => el.startsWith(letters))
}

function matchName(drivers, driverName) {
    return drivers.filter(el => el.name === driverName)
}