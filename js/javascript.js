function amount_coins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amount_coins(left, coins));
        }
        else {
            coins.shift();
            return amount_coins(amount, coins);
        }
    }
}
document.write(amount_coins(55, [25, 10, 5]));