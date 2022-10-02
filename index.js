
//              doing this js file line by line coading system 


document.getElementById('expense-calculate').addEventListener('click', function () {
    const foodCostElement = document.getElementById('food-cost');
    const rentCostElement = document.getElementById('rent-cost');
    const clothsCostElement = document.getElementById('cloths-cost');
    const totalExpenseElement = document.getElementById('total-expense');
    const totalIncomeElement = document.getElementById('income-field');
    const balanceElement = document.getElementById('balance');

    const foodCostString = foodCostElement.value;
    const rentCostString = rentCostElement.value;
    const clothsCostString = clothsCostElement.value;
    const incomeString = totalIncomeElement.value;

    const foodCost = parseInt(foodCostString);
    const rentCost = parseInt(rentCostString);
    const clothsCost = parseInt(clothsCostString);
    const income = parseInt(incomeString);
    const totalExpense = foodCost + rentCost + clothsCost;

    totalExpenseElement.innerText = totalExpense;

    // calculate balance 

    const newBalance = income - totalExpense;

    balanceElement.innerText = newBalance;
})

document.getElementById('save').addEventListener('click', function () {
    const totalIncomeElement = document.getElementById('income-field');
    const incomeString = totalIncomeElement.value;
    const income = parseInt(incomeString);

    const saveValueElement = document.getElementById('save-value');
    const saveString = saveValueElement.value;
    const save = parseFloat(saveString);

    const saveAmount = (income * save) / 100;



    const savingAmountElement = document.getElementById('saving-amount');
    savingAmountElement.value = saveAmount;

    const balanceElement = document.getElementById('balance');
    const balanceString = balanceElement.innerText;
    const newBalance = parseInt(balanceString);

    const remainingBalance = newBalance - saveAmount;

    const remainBalanceElement = document.getElementById('remain-balance');

    remainBalanceElement.value = remainingBalance;








    // console.log(income);
    // console.log(save);

})