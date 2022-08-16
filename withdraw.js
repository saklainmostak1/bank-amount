// 

// step 1: add event handler with the withdraw btn
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step 2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdrow-field');
    const newWithdrawAmountString = withdrawField.value;

    // step 2.5: convert number
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    //  step 4.5: set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6: calculate new balance totale
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText =newBalanceTotal;
    
    // step 7: clear the input field
    withdrawField.value = '';
})
