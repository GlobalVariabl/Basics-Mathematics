

const levels = document.getElementsByClassName('level')
const operators = document.getElementsByClassName('operators')

let operator = '+'
Array.from(operators).forEach(elm => {
    elm.addEventListener("click", (event)=>{
        operator = event.target.value;
        sessionStorage.setItem("operator", operator)
        console.log(operator)
    });
    
});
let level = 10
Array.from(levels).forEach(elm => {
    elm.addEventListener("click", (event)=>{
        event.preventDefault(); 
        level = event.target.value;
        console.log(sessionStorage.setItem("level", level))
        console.log(level)
    });
    
});




sessionStorage.setItem("operator", operator);
console.log(sessionStorage.setItem("level", level))