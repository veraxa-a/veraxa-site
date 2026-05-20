const VERAXA_PHONE = "905468853731";

let currentFilter = "all";
let wishlist = JSON.parse(localStorage.getItem("veraxa_wishlist") || "[]");
let cart = JSON.parse(localStorage.getItem("veraxa_cart") || "[]");

document.addEventListener("DOMContentLoaded", () => {
  veraxaHideLoaderSoon();
  veraxaBindModalClose();
  veraxaUpdateBadges();
  veraxaWaitForProducts();
});

function veraxaHideLoaderSoon() {
  function hideLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;

    loader.classList.add("hide");

    setTimeout(() => {
      loader.style.display = "none";
    }, 450);
  }

  window.addEventListener("load", () => {
    setTimeout(hideLoader, 700);
  });

  setTimeout(hideLoader, 1600);
}

function veraxaWaitForProducts(attempt = 0) {
  if (Array.isArray(window.VERAXA_PRODUCTS)) {
    renderProducts();
    return;
  }

  if (attempt > 30) {
    const grid = document.querySelector(".products-grid");
    if (grid) {
      grid.innerHTML = '<p class="empty">Ürün dosyası yüklenemedi. products.js dosyasını kontrol et kanka.</p>';
    }
    return;
  }

  setTimeout(() => veraxaWaitForProducts(attempt + 1), 100);
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

function veraxaNormalizeImage(image) {
  if (typeof image === "string") {
    return {
      src: image,
      fallback: ""
    };
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

function veraxaImageTag(image, alt, className) {
  const normalized = veraxaNormalizeImage(image);
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

function veraxaGetProducts() {
  const products = Array.isArray(window.VERAXA_PRODUCTS) ? window.VERAXA_PRODUCTS : [];
  const query = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();

  return products.filter(product => {
    const inWishlist = wishlist.includes(product.name);

    const filterOk =
      currentFilter === "all" ||
      product.category === currentFilter ||
      (currentFilter === "wishlist" && inWishlist);

    const searchText = [
      product.name,
      product.label,
      product.category,
      product.description
    ].join(" ").toLowerCase();

    const searchOk = !query || searchText.includes(query);

    return filterOk && searchOk;
  });
}

function filterProducts(filter, button) {
  currentFilter = filter;

  document.querySelectorAll(".product-filters button").forEach(btn => {
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  } else {
    document.querySelectorAll(".product-filters button").forEach(btn => {
      const text = btn.textContent.toLowerCase();

      if (
        (filter === "all" && text.includes("tümü")) ||
        (filter === "women" && text.includes("kadın")) ||
        (filter === "men" && text.includes("erkek")) ||
        (filter === "sets" && text.includes("takım")) ||
        (filter === "dtf" && text.includes("dtf"))
      ) {
        btn.classList.add("active");
      }
    });
  }

  const target = document.getElementById("products");
  if (target) target.scrollIntoView({ behavior: "smooth" });

  renderProducts();
}

function searchProducts() {
  renderProducts();
}

function showWishlist() {
  currentFilter = "wishlist";

  document.querySelectorAll(".product-filters button").forEach(btn => {
    btn.classList.remove("active");
  });

  renderProducts();

  const target = document.getElementById("products");
  if (target) target.scrollIntoView({ behavior: "smooth" });
}

function toggleWishlist() {
  showWishlist();
}

function renderProducts() {
  const grid = document.querySelector(".products-grid");
  if (!grid) return;

  const products = veraxaGetProducts();

  if (!products.length) {
    grid.innerHTML = '<p class="empty">Bu kategoride ürün hazırlanıyor.</p>';
    return;
  }

  grid.innerHTML = products.map(product => {
    const index = window.VERAXA_PRODUCTS.indexOf(product);
    const main = product.images && product.images[0] ? product.images[0] : "";
    const hover = product.images && product.images[1] ? product.images[1] : main;
    const favText = wishlist.includes(product.name) ? "Favoriden Çıkar" : "Favori";

    return `
      <article class="product-card">
        <button class="product-click" type="button" onclick="openProduct(${index})">
          <span class="product-image-wrap">
            ${veraxaImageTag(main, product.name, "primary")}
            ${veraxaImageTag(hover, product.name, "secondary")}
          </span>

          <span class="product-content">
            <small>${escapeHtml(product.label)}</small>
            <strong>${escapeHtml(product.name)}</strong>
            <span>${escapeHtml(product.price)}</span>
          </span>
        </button>

        <div class="product-actions">
          <button type="button" onclick="openProduct(${index})">İncele</button>
          <button type="button" onclick="toggleFavorite(${index})">${favText}</button>
        </div>
      </article>
    `;
  }).join("");
}

function openProduct(index) {
  const product = window.VERAXA_PRODUCTS[index];
  if (!product) return;

  const modal = document.getElementById("productModal");
  const gallery = document.getElementById("modalGallery");

  if (!modal || !gallery) return;

  document.getElementById("modalCategory").textContent = product.label || "";
  document.getElementById("modalName").textContent = product.name || "";
  document.getElementById("modalPrice").textContent = product.price || "";
  document.getElementById("modalDesc").textContent = product.description || "";

  const modalSize = document.getElementById("modalSize");
  if (modalSize) modalSize.value = "";

  const images = Array.isArray(product.images) ? product.images.slice(0, 2) : [];
  gallery.innerHTML = images.map(image => veraxaImageTag(image, product.name, "modal-img")).join("");

  const whatsappButton = document.getElementById("modalWhatsapp");
  if (whatsappButton) {
    whatsappButton.onclick = function () {
      const size = document.getElementById("modalSize")?.value || "Belirtilmedi";

      const msg =
        "Merhaba VÉRAXA, ürün hakkında bilgi almak istiyorum.\n\n" +
        "Ürün: " + product.name + "\n" +
        "Beden: " + size + "\n" +
        "Fiyat: " + product.price;

      window.open("https://wa.me/" + VERAXA_PHONE + "?text=" + encodeURIComponent(msg), "_blank");
    };
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function veraxaBindModalClose() {
  const modal = document.getElementById("productModal");

  if (modal) {
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        closeProductModal();
      }
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeProductModal();
      closeCart();
    }
  });
}

function toggleFavorite(index) {
  const product = window.VERAXA_PRODUCTS[index];
  if (!product) return;

  wishlist = wishlist.includes(product.name)
    ? wishlist.filter(name => name !== product.name)
    : [...wishlist, product.name];

  localStorage.setItem("veraxa_wishlist", JSON.stringify(wishlist));
  veraxaUpdateBadges();
  renderProducts();
}

function addToCart(index) {
  const product = window.VERAXA_PRODUCTS[index];
  if (!product) return;

  cart.push({
    name: product.name,
    price: product.price
  });

  localStorage.setItem("veraxa_cart", JSON.stringify(cart));
  veraxaUpdateBadges();
  openCart();
}

function veraxaUpdateBadges() {
  const wishlistCount = document.getElementById("wishlistCount");
  const cartCount = document.getElementById("cartCount");

  if (wishlistCount) wishlistCount.textContent = wishlist.length;
  if (cartCount) cartCount.textContent = cart.length;

  renderCart();
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  if (!drawer) return;

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  if (!drawer) return;

  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function renderCart() {
  const box = document.getElementById("cartItems");
  if (!box) return;

  if (!cart.length) {
    box.innerHTML = '<p class="empty">Sepet boş.</p>';
    return;
  }

  box.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <b>${escapeHtml(item.name)}</b><br>
      ${escapeHtml(item.price)}<br>
      <button type="button" onclick="removeCart(${index})">Sil</button>
    </div>
  `).join("");
}

function removeCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("veraxa_cart", JSON.stringify(cart));
  veraxaUpdateBadges();
}

function sendCartWhatsApp() {
  if (!cart.length) {
    alert("Sepet boş.");
    return;
  }

  let msg = "Merhaba VÉRAXA, sipariş vermek istiyorum:\n\n";

  cart.forEach((item, index) => {
    msg += `${index + 1}) ${item.name} - ${item.price}\n`;
  });

  window.open("https://wa.me/" + VERAXA_PHONE + "?text=" + encodeURIComponent(msg), "_blank");
}
