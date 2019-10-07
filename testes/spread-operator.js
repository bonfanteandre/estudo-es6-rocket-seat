const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

const usuario = {
    nome: 'André',
    idade: 22
};

const usuario2 = { ...usuario, nome: 'André Luis' };

console.log(usuario, usuario2);
