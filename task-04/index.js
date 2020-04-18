"use strict";

const credits = 23500;
const pricePerDroid = 3000;
let amount = prompt();
let message;
let totalPrice;
let remainder;

if (amount === null) {
  message = "Отменено пользователем!";
} else {
  totalPrice = pricePerDroid * amount;
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    remainder = credits - totalPrice;
    message = `Вы купили ${amount} дроидов, на счету осталось ${remainder} кредитов.`;
  }
}
alert(message);
