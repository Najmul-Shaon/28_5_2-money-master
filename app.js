
//              doing this file by using function 


// to get a element value (from input field) by using their ID, use this function

function getValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.value;
    return elementString;
}

// to get a element inner Text (from text type element) by using their ID, use this function 

function getInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    return elementString;
}




//  to get a Integer number, use this function 

function toInt(fromString) {
    const toIntNumber = parseInt(fromString);
    return toIntNumber;
}

// to set a value by inner text 

function setByInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

// to set a value by value 

function setByValue(elementsId, values) {
    const element = document.getElementById(elementsId);
    element.value = values;
}

// calculate total expense 

document.getElementById('expense-calculate').addEventListener('click', function () {

    // foodCost 
    const foodCostString = getValueById('food-cost');
    const foodCost = toInt(foodCostString);
    // clothsCost 
    const clothsCostString = getValueById('cloths-cost');
    const clothsCost = toInt(clothsCostString);
    // rentCost 
    const rentCostString = getValueById('rent-cost');
    const rentCost = toInt(rentCostString);
    // total Expense/cost calculate
    const totalExpense = foodCost + rentCost + clothsCost;
    // set total cost to the total expense field 
    setByInnerText('total-expense', totalExpense);



    // calculate current balance (income - expense = balance)

    // get income 
    const totalIncomeString = getValueById('income-field');
    const income = toInt(totalIncomeString);
    // calculate new balance (income - totalExpense = newBalance)
    const newBalance = income - totalExpense;
    // set new balance 
    setByInnerText('balance', newBalance);
})


//              calculate saving and remaining balance

document.getElementById('save').addEventListener('click', function () {
    // get income value
    const totalIncomeString = getValueById('income-field');
    const income = toInt(totalIncomeString);
    // get save(%) value 
    const saveValueString = getValueById('save-value');
    const saveValue = toInt(saveValueString);
    // calculate total save amount value 
    const saveAmount = (income * saveValue) / 100;
    // savings amount 
    setByValue('saving-amount', saveAmount);
    // get balance amount 
    const balanceString = getInnerTextById('balance');
    const balance = toInt(balanceString);
    // calculate remaining Balance 
    const remainingBalance = balance - saveAmount;
    // set remain balance 
    setByValue('remain-balance', remainingBalance);
})