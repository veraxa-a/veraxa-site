const VERAXA_PHONE = "905468853731";

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  bindModalClose();
});

function moneyText(value) {
  return value || "Fiyat için iletişime geç";
}

function renderProducts() {
  const grid = document.querySelector(".products-grid");
  if (!grid) return;

  const products = Array.isArray(window.VERAXA_PRODUCTS) ? window.VERAXA_PRODUCTS : [];

  if (!products.length) {
    grid.innerHTML = '<p class="empty-products">Ürünler hazırlanıyor.</p>';
    return;
  }

  grid.innerHTML = products.map((product, index) => {
    const mainImage = product.image || (product.images && product.images[0]) || "";
    const hoverImage = (product.images && product.images[1]) || mainImage;

    return `
      <article class="product-card">
        <button class="product-click" type="button" onclick="openProduct(${index})" aria-label="${product.name}">
          <span class="product-image-wrapper">
            <img src="${mainImage}" alt="${product.name}" class="product-image primary" loading="lazy">
            <img src="${hoverImage}" alt="${product.name}" class="product-image secondary" loading="lazy">
          </span>
          <span class="product-content">
            <small>${product.category || "VÉRAXA"}</small>
            <strong>${product.name}</strong>
            <span>${moneyText(product.price)}</span>
          </span>
        </button>
      </article>
    `;
  }).join("");
}

function openProduct(index) {
  const product = window.VERAXA_PRODUCTS[index];
  if (!product) return;

  const modal = document.getElementById("productModal");
  const gallery = document.getElementById("modalGallery");
  const modalCategory = document.getElementById("modalCategory");
  const modalName = document.getElementById("modalName");
  const modalPrice = document.getElementById("modalPrice");
  const modalWhatsapp = document.getElementById("modalWhatsapp");
  const modalSize = document.getElementById("modalSize");

  if (!modal || !gallery) return;

  const images = product.images && product.images.length ? product.images : [product.image];

  gallery.innerHTML = images.map(src => `<img src="${src}" alt="${product.name}" loading="lazy">`).join("");
  modalCategory.textContent = product.category || "VÉRAXA";
  modalName.textContent = product.name;
  modalPrice.textContent = moneyText(product.price);
  modalSize.value = "";

  modalWhatsapp.onclick = () => {
    const size = modalSize.value || "Belirtilmedi";
    const message = `Merhaba VÉRAXA, ${product.name} ürünü için bilgi almak istiyorum.%0A%0ABeden: ${size}%0AFiyat: ${product.price || "-"}`;
    window.open(`https://wa.me/${VERAXA_PHONE}?text=${message}`, "_blank");
  };

  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function bindModalClose() {
  const modal = document.getElementById("productModal");
  if (!modal) return;

  modal.addEventListener("click", event => {
    if (event.target === modal) closeProductModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeProductModal();
  });
}
