let veraxaCurrentFilter = "all";
let veraxaSearchQuery = "";
let veraxaWishlist = JSON.parse(localStorage.getItem("veraxa_wishlist") || "[]");
let veraxaCart = JSON.parse(localStorage.getItem("veraxa_cart") || "[]");
let veraxaStarted = false;

function veraxaStartWhenReady() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", veraxaInit);
  } else {
    veraxaInit();
  }
}

function veraxaInit() {
  if (veraxaStarted) return;
  veraxaStarted = true;

  veraxaHideLoaderSoon();

  try {
    document.documentElement.setAttribute(
      "data-build",
      window.VERAXA_CONFIG && window.VERAXA_CONFIG.build
        ? window.VERAXA_CONFIG.build
        : "veraxa-build-app-1001"
    );

    veraxaBindEvents();
    veraxaUpdateCounts();
    veraxaRenderFeaturedCategories();
    veraxaWaitAndRenderProducts(0);
  } catch (error) {
    console.error("VÉRAXA init error:", error);
    veraxaShowProductError("Ürün sistemi yüklenirken hata oluştu.");
    veraxaForceHideLoader();
  }
}

function veraxaHideLoaderSoon() {
  window.addEventListener("load", function() {
    setTimeout(veraxaForceHideLoader, 700);
  });

  setTimeout(veraxaForceHideLoader, 1600);
}

function veraxaForceHideLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  loader.classList.add("is-hidden");
  loader.style.opacity = "0";
  loader.style.visibility = "hidden";
  loader.style.pointerEvents = "none";

  setTimeout(function() {
    loader.style.display = "none";
  }, 350);
}

function veraxaBindEvents() {
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      veraxaCloseProduct();
      veraxaCloseCart();
      veraxaCloseAuth();
    }
  });

  const productModal = document.getElementById("productModal");
  if (productModal) {
    productModal.addEventListener("click", function(event) {
      if (event.target === productModal) {
        veraxaCloseProduct();
      }
    });
  }

  const cartDrawer = document.getElementById("cartDrawer");
  if (cartDrawer) {
    cartDrawer.addEventListener("click", function(event) {
      if (event.target === cartDrawer) {
        veraxaCloseCart();
      }
    });
  }
}

function veraxaWaitAndRenderProducts(tryCount) {
  if (Array.isArray(window.VERAXA_PRODUCTS)) {
    veraxaRenderProducts();
    return;
  }

  if (tryCount < 20) {
    setTimeout(function() {
      veraxaWaitAndRenderProducts(tryCount + 1);
    }, 150);
    return;
  }

  veraxaShowProductError("Ürün verileri yüklenemedi. products.js dosyasını kontrol et.");
}

function veraxaMoney(value) {
  return (window.VERAXA_CONFIG && window.VERAXA_CONFIG.currency ? window.VERAXA_CONFIG.currency : "₺") +
    " " +
    Number(value || 0).toLocaleString("tr-TR");
}

function veraxaEscape(value) {
  return String(value || "").replace(/[&<>"']/g, function(char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char];
  });
}

function veraxaImageTag(image, alt, className) {
  const src = typeof image === "string" ? image : image.src;
  const fallback = typeof image === "string" ? "" : image.fallback;
  const fallbackAttr = fallback ? ' data-fallback="' + veraxaEscape(fallback) + '"' : "";

  return '<img src="' + veraxaEscape(src) + '"' + fallbackAttr + ' alt="' + veraxaEscape(alt) + '" class="' + className + '" loading="lazy" onerror="veraxaSwapBrokenImage(this)">';
}

function veraxaSwapBrokenImage(img) {
  const fallback = img.getAttribute("data-fallback");

  if (fallback) {
    img.removeAttribute("data-fallback");
    img.src = fallback;
    return;
  }

  img.style.opacity = "0";
}

function veraxaGetFilteredProducts() {
  const products = Array.isArray(window.VERAXA_PRODUCTS) ? window.VERAXA_PRODUCTS : [];
  const query = veraxaSearchQuery.toLowerCase();

  return products.filter(function(product) {
    const productCollection = String(product.collection || "").toLowerCase();

    const filterOk =
      veraxaCurrentFilter === "all" ||
      product.category === veraxaCurrentFilter ||
      productCollection === veraxaCurrentFilter ||
      (veraxaCurrentFilter === "wishlist" && veraxaWishlist.includes(product.id));

    const searchText = [
      product.name,
      product.description,
      product.collection,
      product.colorText,
      product.fabric,
      product.fit
    ].join(" ").toLowerCase();

    const searchOk = !query || searchText.includes(query);

    return filterOk && searchOk;
  });
}

function veraxaRenderFeaturedCategories() {
  const container = document.getElementById("categoryStrip");
  if (!container || !Array.isArray(window.VERAXA_CATEGORIES)) return;

  container.innerHTML = window.VERAXA_CATEGORIES.map(function(category) {
    return (
      '<button type="button" onclick="veraxaSetFilter(\'' + veraxaEscape(category.id) + '\', this)">' +
        '<span>' + veraxaEscape(category.title) + '</span>' +
        '<small>' + veraxaEscape(category.description) + '</small>' +
      '</button>'
    );
  }).join("");
}

function veraxaRenderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const products = veraxaGetFilteredProducts();

  if (!products.length) {
    grid.innerHTML = '<p class="empty-state">Bu kategoride ürün hazırlanıyor.</p>';
    return;
  }

  grid.innerHTML = products.map(function(product) {
    const index = window.VERAXA_PRODUCTS.indexOf(product);
    const primary = product.images && product.images[0] ? product.images[0] : "";
    const secondary = product.images && product.images[1] ? product.images[1] : primary;
    const isFavorite = veraxaWishlist.includes(product.id);

    return (
      '<article class="product-card">' +
        '<button type="button" class="product-media" onclick="veraxaOpenProduct(' + index + ')">' +
          '<span class="product-badge">' + veraxaEscape(product.badge) + '</span>' +
          veraxaImageTag(primary, product.name, "primary") +
          veraxaImageTag(secondary, product.name, "secondary") +
        '</button>' +

        '<div class="product-info">' +
          '<div>' +
            '<small>' + veraxaEscape(product.collection) + '</small>' +
            '<h3>' + veraxaEscape(product.name) + '</h3>' +
          '</div>' +

          '<div class="price-row">' +
            '<strong>' + veraxaMoney(product.price) + '</strong>' +
            '<span>' + veraxaMoney(product.oldPrice) + '</span>' +
          '</div>' +

          '<div class="product-actions">' +
            '<button type="button" onclick="veraxaOpenProduct(' + index + ')">İncele</button>' +
            '<button type="button" onclick="veraxaToggleWishlist(\'' + veraxaEscape(product.id) + '\')">' +
              (isFavorite ? "Favoriden Çıkar" : "Favori") +
            '</button>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }).join("");
}

function veraxaShowProductError(message) {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  grid.innerHTML = '<p class="empty-state">' + veraxaEscape(message) + '</p>';
}

function veraxaSetFilter(filter, button) {
  veraxaCurrentFilter = filter || "all";

  document.querySelectorAll("[data-filter]").forEach(function(item) {
    item.classList.remove("is-active");
  });

  if (button && button.hasAttribute("data-filter")) {
    button.classList.add("is-active");
  }

  veraxaRenderProducts();

  const productsSection = document.getElementById("products");
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: "smooth" });
  }
}

function veraxaSearchProducts(value) {
  veraxaSearchQuery = value || "";
  veraxaRenderProducts();
}

function veraxaShowWishlist() {
  veraxaCurrentFilter = "wishlist";
  veraxaRenderProducts();

  const productsSection = document.getElementById("products");
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: "smooth" });
  }
}

function veraxaOpenProduct(index) {
  const product = window.VERAXA_PRODUCTS && window.VERAXA_PRODUCTS[index];
  if (!product) return;

  const modal = document.getElementById("productModal");
  const gallery = document.getElementById("modalGallery");
  if (!modal || !gallery) return;

  document.getElementById("modalCategory").textContent = product.collection + " / " + product.category;
  document.getElementById("modalName").textContent = product.name;
  document.getElementById("modalPrice").textContent = veraxaMoney(product.price);
  document.getElementById("modalDesc").textContent = product.description;
  document.getElementById("modalFabric").textContent = product.fabric;
  document.getElementById("modalFit").textContent = product.fit;
  document.getElementById("modalColors").textContent = product.colorText;
  document.getElementById("modalSize").value = "";

  gallery.innerHTML = (product.images || []).map(function(image) {
    return veraxaImageTag(image, product.name, "modal-product-image");
  }).join("");

  document.getElementById("modalAddCart").onclick = function() {
    veraxaAddToCart(product.id);
  };

  document.getElementById("modalWhatsapp").onclick = function() {
    const size = document.getElementById("modalSize").value || "Belirtilmedi";

    const message =
      "Merhaba VÉRAXA, ürün hakkında bilgi almak istiyorum:\n\n" +
      "Ürün: " + product.name + "\n" +
      "Fiyat: " + veraxaMoney(product.price) + "\n" +
      "Beden: " + size;

    window.open(veraxaWhatsAppUrl(message), "_blank");
  };

  modal.classList.add("is-open");
  document.body.classList.add("is-locked");
}

function veraxaCloseProduct() {
  const modal = document.getElementById("productModal");
  if (modal) modal.classList.remove("is-open");
  document.body.classList.remove("is-locked");
}

function veraxaToggleWishlist(productId) {
  if (veraxaWishlist.includes(productId)) {
    veraxaWishlist = veraxaWishlist.filter(function(id) {
      return id !== productId;
    });
  } else {
    veraxaWishlist.push(productId);
  }

  localStorage.setItem("veraxa_wishlist", JSON.stringify(veraxaWishlist));
  veraxaUpdateCounts();
  veraxaRenderProducts();
}

function veraxaAddToCart(productId) {
  const product = (window.VERAXA_PRODUCTS || []).find(function(item) {
    return item.id === productId;
  });

  if (!product) return;

  const sizeSelect = document.getElementById("modalSize");
  const size = sizeSelect ? (sizeSelect.value || "Belirtilmedi") : "Belirtilmedi";

  veraxaCart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    size: size
  });

  localStorage.setItem("veraxa_cart", JSON.stringify(veraxaCart));
  veraxaUpdateCounts();
  veraxaOpenCart();
}

function veraxaUpdateCounts() {
  veraxaCart = JSON.parse(localStorage.getItem("veraxa_cart") || "[]");

  const wishlistCount = document.getElementById("wishlistCount");
  const cartCount = document.getElementById("cartCount");

  if (wishlistCount) wishlistCount.textContent = veraxaWishlist.length;
  if (cartCount) cartCount.textContent = veraxaCart.length;

  veraxaRenderCart();
}

function veraxaOpenCart() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.classList.add("is-open");
  document.body.classList.add("is-locked");
}

function veraxaCloseCart() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.classList.remove("is-open");
  document.body.classList.remove("is-locked");
}

function veraxaRenderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  if (!veraxaCart.length) {
    container.innerHTML = '<p class="empty-state">Sepetin boş.</p>';
    return;
  }

  container.innerHTML = veraxaCart.map(function(item, index) {
    return (
      '<div class="cart-item">' +
        '<strong>' + veraxaEscape(item.name) + '</strong>' +
        '<span>' + veraxaMoney(item.price) + '</span>' +
        '<small>Beden: ' + veraxaEscape(item.size) + '</small>' +
        '<button type="button" onclick="veraxaRemoveCartItem(' + index + ')">Sil</button>' +
      '</div>'
    );
  }).join("");
}

function veraxaRemoveCartItem(index) {
  veraxaCart.splice(index, 1);
  localStorage.setItem("veraxa_cart", JSON.stringify(veraxaCart));
  veraxaUpdateCounts();
}

function veraxaSendCartWhatsApp() {
  if (!veraxaCart.length) {
    alert("Sepet boş.");
    return;
  }

  let message = "Merhaba VÉRAXA, sipariş vermek istiyorum:\n\n";

  veraxaCart.forEach(function(item, index) {
    message +=
      (index + 1) + ") " + item.name + "\n" +
      "Fiyat: " + veraxaMoney(item.price) + "\n" +
      "Beden: " + item.size + "\n\n";
  });

  window.open(veraxaWhatsAppUrl(message), "_blank");
}

function veraxaOpenAuth() {
  const modal = document.getElementById("authModal");
  if (modal) {
    modal.classList.add("is-open");
    document.body.classList.add("is-locked");
  }
}

function veraxaCloseAuth() {
  const modal = document.getElementById("authModal");
  if (modal) {
    modal.classList.remove("is-open");
    document.body.classList.remove("is-locked");
  }
}

veraxaStartWhenReady();
