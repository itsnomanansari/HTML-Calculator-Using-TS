var num = document.getElementById("num1");
var num2 = document.getElementById("num2");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multi = document.getElementById("multi");
var divide = document.getElementById("divide");
var printValue = document.getElementById("output");
function result1() {
    var num3 = parseFloat(num.value);
    var num4 = parseFloat(num2.value);
    var num5 = num3 + num4;
    printValue.textContent = num5.toString();
}
function result2() {
    var num3 = parseFloat(num.value);
    var num4 = parseFloat(num2.value);
    var num5 = num3 - num4;
    printValue.textContent = num5.toString();
}
function result3() {
    var num3 = parseFloat(num.value);
    var num4 = parseFloat(num2.value);
    var num5 = num3 / num4;
    printValue.textContent = num5.toString();
}
function result4() {
    var num3 = parseFloat(num.value);
    var num4 = parseFloat(num2.value);
    var num5 = num3 * num4;
    printValue.textContent = num5.toString();
}
plus.addEventListener("click", result1);
minus.addEventListener("click", result2);
divide.addEventListener("click", result3);
multi.addEventListener("click", result4);
