// JavaScript kodları buraya eklenecek
// Örneğin, ürünleri dinamik olarak yüklemek için AJAX kullanılabilir.

// Dummy data for product list
const products = [
    { name: 'Gömlek', price: 99.99 },
    { name: 'Pantolon', price: 149.99 },
    { name: 'Ceket', price: 199.99 },
  ];
  
  // Function to display products in the product list section
  function displayProducts() {
    const productList = document.querySelector('.product-list');
  
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>Fiyat: ${product.price} TL</p>
        <button class="buy-btn">Satın Al</button>
      `;
      productList.appendChild(productItem);
    });
  }
  
  // Call the displayProducts function to populate the product list
  displayProducts();
  