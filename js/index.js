const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadrEq(a, b, c);
alert(result);

function solveQuadrEq(a, b, c) {
    if (a === 0) {
        return "Рівняння не є квадратним!";
    }

    const d = calcDiscr(a, b, c);
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);

        return "x1 = " + x1 + "x2 " + x2 + "" + d;
    }
    else if (d === 0) {
        const x = b / (2 * a);
        return "x1 = " + x + "x2 " + x + "" + d;
    }
    else if (d < 0) {
        return d;
    }
}

function calcDiscr(a, b, c) {
    return b * b - 4 * a * c;
}
