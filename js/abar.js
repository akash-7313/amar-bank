// function
function getInputId (inputId,depositeId,totalId,adding) {
    var depositeInput = document.getElementById(inputId);
    var deposite = parseFloat(depositeInput.value);
    depositeInput.value = '';
    var previous = document.getElementById(depositeId);
    var previousAmount = parseFloat(previous.innerText);
    if(deposite > 0) {
        var newDeposite = deposite + previousAmount;
        previous.innerText = newDeposite;
    }
    else {
        alert ('wrong input! enter a positive number');
    }
    var previousBalance = document.getElementById(totalId);
    var previousBalanceAmount = parseFloat(previousBalance.innerText);
    if(adding==true) {
        var newBalance = previousBalanceAmount + deposite;
        previousBalance.innerText = newBalance;
    }
    else if (deposite <= previousBalanceAmount) {
        var newBalance = previousBalanceAmount - deposite;
        previousBalance.innerText = newBalance;
    }
    else {
        alert('low balance');
        previous.innerText = previous.innerText - deposite;
    }
}
// deposite
document.getElementById('deposite-btn').addEventListener('click',function(){
    getInputId('deposite-input','deposite-total','balance-total',true);
})
// withdraw
document.getElementById('withdraw-btn').addEventListener('click',function(){
    getInputId('withdraw-input','withdraw-total','balance-total',false);
})




























