// functional bank
// get input
function getInput (inputId) {
    // new deposite
    var newInput = document.getElementById(inputId);
    var newAmountText = newInput.value;
    var newAmount = parseFloat(newAmountText);
    // console.log(newDepositeAmount);
    newInput.value = '';
    return newAmount;
}
// add new deposite to previous deposite
function depositeWithdraw (getId,newAmount) {
    // add new deposite to previous deposite
    var previous = document.getElementById(getId);
    var previousAmountText = previous.innerText;
    var previousAmount = parseFloat(previousAmountText);
    // total deposite
    var total = newAmount + previousAmount;
    previous.innerText = total;
}
// validation
function validation () {
    // get previous balance
    var previousTotal = document.getElementById('balance-total');
    var previousTotalAmountText = previousTotal.innerText;
    var previousAmount = parseFloat(previousTotalAmountText);
    return previousAmount;
}
// add new deposite to previous balance
function balance (newAmount,addition) {
    // get previous balance
    var previousTotal = document.getElementById('balance-total');
    var previousTotalAmount = validation();
    // total balance
    if (addition==true) {
        var totalBalance = previousTotalAmount + newAmount;
        previousTotal.innerText = totalBalance;
    }
    else {
        var totalBalance = previousTotalAmount - newAmount;
        previousTotal.innerText = totalBalance;
    }
}
// deposite
document.getElementById('deposite-btn').addEventListener('click', function() {
    var newDepositeAmount = getInput('deposite-input');
    // var balance = validation();
    if (newDepositeAmount > 0) {
        depositeWithdraw('deposite-total',newDepositeAmount);
        balance(newDepositeAmount,true);
    }
    else {
        alert('wrong input');
    }
})
// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function() {
    var newwithdrawAmount = getInput('withdraw-input');
    var previousBalance = validation();
    if (newwithdrawAmount > 0 && newwithdrawAmount <= previousBalance) {
        depositeWithdraw('withdraw-total',newwithdrawAmount);
        balance(newwithdrawAmount,false);
    }
    else {
        alert('wrong input');
    }
})






























































































