async function loadStoreData(){
  const responses=await Promise.all([fetch("content/products.json"),fetch("content/site.json")]);
  if(responses.some(response=>!response.ok))throw new Error("Mağaza verileri yüklenemedi.");
  const [products,settings]=await Promise.all(responses.map(response=>response.json()));
  applySettings(settings);
  initCatalog(products.filter(product=>product.active!==false),settings);
}
function escapeHTML(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
function applySettings(settings){
  const ids={announcement:"announcementText",heroLead:"heroLead",heroNote:"heroNote",catalogDescription:"catalogDescription",catalogFootnote:"catalogFootnote",contactText:"contactText"};
  Object.entries(ids).forEach(([key,id])=>{const el=document.getElementById(id);if(el&&settings[key])el.textContent=settings[key]});
  [["heroTitle","heroTitle"],["catalogTitle","catalogTitle"],["contactTitle","contactTitle"]].forEach(([key,id])=>{
    const el=document.getElementById(id);if(!el||!settings[key])return;
    const lines=settings[key].split("\n");
    el.innerHTML=escapeHTML(lines[0])+(lines[1]?"<br><em>"+escapeHTML(lines.slice(1).join(" "))+"</em>":"");
  });
  [["heroImage","heroImage"],["womenImage","womenImage"],["menImage","menImage"]].forEach(([key,id])=>{const el=document.getElementById(id);if(el&&settings[key])el.src=settings[key]});
  const email=String(settings.email||"veraxa.contact@gmail.com").trim();
  const mailto="mailto:"+encodeURIComponent(email);
  document.querySelectorAll("[data-store-email]").forEach(link=>link.href=mailto+"?subject="+encodeURIComponent("Veraxa ürün bilgisi"));
  const footer=document.getElementById("footerEmail");if(footer){footer.href=mailto;footer.textContent=email}
}
function initCatalog(products,settings){
  const grid=document.querySelector("#productGrid"),filters=document.querySelector("#categoryFilters"),search=document.querySelector("#productSearch"),status=document.querySelector("#productStatus");
  const state={category:"Tümü",query:""};
  const categories=["Tümü",...new Set(products.map(product=>product.category))];
  filters.innerHTML=categories.map(category=>'<button class="filter-button" type="button" data-category="'+escapeHTML(category)+'" aria-pressed="'+(category===state.category)+'">'+escapeHTML(category)+'</button>').join("");
  function renderProducts(){
    const query=state.query.trim().toLocaleLowerCase("tr-TR");
    const visible=products.filter(product=>(state.category==="Tümü"||product.category===state.category)&&(!query||(product.name+" "+product.detail+" "+product.code).toLocaleLowerCase("tr-TR").includes(query)));
    status.textContent=visible.length+" ürün";
    if(!visible.length){grid.innerHTML='<div class="empty-state">Bu aramada ürün bulunamadı.</div>';return}
    grid.innerHTML=visible.map(product=>{
      const subject=encodeURIComponent("Veraxa ürün bilgisi — "+product.code+" "+product.name);
      const email=encodeURIComponent(settings.email||"veraxa.contact@gmail.com");
      const name=escapeHTML(product.name),detail=escapeHTML(product.detail),code=escapeHTML(product.code),category=escapeHTML(product.category),image=escapeHTML(product.image);
      const price=product.price?escapeHTML(product.price):"Fiyat için sor";
      return '<article class="product-card"><a class="product-media" href="mailto:'+email+'?subject='+subject+'" aria-label="'+name+" "+detail+' hakkında bilgi al"><img src="'+image+'" alt="'+name+" — "+detail+'" loading="lazy"><span class="product-code">'+code+'</span></a><div class="product-info"><p class="product-kind">'+category+" · "+detail+'</p><h3 class="product-title">'+name+'</h3><div class="product-bottom"><span class="price-prompt">'+price+'</span><a class="product-link" href="mailto:'+email+'?subject='+subject+'">Bilgi al <span aria-hidden="true">↗</span></a></div></div></article>';
    }).join("");
  }
  filters.addEventListener("click",event=>{const button=event.target.closest("button[data-category]");if(!button)return;state.category=button.dataset.category;filters.querySelectorAll("button").forEach(item=>item.setAttribute("aria-pressed",String(item===button)));renderProducts()});
  search.addEventListener("input",event=>{state.query=event.target.value;renderProducts()});
  document.querySelectorAll("[data-select]").forEach(link=>link.addEventListener("click",()=>{state.category=link.dataset.select;filters.querySelectorAll("button").forEach(item=>item.setAttribute("aria-pressed",String(item.dataset.category===state.category)));renderProducts()}));
  renderProducts();
}
loadStoreData().catch(error=>{const status=document.querySelector("#productStatus");if(status)status.textContent=error.message});
