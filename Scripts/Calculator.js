function equivalentCheck() { //The last value added will remain in view until another button has been pressed
    if (parseInt(document.getElementById('equivalent').value)) {
        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0;
    }
}

function input(x){   

    equivalentCheck();

    let y = parseFloat(document.getElementById('result').value);

    if (document.getElementById('decimalVar').value == 0) //ADDING A DECIMAL
    {
        x += y * 10 //The input is multiplied by 10 and then adds the value of X

        document.getElementById('result').value = x; //Returns the value to the output
    }
    else { //If decimal is true
    
        let decimalCount = parseInt(document.getElementById('decimalVar').value);
    
        if(decimalCount == 1) { //When decimal point is equal to 1, X is multiplied by 1/10 
            x *= 1/10; //This places the decimal point
            y += x;
            document.getElementById('result').value = y;
        }
        else {
            document.getElementById('result').value += x; //X is now appended BEHIND the decimal
        }

        decimalCount++;

        document.getElementById('decimalVar').value = decimalCount;
    }
}

function decimalPoint(){
    if (document.getElementById('decimalVar').value == 0){ //Prevents multiple decimals
        document.getElementById('decimalVar').value = 1;
    }
    if(parseInt(document.getElementById('operation').value)){ //If this is empty, it will return FALSE
        document.getElementById('result').value = 0;
    }
}

function operandCheck(){
    if(document.getElementById('operand').value == ""){ //If there is something here, else will be triggered
        document.getElementById('operand').value = document.getElementById('result').value;
        document.getElementById('equivalent').value = 1;
    }
    else{
        operatorCheck();
    }
}

function operatorCheck(){
    let a=parseFloat (document.getElementById('operand').value);
    let b=parseFloat (document.getElementById('result').value);

    switch (parseInt(document.getElementById('operation').value)) {
        case 1:
            a += b
            break;
    
        case 2:
            a -= b
            break;

        case 3:
            a *= b
            break;

        case 4:
            a /= b
            break;
    }
    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;
}

function operators(x){

    switch (x){
        case 1:
            document.getElementById('operation').value = 1; //Operator 1 = Addition
            break;

        case 2:
            document.getElementById('operation').value = 2; //Operator 2 = Subtraction
            break;

        case 3:
            document.getElementById('operation').value = 3; //Operator 3 = Multiplication
            break;

        case 4:
            document.getElementById('operation').value = 4; //Operator 4 = Division
            break;
        default:
    }
    operandCheck();
}

function equals(){
    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value ="";
    document.getElementById('equivalent').value = 1;
}

function allClear(){
    document.getElementById('result').value = 0; //Sets the result to 0. Effectively resetting the calcualtor
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = 0; //Sets ALL of the calculators functions to 0
    document.getElementById('equivalent').value = 0;
}

function plusminus(){
    let x = parseFloat(document.getElementById('result').value);
    x *= -1; //Input is simply multiplied by negative 1
    document.getElementById('result').value = x;
}

function percent(){
    let x = parseFloat(document.getElementById('result').value);
    x *= 0.01
    document.getElementById('result').value = x;
}

function square(){
    let x = parseFloat(document.getElementById('result').value);
    x *= x //Input is being multplied by itself
    document.getElementById('result').value = x;
}