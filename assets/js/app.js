const VERAXA_PHONE = "905468853731";
let currentFilter = "all";

document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
  bindModalClose();
  hideLoaderSoon();
});

function hideLoaderSoon() {
  function hideLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;

    loader.classList.add("hide");

    setTimeout(function () {
      loader.style.display = "none";
    }, 450);
  }

  window.addEventListener("load", function () {
    setTimeout(hideLoader, 1200);
  });

  setTimeout(hideLoader, 2500);
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, function (char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char];
  });
}

function normalizeImage(image) {
  if (typeof image === "string") {
    return { src: image, fallback: "" };
  }

  return {
    src: image && image.src ? image.src : "",
    fallback: image && image.fallback ? image.fallback : ""
  };
}

function swapBrokenImage(img) {
  const fallback = img.getAttribute("data-fallback");

  if (fallback) {
    img.removeAttribute("data-fallback");
    img.src = fallback;
    return;
  }

  img.style.display = "none";
}

function imageTag(image, alt, className) {
  const normalized = normalizeImage(image);
  const fallbackAttr = normalized.fallback ? `data-fallback="${escapeHtml(normalized.fallback)}"` : "";

  return `
    <img
      src="${escapeHtml(normalized.src)}"
      ${fallbackAttr}
      alt="${escapeHtml(alt)}"
      class="${className}"
      loading="lazy"
      onerror="swapBrokenImage(this)"
    >
  `;
}

function getFilteredProducts() {
  const products = Array.isArray(window.VERAXA_PRODUCTS) ? window.VERAXA_PRODUCTS : [];

  if (currentFilter === "all") return products;

  return products.filter(function (product) {
    return product.category === currentFilter;
  });
}

function filterProducts(filter, button) {
  currentFilter = filter;

  document.querySelectorAll(".product-filters button").forEach(function (btn) {
    btn.classList.remove("active");
  });

  if (button) button.classList.add("active");

  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  renderProducts();
}

function renderProducts() {
  const grid = document.querySelector(".products-grid");
  if (!grid) return;

  const products = getFilteredProducts();

  if (!products.length) {
    grid.innerHTML = '<p class="empty-products">Bu kategoride ürün hazırlanıyor.</p>';
    return;
  }

  grid.innerHTML = products.map(function (product) {
    const realIndex = window.VERAXA_PRODUCTS.indexOf(product);
    const images = product.images || [];
    const main = images[0] || "";
    const hover = images[1] || main;

    return `
      <article class="product-card">
        <button class="product-click" type="button" onclick="openProduct(${realIndex})">
          <span class="product-image-wrapper">
            ${imageTag(main, product.name, "product-image primary")}
            ${imageTag(hover, product.name, "product-image secondary")}
          </span>

          <span class="product-content">
            <small>${escapeHtml(product.label || product.category || "VÉRAXA")}</small>
            <strong>${escapeHtml(product.name)}</strong>
            <span>${escapeHtml(product.price)}</span>
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
  const category = document.getElementById("modalCategory");
  const name = document.getElementById("modalName");
  const price = document.getElementById("modalPrice");
  const desc = document.getElementById("modalDesc");
  const size = document.getElementById("modalSize");
  const whatsapp = document.getElementById("modalWhatsapp");

  if (!modal || !gallery) return;

  const images = product.images && product.images.length ? product.images : [];

  gallery.innerHTML = images.map(function (image) {
    return imageTag(image, product.name, "modal-img");
  }).join("");

  category.textContent = product.label || product.category || "VÉRAXA";
  name.textContent = product.name || "";
  price.textContent = product.price || "";
  desc.textContent = product.description || "";
  size.value = "";

  whatsapp.onclick = function () {
    const selectedSize = size.value || "Belirtilmedi";
    const message = `Merhaba VÉRAXA, ${product.name} ürünü için bilgi almak istiyorum.\n\nBeden: ${selectedSize}\nFiyat: ${product.price}`;
    window.open("https://wa.me/" + VERAXA_PHONE + "?text=" + encodeURIComponent(message), "_blank");
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

  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeProductModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeProductModal();
  });
}
