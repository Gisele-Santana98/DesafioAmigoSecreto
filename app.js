// Array que vai armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim(); // Remove espaços antes e depois do nome

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        nomeInput.value = ""; // Limpa o campo de entrada
        atualizarListaAmigos();
    } else {
        alert('Por favor, insira um nome válido e único.');
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    amigos.forEach(nome => {
        const listItem = document.createElement('li');
        listItem.textContent = nome;
        listaAmigos.appendChild(listItem);
    });
}

// Função para sortear um único amigo da lista
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    exibirResultado(amigoSorteado);
}

// Função para exibir o nome sorteado
function exibirResultado(amigoSorteado) {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = ""; // Limpa a lista de resultados

    const listItem = document.createElement('li');
    listItem.textContent = `O amigo secreto sorteado foi: ${amigoSorteado}`;
    resultadoList.appendChild(listItem);
}
