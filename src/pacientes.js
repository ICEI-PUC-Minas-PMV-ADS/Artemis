let lista = localStorage.getItem("minhaLista");

const formulario = document.querySelector("form");
const ulPessoas = document.querySelector("ul");

if (lista){
    lista = JSON.parse(lista);
} else{
    lista = [];
}

listar();

formulario.addEventListener("submit" , function (e){
    e.preventDefault();
    let novaPessoa = new Object();
    novaPessoa.nome = this.nome.value;
    novaPessoa.telefone = this.telefone.value;

    //console.log(novaPessoa);

    if(this.id.value !== "" && this.id.value >=0){
        lista[this.id.value] = novaPessoa;

    }else {
        //Popular a lista
         lista.push(novaPessoa);
    }    

    //Limpar o formulário
    this.reset();

    salvarLS();

    listar();
})

//Uma funçãoo que lista os dados na tela
function listar(filtro=''){
    //Limpa todo html que estiver dentro da ul pessoas
    //ForEach é uma função que percorre os registros
    ulPessoas.innerHTML = "";
    lista.forEach((item,key) => {      

      if(item.nome.toUpperCase().indexOf(filtro.toUpperCase()) >= 0 || filtro == "")  {
            //Mostrar ao usuário
        linha = document.createElement('li');

        //Variável que armazena os botões
        let s = `<button  onClick="editar(${key})">[Editar]</button>
                 <button  onClick="excluir(${key})">[Excluir]</button>`

        linha.innerHTML = "Nome: " + item.nome + " Telefone: " + item.telefone + s;
        ulPessoas.appendChild(linha);
      }       
    });
}

//Função para excluir
function excluir(id){
    //Limpa o formulário
    formulario.reset(); 
    lista.splice(id,1);    
    salvarLS();
    listar();    
}

  function editar(id){
      //Recebe o id
      formulario.id.value = id;
      formulario.nome.value = lista[id].nome;
      formulario.telefone.value = lista[id].telefone;

  }

function salvarLS(){
     localStorage.setItem("minhaLista" , JSON.stringify(lista));
 }