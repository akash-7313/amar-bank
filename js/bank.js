// functional bank

// get new deposite & new withdraw amount
function inputId (getId) {
    var newInput = document.getElementById(getId);
    var newAmountText = newInput.value;
    var newAmount = parseFloat(newAmountText);
    newInput.value = '';
    return newAmount;
}

// get previous deposite & previous withdraw amount
function previous (getDepoWitId, newAddedAmount) {
    // get previous amoubt on deposite & withdraw
    var previousMoney = document.getElementById(getDepoWitId);
    var previousAmountText = previousMoney.innerText;
    var previousAmount = parseFloat(previousAmountText);
    // total deposite & withdraw
    var newTotalAmount = newAddedAmount + previousAmount;
    previousMoney.innerText = newTotalAmount;
}

// get previous balance
function balance() {
    var previousBalance = document.getElementById('balance-total');
    var previousBalanceAmountText = previousBalance.innerText;
    var previousBalanceAmount = parseFloat(previousBalanceAmountText);
    return previousBalanceAmount;
}

// update balance after deposite & withdraw
function updateBalance (newAddedAmount, add){
    var previousBalance = document.getElementById('balance-total');
    var previousBalanceAmount = balance();
    // new balance
    if(add == true) {
        var newBalance = previousBalanceAmount + newAddedAmount;
        previousBalance.innerText = newBalance;
    }
    else {
        var newBalance = previousBalanceAmount - newAddedAmount;
        previousBalance.innerText = newBalance;
    }
}

// deposite
document.getElementById('deposite-btn').addEventListener('click', function() {
    var newDepositeAmount = inputId('deposite-input');
    var previousBalance = balance();
    if (newDepositeAmount > 0 && newDepositeAmount < previousBalance) {
        previous('deposite-total', newDepositeAmount);
        updateBalance (newDepositeAmount,true);
    }
}) 

// Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function() {
    var newWithdrawAmount = inputId('withdraw-input');
    var previousBalance = balance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < previousBalance) {
        previous('withdraw-total', newWithdrawAmount);
        updateBalance (newWithdrawAmount,false);
    }
})