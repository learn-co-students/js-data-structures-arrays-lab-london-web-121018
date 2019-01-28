// Write your solution here!
const drivers = ["Milo","Otis", "Garfield"];

function destructivelyAppendDriver(name){
    return drivers.push(name);
}

function destructivelyPrependDriver(name){
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    return drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    return drivers.shift();
}

function appendDriver(name){
    const newDriver =[...drivers, name];
    return newDriver;
}

function prependDriver(name){
    const newDriver =[name, ...drivers];
    return newDriver;
}

function removeLastDriver(){
    const newDriver = drivers.slice(0,-1);
    return newDriver;
}


function removeFirstDriver(){
    const newDriver = drivers.slice(1);
    return newDriver;
}