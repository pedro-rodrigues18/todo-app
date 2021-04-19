
const inputEle = document.getElementById('enter-tarefa');
let lista = document.getElementById('lista').innerHTML;
let numeroDeTarefas = document.getElementById('numero-de-tarefas').innerHTML;

let tarefa;
let contador = 0;
let listaDeTarefas = [];

inputEle.addEventListener('keyup', function (e) {
  let key = e.which || e.keyCode;
  if (key == 13) {
    tarefa = this.value;
    listaDeTarefas.push(tarefa);
    adicionarTarefa(tarefa);
    contador += 1;
    modificarContador(contador);
    document.getElementById('enter-tarefa').value = null;
  }
});

function adicionarTarefa(tarefa) {
  lista += `
      <li class="tarefa">
        <span class="check-tarefa">
          
        </span>
        <div class="tarefa-texto">${tarefa}</div>
      </li>
    `;

  document.getElementById('lista').innerHTML = lista;
}

function modificarContador(contador) {

  numeroDeTarefas = `
    <p id="numero-de-tarefas">${contador} items restantes</p>
  `;

  document.getElementById('numero-de-tarefas').innerHTML = numeroDeTarefas;
}