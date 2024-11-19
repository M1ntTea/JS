// Создать массив user из 4 элементов и вручную ввести данные
const userName = ['Влад', 'Вася', 'Петя', 'Гриша'];
// Создать массив admin из 2 данных  (имена админов)
const adminName = ['Константин', 'Максим'];
// Добавить пользователя в массив user
userName.push('Юра');
// Изменить первого пользователя в массиве admin
adminName[0] = 'Стас';
// Изменить последнего пользователя в массиве user
userName[userName.length] = 'Толя'; // спросить как это работает
// Объединить массивы user и admin  в массив users
const users = userName.concat(adminName);
// Подсчитать количество элементов массива users
users.length;
// Создать массив people, состоящий из элементов массива users (независимый)
const people = users.slice();
// Добавить в массив  people еще двоих пользователей
people.push('Гена', 'Ваня');
// Вывести данные массива  users  и people
console.log(users);
console.log(people);