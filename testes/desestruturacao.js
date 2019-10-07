const usuario = {
    nome: 'André',
    idade: 22,
    endereco: {
        cidade: 'Guaporé',
        estado: 'RS'
    }
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome, idade, cidade);

function mostraNome({ nome }) {
    console.log(nome);
}

mostraNome(usuario);
