// requirement needed
// calculateBill() --main id to be targetted;

// accessing elements by there id's

const billInputDiv = document.getElementById("billTotalInput")
const discountInputDiv = document.getElementById("discountInput")
const discountAmountDiv = document.getElementById("discountAmount")
const totalBillDiv = document.getElementById("totalBill")

const calculateBill = () => {
    // collecting user data 
    cost = Number(billInputDiv.value)
    discountRate = Number(discountInputDiv.value) / 100

    //now appling maths

    discountAmount = cost * discountRate

    // total bill
    finalBill = cost - discountAmount

    // DOM
    discountAmountDiv.innerText = `₹${discountAmount.toFixed(2)}`
    totalBillDiv.innerText = `₹${finalBill}`
}