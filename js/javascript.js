function vowel (str)
{
    var vowel_words = 'aeiouAEIOU';
    var vowels = 0;

    for(var x = 0; x <str.length ; x++)
    {
        if (vowel_words.indexOf(str[x]) !== -1)
        {
            vowels += 1;
        }

    }
    return vowels;
}
document.write('Вывод гласных букв:   ')
document.write(vowel("Test vowel"));