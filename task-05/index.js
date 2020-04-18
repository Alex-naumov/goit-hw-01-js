"use strict";

let receivedData = prompt().toLowerCase();
let price;
var country;
let fragmentReceivedData = "";
let message;

for (var i = 1; i < receivedData.length; i++) {
  fragmentReceivedData = fragmentReceivedData + receivedData[i];
  country = receivedData[0].toUpperCase() + fragmentReceivedData;
}

switch (country) {
  case "Китай":
    price = 100;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;
  case "Чили":
    price = 250;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;
  case "Австралия":
    price = 170;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;
  case "Индия":
    price = 80;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;
  case "Ямайка":
    price = 120;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;
  default:
    alert("В вашей стране доставка не доступна");
}
