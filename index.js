// Write your solution here
const drivers = ['Milo','Otis','Garfield']

function destructivelyAppendDriver(name) {
  drivers.push(name)
  return drivers
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  return drivers
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
  return drivers
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
  return drivers
}

function appendDriver(name) {
  let appendedDrivers
  let appendName = name.split()
  appendedDrivers = [drivers, ...appendName]
  return appendedDrivers.flat()
}

function prependDriver(name) {
  let prependedDrivers
  let prependName = name.split()
  prependedDrivers = [...prependName, drivers]
  return prependedDrivers.flat()
}

function removeLastDriver() {
  oneLessDriver = drivers.slice(0, drivers.length - 1)
  return oneLessDriver
}

function removeFirstDriver() {
  oneLessDriver = drivers.slice(1, drivers.length)
  return oneLessDriver
}
