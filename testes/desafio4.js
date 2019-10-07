const empresa = { 
    nome: 'Rocketseat', 
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};

//4.1
const { nome, endereco: { cidade }, endereco: { estado } } = empresa;
console.log(nome, cidade, estado);

//4.2
function mostraInfo({ nome, idade }) { 
    return `${nome} tem ${idade} anos.`;
}

const info = mostraInfo({ nome: 'Diego', idade: 23 });
console.log(info);
