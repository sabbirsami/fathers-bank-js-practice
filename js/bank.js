//BANK SECTION
const totalDeposit = document.getElementById("total-deposit");
const totalWithdraw = document.getElementById("total-withdraw");
const totalMoney = document.getElementById("total-money");

const depositAmount = document.getElementById("deposit-amount");
const depositButton = document.getElementById("deposit-btn");
const withdrawAmount = document.getElementById("withdraw-amount");
const withdrawButton = document.getElementById("withdraw-btn");

function totalMoneyDeposit(money) {
    const total = parseFloat(totalMoney.innerText);
    const newTotalMoney = total + money;
    totalMoney.innerText = newTotalMoney;
    console.log(newTotalMoney);
}
function totalMoneyWithdraw(money) {
    const total = parseFloat(totalMoney.innerText);
    if (total < money) {
        console.log("atto taka nei");
    } else {
        const newTotalMoney = total - money;
        totalMoney.innerText = newTotalMoney;
        console.log(newTotalMoney);
    }
}
function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

// DEPOSIT
depositButton.addEventListener("click", function () {
    const depositAmountValue = parseFloat(depositAmount.value);
    if (depositAmountValue < 0) {
        console.log("please put positive amount");
    } else {
        const previousDeposit = parseFloat(totalDeposit.innerText);
        const newTotalDeposit = previousDeposit + depositAmountValue;
        totalDeposit.innerText = newTotalDeposit;
        totalMoneyDeposit(depositAmountValue);
    }
});
withdrawButton.addEventListener("click", function () {
    const withdrawAmountValue = parseFloat(withdrawAmount.value);
    if (withdrawAmountValue < 0) {
        console.log("please put positive amount");
    } else {
        const previousWithdraw = parseFloat(totalWithdraw.innerText);
        const newTotalWithdraw = previousWithdraw + withdrawAmountValue;
        totalWithdraw.innerText = newTotalWithdraw;
        totalMoneyWithdraw(withdrawAmountValue);
    }
});
