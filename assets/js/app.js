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

  const text = `Merhaba VÉRAXA, ${product.name} ürünü için bilgi almak istiyorum.`;

  window.open(
    `https://wa.me/905468853731?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}
  document.getElementById("modalName").innerText = product.name;
  document.getElementById("modalPrice").innerText = product.price;
  document.getElementById("modalCategory").innerText = product.category;

  const gallery = document.getElementById("modalGallery");
  gallery.innerHTML = "";

  product.images.forEach(img => {
    gallery.innerHTML += `<img src="${img}" alt="${product.name}">`;
  });

  document.getElementById("modalWhatsapp").onclick = () => {
    const size = document.getElementById("modalSize").value;
    const text = `Merhaba VÉRAXA, ${product.name} ürünü için bilgi almak istiyorum. Beden: ${size || "Belirtilmedi"}`;

    window.open(
      `https://wa.me/905468853731?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  document.getElementById("productModal").classList.add("active");
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("active");
}
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1200);
  }
});
