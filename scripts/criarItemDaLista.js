import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById('input-item');
let contador = 0;
export function criarItemDaLista(){
         // Prevenir a ação padrão de envio de formulário, podendo apagar as informações já digitadas em um formulário por exemplo
    if(inputItem.value === ''){
        alert('Por favor , insira um item!');
        return;
    }

    const itemDaLista = document.createElement('li');
    const containerDaLista = document.createElement('div');
    containerDaLista.classList.add('lista-item-container'); // Adicionando uma lista de classe para a div
    const inputCheckBox = document.createElement('input');
    inputCheckBox.type = 'checkbox';
    inputCheckBox.id = 'checkbox-' + contador++;
    const nomeItem = document.createElement('p');
    nomeItem.innerText = inputItem.value;

    inputCheckBox.addEventListener('click', function(){
        if(inputCheckBox.checked){
            nomeItem.style.textDecoration = 'line-through';
        }else{
            nomeItem.style.textDecoration = 'none';
        }
    })

    containerDaLista.appendChild(inputCheckBox); // Atribuindo um elemento filho (inputCheckBox) ao containerDaLista
    containerDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerDaLista);
    const dataCompleta = gerarDiaDaSemana();
    

    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    itemData.classList.add('texto-data');
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}