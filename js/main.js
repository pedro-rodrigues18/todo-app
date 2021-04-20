
const inputEle = document.getElementById('enter-tarefa');
let lista = document.getElementById('lista').innerHTML;
let numeroDeTarefas = document.getElementById('numero-de-tarefas').innerHTML;
let remove = document.querySelector('#remover-tarefa');

let tarefa;
let contador = 0;
let listaDeTarefas = [];

inputEle.addEventListener('keyup', function (e) {
  let key = e.which || e.keyCode;

  if (key == 13) {
    tarefa = this.value;

    if (tarefa != '') {
      contador++;
      listaDeTarefas.push(tarefa);
      adicionarTarefa(tarefa, contador);
      modificarContador(contador);

    } else {
      alert("Erro: não é possível criar tarefa vazia.");
    }

    document.getElementById('enter-tarefa').value = null;
  }
});

function adicionarTarefa(tarefa, contador) {
  lista += `
    <li class="tarefa" id="tarefa-${contador - 1}">
      <a href="#" class="link-tarefa">
        <span class="check-tarefa">
          
        </span>
        <div class="tarefa-texto">${tarefa}</div>
      </a>
      <a href="#" class="remover-tarefa" id="${contador - 1}" onclick="removerTarefa(id);">
        <img src="./images/icon-cross.svg" alt="Remover Tarefa" class="remover-tarefa">
      </a>
    </li>
    `;

  document.getElementById('lista').innerHTML = lista;
}

function removerTarefa(id) {

  // Ainda está sendo implementado
  // Foi identificado falhas ao tentar adicionar novas tarefas após uma remoção.

  let li = document.getElementById(id).parentNode;

  li.remove();

  console.log(li);

  contador--;
  modificarContador(contador);

}


function modificarContador(contador) {

  numeroDeTarefas = `
    <p id="numero-de-tarefas">${contador} items restantes</p>
  `;

  document.getElementById('numero-de-tarefas').innerHTML = numeroDeTarefas;
}