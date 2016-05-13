function reversenumber(x)
{
    x = x + "";
    return x.split("").reverse().join("");
}
document.write(reversenumber(1488));