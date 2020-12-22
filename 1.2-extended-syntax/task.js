function getResult(a,b,c){
    "use strict"
    let x = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let sqrRootPos = ((-b) + Math.sqrt(discriminant)) / 2 * a;
    let sqrRootNeg = ((-b) - Math.sqrt(discriminant)) / 2 * a;

    if (discriminant < 0) {
        x = [];
    } else if (discriminant === 0) {
        x.push(sqrRootPos);
    } else {
        x.push(sqrRootPos, sqrRootNeg);
    }

    return x;
}

function getAverageMark(marks){
    "use strict"
    let averageMark;
    if (marks.length === 0) {
        averageMark = 0
    } else if (marks.length > 5) {
        console.log("Будет посчитано среднее первых пяти оценок!");
        averageMark = calcAverage(marks.slice(0, 5));
    } else {
        averageMark = calcAverage(marks);
    }

    function calcAverage(marks) {
        let summ = 0;

        for (let i = 0; i < marks.length; i++) {
            summ = summ + marks[i];
        }
        
        let averageMark = summ / marks.length;
        return averageMark;
    }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    "use strict"
    if (new Date().getFullYear() - dateOfBirthday.getFullYear() < 18) {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    } else {
        return `Не желаете ли олд-фэшн, ${name}?`
    }
}
