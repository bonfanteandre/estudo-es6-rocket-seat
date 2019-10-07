class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();
    }
}

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

var minhaLista = new TodoList();

console.log(Matematica.soma(2, 2));

document.getElementById('novotodo').onclick = function () {
    minhaLista.add('Nova tarefa');
}
