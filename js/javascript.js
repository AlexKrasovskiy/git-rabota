function numbers(val)
{
    return function(evalue)
    {
        return (evalue >= val);
    };
}
var result = [66, 55, 44, 33, 22, 10]. filter(numbers(44));
document.write(result);