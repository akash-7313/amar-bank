// input
function id (getId) {
    // get new deposite amount
    var newDeposite = document.getElementById(getId);
    var newDepositeAmountText = newDeposite.value;
    var newDepositeAmount = parseFloat(newDepositeAmountText);
    newDeposite.value = '';
    return newDepositeAmount;
}
// deposite & withdraw
function inputAmount (getId,newAdd) {
    // get previous amoubt on deposite
    var previousDeposite = document.getElementById(getId);
    var previousDepositeAmountText = previousDeposite.innerText;
    var previousDepositeAmount = parseFloat(previousDepositeAmountText);
    // total deposite
    var newTotalDeposite = newAdd + previousDepositeAmount;
    previousDeposite.innerText = newTotalDeposite;
}

// previous balance
function balance(){
    var previousBalance = document.getElementById('balance-total');
    var previousBalanceAmountText = previousBalance.innerText;
    var previousBalanceAmount = parseFloat(previousBalanceAmountText);
    return previousBalanceAmount;
}
// balance
function previous (newAdd,adding) {
    // get previous balance
    var previousBalance = document.getElementById('balance-total');
    var previousBalanceAmount = balance();
    // new balance
    if(adding==true){
        var newBalance = previousBalanceAmount + newAdd;
        previousBalance.innerText = newBalance;
    }
    else{
        var newBalance = previousBalanceAmount - newAdd;
        previousBalance.innerText = newBalance;
    }
}


// deposite

document.getElementById('deposite-btn').addEventListener('click', function() {
    var newDepositeAmount = id('deposite-input');
    if (newDepositeAmount>0){
        inputAmount ('deposite-total',newDepositeAmount);
        previous(newDepositeAmount,true);
    }
}) 


// withdraw

document.getElementById('withdraw-btn').addEventListener('click', function() {
    var newWithdrawAmount = id('withdraw-input');
    var previousBalance = balance();
    if (newWithdrawAmount >0 && newWithdrawAmount < previousBalance){
        inputAmount ('withdraw-total',newWithdrawAmount);
        previous(newWithdrawAmount,false);
    }
}) 



