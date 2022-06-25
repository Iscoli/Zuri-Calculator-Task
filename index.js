const A = parseFloat(prompt("Enter First number : "));
const operator = prompt("enter Operator (+, -, *, /)")
const B = parseFloat(prompt("Enter Second number : "));

let result = 0;
 if (isNaN(A)|| isNaN(B)){
  alert("wrong input. Refresh page!")
  document.location.reload()
 }else{
   if(operator == '+'){
    result = A + B
   }else if (operator == "-"){
     result = A - B
   }else if(operator == '*'){
    result = A * B
   }else if (operator == "/"){
     result = A / B
   }
   alert(A + operator + B + " = " + result)
   if(confirm("Calculate again?")){
    document.location.reload();
  }
}