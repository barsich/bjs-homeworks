String.prototype.isPalindrome = function () {
  let str = this.replace(/\s+/g, "").toLowerCase();
  let strReverse = str.split("").reverse().join("");
  return (str === strReverse);
}

function getAverageMark(marks) {
  let summ = 0;
  let roundedAverage = 0;
  if (marks.length !== 0) {
    for (i = 0; i < marks.length; i++) {
      summ += marks[i];
    }
    roundedAverage = Math.round(summ / marks.length);
  }
  return roundedAverage;
}

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = +(new Date(birthday));
    let diff = now - birthday;
    let age = (new Date(diff)).getFullYear() - 1970;
    console.log(age);
    return (age >= 18);
}
