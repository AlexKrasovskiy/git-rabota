year = window.prompt("Укажите год:");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);