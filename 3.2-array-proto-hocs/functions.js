//task 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  const names = [];
  weapons.forEach((weapon) => names.push(weapon.name));
  return names;
}

function getCountReliableWeapons(initDurability) {
  const reliableWeapons = weapons.filter((weapon) => weapon.initDurability > initDurability);
  return reliableWeapons.length;
}

function hasReliableWeapons(initDurability) {
  const isReliable = (weapon) => weapon.initDurability > initDurability;
  return weapons.some(isReliable);
}

function getReliableWeaponsNames(initDurability) {
  const reliableWeapons = weapons.filter((weapon) => weapon.initDurability > initDurability);
  const reliableWeaponsNames = [];
  reliableWeapons.forEach((weapon) => reliableWeaponsNames.push(weapon.name));
  return reliableWeaponsNames;
}

function getTotalDamage() {
  const totalDamage = weapons.reduce((sum, weapon) => sum + weapon.attack, 0);
  return totalDamage;
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
  if (arr1.length !== arr2.length) {
    //чтобы не перебирать лишний раз
    return false;
  } else {
    return arr1.every((elem, index) => elem === arr2[index]);
  }
}

function memorize(fn, limit) {
  const memory = [];

  return (...args) => {
      if (memory.some(elem => compareArrays(args, elem.args))) {
        return memory.find((elem) => compareArrays(args, elem.args)).result;
      } else {
        do {
            memory.shift();
        } while (memory.length >= limit);
        memory.push({
          args: args,
          result: fn(...args)
        });
        console.log(memory, 'test');
        return memory[memory.length - 1].result; //last item
      }
  };
}
