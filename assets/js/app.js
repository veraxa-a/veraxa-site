window.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.querySelector(".products-grid");

  if (productsContainer && typeof VERAXA_PRODUCTS !== "undefined") {
    productsContainer.innerHTML = "";

    VERAXA_PRODUCTS.forEach((product, index) => {
      const mainImage = product.images?.[0] || product.image;
      const hoverImage = product.images?.[1] || mainImage;

      productsContainer.innerHTML += `
        <div class="product-card">
       <div class="product-image-wrapper">

  <img 
    src="${mainImage}" 
    alt="${product.name}"
    class="product-image primary"
  >

  <img 
    src="${hoverImage}" 
    alt="${product.name}"
    class="product-image secondary"
  >

</div>
          >

          <div class="product-content">
            <h3>${product.name}</h3>
            <span>${product.price}</span>

            <button onclick="openProduct(${index})">
              Ürünü İncele
            </button>
          </div>
        </div>
      `;
    });
  }
});

function openProduct(index) {
  const product = VERAXA_PRODUCTS[index];

  let message = `Merhaba VÉRAXA, ${product.name} ürünü için bilgi almak istiyorum.`;

  window.open(
    `https://wa.me/905468853731?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1200);
  }
});
