let lista = localStorage.getItem("listaRecurso");

const formulario = document.querySelector("form");
const ulRecursos = document.querySelector("ul");

if (lista){
    lista = JSON.parse(lista);
} else{
    lista = [];
}

listar();

formulario.addEventListener("submit" , function (e){
    e.preventDefault();
    let novoRecurso = new Object();
    novoRecurso.item = this.item.value;
    novoRecurso.quantidade = this.quantidade.value;

    //console.log(novoRecurso);

    if(this.id.value !== "" && this.id.value >=0){
        lista[this.id.value] = novoRecurso;

    }else {
        //Popular a lista
         lista.push(novoRecurso);
    }    

    //Limpar o formulário
    this.reset();

    salvarLS();

    listar();
})

//Uma funçãoo que lista os dados na tela
function listar(filtro=''){
    //Limpa todo html que estiver dentro da ul recursos
    //ForEach é uma função que percorre os registros
    ulRecursos.innerHTML = "";
    lista.forEach((item,key) => {      

      if(item.item.toUpperCase().indexOf(filtro.toUpperCase()) >= 0 || filtro == "")  {
            //Mostrar ao usuário
        linha = document.createElement('li');

        //Variável que armazena os botões
        let s = `<button  onClick="editar(${key})">Editar</button>
                 <button  onClick="excluir(${key})">Excluir</button>`

        linha.innerHTML = "Item: " + item.item + " Quantidade: " + item.quantidade + s;
        ulRecursos.appendChild(linha);
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
      formulario.item.value = lista[id].item;
      formulario.quantidade.value = lista[id].quantidade;

  }

function salvarLS(){
     localStorage.setItem("listaRecurso" , JSON.stringify(lista));
 }