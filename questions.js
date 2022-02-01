/** 1. Что выведет код в консоль? */

const p = new Promise((resolve) => resolve(true));
p.then(() => {
    console.log('A');
    p.then(() => console.log('B'));
})
console.log('C');


/** 2. Что выведет код в консоль? */

const key1 = { key: 'apple' };
const key2 = { key: 'orange' };

const prices = {};

prices[key1] = 5;
prices[key2] = 10;

console.log(prices[key1]);
console.log(prices[key2]);

/** 3. Что необходимо изменить, чтобы код работал корректно? */

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

