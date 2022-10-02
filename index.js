document.getElementById('expense-calculate').addEventListener('click', function () {
    const foodCostElement = document.getElementById('food-cost');
    const rentCostElement = document.getElementById('rent-cost');
    const clothsCostElement = document.getElementById('cloths-cost');
    const totalExpenseElement = document.getElementById('total-expense');

    const foodCostString = foodCostElement.value;
    const rentCostString = rentCostElement.value;
    const clothsCostString = clothsCostElement.value;

    const foodCost = parseInt(foodCostString);
    const rentCost = parseInt(rentCostString);
    const clothsCost = parseInt(clothsCostString);

    const totalExpense = foodCost + rentCost + clothsCost;

    totalExpenseElement.innerText = totalExpense;

    // calculate balance 





    console.log(totalExpense);
})