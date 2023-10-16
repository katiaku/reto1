function suma(num1, num2, num3) {
    let suma = num1 + num2 + num3;
    return suma
}

function resta(num1, num2) {
    let resta = num1 - num2;
    return resta
}

function producto(num1, num2) {
    let producto = num1 * num2;
    return producto
}

function division(num1, num2) {
    let division = num1 / num2;
    return division
}

function cuadrado(num) {
    let cuadrado = num * num;
    return cuadrado
}

module.exports = {suma, resta, producto, division, cuadrado}
