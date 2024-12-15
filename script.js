const containerError = document.getElementById('container-error') // CONTAINER PARA ADVERTENCIA DE ERROS
const errorMsg = document.getElementById('error-msg') // ELEMENTO QUE CONTEM A MENSAGEM
const input = document.getElementById('input') // INPUT ADD ITEM
const btn = document.querySelector('button') // BTN INPUT 
const listContainer = document.getElementById('list-inner') // CONTAINER PAI ONDE A NOVA DIV (.LIST) SERÁ INCLUIDA 
const emptyCart = document.getElementById('empty-cart') // CONTAINER CARRINHO VAZIO


btn.addEventListener('click', (e) =>{
    e.preventDefault();

    if(input.value === ''){ // Se o valor do input for vazio...

        errorMsg.innerText = 'Por favor, insira um item!' // reescreva no html a msg
        containerError.classList.add('error-msg-show') // mostre o container 

        setTimeout(() => {
            containerError.classList.remove('error-msg-show');
        }, 2000); // apos 2 segundos, esconda o container.

    } else {

        containerError.classList.remove('error-msg-show'); // remove a classe direto caso esteja aparecendo na tela.
        addItem(); // CHAMADA DA FUNCAO
        
        // removeItem();
    }
})


// FUNCAO PARA ADICIONAR ITEM.
function addItem(){
    const listchild = document.createElement('div') // cria uma div 
    listchild.classList.add('list') // adiciona a classe na div que já está estilizada com css

    listchild.innerHTML =   `
                                <input type="checkbox">
                                <p>${input.value}</p>
                                <div class="delete" id='delete'></div>
                            `
                            
    listContainer.append(listchild); // insere dentro do container pai, a div .list já estruturada.
    updateList();

    input.value = ''; // reseta o valor do input apos a formatação.
}

// FUNCAO PARA REMOVER O ITEM
listContainer.addEventListener('click', function(event){

    if (event.target.classList.contains('delete')){ // se o target clicado tiver a classe delete
        event.target.closest('.list').remove(); // remove o container pai .list

        updateList();

        errorMsg.innerText = 'O item foi removido da lista.' // altere o texto
        containerError.classList.add('error-msg-show') // mostre o container 

        setTimeout(() => {
            containerError.classList.remove('error-msg-show');
        }, 2000); // apos 2 segundos, esconda o container.
    }
})

// ATUALIZAR LISTA
function updateList(){

    if (listContainer.childElementCount > 1){
        emptyCart.classList.add('hide')
    } else if (listContainer.childElementCount <=1){
        emptyCart.classList.remove('hide')
    }
}



