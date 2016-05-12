var number = Math.floor(Math.random() * 10);
var guest_number = prompt('Испытайте удачу, веддите число от 1 до 10');

if (guest_number == number)
    alert('Верно! Поздравляем, это было число:' + number);
else
    alert('Не верно, попробуйте в следующий раз. Это было число: ' + number);
