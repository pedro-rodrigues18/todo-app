const inserirTarefa = document.getElementById('enter-tarefa');
const lista = document.getElementById('lista');
const numeroDeTarefas = document.getElementById('numero-de-tarefas');

class Todo {
  tarefa;
  check = false;
}

let conteudo;
let contador = JSON.parse(localStorage.getItem("contador")) || 0;
let listaDeTodo = JSON.parse(localStorage.getItem("listaDeTodo")) || [];

renderizarLista(listaDeTodo);
modificarContador(contador);

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

  if (!listaDeTodo[id].check) {
    contador--;
    modificarContador(contador);
  }

  listaDeTodo.splice(id, 1);

  renderizarLista(listaDeTodo);
  salvarLocalStorage();

}

function renderizarLista(listaDeTodo) {
  lista.innerHTML = '';
  for (let i = 0; i < listaDeTodo.length; i++) {
    if (listaDeTodo[i].check == false) {
      lista.innerHTML += `
        <li class="tarefa">
          <a href="#" class="link-tarefa" onclick="marcarOuDesmarcarTarefa(${i});">
            <span class="check-tarefa"></span>
            <div class="tarefa-texto">${listaDeTodo[i].tarefa}</div>
          </a>
          <a href="#" class="remover-tarefa" onclick="removerTarefa(${i});">
            <img src="./images/icon-cross.svg" alt="Remover Tarefa" class="remover-tarefa">
          </a>
        </li>
      `;
    }
    else {
      lista.innerHTML += `
        <li class="tarefa">
          <a href="#" class="link-tarefa check-tarefa-concluida" onclick="marcarOuDesmarcarTarefa(${i});">
            <span class="check-tarefa"><img src="./images/icon-check.svg" alt="check"></span>
            <div class="tarefa-texto">${listaDeTodo[i].tarefa}</div>
          </a>
          <a href="#" class="remover-tarefa" onclick="removerTarefa(${i});">
            <img src="./images/icon-cross.svg" alt="Remover Tarefa" class="remover-tarefa">
          </a>
        </li>
      `;
    }
  }
}

function marcarOuDesmarcarTarefa(id) {
  event.preventDefault();

  if (!listaDeTodo[id].check) {
    listaDeTodo[id].check = true;
    contador--;
  }
  else {
    listaDeTodo[id].check = false;
    contador++
  }

  renderizarLista(listaDeTodo);
  modificarContador(contador);

  salvarLocalStorage();
}

function removerTodasTarefas() {

  lista.innerHTML = '';
  numeroDeTodos = listaDeTodo.length;
  listaDeTodo.splice(0, numeroDeTodos);

  contador = 0;
  modificarContador(contador);
}

function modificarContador(contador) {
  numeroDeTarefas.innerHTML = `${contador} items restantes`;
  salvarLocalStorage();
}

function salvarLocalStorage() {
  localStorage.setItem("listaDeTodo", JSON.stringify(listaDeTodo));
  localStorage.setItem("contador", JSON.stringify(contador));
}