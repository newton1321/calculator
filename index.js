let x = 0;
let no1 = null;

document.getElementById("one").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += 1;
        x += 1;
    }
}

document.getElementById("two").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += 2;
        x += 1;
    }
}

document.getElementById("three").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += 3;
        x += 1;
    }
}

document.getElementById("four").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += 4;
        x += 1;
    }
}

document.getElementById("five").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += 5;
        x += 1;
    }
}

document.getElementById("six").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += 6;
        x += 1;
    }
}

document.getElementById("seven").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += 7;
        x += 1;
    }
}

document.getElementById("eight").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += 8;
        x += 1;
    }
}

document.getElementById("nine").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += 9;
        x += 1;
    }
}

document.getElementById("zero").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += 0;
        x += 1;
    }
}

document.getElementById("addition").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += "+";
        x += 1;
    }
}

document.getElementById("subtraction").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += "-";
        x += 1;
    }
}

document.getElementById("multiplication").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += "×";
        x += 1;
    }
}

document.getElementById("division").onclick = function(){
    if (x < 11){
        document.getElementById("show").textContent += "÷";
        x += 1;
    }
}

document.getElementById("equal").onclick = function(){

    null

}

document.getElementById("delete").onclick = function(){

    document.getElementById("show").textContent = "";
    x = 0;

}
