const products = [
  {
    name: "Siyah çiçek broş toka",
    category: "Aksesuar",
    description: "Broş trendine uygun, saç veya kıyafet üzerinde kullanılabilen vintage görünümlü parça.",
    price: "$4.68",
    source: "Pinterest trend",
    url: "https://rzekl.com/g/1e8d114494ded226ef3416525dc3e8/?ulp=https%3A%2F%2Fs.click.aliexpress.com%2Fdeep_link.htm%3Faff_short_key%3D_c3s1yQkJ%26dl_target_url%3Dhttps%253A%252F%252Fwww.aliexpress.com%252Fitem%252F1005012458629528.html%253Fpdp_npi%253D6%252540dis%252521USD%25252131.18%2525214.68%252521%252521%252521210.23%25252131.53%252521%25254021013cc617812205158737619e1125%25252112000058460392413%252521affd%252521%252521%252521%2525211%2525210%252521%26hot_product%3D0&i=5&f_id=50002",
    image: "https://images.weserv.nl/?url=ae-pic-a1.aliexpress-media.com/kf/Sb8699b75dc444189b32965ae1b0ab645R.jpg"
  },
  {
    name: "Isısız saç bukle seti",
    category: "Güzellik",
    description: "Saten boneli ve tokalı set; ısı kullanmadan doğal dalga isteyenler için.",
    price: "$7.92",
    source: "Beauty trend",
    url: "https://rzekl.com/g/1e8d114494ded226ef3416525dc3e8/?ulp=https%3A%2F%2Fs.click.aliexpress.com%2Fdeep_link.htm%3Faff_short_key%3D_c3s1yQkJ%26dl_target_url%3Dhttps%253A%252F%252Fwww.aliexpress.com%252Fitem%252F1005012411299861.html%253Fpdp_npi%253D6%252540dis%252521USD%25252152.79%2525217.92%252521%252521%252521355.98%25252153.40%252521%2525402140f88817812204638917072e14bf%25252112000058332430317%252521affd%252521%252521%252521%2525211%2525210%252521%26hot_product%3D0&i=5&f_id=50002",
    image: "https://images.weserv.nl/?url=ae-pic-a1.aliexpress-media.com/kf/S00d8824401f5446d951156de5cbd633eT.jpg"
  },
  {
    name: "Dalga formlu cam pipet",
    category: "Mutfak",
    description: "İçecek sunumu için tekrar kullanılabilir, renkli cam pipet seti.",
    price: "$6.23",
    source: "Google trend",
    url: "https://rzekl.com/g/1e8d114494ded226ef3416525dc3e8/?ulp=https%3A%2F%2Fs.click.aliexpress.com%2Fdeep_link.htm%3Faff_short_key%3D_c3s1yQkJ%26dl_target_url%3Dhttps%253A%252F%252Fwww.aliexpress.com%252Fitem%252F1005008740403923.html%253Fpdp_npi%253D6%252540dis%252521USD%25252112.46%2525216.23%252521%252521%25252184.01%25252142.00%252521%2525402151fce817812189381644138e0fcf%25252112000046542617687%252521affd%252521%252521%252521%2525211%2525210%252521%26hot_product%3D0&i=5&f_id=50002",
    image: "https://images.weserv.nl/?url=ae-pic-a1.aliexpress-media.com/kf/S74a1b12b50724ad2bbdb8bc7375784f8H.jpg"
  },
  {
    name: "Gold baharat standı",
    category: "Mutfak",
    description: "Üç bölmeli, standlı ve düzenli mutfak kullanımı için seçildi.",
    price: "$5.87",
    source: "Home edit",
    url: "https://rzekl.com/g/1e8d114494ded226ef3416525dc3e8/?ulp=https%3A%2F%2Fs.click.aliexpress.com%2Fdeep_link.htm%3Faff_short_key%3D_c3s1yQkJ%26dl_target_url%3Dhttps%253A%252F%252Fwww.aliexpress.com%252Fitem%252F1005012368743979.html%253Fpdp_npi%253D6%252540dis%252521USD%25252173.43%2525215.87%252521%252521%252521495.17%25252139.61%252521%2525402141149b17812191969257726e0fcd%25252112000058193789148%252521affd%252521%252521%252521%2525211%2525210%252521%26hot_product%3D0&i=5&f_id=50002",
    image: "https://images.weserv.nl/?url=ae-pic-a1.aliexpress-media.com/kf/S6639f572b72c4e018dfe589594f356b9n.jpg"
  },
  {
    name: "Dijital bagaj tartısı",
    category: "Seyahat",
    description: "Kompakt LCD ekranlı valiz tartısı; seyahat öncesi pratik kontrol.",
    price: "$4.27",
    source: "Travel pick",
    url: "https://rzekl.com/g/1e8d114494ded226ef3416525dc3e8/?ulp=https%3A%2F%2Fs.click.aliexpress.com%2Fdeep_link.htm%3Faff_short_key%3D_c3s1yQkJ%26dl_target_url%3Dhttps%253A%252F%252Fwww.aliexpress.com%252Fitem%252F1005012454409679.html%253Fpdp_npi%253D6%252540dis%252521USD%25252161.04%2525214.27%252521%252521%252521411.61%25252128.81%252521%2525402101611117812200642767017e0e3d%25252112000058445166137%252521affd%252521%252521%252521%2525211%2525210%252521%26hot_product%3D0&i=5&f_id=50002",
    image: "https://images.weserv.nl/?url=ae-pic-a1.aliexpress-media.com/kf/S7a014c9f0093440b8388fc38d8e30758v.jpg"
  },
  {
    name: "Katlanır spor seyahat çantası",
    category: "Çanta",
    description: "Spor, yüzme ve kısa seyahatler için ayakkabı bölmeli hafif çanta.",
    price: "$7.51",
    source: "Sporty trend",
    url: "https://rzekl.com/g/1e8d114494ded226ef3416525dc3e8/?ulp=https%3A%2F%2Fs.click.aliexpress.com%2Fdeep_link.htm%3Faff_short_key%3D_c3s1yQkJ%26dl_target_url%3Dhttps%253A%252F%252Fwww.aliexpress.com%252Fitem%252F1005012304689261.html%253Fpdp_npi%253D6%252540dis%252521USD%25252137.51%2525217.51%252521%252521%252521252.90%25252150.58%252521%25254021013cc617812198753467634e0eb1%25252112000058042514503%252521affd%252521%252521%252521%2525211%2525210%252521%26hot_product%3D0&i=5&f_id=50002",
    image: "https://images.weserv.nl/?url=ae-pic-a1.aliexpress-media.com/kf/S9a380f5bf40c46f1b2a55e8cea021f66U.jpg"
  },
  {
    name: "A4 dosya organizeri",
    category: "Ofis",
    description: "Belgeler, okul ve evrak düzeni için 100 sayfalık şeffaf klasör.",
    price: "$4.17",
    source: "Office pick",
    url: "https://rzekl.com/g/1e8d114494ded226ef3416525dc3e8/?ulp=https%3A%2F%2Fs.click.aliexpress.com%2Fdeep_link.htm%3Faff_short_key%3D_c3s1yQkJ%26dl_target_url%3Dhttps%253A%252F%252Fwww.aliexpress.com%252Fitem%252F1005012403672692.html%253Fpdp_npi%253D6%252540dis%252521USD%25252159.59%2525214.17%252521%252521%252521401.82%25252128.13%252521%2525402151fce817812212093754058e10e5%25252112000058301176355%252521affd%252521%252521%252521%2525211%2525210%252521%26hot_product%3D0&i=5&f_id=50002",
    image: "https://images.weserv.nl/?url=ae-pic-a1.aliexpress-media.com/kf/Sf2324ea56ac94e76b6e4fdc9a5e3cf617.jpg"
  },
  {
    name: "Geometrik küpe seti",
    category: "Aksesuar",
    description: "Günlük kombinler için çoklu ve sade geometrik küpe seçimi.",
    price: "$5.00",
    source: "Accessory trend",
    url: "https://rzekl.com/g/1e8d114494ded226ef3416525dc3e8/?ulp=https%3A%2F%2Fs.click.aliexpress.com%2Fdeep_link.htm%3Faff_short_key%3D_c3s1yQkJ%26dl_target_url%3Dhttps%253A%252F%252Fwww.aliexpress.com%252Fitem%252F1005012299275333.html%253Fpdp_npi%253D6%252540dis%252521USD%25252133.30%2525215.00%252521%252521%252521224.52%25252133.68%252521%2525402151fd3a17812208736442682e117a%25252112000058025924470%252521affd%252521%252521%252521%2525211%2525210%252521%26hot_product%3D0&i=5&f_id=50002",
    image: "https://images.weserv.nl/?url=ae-pic-a1.aliexpress-media.com/kf/S62230b1156df40d2bbf23a3283bcfeedA.jpg"
  }
];

const grid = document.querySelector("#productGrid");
const filters = document.querySelector("#categoryFilters");
const search = document.querySelector("#productSearch");
const status = document.querySelector("#productStatus");

const state = {
  category: "Tümü",
  query: ""
};

const categories = ["Tümü", ...new Set(products.map((product) => product.category))];

filters.innerHTML = categories.map((category) => `
  <button class="category-tab" type="button" data-category="${category}" aria-pressed="${category === state.category}">
    ${category}
  </button>
`).join("");

function matchesProduct(product) {
  const query = state.query.trim().toLocaleLowerCase("tr-TR");
  const matchesCategory = state.category === "Tümü" || product.category === state.category;
  const text = `${product.name} ${product.category} ${product.description} ${product.source}`.toLocaleLowerCase("tr-TR");
  return matchesCategory && (!query || text.includes(query));
}

function renderProducts() {
  const visibleProducts = products.filter(matchesProduct);

  status.textContent = `${visibleProducts.length} ürün gösteriliyor`;

  if (!visibleProducts.length) {
    grid.innerHTML = `<div class="empty-state">Bu seçim için ürün bulunamadı.</div>`;
    return;
  }

  grid.innerHTML = visibleProducts.map((product, index) => `
    <article class="product-card ${index === 0 ? "featured" : ""}">
      <a class="product-media" href="${product.url}" target="_blank" rel="nofollow sponsored noopener" aria-label="${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </a>
      <div class="product-body">
        <div class="product-meta">
          <span>${product.category}</span>
          <span>${product.source}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
      <div class="product-action">
        <strong>${product.price}</strong>
        <a class="button primary" href="${product.url}" target="_blank" rel="nofollow sponsored noopener">İncele</a>
      </div>
    </article>
  `).join("");
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  state.category = button.dataset.category;
  filters.querySelectorAll("button").forEach((item) => {
    item.setAttribute("aria-pressed", String(item === button));
  });
  renderProducts();
});

search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});

renderProducts();
