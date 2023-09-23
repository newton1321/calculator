let x = 0;
let no1 = "";
let operation = null;
let no2 = "";
let changeno = false;
let answer = 0;


document.getElementById("one").onclick = function(){

    if (x < 11){
        document.getElementById("show").textContent += 1;
        x += 1;
        if (!changeno){
            no1 += "1";
        }
        else{
            no2 += "1";
        }
        }

    }


document.getElementById("two").onclick = function(){
          
    if (x < 151){
            document.getElementById("show").textContent += 2;
            x += 1;
            if (!changeno){
                no1 += "2";
            }
            else{
                no2 += "2";
            }
       }
    
}

document.getElementById("three").onclick = function(){
    
    if (x < 11){
        document.getElementById("show").textContent += 3;
        x += 1;
        if (!changeno){
            no1 += "3";
        }
        else{
            no2 += "3";
        }
   }
}


document.getElementById("four").onclick = function(){
        
    if (x < 11){
        document.getElementById("show").textContent += 4;
        x += 1;
        if (!changeno){
            no1 += "4";
        }
        else{
            no2 += "4";
        }
   }
}


document.getElementById("five").onclick = function(){
    
    if (x < 11){
        document.getElementById("show").textContent += 5;
        x += 1;
        if (!changeno){
            no1 += "5";
        }
        else{
            no2 += "5";
        }
   }}


document.getElementById("six").onclick = function(){
    
    if (x < 11){
        document.getElementById("show").textContent += 6;
        x += 1;
        if (!changeno){
            no1 += "6";
        }
        else{
            no2 += "6";
        }
   }}


document.getElementById("seven").onclick = function(){
    
    if (x < 11){
        document.getElementById("show").textContent += 7;
        x += 1;
        if (!changeno){
            no1 += "7";
        }
        else{
            no2 += "7";
        }
   }}


document.getElementById("eight").onclick = function(){
    
    if (x < 11){
        document.getElementById("show").textContent += 8;
        x += 1;
        if (!changeno){
            no1 += "8";
        }
        else{
            no2 += "8";
        }
   }}


document.getElementById("nine").onclick = function(){
    
    if (x < 11){
        document.getElementById("show").textContent += 9;
        x += 1;
        if (!changeno){
            no1 += "9";
        }
        else{
            no2 += "9";
        }
   }}


document.getElementById("zero").onclick = function(){
    
    if (x < 11){
        document.getElementById("show").textContent += 0;
        x += 1;
        if (!changeno){
            no1 += "0";
        }
        else{
            no2 += "0";
        }
   }}


document.getElementById("addition").onclick = function(){
    if (!changeno){    
        if (x < 11){
            document.getElementById("show").textContent += "+";
            x += 1;
            operation = "+";
            changeno = true;
        }}
}

document.getElementById("subtraction").onclick = function(){
    if (!changeno){
        if (x < 11){
            document.getElementById("show").textContent += "-";
            x += 1;
            operation = "-";
            changeno = true;
        }}
    
}

document.getElementById("multiplication").onclick = function(){
    if (!changeno){
        if (x < 11){
            document.getElementById("show").textContent += "×";
            x += 1;
            operation = "*";
            changeno = true;
        }}
    
}

document.getElementById("division").onclick = function(){
    if (!changeno){
        if (x < 11){
            document.getElementById("show").textContent += "÷";
            x += 1;
            operation = "/";
            changeno = true;
        }}
}

document.getElementById("equal").onclick = function(){
    
    if (operation == "+"){
        answer = parseInt(no1) + parseInt(no2) 
    }

    if (operation == "-"){
        answer = parseInt(no1) - parseInt(no2) 
    }

    if (operation == "*"){
        answer = parseInt(no1) * parseInt(no2) 
    }

    if (operation == "/"){
        answer = parseInt(no1) / parseInt(no2) 
    }

    document.getElementById("show").textContent = answer;
    no1 = "";
    no2 = "";
    x = 11;

}

document.getElementById("delete").onclick = function(){

    document.getElementById("show").textContent = "";
    x = 0;
    no1 = "";
    no2 = "";
    operation = null;

}
