



const p1 = document.getElementById('x')
const p2 = document.getElementById('o')
const p3 = document.getElementById('y')
const input = document.getElementsByTagName('input')[0]
const p4 = document.getElementById('s')


let level = 10
let operator = '+'



const levelValue = sessionStorage.getItem("level")
const operatorValue = sessionStorage.getItem("operator")


console.log(levelValue,operatorValue)
level = levelValue
operator = operatorValue

function addition(x,y){
    return x + y
}
function subtraction(x,y){
    return x - y
}
function multiplication(x,y){
    return x * y
}
function division(x,y){
    return x / y
}

let solution ;


function test(operator,level) {
    let x,y;

    if (operator == '-' || operator == '/'){
        do {
            x = Math.floor(Math.random() * level);
            y = Math.floor(Math.random() * level);
        } while (x<y);
    }
    else{
        x = Math.floor(Math.random() * level);
        y = Math.floor(Math.random() * level);
    }
    
    switch (operator) {
        case "+":
            solution = addition(x,y)
            break;
        case "-":
            solution = subtraction(x,y)
            break;
        case "*":
            solution = multiplication(x,y)
            break;
        case "/":
            solution = division(x,y)
            break;
        default:
            solution = addition(x,y)
            break;
    }
    p1.textContent = x
    p2.textContent = operator
    p3.textContent = y
    return solution
}


solution = test(operator,level)
let scor = 1
function get_answer() {
    answer = parseFloat(input.value)
    scor++
    debugger
    if(answer != solution){
        p4.textContent = solution
    }
    else{
        p4.textContent ="صحيح"
        solution = test(operator,level)
    }
    
}
input.addEventListener('change',get_answer)


/*
window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = Math.random();
});
*/

