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
