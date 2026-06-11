const products = [
  {
    name: "Urun 1",
    description: "Ilk komisyonlu satis linkin icin yer tutucu.",
    url: "#"
  },
  {
    name: "Urun 2",
    description: "Platformdan aldigin satis ortakligi linkini buraya ekle.",
    url: "#"
  },
  {
    name: "Urun 3",
    description: "Kisa, net ve guven veren urun aciklamasi kullan.",
    url: "#"
  }
];

const grid = document.querySelector("#productGrid");

grid.innerHTML = products.map((product) => `
  <article class="product-card">
    <div class="media" aria-hidden="true"></div>
    <div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    </div>
    <a class="button primary" href="${product.url}" target="_blank" rel="nofollow sponsored noopener">Incele</a>
  </article>
`).join("");
