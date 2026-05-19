function veraxaPad(number) {
  return String(number).padStart(2, "0");
}

function veraxaAsset(path) {
  return "/" + String(path).replace(/^\/+/, "");
}

function veraxaProductImage(sequence, originalNumber, fallbackUrl) {
  return {
    src: veraxaAsset("assets/images/products/" + veraxaPad(sequence) + " (" + originalNumber + ").jpg"),
    fallback: fallbackUrl
  };
}

function veraxaImageGroup(startNumber, count, fallbackUrl) {
  const images = [];

  for (let index = 0; index < count; index++) {
    images.push(veraxaProductImage(index + 1, startNumber + index, fallbackUrl));
  }

  return images;
}

function veraxaMergeImages(groups, fallbackUrl) {
  let images = [];

  groups.forEach(function(group) {
    images = images.concat(veraxaImageGroup(group.start, group.count, fallbackUrl));
  });

  return images;
}

const VERAXA_FALLBACKS = {
  womenDark: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1200",
  womenLight: "https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&w=1200",
  womenEditorial: "https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=1200",
  men: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1200",
  dress: "https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1200",
  set: "https://images.pexels.com/photos/7679651/pexels-photo-7679651.jpeg?auto=compress&cs=tinysrgb&w=1200"
};

window.VERAXA_CATEGORIES = [
  {
    id: "women",
    title: "Kadın",
    description: "Fitilli atlet, crop basic, çizgili polo, elbise ve premium günlük kombinler."
  },
  {
    id: "men",
    title: "Erkek / Unisex",
    description: "Oversize basic tee ve unisex streetwear parçaları."
  },
  {
    id: "sets",
    title: "Takımlar",
    description: "Dökümlü iki parça takımlar ve sezon kombinleri."
  },
  {
    id: "dtf",
    title: "DTF Studio",
    description: "Kendi tasarımın için tişört, hoodie ve sweatshirt üzerine özel baskı."
  }
];

window.VERAXA_PRODUCTS = [
  {
    id: "fitilli-atlet-koleksiyonu",
    name: "VÉRAXA Fitilli Atlet Koleksiyonu",
    price: 699,
    oldPrice: 899,
    category: "women",
    collection: "Essentials",
    badge: "New Season",
    colorText: "Siyah, beyaz, gri, bej ve sezon renkleri",
    fit: "Slim basic fit",
    fabric: "Fitilli esnek dokulu kumaş",
    images: veraxaMergeImages(
      [
        { start: 1, count: 4 },
        { start: 5, count: 4 },
        { start: 9, count: 4 }
      ],
      VERAXA_FALLBACKS.womenDark
    ),
    description: "Fitilli dokulu premium atlet koleksiyonu. Günlük kombinlerde sade, güçlü ve luxury bir temel parça."
  },
  {
    id: "crop-basic-koleksiyonu",
    name: "VÉRAXA Crop Basic Koleksiyonu",
    price: 749,
    oldPrice: 949,
    category: "women",
    collection: "Essentials",
    badge: "Limited",
    colorText: "Soft nötr ve sezon renkleri",
    fit: "Crop regular fit",
    fabric: "Yumuşak pamuk karışımlı kumaş",
    images: veraxaMergeImages(
      [
        { start: 29, count: 4 },
        { start: 45, count: 4 }
      ],
      VERAXA_FALLBACKS.womenLight
    ),
    description: "Crop formda, yumuşak dokulu premium basic üst koleksiyonu. Jean, etek ve takım altlarıyla net görünüm verir."
  },
  {
    id: "oversize-basic-tee",
    name: "VÉRAXA Oversize Basic Tee",
    price: 899,
    oldPrice: 1099,
    category: "men",
    collection: "Streetwear",
    badge: "Unisex",
    colorText: "Siyah ve basic tonlar",
    fit: "Oversize fit",
    fabric: "Premium cotton",
    images: veraxaMergeImages(
      [
        { start: 45, count: 4 },
        { start: 49, count: 4 }
      ],
      VERAXA_FALLBACKS.men
    ),
    description: "Erkek ve unisex kullanıma uygun oversize basic tişört. Minimal görünüm, güçlü kalıp ve premium streetwear çizgisi."
  },
  {
    id: "cizgili-polo-koleksiyonu",
    name: "VÉRAXA Çizgili Polo Koleksiyonu",
    price: 849,
    oldPrice: 1049,
    category: "women",
    collection: "Daily Luxury",
    badge: "Best Match",
    colorText: "Çizgili sezon tonları",
    fit: "Regular polo fit",
    fabric: "Yumuşak örme kumaş",
    images: veraxaMergeImages(
      [
        { start: 49, count: 4 },
        { start: 53, count: 4 }
      ],
      VERAXA_FALLBACKS.womenEditorial
    ),
    description: "Zamansız çizgili polo formu. Günlük şıklık için güçlü, net ve kolay kombinlenen bir parça."
  },
  {
    id: "oversize-blouse",
    name: "VÉRAXA Oversize Blouse",
    price: 999,
    oldPrice: 1199,
    category: "women",
    collection: "Soft Tailoring",
    badge: "Editorial",
    colorText: "Minimal tonlar",
    fit: "Oversize relaxed fit",
    fabric: "Dökümlü hafif kumaş",
    images: veraxaMergeImages(
      [
        { start: 63, count: 8 }
      ],
      VERAXA_FALLBACKS.womenDark
    ),
    description: "Dökümlü, rahat ve şık oversize blouse modeli. Sakin ama güçlü bir görünüm isteyenler için."
  },
  {
    id: "oversize-striped-tee",
    name: "VÉRAXA Oversize Striped Tee",
    price: 899,
    oldPrice: 1099,
    category: "women",
    collection: "Streetwear",
    badge: "Signature",
    colorText: "Çizgili kontrast tonlar",
    fit: "Oversize fit",
    fabric: "Yumuşak pamuklu kumaş",
    images: veraxaMergeImages(
      [
        { start: 71, count: 12 },
        { start: 83, count: 12 }
      ],
      VERAXA_FALLBACKS.womenLight
    ),
    description: "Oversize çizgili tişört koleksiyonu. Rahat kalıp ve modern streetwear çizgisini bir araya getirir."
  },
  {
    id: "blue-midi-dress",
    name: "VÉRAXA Blue Midi Dress",
    price: 1299,
    oldPrice: 1599,
    category: "women",
    collection: "Dresses",
    badge: "Elegant",
    colorText: "Mavi",
    fit: "Midi dress fit",
    fabric: "Akışkan dokulu kumaş",
    images: veraxaMergeImages(
      [
        { start: 95, count: 4 }
      ],
      VERAXA_FALLBACKS.dress
    ),
    description: "Mavi midi elbise. Zarif yaka formu, akışkan silüet ve modern şehir şıklığı."
  },
  {
    id: "black-polo-dress",
    name: "VÉRAXA Black Polo Dress",
    price: 1199,
    oldPrice: 1499,
    category: "women",
    collection: "Dresses",
    badge: "Minimal",
    colorText: "Siyah",
    fit: "Regular dress fit",
    fabric: "Yumuşak polo dokusu",
    images: veraxaMergeImages(
      [
        { start: 103, count: 4 }
      ],
      VERAXA_FALLBACKS.dress
    ),
    description: "Siyah polo elbise. Kontrast yaka detayıyla sade, modern ve güçlü bir görünüm."
  },
  {
    id: "grey-two-piece-set",
    name: "VÉRAXA Grey Two Piece Set",
    price: 1699,
    oldPrice: 1999,
    category: "sets",
    collection: "Sets",
    badge: "Two Piece",
    colorText: "Gri",
    fit: "Relaxed two piece fit",
    fabric: "Dökümlü rahat kumaş",
    images: veraxaMergeImages(
      [
        { start: 107, count: 4 }
      ],
      VERAXA_FALLBACKS.set
    ),
    description: "Gri ikili takım. Rahat pantolon ve bağlama detaylı üst ile tek hareketle hazır kombin."
  },
  {
    id: "navy-two-piece-set",
    name: "VÉRAXA Navy Two Piece Set",
    price: 1699,
    oldPrice: 1999,
    category: "sets",
    collection: "Sets",
    badge: "Two Piece",
    colorText: "Lacivert",
    fit: "Relaxed two piece fit",
    fabric: "Dökümlü rahat kumaş",
    images: veraxaMergeImages(
      [
        { start: 111, count: 4 }
      ],
      VERAXA_FALLBACKS.set
    ),
    description: "Lacivert ikili takım. Dökümlü üst, geniş paça pantolon ve zarif bel detayıyla premium görünüm."
  }
];
