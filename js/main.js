const inserirTarefa = document.getElementById('enter-tarefa');
const lista = document.getElementById('lista');
const numeroDeTarefas = document.getElementById('numero-de-tarefas');

let contador = 0;
let conteudo;
let listaDeTarefas = [];

inserirTarefa.addEventListener('keyup', function (e) {

  let key = e.which || e.keyCode;

  if (key == 13) {
    conteudo = this.value;

    if (conteudo != '') {

      listaDeTarefas.push(conteudo);

      renderizarLista(listaDeTarefas);

      contador++;

      modificarContador(contador);

    } else {
      alert("Erro: não é possível criar tarefa vazia.");
    }

    document.getElementById('enter-tarefa').value = null;
  }
});

function removerTarefa(id) {
  event.preventDefault();

  tarefa = document.getElementById(id).parentNode;

  listaDeTarefas.splice(id, 1);

  renderizarLista(listaDeTarefas);

  //console.log(tarefa.children[0]);
  if (!tarefa.children[0].classList.contains('check-tarefa-concluida')) {
    contador--;
    modificarContador(contador);
  }

}

function renderizarLista(listaDeTarefas) {
  lista.innerHTML = '';
  for (let i = 0; i < listaDeTarefas.length; i++) {
    lista.innerHTML += `
      <li class="tarefa">
        <a href="#" class="link-tarefa" id="check-${i}" onclick="marcarOuDesmarcarTarefa(id);">
          <span class="check-tarefa"></span>
          <div class="tarefa-texto">${listaDeTarefas[i]}</div>
        </a>
        <a href="#" class="remover-tarefa" id="${i}" onclick="removerTarefa(id);">
          <img src="./images/icon-cross.svg" alt="Remover Tarefa" class="remover-tarefa">
        </a>
      </li>
    `;
  }
}

function marcarOuDesmarcarTarefa(id) {
  event.preventDefault();

  let linkTarefa = document.getElementById(id);
  let itensLinkTarefa = linkTarefa.children;

  if (!linkTarefa.classList.contains('check-tarefa-concluida')) {

    linkTarefa.classList.add('check-tarefa-concluida');
    itensLinkTarefa[0].innerHTML = `<img src="./images/icon-check.svg" alt="check">`;

    contador--;
    modificarContador(contador);

  } else {
    linkTarefa.classList.remove('check-tarefa-concluida');
    itensLinkTarefa[0].innerHTML = '';

    contador++;
    modificarContador(contador);
  }
}

function modificarContador(contador) {
  numeroDeTarefas.innerHTML = `${contador} items restantes`;
}