"use strict";
const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 19,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();

    appData.logger();
  },

  isNumber: function (num) {
    return (
      !isNaN(parseFloat(num)) && isFinite(num) && !/\p{L}/u.test(num)
    );
  },

  isText: function (text) {
    return (
      typeof text === "string" &&
      text.trim() !== "" &&
      /\p{L}/u.test(text)
    );
  },

  asking: function () {
    do {
      appData.title = prompt("Как называется ваш проект?");
    } while (!appData.isText(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;

      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (!appData.isText(name));

      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, typeScreen: name, price: +price });
    }

    for (let i = 0; i < 2; i++) {
      let name;

      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (!appData.isText(name));
      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));
      appData.services[name + "_" + i] = +price;
    }

    appData.adaptive = confirm("Нужен адаптив на сайте?");
  },

  addPrices: function (price) {
    appData.screenPrice = appData.screens.reduce(
      (total, screen) => total + +screen.price,
      0
    );

    for (const key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice -
      Math.ceil(appData.fullPrice * (appData.rollback / 100));
  },

  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase();
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    for (const property in appData) {
      console.log(property, appData[property]);
    }
  },
};

appData.start();
