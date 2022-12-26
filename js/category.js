
function categoryList(){
    axios.get('http://127.0.0.1:8000/api/category').then((response) => {
        const variavel = (response.data);
        clearList();
        variavel.map(async (element) => {
            await mountList(element);
            deleteElement(element.id);
        }
    )})}

document.querySelector('#bntCategoryRegister').onclick = function() {
    axios.post('http://127.0.0.1:8000/api/category', {
    name: document.querySelector('#nameValue').value,
}).then((response) => {
    categoryList();
    document.querySelector('#categoryValue').innerHTML = ''
    }, (error) => {
    console.log(error);
    })}

function clearList(){
    document.querySelector('#categoryValue').innerHTML = ''
    document.querySelector('#bntEdit').innerHTML = ''
    document.querySelector('#bntDelete').innerHTML = ''
}

function mountList(element) {
    document.querySelector('#categoryValue').innerHTML += `${element.name}<br>`
    document.querySelector('#bntEdit').innerHTML += `<button id="edit-${element.id}" >Editar</button>`
    document.querySelector('#bntDelete').innerHTML += `<button id="delete-${element.id}" >Excluir</button><br>`
}

function editar() {
    document.querySelector(`#edit-${id}`).onclick = function() {
        axios.put(`http://127.0.0.1:8000/api/category/${id}`, {
        name: document.querySelector('#nameValue').value = "teste",
    }).then((response) => {
        console.log(response);
        }, (error) => {
            console.log(error);
    })}}

function deleteElement(id){
    document.querySelector(`#delete-${id}`).onclick = function() {
        axios.delete(`http://127.0.0.1:8000/api/category/${id}`)
    .then(() => 
        categoryList()
    )}
}

document.onload = categoryList();
