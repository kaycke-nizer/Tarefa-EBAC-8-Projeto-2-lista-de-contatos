const adicionar = document.getElementById('adicionar');
const apagar_tudo = document.getElementById('apagar_tudo');
const corpoTabela = document.querySelector('tbody');
const mostrador_quantidade = document.getElementById('quantidade-contatos');

let linhas = '';
var quantidade_contatos = 1

adicionar.addEventListener('click', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;

    linhas += linha;

    corpoTabela.innerHTML = linhas;

    document.getElementById('quantidade-contatos').textContent = quantidade_contatos;

    quantidade_contatos = quantidade_contatos + 1;
}) 

apagar_tudo.addEventListener('click', apagar_contatos)


function apagar_contatos(){
    quantidade_contatos = 0;
    linhas = '';
    corpoTabela.innerHTML = '';
    mostrador_quantidade.textContent = 0;
}