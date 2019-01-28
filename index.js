// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push(name);
};

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
  drivers.pop();
};

function destructivelyRemoveFirstDriver() {
  drivers.shift();
};

function appendDriver(name) {
  return new_drivers_array = [...drivers, name];
};

function prependDriver(name) {
  return new_drivers_array = [name, ...drivers];
};

function removeLastDriver(name) {
  new_drivers_array = drivers.slice()
};

function removeLastDriver() {
  return new_drivers_array = drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return new_drivers_array = drivers.slice(1);
}
