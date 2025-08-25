//1 Verificar se um número é par ou ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return `O número ${numero} é par.`;
    } else {
        return `O número ${numero} é ímpar.`;
    }
}
//2 Calcular o fatorial de um número
function calcularFatorial(numero) {
    if (numero < 0) return 'Número deve ser positivo.';
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}
//3 Encontrar o maior número de um array
function encontrarMaiorNumero(array) {
    if (array.length === 0) return 'Array vazio.';
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}
