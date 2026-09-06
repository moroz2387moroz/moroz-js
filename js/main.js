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
let fullPrice;
let allServicePrices;
let servicePercentPrice;

//Урок 4

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
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
  } else if (price >= 15000 && fullPrice < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && fullPrice < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};
const showTypeOff = function (item) {
  console.log(item, typeof item);
};

fullPrice = getFullPrice();
allServicePrices = getAllServicePrices();
servicePercentPrice = getServicePercentPrices();
title = getTitle();


console.log(getRollbackMessage(fullPrice));
showTypeOff(title);
showTypeOff(fullPrice);
showTypeOff(adaptive);
console.log(screens.length);
console.log(servicePercentPrice);
