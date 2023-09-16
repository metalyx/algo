var dailyTemperatures = function (temperatures) {
    const stack = [];
    const result = Array.from({ length: temperatures.length }, (v, i) => 0);

    for (let i = 0; i < temperatures.length; i++) {
        if (stack.length === 0) {
            stack.push([temperatures[i], i]);
            continue;
        }

        if (stack[stack.length - 1][0] < temperatures[i]) {
            while (
                stack.length > 0 &&
                stack[stack.length - 1][0] < temperatures[i]
            ) {
                const prev = stack.pop();
                result[prev[1]] = i - prev[1];
            }

            stack.push([temperatures[i], i]);
        } else {
            stack.push([temperatures[i], i]);
        }
    }
    return result;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
