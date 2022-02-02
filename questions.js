/** 1. Что будет выведено в консоль? */

const p = new Promise((resolve) => resolve(true));
p.then(() => {
    console.log('A');
    p.then(() => console.log('B'));
})
console.log('C');


/** 2. Что будет выведено в консоль? */

const key1 = { key: 'apple' };
const key2 = { key: 'orange' };

const prices = {};

prices[key1] = 5;
prices[key2] = 10;

console.log(prices[key1]);
console.log(prices[key2]);

/** 3. Что необходимо изменить, чтобы код работал корректно и на экран вывел значения 5 и 10? */

const key1 = { key: 'apple' };
const key2 = { key: 'orange' };

const prices = {};

prices[key1] = 5;
prices[key2] = 10;

console.log(prices[key1]); // 5
console.log(prices[key2]); // 10

/** 
 * 4. Необходимо написать функцию для преобразования всех ключей 
 * в произвольном объекте в верхний регистр. Объект может быть вложенным. 
 * Пример объекта - константа obj, пример результата работы функции - константа reuslt.
 */

const obj = { 
    key1: 1,
    key2: {
        key3: 3,
        key4: {
            key5: 5,
            key6: 6,
        },
    },
    key7: 7,
};

const result = {
    KEY1: 1,
    KEY2: {
        KEY3: 3,
        KEY4: {
            KEY5: 5,
            KEY6: 6,
        },
    },
    KEY7: 7,
};

/** 5. Напишите функцию суммирования двух чисел */

const sum = add(6)(9); 
console.log(sum); // 15

/** 6. Что будет выведено в консоль? */

console.log('a', a);
console.log('b', b);

var a = 19;
let b = 94;

/** 7. Что будет выведено в консоль? */

console.log("2" + 1);
console.log("2" - 1);

/** 8. Напишите функцию capitalize(str), которая в исходной строке str каждое слово 
 * начинает с заглавной буквы. Слова в строке разделены пробелом.
 */

const title = "Правительство Франции ошибочно перечислело два миллиона евро селу Париж в России";

function capitalize(str) {}

console.log(capitalize(title)); // Правительство Франции Ошибочно Перечислело Два Миллиона Евро Селу Париж В России

/** 9. Необходимо подсчитать количество гласных букв в предложении */

const volwes = ["а", "о", "у", "е", "ё", "ы", "э", "и", "ю", "я"];

const sentence = "Обвал на Московской бирже позволил пенсионерки из Саратова попасть в список Форбс"; // 26

/** 10. Что будет выведено в консоль? */

const firstObj = {
    key1: 1,
    key2: 2,
    key3: 3,
};

const secondObj = firstObj;

firstObj.key1 = 11;
secondObj.key2 = 22;

console.log(firstObj);
console.log(secondObj);

/** 11. Напишите функцию intersection(arr1, arr2) для нахождения пересечения двух массивов arr1 и arr2. */

const firstArr = [1, 2, 3, 4];
const secondArr = [3, 4, 5, 6];

function intersection(arr1, arr2) { }

intersection(firstArr, secondArr); // [3, 4]
