var loginBtn = document.getElementById("verify-login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"
})
var depositBtn = document.getElementById('depositButton');
depositBtn.addEventListener('click', function () {
    const depositNumber = getInputInNumber("depositAmount");

    updateSpanText("currentDeposit",depositNumber);

    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})
// withdraw
var withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
   
    var withdrawAmountNumber  = getInputInNumber("withdrawAmount");
    updateSpanText("currentWithdraw",withdrawAmountNumber);

   updateSpanText("currentBalance",-1*withdrawAmountNumber);
   document.getElementById("withdrawAmount").value ="";

})
function getInputInNumber(id) {
    var amount = document.getElementById(id).value;
    var number  = parseFloat(amount);  
    return number;          
}

function updateSpanText(id, depositNumber){
    var current = document.getElementById(id).innerText;
    var currentNumber = parseFloat(current);
    var total= currentNumber + depositNumber;
    document.getElementById(id).innerHTML= total;

}