document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawTotalValue = withdrawField.value;
    const newWithdrawTotal = parseFloat(withdrawTotalValue);

    withdrawField.value = '';
    
    if(isNaN(newWithdrawTotal)){
        alert('please provide valid number');
        return;
    }

    const withdrawAmount = document.getElementById('withdraw-total');
    const withdrawTotalAmount = withdrawAmount.innerText;
    const totalWithdrawAmount = parseFloat(withdrawTotalAmount);
 
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalValue);

    

    if(newWithdrawTotal > previousBalanceTotal){
        alert('Your account does not have sufficient balance');
        return;
    }
    
    const totalWithdraw = totalWithdrawAmount + newWithdrawTotal;
    withdrawAmount.innerText = totalWithdraw;

    const newTotalBalance = previousBalanceTotal - newWithdrawTotal;
    balanceTotalElement.innerText = newTotalBalance;

})