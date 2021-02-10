//task 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(initDurability) {
  return weapons.filter(weapon => weapon.initDurability > initDurability).length;
}

function hasReliableWeapons(initDurability) {
  return weapons.some(weapon => weapon.initDurability > initDurability);
}

function getReliableWeaponsNames(initDurability) {
  return weapons.filter(weapon => weapon.initDurability > initDurability).map(weapon => weapon.name);
}

function getTotalDamage() {
  return weapons.reduce((sum, weapon) => sum + weapon.attack, 0);
}

function getValuestCountToSumValues(numbers, amount) {
  let count = 0;
  numbers.reduce((sum, number) => {
    if (sum < amount) {
      count++;
      return sum + number;
    }
  }, 0);
  return count;
}

//task 2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index]);
}

function memorize(fn, limit) {
  const memory = [];

  return (...args) => {
    let finded = memory.find((elem) => compareArrays(args, elem.args));
    if (finded !== undefined) {
      return finded.result;
    }
    while (memory.length >= limit) {
      memory.shift();
    }
    memory.push({
      args: args,
      result: fn(...args),
    });
    console.log(memory, 'test');
    return memory[memory.length - 1].result; //last item
  };
}
