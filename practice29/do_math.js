function do_math( inputNum1, inputNum2, string){
    var result;
    var operator;
    var numbers = [];

    if (isNaN(inputNum1)){
        operator = inputNum1;
    }else{
        numbers.push(inputNum1);
    }
    if (isNaN(inputNum2)){
        operator = inputNum2;
    }else{
        numbers.push(inputNum2);
    }
    if (isNaN(string)){
        operator = string;
    }else{
        numbers.push(string);
    }


    switch(string){
        case '+':
            result = numbers[1] + numbers[2];
            break;
        case '-':
            result = numbers[1] - numbers[2];
            break;
        case 'x':
        case 'X':
        case '*':
            result = numbers[1] * numbers[2];
            break;
        case '/':
            result = numbers[1] / numbers[2];
            break;
        default:
            result = 'wrong operator';
    }
    return result;
}