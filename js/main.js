"use strict";

// Урок 2

let title = "Moroz project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1000;
let rollback = 19;
let fullPrice = 350000;
let adaptive = false;

let percent = fullPrice * (rollback / 100);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(
  "Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани",
);
console.log(
  "Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани",
);

console.log(screens.toLowerCase().split(", "));
console.log("Процент посреднику: " + percent + " рублей/ долларов/гривен/юани");

// Урок 3

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?");
screenPrice = +prompt("Сколько будет стоить данная работа?");
adaptive = prompt("Нужен адаптив на сайте?", "Да");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = fullPrice - Math.ceil(fullPrice * (rollback / 100));

console.log(servicePercentPrice);

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}
