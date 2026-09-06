"use strict";
let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 19;
let fullPrice;
let allServicePrices;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные",
  );
  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));
  screenPrice = +screenPrice;
  adaptive = confirm("Нужен адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;
  let price;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    do {
      price = prompt("Сколько это будет стоить?");
    } while (!isNumber(price));

    sum += +price;
  }
  return sum;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = () => {
  const normalizedTitle = (title || "").trim();

  return (
    normalizedTitle.charAt(0).toUpperCase() +
    normalizedTitle.slice(1).toLowerCase()
  );
};

const getServicePercentPrices = () => {
  return fullPrice - Math.ceil(fullPrice * (rollback / 100));
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};
const showTypeOff = function (item) {
  console.log(item, typeof item);
};

asking();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

console.log(getRollbackMessage(fullPrice));
showTypeOff(title);
showTypeOff(fullPrice);
showTypeOff(adaptive);
console.log(screens.length);
console.log(servicePercentPrice);
