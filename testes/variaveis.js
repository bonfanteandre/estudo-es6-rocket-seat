//Nao pode ter seu valor retribuido
const a = 1;

function teste(x) {

    //Variavel com escopo local
    let y = 2;

    if (x > 5) {
        console.log(x, y);
    }
}

teste(10);

//Varaivel com escopo global
var z = 10;

function outroTeste(numero) {
    console.log(numero + z);
}

outroTeste(10);

