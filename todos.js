var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []
// se não conseguir retornar um valor aceitável desse JSON ele vai jogar um array vazio para o todos
//parse transforma o json em array

function renderTodos() {
    listElement.innerHTML = '' //inicializa o html do listElement sem nada 

    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        
        linkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        var linkText = document.createTextNode('Excluir')
        
        linkElement.appendChild(linkText)
        
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
        
    }
}

renderTodos()


function addTodo() {
    var todoText = inputElement.value

    todos.push(todoText) //função push adiciona elementos na array
    inputElement.value = '' //depois de adicionar eu deixo o input vazio
    renderTodos()
    saveToStorage()
}

buttonElement.onclick = addTodo;


function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}


function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
    //stringfy transforma vetor em string
    //localStorage é variável local do meu armazenamento

}