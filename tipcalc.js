

var bill = Number(prompt("what is your bill amount?"));

function tip_amount(bill){
 console.log(bill)
 return bill * 0.20;
}
 function calc(bill) {
   return tip_amount(bill) + bill;
}

console.log("your bill is: " + calc(bill));
