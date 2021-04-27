const inserirTarefa = document.getElementById('enter-tarefa');
const lista = document.getElementById('lista');
const numeroDeTarefas = document.getElementById('numero-de-tarefas');

class Todo {
  tarefa;
  check = false;
}
let contador = 0;
let conteudo;
let listaDeTodo = [];

inserirTarefa.addEventListener('keyup', function (e) {

  let key = e.which || e.keyCode;

  if (key == 13) {
    conteudo = this.value;

    if (conteudo != '') {

      todo = new Todo;
      todo.tarefa = conteudo;

      listaDeTodo.push(todo);

      renderizarLista(listaDeTodo);

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

  listaDeTodo.splice(id, 1);

  renderizarLista(listaDeTodo);

  //console.log(tarefa.children[0]);
  if (!tarefa.children[0].classList.contains('check-tarefa-concluida')) {
    contador--;
    modificarContador(contador);
  }

}

function renderizarLista(listaDeTodo) {
  lista.innerHTML = '';
  for (let i = 0; i < listaDeTodo.length; i++) {
    if (listaDeTodo[i].check == false) {
      lista.innerHTML += `
        <li class="tarefa">
          <a href="#" class="link-tarefa" id="check-${i}" onclick="marcarOuDesmarcarTarefa(id);">
            <span class="check-tarefa"></span>
            <div class="tarefa-texto">${listaDeTodo[i].tarefa}</div>
          </a>
          <a href="#" class="remover-tarefa" id="${i}" onclick="removerTarefa(id);">
            <img src="./images/icon-cross.svg" alt="Remover Tarefa" class="remover-tarefa">
          </a>
        </li>
      `;
    }
    else {
      lista.innerHTML += `
        <li class="tarefa">
          <a href="#" class="link-tarefa check-tarefa-concluida" id="check-${i}" onclick="marcarOuDesmarcarTarefa(id);">
            <span class="check-tarefa"><img src="./images/icon-check.svg" alt="check"></span>
            <div class="tarefa-texto">${listaDeTodo[i].tarefa}</div>
          </a>
          <a href="#" class="remover-tarefa" id="${i}" onclick="removerTarefa(id);">
            <img src="./images/icon-cross.svg" alt="Remover Tarefa" class="remover-tarefa">
          </a>
        </li>
      `;
    }
  }
}

function marcarOuDesmarcarTarefa(id) {
  event.preventDefault();

  let linkTarefa = document.getElementById(id);
  let itensLinkTarefa = linkTarefa.children;

  idNumero = id.split("").filter(n => (Number(n) || n == 0)).join("");

  console.log(idNumero);

  if (!linkTarefa.classList.contains('check-tarefa-concluida')) {

    listaDeTodo[idNumero].check = true;

    linkTarefa.classList.add('check-tarefa-concluida');
    itensLinkTarefa[0].innerHTML = `<img src="./images/icon-check.svg" alt="check">`;

    contador--;
    modificarContador(contador);

  } else {
    listaDeTodo[idNumero].check = false;

    linkTarefa.classList.remove('check-tarefa-concluida');
    itensLinkTarefa[0].innerHTML = '';

    contador++;
    modificarContador(contador);
  }
}

function modificarContador(contador) {
  numeroDeTarefas.innerHTML = `${contador} items restantes`;
}