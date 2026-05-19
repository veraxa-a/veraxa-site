const VERAXA_PHONE="905468853731";

let currentFilter="all";
let wishlist=JSON.parse(localStorage.getItem("veraxa_wishlist")||"[]");
let cart=JSON.parse(localStorage.getItem("veraxa_cart")||"[]");

document.addEventListener("DOMContentLoaded",()=>{
  renderProducts();
  bindModalClose();
  updateBadges();
  hideLoaderSoon();
});

function hideLoaderSoon(){
  function hideLoader(){
    const loader=document.getElementById("loader");
    if(!loader) return;

    loader.classList.add("hide");

    setTimeout(()=>{
      loader.style.display="none";
    },450);
  }

  window.addEventListener("load",()=>{
    setTimeout(hideLoader,1200);
  });

  setTimeout(hideLoader,2500);
}

function escapeHtml(value){
  return String(value||"").replace(/[&<>"']/g,char=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "\"":"&quot;",
    "'":"&#039;"
  }[char]));
}

function swapBrokenImage(img){
  const fallback=img.getAttribute("data-fallback");

  if(fallback){
    img.removeAttribute("data-fallback");
    img.src=fallback;
    return;
  }

  img.style.display="none";
}

function imageTag(image,alt,className){
  const src=typeof image==="string" ? image : image.src;
  const fallback=typeof image==="string" ? "" : image.fallback;
  const fb=fallback ? `data-fallback="${escapeHtml(fallback)}"` : "";

  return `<img src="${escapeHtml(src)}" ${fb} alt="${escapeHtml(alt)}" class="${className}" loading="lazy" onerror="swapBrokenImage(this)">`;
}

function getProducts(){
  const products=Array.isArray(window.VERAXA_PRODUCTS) ? window.VERAXA_PRODUCTS : [];
  const query=(document.getElementById("searchInput")?.value||"").toLowerCase();

  return products.filter(product=>{
    const filterOk=
      currentFilter==="all" ||
      product.category===currentFilter ||
      (currentFilter==="wishlist" && wishlist.includes(product.name));

    const searchOk=
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.label.toLowerCase().includes(query);

    return filterOk && searchOk;
  });
}

function filterProducts(filter,button){
  currentFilter=filter;

  document.querySelectorAll(".product-filters button").forEach(btn=>{
    btn.classList.remove("active");
  });

  if(button){
    button.classList.add("active");
  }

  document.getElementById("products")?.scrollIntoView({behavior:"smooth"});
  renderProducts();
}

function searchProducts(){
  renderProducts();
}

function showWishlist(){
  currentFilter="wishlist";

  document.querySelectorAll(".product-filters button").forEach(btn=>{
    btn.classList.remove("active");
  });

  renderProducts();
  document.getElementById("products")?.scrollIntoView({behavior:"smooth"});
}

function toggleWishlist(){
  showWishlist();
}

function renderProducts(){
  const grid=document.querySelector(".products-grid");
  if(!grid) return;

  const products=getProducts();

  if(!products.length){
    grid.innerHTML='<p class="empty">Bu kategoride ürün hazırlanıyor.</p>';
    return;
  }

  grid.innerHTML=products.map(product=>{
    const index=window.VERAXA_PRODUCTS.indexOf(product);
    const main=product.images[0];
    const hover=product.images[1]||main;
    const fav=wishlist.includes(product.name) ? "Favoriden Çıkar" : "Favori";

    return `
      <article class="product-card">
        <button class="product-click" type="button" onclick="openProduct(${index})">
          <span class="product-image-wrap">
            ${imageTag(main,product.name,"primary")}
            ${imageTag(hover,product.name,"secondary")}
          </span>
          <span class="product-content">
            <small>${escapeHtml(product.label)}</small>
            <strong>${escapeHtml(product.name)}</strong>
            <span>${escapeHtml(product.price)}</span>
          </span>
        </button>

        <div class="product-actions">
          <button onclick="addToCart(${index})">Sepete Ekle</button>
          <button onclick="toggleFavorite(${index})">${fav}</button>
        </div>
      </article>
    `;
  }).join("");
}

function openProduct(index){
  const product=window.VERAXA_PRODUCTS[index];
  if(!product) return;

  const modal=document.getElementById("productModal");
  const gallery=document.getElementById("modalGallery");

  document.getElementById("modalCategory").textContent=product.label;
  document.getElementById("modalName").textContent=product.name;
  document.getElementById("modalPrice").textContent=product.price;
  document.getElementById("modalDesc").textContent=product.description;
  document.getElementById("modalSize").value="";

  gallery.innerHTML=product.images.map(image=>{
    return imageTag(image,product.name,"modal-img");
  }).join("");

  document.getElementById("modalWhatsapp").onclick=function(){
    const size=document.getElementById("modalSize").value||"Belirtilmedi";

    const msg=`Merhaba VÉRAXA, ${product.name} ürünü için bilgi almak istiyorum.\n\nBeden: ${size}\nFiyat: ${product.price}`;

    window.open(
      "https://wa.me/"+VERAXA_PHONE+"?text="+encodeURIComponent(msg),
      "_blank"
    );
  };

  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeProductModal(){
  document.getElementById("productModal")?.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function bindModalClose(){
  const modal=document.getElementById("productModal");

  if(modal){
    modal.addEventListener("click",event=>{
      if(event.target===modal){
        closeProductModal();
      }
    });
  }

  document.addEventListener("keydown",event=>{
    if(event.key==="Escape"){
      closeProductModal();
      closeCart();
    }
  });
}

function toggleFavorite(index){
  const product=window.VERAXA_PRODUCTS[index];
  if(!product) return;

  wishlist=wishlist.includes(product.name)
    ? wishlist.filter(name=>name!==product.name)
    : [...wishlist,product.name];

  localStorage.setItem("veraxa_wishlist",JSON.stringify(wishlist));
  updateBadges();
  renderProducts();
}

function addToCart(index){
  const product=window.VERAXA_PRODUCTS[index];
  if(!product) return;

  cart.push({
    name:product.name,
    price:product.price
  });

  localStorage.setItem("veraxa_cart",JSON.stringify(cart));
  updateBadges();
  openCart();
}

function updateBadges(){
  const wishlistCount=document.getElementById("wishlistCount");
  const cartCount=document.getElementById("cartCount");

  if(wishlistCount){
    wishlistCount.textContent=wishlist.length;
  }

  if(cartCount){
    cartCount.textContent=cart.length;
  }

  renderCart();
}

function openCart(){
  document.getElementById("cartDrawer")?.classList.add("open");
}

function closeCart(){
  document.getElementById("cartDrawer")?.classList.remove("open");
}

function renderCart(){
  const box=document.getElementById("cartItems");
  if(!box) return;

  if(!cart.length){
    box.innerHTML='<p class="empty">Sepet boş.</p>';
    return;
  }

  box.innerHTML=cart.map((item,index)=>`
    <div class="cart-item">
      <b>${escapeHtml(item.name)}</b><br>
      ${escapeHtml(item.price)}<br>
      <button onclick="removeCart(${index})">Sil</button>
    </div>
  `).join("");
}

function removeCart(index){
  cart.splice(index,1);
  localStorage.setItem("veraxa_cart",JSON.stringify(cart));
  updateBadges();
}

function sendCartWhatsApp(){
  if(!cart.length){
    alert("Sepet boş.");
    return;
  }

  let msg="Merhaba VÉRAXA, sipariş vermek istiyorum:\n\n";

  cart.forEach((item,i)=>{
    msg+=`${i+1}) ${item.name} - ${item.price}\n`;
  });

  window.open(
    "https://wa.me/"+VERAXA_PHONE+"?text="+encodeURIComponent(msg),
    "_blank"
  );
}
