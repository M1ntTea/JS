const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = arr[0];
let sum = arr[0];

function maxArr () {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(`Выражение элементов массива: ${max}`);
};
maxArr();

function sumArr () {
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`Сумма элементов массива: ${sum}`);
}
sumArr();