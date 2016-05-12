var side_1 = 5;
var side_2 = 6;
var side_3 = 7;
var perimeter = (side_1 + side_2 + side_3) / 2;
var area = Math.sqrt(perimeter * ((perimeter - side_1) * (perimeter - side_2) * (perimeter - side_3)));
document.write(area);