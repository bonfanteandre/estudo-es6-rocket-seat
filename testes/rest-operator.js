const usuario = {
    nome: 'André',
    idade: 22,
    linguagem: 'PHP'
};

const { nome, ...outrosDados } = usuario;

console.log(nome, outrosDados);

const arr = [1, 2, 3, 4, 5, 6];
const [ a, b, ...c ] = arr;

console.log(a, b, c);

function foo(a, b, ...params) {
    console.log(a);
    console.log(b);
    console.log(params);
}

foo(1, 2, 3, 4, 5, 6);
