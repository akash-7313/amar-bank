// deposite

document.getElementById('deposite-btn').addEventListener('click', function() {

    // get new deposite amount
    var newDeposite = document.getElementById('deposite-input');
    var newDepositeAmountText = newDeposite.value;
    // console.log(newDepositeAmountText);
    var newDepositeAmount = parseFloat(newDepositeAmountText);
    // console.log(newDepositeAmount);
    newDeposite.value = '';

    // get previous amoubt on deposite
    var previousDeposite = document.getElementById('deposite-total');
    var previousDepositeAmountText = previousDeposite.innerText;
    var previousDepositeAmount = parseFloat(previousDepositeAmountText);
    
    // total deposite
    var newTotalDeposite = newDepositeAmount + previousDepositeAmount;
    previousDeposite.innerText = newTotalDeposite;


    /* update account balance */
    // get previous balance
    var previousBalance = document.getElementById('balance-total');
    var previousBalanceAmountText = previousBalance.innerText;
    var previousBalanceAmount = parseFloat(previousBalanceAmountText);

    // new balance
    var newBalance = newDepositeAmount + previousBalanceAmount;
    previousBalance.innerText = newBalance;

}) 


// Withdraw

document.getElementById('withdraw-btn').addEventListener('click', function() {

    // get new Withdraw amount
    var newWithdraw = document.getElementById('withdraw-input');
    var newWithdrawAmountText = newWithdraw.value;
    // console.log(newWithdrawAmountText);
    var newWithdrawAmount = parseFloat(newWithdrawAmountText);
    // console.log(newWithdrawAmount);
    newWithdraw.value = '';

    // get previous amoubt on Withdraw
    var previousWithdraw = document.getElementById('withdraw-total');
    var previousWithdrawAmountText = previousWithdraw.innerText;
    var previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    
    // total Withdraw
    var newTotalWithdraw = newWithdrawAmount + previousWithdrawAmount;
    previousWithdraw.innerText = newTotalWithdraw;

    /* update account balance */

    // get previous balance
    var previousBalance = document.getElementById('balance-total');
    var previousBalanceAmountText = previousBalance.innerText;
    var previousBalanceAmount = parseFloat(previousBalanceAmountText);

    // new balance
    var newBalance = previousBalanceAmount - newWithdrawAmount;
    previousBalance.innerText = newBalance;

})








































