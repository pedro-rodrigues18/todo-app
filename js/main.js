
const inserirTarefa = document.getElementById('enter-tarefa');
let listaFinal = document.getElementById('lista');
let numeroDeTarefas = document.getElementById('numero-de-tarefas').innerHTML;

let contador = 0;
let li;
let tarefa;
let listaDeTarefas = [];

inserirTarefa.addEventListener('keyup', function (e) {

  let key = e.which || e.keyCode;

  if (key == 13) {
    tarefa = this.value;

    if (tarefa != '') {

      contador++;

      li = `
        <li class="tarefa" id="tarefa-${contador - 1}">
          <a href="#" class="link-tarefa" id="check-${contador - 1}" onclick="marcarTarefa(id);">
            <span class="check-tarefa"></span>
            <div class="tarefa-texto">${tarefa}</div>
          </a>
          <a href="#" class="remover-tarefa" id="remover-${contador - 1}" onclick="removerTarefa(id);">
            <img src="./images/icon-cross.svg" alt="Remover Tarefa" class="remover-tarefa">
          </a>
        </li>
      `;

      listaDeTarefas.push(li);

      atualizarLista(listaDeTarefas, contador);

    } else {
      alert("Erro: não é possível criar tarefa vazia.");
    }

    document.getElementById('enter-tarefa').value = null;
  }
});

function removerTarefa(id) {

}

function atualizarLista(listaDeTarefas, contador) {

  document.getElementById('lista').innerHTML += listaDeTarefas[contador - 1];
  document.getElementById('enter-tarefa').value = null;
}

function marcarTarefa(id) {
  event.preventDefault();

  let linkTarefa = document.getElementById(id);
  let itensLinkTarefa = linkTarefa.children;

  itensLinkTarefa[0].innerHTML = `<img src="./images/icon-check.svg" alt="check">`;
  linkTarefa.classList.add('check-tarefa-concluida');

}

function modificarContador(contador) {
  // implementar por último
}