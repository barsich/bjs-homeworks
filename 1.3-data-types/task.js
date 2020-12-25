"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    let percentName = `Процентная ставка`;
    let contributionName = `Начальный взнос`;
    let amountName = `Общая стоимость`;
    let percentInt = parseInt(percent);
    let contributionInt = parseInt(contribution);
    let amountInt = parseInt(amount);

    //Проконтролируйте корректность введенных данных.
    if (isNaN(percentInt)) {
        return `Параметр ${percentName} содержит неправильное значение ${percent}`;
    } else if (isNaN(contributionInt)) {
        return `Параметр ${contributionName} содержит неправильное значение ${contribution}`;
    } else if (isNaN(amountInt)) {
        return `Параметр ${amountName} содержит неправильное значение ${amount}`;
    }

    //Посчитайте тело кредита: сумма, которую необходимо вернуть банку.
    let principal = amountInt - contributionInt;

    //Посчитайте количество выплачиваемых месяцев.
    let currentDate = new Date;
    let months = (date.getFullYear() - currentDate.getFullYear()) * 12;
    months += date.getMonth();
    months -= currentDate.getMonth();

    //Ежемесячная оплата.
    //Платеж=S*(P+P/(((1+P)^n)-1)), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
    let payment = principal * (percentInt / 1200 + (percentInt / 1200) / (Math.pow(1 + percentInt / 1200, months) - 1));

    //Посчитайте общую сумму, которую придется заплатить клиенту.
    let totalAmount = (payment * months).toFixed(2);

    console.log(totalAmount);

    return totalAmount;
}

function getGreeting(name) {
    let greeting;
    if (!!name) {
        greeting = `Привет, мир! Меня зовут ${name}.`;
    } else {
        greeting = `Привет, мир! Меня зовут Аноним.`;
    }
    return greeting;
}