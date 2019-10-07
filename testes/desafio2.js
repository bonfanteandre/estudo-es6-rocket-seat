const usuarios = [  
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

//2.1
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

//2.2
const maioresRocketSeat = usuarios.filter(usuario => usuario.idade > 18 && usuario.empresa === 'Rocketseat');
console.log(maioresRocketSeat);

//2.3
const trabalhamNoGoogle = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(trabalhamNoGoogle);

//2.4
usuarios.forEach(usuario => usuario.idade *= 2);
const menoresDeCiquenta = usuarios.filter(usuario => usuario.idade <= 50);
console.log(menoresDeCiquenta);
