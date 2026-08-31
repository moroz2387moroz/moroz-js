let title = "Moroz project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1000;
let rollback = 19;
let fullPrice = 350000;
let adaptive = false;

let procent = fullPrice * (rollback / 100);

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
console.log("Процент посреднику: " + procent + " рублей/ долларов/гривен/юани");
