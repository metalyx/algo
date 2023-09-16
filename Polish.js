var evalRPN = function (tokens) {
    const stack = [];
    let prevEval;

    for (let i = 0; i < tokens.length; i++) {
        if (!isOperator(tokens[i])) {
            stack.push(tokens[i]);
            continue;
        }

        if (prevEval === undefined) {
            const right = parseInt(stack.pop());
            const left = parseInt(stack.pop());

            prevEval = parseInt(eval(`${left} ${tokens[i]} ${right}`));
        } else {
            const left = parseInt(stack.pop());

            prevEval = parseInt(eval(`${left} ${tokens[i]} ${prevEval}`));
        }
    }

    return prevEval;
};

function isOperator(token) {
    if (token === '/' || token === '*' || token === '+' || token === '-') {
        return true;
    }

    return false;
}

console.log(evalRPN(['4', '13', '5', '/', '+']));
