document.querySelector('#bntProductRegister').onclick = function() {
    axios.post('http://127.0.0.1:8000/api/products', {
    name: document.querySelector('#nameValue').value,
    description: document.querySelector('#descriptionValue').value,
    price: document.querySelector('#priceValue').value,
    quantity: document.querySelector('#quantityValue').value,
    category_id: document.querySelector('#categoryValue').value,
    active: document.querySelector('#checkValue').checked,
}).then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  })}
