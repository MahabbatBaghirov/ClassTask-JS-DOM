// Task 1
// let list = document.createElement("ul");
// let fruits = ["apple","banana","tomato"];
// fruits.forEach((element)=>{
//     let li = document.createElement("li");
//     list.append(li);
//     li.innerText = element;
// })
// document.body.appendChild(list);


// Task 2
// let li = document.querySelectorAll("ul");
// console.log(li)
// li.forEach((element)=> {
//     let first = element.querySelector('li:first-child');
//     let last = element.querySelector('li:last-child');
//     first.textContent = "first";
//     last.textContent = "last";
// });


// Task 3
let body = document.querySelector("body");
let commonDiv = document.createElement("div");
let num = document.createElement("span");
let decrement = document.createElement("button");
let increment = document.createElement("button");
let reset = document.createElement("button");
let sum = 0;
num.textContent = "0";
commonDiv.append(decrement,reset,increment);
body.appendChild(num);
body.appendChild(commonDiv);
increment.className = "increment";
decrement.className = "decrement";
reset.className = "reset";
commonDiv.className = 'commonDiv';
decrement.innerText = "-";
increment.innerText = "+";
reset.innerText = "Reset";


decrement.addEventListener("click",function(){
    sum -= 1;
    num.textContent = sum;
});
increment.addEventListener("click",function(){
    sum += 1;
    num.textContent = sum;
});
reset.addEventListener("click",function(){
    sum = 0;
    num.textContent = sum;
});