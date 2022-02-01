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
