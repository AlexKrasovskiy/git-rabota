for (var year = 2014; year <= 2050; year++) {

    var sunday = new Date(year, 0, 1);
    if (sunday.getDay() === 0)
        document.write(
        '<br>Первое января Воскресенье:' + year
        );
}

