"use strict";
const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: false,
  rollback: 19,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",

  isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking() {
    this.title = prompt("Как называется ваш проект?");
    this.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные",
    );
    do {
      this.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!this.isNumber(this.screenPrice));
    this.screenPrice = +this.screenPrice;
    this.adaptive = confirm("Нужен адаптив на сайте?");
  },

  getAllServicePrices() {
    let sum = 0;
    let price;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        this.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else {
        this.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!this.isNumber(price));

      sum += +price;
    }
    return sum;
  },

  getFullPrice() {
    return this.screenPrice + this.allServicePrices;
  },

  getTitle() {
    const normalizedTitle = (this.title || "").trim();

    return (
      normalizedTitle.charAt(0).toUpperCase() +
      normalizedTitle.slice(1).toLowerCase()
    );
  },

  getServicePercentPrices() {
    return this.fullPrice - Math.ceil(this.fullPrice * (this.rollback / 100));
  },

  getRollbackMessage(price) {
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

  showTypeOff(item) {
    console.log(item, typeof item);
  },

  logger() {
    console.log(this.getRollbackMessage(this.fullPrice));
    this.showTypeOff(this.title);
    this.showTypeOff(this.fullPrice);
    this.showTypeOff(this.adaptive);
    console.log(this.screens.length);
    console.log(this.servicePercentPrice);

    for (const property in this) {
      console.log(property, this[property]);
    }
  },

  start() {
    this.asking();
    this.allServicePrices = this.getAllServicePrices();
    this.fullPrice = this.getFullPrice();
    this.servicePercentPrice = this.getServicePercentPrices();
    this.title = this.getTitle();
    this.logger();
  },
};

appData.start();
