const form = document.querySelector('#novoItem')
const lista = document.querySelector('#lista')
const itens = []


/* Criando evento de submit para que seja criado o elemento */
form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""


})

function criaElemento(nome, quantidade) {
    /* Criando novo elemento na lista e adicionando a classe item */
    const novoElemento = document.createElement('li')
    novoElemento.classList.add("item")

      /* Aqui utilizamos o appendChild para que o novo elemento li, que já recebeu a classe item
    receba a tag strong com a quantidade que definimos nos campos antes do submit. */
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    /* Nessa parte, atrribuimos o nome ao novo elemento que recebeu a quantidade do elemento. */
    novoElemento.appendChild(numeroItem)
    novoElemento.innerHTML += nome

    /* E nessa parte, criamos um novo elemento dentro da lista de elementos, com a quantidade e o nome 
    que colocamos nos campos de submit */
    lista.appendChild(novoElemento)

    /* Aqui criamos um objeto que ira receber o nome e a quantidade do item atual que criarmos */
    const itemAtual = {
      nome: "nome",
      quantiade: "quantiade"
    }

    /* Enviamos esse objeto para o array itens  */
    itens.push(itemAtual)
    
    /* Salvamos esse array no localStorage, e usamos o método stringfy no JSON para transformar
    esse objeto em uma string */
    localStorage.setItem("item", JSON.stringify(itens))

}
