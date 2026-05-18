window.addEventListener("scroll",()=>{

  const header=document.querySelector(".header");

  if(window.scrollY>50){
    header.style.background="rgba(0,0,0,.92)";
  }else{
    header.style.background="linear-gradient(to bottom,rgba(0,0,0,.85),transparent)";
  }

});

const products=[

{
  name:"VÉRAXA Oversize Tee",
  price:"1.290₺",
  image:"https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1200"
},

{
  name:"VÉRAXA Shadow Hoodie",
  price:"2.490₺",
  image:"https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&w=1200"
},

{
  name:"VÉRAXA Essential Black",
  price:"1.590₺",
  image:"https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1200"
}

];

const productSection=document.createElement("section");

productSection.className="products";

productSection.innerHTML=`

<div class="section-title">
  <span>NEW SEASON</span>
  <h2>PRODUCTS</h2>
</div>

<div class="products-grid"></div>

`;

document.body.insertBefore(productSection,document.querySelector(".banner"));

const productsGrid=document.querySelector(".products-grid");

products.forEach(product=>{

  const card=document.createElement("div");

  card.className="product-card";

  card.innerHTML=`

  <img src="${product.image}">

  <div class="product-content">

    <h3>${product.name}</h3>

    <span>${product.price}</span>

    <button onclick="orderProduct('${product.name}')">
      WhatsApp Sipariş
    </button>

  </div>

  `;

  productsGrid.appendChild(card);

});

function orderProduct(productName){

  const message=
  `Merhaba Veraxa,%0A%0A${productName} ürünü için bilgi almak istiyorum.`;

  window.open(
    `https://wa.me/905468853731?text=${message}`,
    "_blank"
  );

}
