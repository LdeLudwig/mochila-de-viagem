const form = document.querySelector('#novoItem')
const lista = document.querySelector('#lista')
// Mudamos o formato de string para array 
const itens = JSON.parse(localStorage.getItem("itens")) || []

// Para cada elemento já escritos continuarem ao atualizar a página
itens.forEach((elemento)=>{
  criaElemento(elemento)
})

// Refatorando para que que o elemento seja criado e adicionado no array quando realizado o submit
form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    //const para conferir o nome do elemento nome no array itens
    const existe = itens.find(elemento => elemento.nome === nome.value)

    const itemAtual = {
      "nome": nome.value,
      "quantidade": quantidade.value
    }

    //Condicional para conferir se o elemento
    if(existe){
      itemAtual.id = existe.id
      atualizaElemento(itemAtual)
      itens[itens.findIndex(elemento=>elemento.id === existe.id)] = itemAtual
    }else{
      itemAtual.id = itens[itens.length - 1] ? (itens[itens.length-1].id + 1) : 0;

      criaElemento(itemAtual)

      itens.push(itemAtual)
    }
    
    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

// Refatorando a função, agora que precisamos de apenas 1 fator para executá-la
function criaElemento(item) {

    const novoElemento = document.createElement('li')
    novoElemento.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    

    novoElemento.appendChild(numeroItem)
    novoElemento.innerHTML += item.nome

    novoElemento.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoElemento)
}

function atualizaElemento(item){
  document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id){
  const elementoBotao = document.createElement("button")
  elementoBotao.innerText = "X"

  elementoBotao.addEventListener("click", function(){
    deletaElemento(this.parentNode, id)
  })
  return elementoBotao
}

function deletaElemento(tag,id){
  tag.remove()

  itens.splice(itens.findIndex(elemento=>elemento.id === id),1)

  localStorage.setItem("itens", JSON.stringify(itens))
}
