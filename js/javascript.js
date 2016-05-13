function matrix(n) {

    var i;
    var j;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j) {

                document.write(' 2 ');

            }

            else {
                document.write(' 0 ');
            }
        }
        document.write(' <br> ');
    }
}
matrix(7);
