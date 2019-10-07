class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const usuario = new Usuario('andre@email.com.br', '123456');
const admin = new Admin('andre@email.com.br', '123456');

console.log(usuario.isAdmin());
console.log(admin.isAdmin());
