const form = document.querySelector('#novoItem')
const lista = document.querySelector('#lista')


/* Criando evento de submit para que seja criado o elemento */
form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
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


}
