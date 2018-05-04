function do_math( num1, num2, string){
    var result;
    var operator;
    switch(string){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
        case 'X':
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'wrong operator';
    }
    return result;
}