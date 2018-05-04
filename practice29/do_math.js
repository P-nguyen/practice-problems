function do_math(){
    var operator;
    var numbers = [];

    function loopMath(array, operator){
        var result = array[0];
        for (var i = 1; i < array.length; i++){
            switch(operator){
                case '+':
                    result = result + array[i]
                    break;
                case '-':
                    result = result - array[i];
                    break;
                case 'x':
                case 'X':
                case '*':
                    result = result * array[i];
                    break;
                case "/":
                    result = result / array[i];
                    break;
                default:
                    result = 'No operator';
            }
        }
        return result;
    }

    for (var i = 0; i<arguments.length; i++){
        if (typeof arguments[i] == 'string'){
            operator = arguments[i];
        }else{
            numbers.push(arguments[i]);
        }
    }

    return loopMath(numbers, operator);
}