// Write your solution here!
const drivers = ["Milo","Otis","Garfield"];

let destructivelyAppendDriver = (name) => {
    drivers.push(name);
}

let destructivelyPrependDriver = (name) => {
    drivers.unshift(name);
}

let destructivelyRemoveLastDriver = () => {
    drivers.pop();
}

let destructivelyRemoveFirstDriver = () => {
    drivers.shift();
}

let appendDriver = (name) => {
    const allDrivers = [...drivers, name];
    return allDrivers;
}

let prependDriver = (name) => {
    const allDrivers = [name, ...drivers];
    return allDrivers;
}

let removeLastDriver = () => {
    return drivers.slice(0,2);
}

let removeFirstDriver = () => {
    return drivers.slice(-2);
}