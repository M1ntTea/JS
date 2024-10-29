// Написать функцию
// Вводим число, оно имеет целую и десятичную часть
// десятичная часть - ограниченная два знака после запятой
// мы округляем все до ближайшего (?наименьшего?) четного числа.

// Пользователь вводит 122.20 —> 122
// Пользователь вводит 123.20 —> 124
// Пользователь вводит 125.60 —> 126

const roundToEven = function(inputNumber) {
    inputNumber = parseFloat(prompt(`Введите число вещественное число: `));
    let inputNumberCropped = inputNumber.toFixed(2);
    let inputNumberRound = Math.floor(inputNumberCropped);
        if (inputNumberRound % 2 == 0) {
            inputNumberRound;
        } else {
            inputNumberRound++;
        }

    return inputNumberRound;
}
console.log(roundToEven());