function factors(n) {
    var number_factors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0) {
            number_factors.push(i);
            if (n / i !== i)
                number_factors.push(n / i);
        }
    number_factors.sort(function (x, y) {
        return x - y;
    });  
    return number_factors;
}
document.write('положительные числа для 20:   ');
document.write(factors(20));
document.write('<br>');
document.write('положительные числа для 21:   ');
document.write(factors(21));
document.write('<br>');
document.write('положительные числа для 22:   ');
document.write(factors(22));
