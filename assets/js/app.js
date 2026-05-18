window.addEventListener("DOMContentLoaded", () => {

  const productsContainer = document.querySelector(".products-grid");

  if(productsContainer){

    productsContainer.innerHTML = "";

    VERAXA_PRODUCTS.forEach(product => {

      productsContainer.innerHTML += `
      
      <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <div class="product-content">

          <h3>${product.name}</h3>

          <span>${product.price}</span>

          <button onclick="window.open('https://wa.me/905468853731?text=${product.whatsappText}')">
            WhatsApp Sipariş
          </button>

        </div>

      </div>

      `;

    });

  }

});
