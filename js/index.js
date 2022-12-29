function productList() {
    axios.get('http://127.0.0.1:8000/api/products').then((response) => {
        clearList()
        const variavel = (response.data);
         variavel.map(async (element) => {
            await mountList(element);
            deleteElement(element.id); 
            editar(element.id);
         })})}

function deleteElement(id){
    document.querySelector(`#delete-${id}`).onclick = function() {
        axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
    .then(() => 
        productList()
    )}
}

function editar(id) {
    document.querySelector(`#edit-${id}`).onclick = function() {
        axios.put(`http://127.0.0.1:8000/api/products/${id}`, {
        name: document.querySelector('#nameValue').value = "teste",
        description: document.querySelector('#descriptionValue').value = "teste",
        price: document.querySelector('#priceValue').value = 33,
        quantity: document.querySelector('#quantityValue').value = 33,
        category_id: document.querySelector('#categoryValue').value = 1,
        active: document.querySelector('#checkValue').checked = 1,
    }).then((response) => {
        console.log("Passou!!",response);
        }, (error) => {
            console.log(error);
    })}}

function clearList(){
    document.querySelector('#nameValue').innerHTML = ''
    document.querySelector('#descriptionValue').innerHTML = ''  
    document.querySelector('#priceValue').innerHTML = ''
    document.querySelector('#quantityValue').innerHTML = ''
    document.querySelector('#categoryValue').innerHTML = ''
    document.querySelector('#checkValue').innerHTML = ''
    document.querySelector('#bntEdit').innerHTML = ''
    document.querySelector('#bntDelete').innerHTML = ''
}

function mountList(element) {
    document.querySelector('#nameValue').innerHTML += `${element.name}<br>`
    document.querySelector('#descriptionValue').innerHTML += `${element.description}<br>`  
    document.querySelector('#priceValue').innerHTML += `${element.price}<br>` 
    document.querySelector('#quantityValue').innerHTML += `${element.quantity}<br>` 
    document.querySelector('#categoryValue').innerHTML += `${element.category_id}<br>`   
    document.querySelector('#checkValue').innerHTML += `${element.active ? "Ativo" : "Inativo"}<br>`
    document.querySelector('#bntEdit').innerHTML += `<button id="edit-${element.id}" >Editar</button>`
    document.querySelector('#bntDelete').innerHTML += `<button id="delete-${element.id}" >Excluir</button><br>`
}

function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.onload = productList();

