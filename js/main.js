"use strict";
let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные",
);
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 19;

//Урок 4

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

let allServicePrices = getAllServicePrices();

function getFullPrice() {
  return screenPrice + allServicePrices;
}

let fullPrice = getFullPrice();

const getTitle = () => {
  const normalizedTitle = (title || "").trim();

  return (
    normalizedTitle.charAt(0).toUpperCase() +
    normalizedTitle.slice(1).toLowerCase()
  );
};

title = getTitle();

const getServicePercentPrices = () => {
  return fullPrice - Math.ceil(fullPrice * (rollback / 100));
};

let servicePercentPrice = getServicePercentPrices();

const showTypeOff = function (item) {
  console.log(item, typeof item);
};

const getRollbackMessage = function () {
  if (fullPrice >= 30000) {
    return "Даем скидку в 10%";
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    return "Даем скидку в 5%";
  } else if (fullPrice >= 0 && fullPrice < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

showTypeOff(title);
showTypeOff(fullPrice);
showTypeOff(adaptive);
console.log(screens);
console.log(getRollbackMessage());
console.log(servicePercentPrice);
