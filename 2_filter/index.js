//selector
const products = document.querySelector('.products')
const filter = document.getElementById('filter')
const listItems = [];

// input
filter.addEventListener('input', (e) => filterProduct(e.target.value));

// Using fetch api to getData
async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const jsonData = await response.json();

  products.innerHTML = '';

  jsonData.forEach((product) => {
    const divItem = document.createElement('div');
    divItem.setAttribute('class', 'product');
    listItems.push(divItem);

    divItem.innerHTML = `
    <img src="${product.image}" alt="">
    <div class="product-detail">
      <h4>${product.title.slice(0, 30)}</h4>
      <p>$${product.price}</p>
    </div>
    `
    products.appendChild(divItem);
  } )
}

getData();

function filterProduct(searchTerm) {
  listItems.forEach((item) => {
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    }else {
      item.classList.add('hide');
    }
  })
}
