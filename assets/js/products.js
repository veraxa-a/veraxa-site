function veraxaPad(number) {
  return String(number).padStart(2, "0");
}

function veraxaAsset(path) {
  return "/" + String(path).replace(/^\/+/, "");
}

function veraxaLocalImage(sequence, originalNumber, fallbackUrl) {
  return {
    src: veraxaAsset("assets/images/products/" + veraxaPad(sequence) + " (" + originalNumber + ").jpg"),
    fallback: fallbackUrl
  };
}

function veraxaExternalImage(url) {
  return {
    src: url,
    fallback: url
  };
}

const VERAXA_IMG = {
  womenBlack: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1200",
  womenLight: "https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&w=1200",
  editorial: "https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=1200",
  dress: "https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1200",
  set: "https://images.pexels.com/photos/7679651/pexels-photo-7679651.jpeg?auto=compress&cs=tinysrgb&w=1200",
  menBlack: "https://images.pexels.com/photos/16400892/pexels-photo-16400892.jpeg?auto=compress&cs=tinysrgb&w=1200",
  menWhite: "https://images.pexels.com/photos/19881714/pexels-photo-19881714.jpeg?auto=compress&cs=tinysrgb&w=1200",
  menPrinted: "https://images.pexels.com/photos/36942018/pexels-photo-36942018.jpeg?auto=compress&cs=tinysrgb&w=1200",
  menStudio: "https://images.pexels.com/photos/8498419/pexels-photo-8498419.jpeg?auto=compress&cs=tinysrgb&w=1200",
  hoodie: "https://images.pexels.com/photos/3421683/pexels-photo-3421683.jpeg?auto=compress&cs=tinysrgb&w=1200",
  dtfStudio: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
    description: "Tişört, hoodie ve sweatshirt üzerine özel baskı."
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
    images: [
      veraxaLocalImage(1, 1, VERAXA_IMG.womenBlack),
      veraxaLocalImage(2, 2, VERAXA_IMG.womenLight),
      veraxaLocalImage(3, 3, VERAXA_IMG.editorial)
    ],
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
    images: [
      veraxaLocalImage(1, 29, VERAXA_IMG.womenLight),
      veraxaLocalImage(2, 30, VERAXA_IMG.womenBlack),
      veraxaLocalImage(3, 31, VERAXA_IMG.editorial)
    ],
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
    images: [
      veraxaLocalImage(1, 45, VERAXA_IMG.menBlack),
      veraxaExternalImage(VERAXA_IMG.menBlack),
      veraxaExternalImage(VERAXA_IMG.menWhite)
    ],
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
    images: [
      veraxaLocalImage(1, 49, VERAXA_IMG.editorial),
      veraxaLocalImage(2, 50, VERAXA_IMG.womenBlack),
      veraxaLocalImage(3, 51, VERAXA_IMG.womenLight)
    ],
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
    images: [
      veraxaLocalImage(1, 63, VERAXA_IMG.womenBlack),
      veraxaLocalImage(2, 64, VERAXA_IMG.womenLight),
      veraxaLocalImage(3, 65, VERAXA_IMG.editorial)
    ],
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
    images: [
      veraxaLocalImage(1, 71, VERAXA_IMG.womenLight),
      veraxaLocalImage(2, 72, VERAXA_IMG.womenBlack),
      veraxaLocalImage(3, 73, VERAXA_IMG.editorial)
    ],
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
    images: [
      veraxaLocalImage(1, 95, VERAXA_IMG.dress),
      veraxaLocalImage(2, 96, VERAXA_IMG.editorial)
    ],
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
    images: [
      veraxaLocalImage(1, 103, VERAXA_IMG.dress),
      veraxaLocalImage(2, 104, VERAXA_IMG.womenBlack)
    ],
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
    images: [
      veraxaLocalImage(1, 107, VERAXA_IMG.set),
      veraxaLocalImage(2, 108, VERAXA_IMG.editorial)
    ],
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
    images: [
      veraxaLocalImage(1, 111, VERAXA_IMG.set),
      veraxaLocalImage(2, 112, VERAXA_IMG.womenBlack)
    ],
    description: "Lacivert ikili takım. Dökümlü üst, geniş paça pantolon ve zarif bel detayıyla premium görünüm."
  },
  {
    id: "dtf-black-oversize-tee",
    name: "VÉRAXA Black DTF Oversize Tee",
    price: 999,
    oldPrice: 1299,
    category: "dtf",
    collection: "Custom DTF",
    badge: "DTF Print",
    colorText: "Siyah tişört üzerine özel baskı",
    fit: "Oversize erkek/unisex fit",
    fabric: "Premium cotton DTF uyumlu kumaş",
    images: [
      veraxaExternalImage(VERAXA_IMG.menPrinted),
      veraxaExternalImage(VERAXA_IMG.menBlack),
      veraxaExternalImage(VERAXA_IMG.dtfStudio)
    ],
    description: "Siyah oversize tişört üzerine özel DTF baskı. Logo, yazı, illüstrasyon veya marka tasarımı için uygundur."
  },
  {
    id: "dtf-white-graphic-tee",
    name: "VÉRAXA White Graphic DTF Tee",
    price: 949,
    oldPrice: 1199,
    category: "dtf",
    collection: "Custom DTF",
    badge: "Custom Print",
    colorText: "Beyaz tişört üzerine renkli baskı",
    fit: "Regular erkek/unisex fit",
    fabric: "Soft cotton DTF baskı kumaşı",
    images: [
      veraxaExternalImage(VERAXA_IMG.menWhite),
      veraxaExternalImage(VERAXA_IMG.menStudio),
      veraxaExternalImage(VERAXA_IMG.dtfStudio)
    ],
    description: "Beyaz tişört üzerine özel grafik DTF baskı. Kişisel tasarım, ekip tişörtü veya marka ürünü için hazırlanabilir."
  },
  {
    id: "dtf-hoodie-print",
    name: "VÉRAXA Hoodie DTF Print",
    price: 1499,
    oldPrice: 1899,
    category: "dtf",
    collection: "Custom DTF",
    badge: "Hoodie Print",
    colorText: "Hoodie üzerine ön veya sırt baskı",
    fit: "Relaxed hoodie fit",
    fabric: "Premium 3 iplik hoodie kumaşı",
    images: [
      veraxaExternalImage(VERAXA_IMG.hoodie),
      veraxaExternalImage(VERAXA_IMG.dtfStudio),
      veraxaExternalImage(VERAXA_IMG.menBlack)
    ],
    description: "Hoodie ve sweatshirt üzerine DTF baskı. Büyük sırt baskısı, göğüs logo veya minimal yazı tasarımları uygulanabilir."
  },
  {
    id: "dtf-brand-pack",
    name: "VÉRAXA Brand Print Pack",
    price: 2499,
    oldPrice: 2999,
    category: "dtf",
    collection: "Custom DTF",
    badge: "Brand Pack",
    colorText: "Marka, ekip veya özel seri baskı",
    fit: "Tişört / hoodie seçilebilir",
    fabric: "Ürüne göre premium kumaş",
    images: [
      veraxaExternalImage(VERAXA_IMG.dtfStudio),
      veraxaExternalImage(VERAXA_IMG.menPrinted),
      veraxaExternalImage(VERAXA_IMG.hoodie)
    ],
    description: "Marka, ekip veya özel koleksiyon için DTF baskı paketi. Tasarım kontrolü, ürün seçimi ve baskı konumu birlikte planlanır."
  }
];
