function fibSequence( loopNum ){
    let num1 = 0;
    let num2 = 1;

    let result = '0 1';

    for (let i = 2; i <= loopNum-1; i++){
        let num3 = num1 + num2;
        result += ` ${num3}`;
        num1 = num2;
        num2 = num3;
    }


    return result;
}

result = fibSequence(12);
console.log(result);