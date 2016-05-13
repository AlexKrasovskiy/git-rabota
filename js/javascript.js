function exp(b,a)
{
    var number = 1;
    for (var i =1; i <= a; i++)
    {
        number = b * number;
    }
    return number;
}
document.write(exp(2, 3));