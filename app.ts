const num = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const plus = document.getElementById("plus") as HTMLButtonElement;
const minus = document.getElementById("minus") as HTMLButtonElement;
const multi = document.getElementById("multi") as HTMLButtonElement;
const divide = document.getElementById("divide") as HTMLButtonElement;
const printValue = document.getElementById("output") as HTMLOutputElement;

function result1():void{
const num3 = parseFloat(num.value);
const num4 = parseFloat(num2.value);
const num5 = num3 + num4;
printValue.textContent = num5.toString();

}

function result2():void{
    const num3 = parseFloat(num.value);
    const num4 = parseFloat(num2.value);
    const num5 = num3 - num4;
    printValue.textContent = num5.toString();
    }

function result3():void{
    const num3 = parseFloat(num.value);
    const num4 = parseFloat(num2.value);
    const num5 = num3/num4;
    printValue.textContent = num5.toString();
}    

function result4():void{
    const num3 = parseFloat(num.value);
    const num4 = parseFloat(num2.value);
    const num5 = num3*num4;
    printValue.textContent = num5.toString();
    
}    


plus.addEventListener("click",result1);
minus.addEventListener("click",result2);
divide.addEventListener("click",result3);
multi.addEventListener("click",result4);