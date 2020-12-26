//task 1

function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  let sqrRootPos = (-b + Math.sqrt(D)) / (2 * a);
  let sqrRootNeg = (-b - Math.sqrt(D)) / (2 * a);
  let solution = {
    D,
    roots: [],
  };

  if (D === 0) {
    solution.roots = [sqrRootPos];
  } else if (D > 0) {
    solution.roots = [sqrRootPos, sqrRootNeg];
  }

  return solution;
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
  console.log(`Значение дискриминанта: ${result.D}.`);

  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней.`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}.`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}.`);
  }
}

/* тестовые данные
 showSolutionsMessage(1,2,3);
 showSolutionsMessage(7,20,-3);
 showSolutionsMessage(2,4,2);
*/

//task 2

function getAverageScore(data) {
  let summ = 0;
  let keysQuantity = 0;

  if (!!data === false) {
    //если в функцию ничего не прилетит
    return 0;
  } else if (Array.isArray(data)) {
    //если в функцию прилетит не объект, а массив (просто посчитает среднее)
    for (i = 0; i < data.length; i++) {
      summ += data[i];
    }
    return summ / data.length;
  } else if (Object.keys(data).length === 0) {
    //если в функцию прилетит пустой объект (если просто ретернуть 0, то жасмин будет ругаться :( )
    data[`average`] = 0;
    return data;
  }

  for (key in data) {
    data[key] = getAverageMark(data[key]);
    summ += data[key];
    keysQuantity++;
  }

  data[`average`] = summ / keysQuantity;
  return data;
}

function getAverageMark(marks) {
  let summ = 0;
  if (marks.length === 0) {
    return 0;
  } else {
    for (i = 0; i < marks.length; i++) {
      summ += marks[i];
    }
  }
  return summ / marks.length;
}

/* тестовые данные
console.log(getAverageScore({
  algebra: [2,4,5,2,3,4],
  geometry: [2,4,5],
  russian: [3,3,4,5],
  physics: [5,5],
  music: [2,2,6],
  english: [4,4,3],
  poetry: [5,3,4],
  chemistry: [2],
  french: [4,4]
}));

console.log(getAverageScore({
  algebra: [],
  geometry: []
}));
*/

//task 3

function getPersonData(secretData) {
  let decodedData = {
    firstName: ``,
    lastName: ``,
  };
  for (key in secretData) {
    decodedData.firstName = getDecodedValue(secretData.aaa);
    decodedData.lastName = getDecodedValue(secretData.bbb);
  }
  return decodedData;
}

function getDecodedValue(secret) {
  if (secret === 0) {
    return `Родриго`;
  } else {
    return `Эмильо`;
  }
}

/* тестовые данные
  console.log(getPersonData({
    aaa: 0,
    bbb: 0
  }));
  console.log(getPersonData({
    aaa: 1,
    bbb: 0
  }));
  console.log(getPersonData({
    aaa: 0,
    bbb: 1
  }));
  console.log(getPersonData({
    aaa: 1,
    bbb: 1
  }));
*/
