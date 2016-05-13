function long_word(str)
{
    var array = str.match(/\w[a-z]{0,}/gi); 
    var result = array[0];

    for(var x = 1 ; x < array.length ; x++)
    {
        if(result.length < array[x].length)
        {
            result = array[x];
        }
    }
    return result;
}
document.write(long_word('Give me pls looooooooongword'));