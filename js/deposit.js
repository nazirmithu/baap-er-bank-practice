document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositField = document.getElementById('deposit-field');
    const depositValue = depositField.value;
    const newDepositAmount = parseFloat(depositValue);
    
    depositField.value = '';
    
    const depositTotalAmount = document.getElementById('deposit-total');
    const depositTotalValue = depositTotalAmount.innerText;
    const depositValueTotal = parseFloat(depositTotalValue);
    
    const depositAmountTotal = newDepositAmount + depositValueTotal;
    depositTotalAmount.innerText = depositAmountTotal;
    
    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotalAmount.innerText;
    const balanceValueTotal = parseFloat(balanceTotalValue);

    const totalBalance = balanceValueTotal + newDepositAmount;
    balanceTotalAmount.innerText = totalBalance;
})