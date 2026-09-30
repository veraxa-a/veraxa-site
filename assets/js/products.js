const products = [
  {code:"25MY5001",name:"Müslin Bol Paça Pantolon",detail:"Gri",category:"Kadın",image:"25MY5001-pantolon.jpg"},
  {code:"25MY5001",name:"Müslin Kimono",detail:"Gri",category:"Kadın",image:"25MY5001-kimono.jpg"},
  {code:"25MY5002",name:"Müslin Bol Paça Pantolon",detail:"Lacivert",category:"Kadın",image:"25MY5002.jpg"},
  {code:"25MY5504",name:"Çizgili Tişört",detail:"Farklı renk seçenekleri",category:"Kadın",image:"25MY5504.jpg"},
  {code:"25MY6002",name:"V Yaka Gömlek",detail:"Farklı renk seçenekleri",category:"Kadın",image:"25MY6002.jpg"},
  {code:"25NO4517",name:"Kemerli Elbise",detail:"Saks mavisi",category:"Kadın",image:"25NO4517-elbise.jpg"},
  {code:"25TP305",name:"V Yaka Basic Tişört",detail:"Renk seçenekleri",category:"Kadın",image:"25TP305.jpg"},
  {code:"25VL074",name:"Polo Yaka Elbise",detail:"Siyah",category:"Kadın",image:"25VL074.jpg"},
  {code:"25MY25585",name:"Çizgili Bisiklet Yaka Tişört",detail:"Renk seçenekleri",category:"Kadın",image:"25MY25585.jpg"},
  {code:"26Y005",name:"Günlük Kısa Kollu Üst",detail:"Taş rengi",category:"Kadın",image:"26Y005.jpg"},
  {code:"26Y006",name:"Basic Kısa Kollu Tişört",detail:"Siyah",category:"Kadın",image:"26Y006.jpg"},
  {code:"26Y008",name:"Askılı Basic Üst",detail:"Siyah",category:"Kadın",image:"26Y008.jpg"},
  {code:"26Y009",name:"Basic Kısa Kollu Tişört",detail:"Lacivert",category:"Kadın",image:"26Y009.jpg"},
  {code:"26Y010",name:"Günlük Stil Üstü",detail:"Mavi",category:"Kadın",image:"26Y010.jpg"},
  {code:"26Y020",name:"Basic Tişört",detail:"Renk seçenekleri",category:"Erkek",image:"26Y020.jpg"}
];

const grid=document.querySelector("#productGrid");
const filters=document.querySelector("#categoryFilters");
const search=document.querySelector("#productSearch");
const status=document.querySelector("#productStatus");
const state={category:"Tümü",query:""};
const categories=["Tümü","Kadın","Erkek"];

filters.innerHTML=categories.map(category=>'<button class="filter-button" type="button" data-category="'+category+'" aria-pressed="'+(category===state.category)+'">'+category+'</button>').join("");

function renderProducts(){
  const query=state.query.trim().toLocaleLowerCase("tr-TR");
  const visible=products.filter(product=>(state.category==="Tümü"||product.category===state.category)&&(!query||(product.name+" "+product.detail+" "+product.code).toLocaleLowerCase("tr-TR").includes(query)));
  status.textContent=visible.length+" ürün";
  if(!visible.length){grid.innerHTML='<div class="empty-state">Bu aramada ürün bulunamadı.</div>';return}
  grid.innerHTML=visible.map(product=>{
    const subject=encodeURIComponent("Veraxa ürün bilgisi — "+product.code+" "+product.name);
    const image="assets/products/"+product.image;
    return '<article class="product-card"><a class="product-media" href="mailto:veraxa.contact@gmail.com?subject='+subject+'" aria-label="'+product.name+" "+product.detail+' hakkında bilgi al"><img src="'+image+'" alt="'+product.name+" — "+product.detail+'" loading="lazy"><span class="product-code">'+product.code+'</span></a><div class="product-info"><p class="product-kind">'+product.category+" · "+product.detail+'</p><h3 class="product-title">'+product.name+'</h3><div class="product-bottom"><span class="price-prompt">Fiyat ve beden bilgisi</span><a class="product-link" href="mailto:veraxa.contact@gmail.com?subject='+subject+'">Bilgi al <span aria-hidden="true">↗</span></a></div></div></article>';
  }).join("");
}

filters.addEventListener("click",event=>{
  const button=event.target.closest("button[data-category]");
  if(!button)return;
  state.category=button.dataset.category;
  filters.querySelectorAll("button").forEach(item=>item.setAttribute("aria-pressed",String(item===button)));
  renderProducts();
});
search.addEventListener("input",event=>{state.query=event.target.value;renderProducts()});
document.querySelectorAll("[data-select]").forEach(link=>link.addEventListener("click",()=>{
  state.category=link.dataset.select;
  filters.querySelectorAll("button").forEach(item=>{
    const active=item.dataset.category===state.category;
    item.setAttribute("aria-pressed",String(active));
  });
}));
renderProducts();
