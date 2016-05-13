function number_prime(n)
{

    if (n===1)
    {
        return false;
    }
    else if(n === 2)
    {
        return true;
    }else
    {
        for(var x = 2; x < n; x++)
        {
            if(n % x === 0)
            {
                return false;
            }
        }
        return true;
    }
}

document.write('Простое число - true, если нет - false. Число:   ');
document.write(number_prime(41));



