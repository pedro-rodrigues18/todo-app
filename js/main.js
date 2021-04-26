const inserirTarefa = document.getElementById('enter-tarefa');
let listaFinal = document.getElementById('lista');
let numeroDeTarefas = document.getElementById('numero-de-tarefas');

let contador = 0;
let conteudo;
let listaDeTarefas = [];

inserirTarefa.addEventListener('keyup', function (e) {

  let key = e.which || e.keyCode;

  if (key == 13) {
    conteudo = this.value;

    if (conteudo != '') {

      li = `
        <li class="tarefa" id="tarefa-${contador}">
          <a href="#" class="link-tarefa" id="check-${contador}" onclick="marcarOuDesmarcarTarefa(id);">
            <span class="check-tarefa"></span>
            <div class="tarefa-texto">${conteudo}</div>
          </a>
          <a href="#" class="remover-tarefa" id="${contador}" onclick="removerTarefa(id);">
            <img src="./images/icon-cross.svg" alt="Remover Tarefa" class="remover-tarefa">
          </a>
        </li>
      `;

      listaDeTarefas.push(li);

      document.getElementById('lista').innerHTML += li;

      contador++;
      
    } else {
      alert("Erro: não é possível criar tarefa vazia.");
    }

    document.getElementById('enter-tarefa').value = null;
  }
});


// function removerTarefa(id) {

// }

function atualizarLista(listaDeTarefas, contador) {

  document.getElementById('lista').innerHTML += listaDeTarefas[contador - 1];
  document.getElementById('enter-tarefa').value = null;
}

function marcarOuDesmarcarTarefa(id) {
  event.preventDefault();

  let linkTarefa = document.getElementById(id);
  let itensLinkTarefa = linkTarefa.children;

  itensLinkTarefa[0].innerHTML = `<img src="./images/icon-check.svg" alt="check">`;
  linkTarefa.classList.add('check-tarefa-concluida');

}

function modificarContador(contador) {
  // implementar por último
}