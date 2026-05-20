function veraxaAsset(path) {
  return "/" + String(path).replace(/^\/+/, "");
}

function veraxaImage(src, fallback) {
  return {
    src: src,
    fallback: fallback || src
  };
}

function veraxaLocal(fileName, fallback) {
  return veraxaImage(veraxaAsset("assets/images/products/" + fileName), fallback);
}

const VERAXA_IMG = {
  womenA: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1200",
  womenB: "https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&w=1200",
  womenC: "https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=1200",
  dress: "https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1200",
  set: "https://images.pexels.com/photos/7679651/pexels-photo-7679651.jpeg?auto=compress&cs=tinysrgb&w=1200",
  menA: "https://images.pexels.com/photos/16400892/pexels-photo-16400892.jpeg?auto=compress&cs=tinysrgb&w=1200",
  menB: "https://images.pexels.com/photos/19881714/pexels-photo-19881714.jpeg?auto=compress&cs=tinysrgb&w=1200",
  menPrint: "https://images.pexels.com/photos/36942018/pexels-photo-36942018.jpeg?auto=compress&cs=tinysrgb&w=1200",
  hoodie: "https://images.pexels.com/photos/3421683/pexels-photo-3421683.jpeg?auto=compress&cs=tinysrgb&w=1200",
  dtf: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
    description: "DTF transfer baskı kağıdı, hazır baskı ve özel tasarım transfer."
  }
];

window.VERAXA_PRODUCTS = [
  {
    id: "fitilli-atlet-siyah",
    name: "VÉRAXA Fitilli Atlet Siyah",
    price: 699,
    oldPrice: 899,
    category: "women",
    collection: "Essentials",
    badge: "New",
    colorText: "Siyah",
    fit: "Slim basic fit",
    fabric: "Fitilli esnek dokulu kumaş",
    images: [
      veraxaLocal("01 (1).jpg", VERAXA_IMG.womenA),
      veraxaLocal("02 (2).jpg", VERAXA_IMG.womenB)
    ],
    description: "Siyah fitilli atlet. Günlük kombinlerde sade, güçlü ve premium bir temel parça."
  },
  {
    id: "fitilli-atlet-beyaz",
    name: "VÉRAXA Fitilli Atlet Beyaz",
    price: 699,
    oldPrice: 899,
    category: "women",
    collection: "Essentials",
    badge: "New",
    colorText: "Beyaz",
    fit: "Slim basic fit",
    fabric: "Fitilli esnek dokulu kumaş",
    images: [
      veraxaLocal("01 (5).jpg", VERAXA_IMG.womenB),
      veraxaLocal("02 (6).jpg", VERAXA_IMG.womenA)
    ],
    description: "Beyaz fitilli atlet. Temiz, minimal ve luxury günlük görünüm için."
  },
  {
    id: "crop-basic-siyah",
    name: "VÉRAXA Crop Basic Siyah",
    price: 749,
    oldPrice: 949,
    category: "women",
    collection: "Essentials",
    badge: "Limited",
    colorText: "Siyah",
    fit: "Crop regular fit",
    fabric: "Yumuşak pamuk karışımlı kumaş",
    images: [
      veraxaLocal("01 (29).jpg", VERAXA_IMG.womenA),
      veraxaLocal("02 (30).jpg", VERAXA_IMG.womenB)
    ],
    description: "Siyah crop basic üst. Jean, etek ve takım altlarıyla net görünüm verir."
  },
  {
    id: "crop-basic-beyaz",
    name: "VÉRAXA Crop Basic Beyaz",
    price: 749,
    oldPrice: 949,
    category: "women",
    collection: "Essentials",
    badge: "Limited",
    colorText: "Beyaz",
    fit: "Crop regular fit",
    fabric: "Yumuşak pamuk karışımlı kumaş",
    images: [
      veraxaLocal("01 (45).jpg", VERAXA_IMG.womenB),
      veraxaLocal("02 (46).jpg", VERAXA_IMG.womenA)
    ],
    description: "Beyaz crop basic üst. Sade, temiz ve modern VÉRAXA görünümü."
  },
  {
    id: "cizgili-polo-siyah",
    name: "VÉRAXA Çizgili Polo Siyah",
    price: 849,
    oldPrice: 1049,
    category: "women",
    collection: "Daily Luxury",
    badge: "Best Match",
    colorText: "Siyah çizgili",
    fit: "Regular polo fit",
    fabric: "Yumuşak örme kumaş",
    images: [
      veraxaLocal("01 (49).jpg", VERAXA_IMG.womenC),
      veraxaLocal("02 (50).jpg", VERAXA_IMG.womenA)
    ],
    description: "Çizgili polo formu. Günlük şıklık için güçlü ve kolay kombinlenen parça."
  },
  {
    id: "cizgili-polo-acik-ton",
    name: "VÉRAXA Çizgili Polo Açık Ton",
    price: 849,
    oldPrice: 1049,
    category: "women",
    collection: "Daily Luxury",
    badge: "Best Match",
    colorText: "Açık çizgili ton",
    fit: "Regular polo fit",
    fabric: "Yumuşak örme kumaş",
    images: [
      veraxaLocal("01 (53).jpg", VERAXA_IMG.womenB),
      veraxaLocal("02 (54).jpg", VERAXA_IMG.womenC)
    ],
    description: "Açık ton çizgili polo. Sade ama premium günlük görünüm."
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
      veraxaLocal("01 (63).jpg", VERAXA_IMG.womenA),
      veraxaLocal("02 (64).jpg", VERAXA_IMG.womenB)
    ],
    description: "Dökümlü ve şık oversize blouse. Sakin ama güçlü görünüm isteyenler için."
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
      veraxaLocal("01 (71).jpg", VERAXA_IMG.womenB),
      veraxaLocal("02 (72).jpg", VERAXA_IMG.womenA)
    ],
    description: "Oversize çizgili tişört. Rahat kalıp ve modern streetwear çizgisi."
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
      veraxaLocal("01 (95).jpg", VERAXA_IMG.dress),
      veraxaLocal("02 (96).jpg", VERAXA_IMG.womenC)
    ],
    description: "Mavi midi elbise. Zarif yaka formu ve modern şehir şıklığı."
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
      veraxaLocal("01 (103).jpg", VERAXA_IMG.dress),
      veraxaLocal("02 (104).jpg", VERAXA_IMG.womenA)
    ],
    description: "Siyah polo elbise. Kontrast yaka detayıyla sade ve güçlü görünüm."
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
      veraxaLocal("01 (107).jpg", VERAXA_IMG.set),
      veraxaLocal("02 (108).jpg", VERAXA_IMG.womenC)
    ],
    description: "Gri ikili takım. Rahat pantolon ve bağlama detaylı üst."
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
      veraxaLocal("01 (111).jpg", VERAXA_IMG.set),
      veraxaLocal("02 (112).jpg", VERAXA_IMG.womenA)
    ],
    description: "Lacivert ikili takım. Dökümlü üst, geniş paça pantolon ve zarif bel detayı."
  },

  {
    id: "men-black-oversize-tee",
    name: "VÉRAXA Men Black Oversize Tee",
    price: 899,
    oldPrice: 1099,
    category: "men",
    collection: "Streetwear",
    badge: "Men",
    colorText: "Siyah",
    fit: "Oversize erkek/unisex fit",
    fabric: "Premium cotton",
    images: [
      veraxaImage(VERAXA_IMG.menA),
      veraxaImage(VERAXA_IMG.menB)
    ],
    description: "Erkek/unisex siyah oversize tişört. Minimal ve güçlü streetwear görünümü."
  },
  {
    id: "men-white-basic-tee",
    name: "VÉRAXA Men White Basic Tee",
    price: 849,
    oldPrice: 999,
    category: "men",
    collection: "Streetwear",
    badge: "Men",
    colorText: "Beyaz",
    fit: "Regular erkek/unisex fit",
    fabric: "Soft cotton",
    images: [
      veraxaImage(VERAXA_IMG.menB),
      veraxaImage(VERAXA_IMG.menA)
    ],
    description: "Beyaz basic erkek/unisex tişört. DTF baskı için de uygun temiz zemin."
  },

  {
    id: "dtf-black-transfer-tee",
    name: "VÉRAXA Black DTF Transfer Tee",
    price: 999,
    oldPrice: 1299,
    category: "dtf",
    collection: "DTF Transfer",
    badge: "DTF",
    colorText: "Siyah tişört transfer baskı",
    fit: "Erkek/unisex",
    fabric: "DTF transfer baskı kağıdı",
    images: [
      veraxaImage(VERAXA_IMG.menPrint),
      veraxaImage(VERAXA_IMG.dtf)
    ],
    description: "Siyah tişört için hazır DTF transfer baskı. Müşteri tişört almaz; uygulanabilir transfer baskı alır."
  },
  {
    id: "dtf-white-transfer-tee",
    name: "VÉRAXA White DTF Transfer Tee",
    price: 949,
    oldPrice: 1199,
    category: "dtf",
    collection: "DTF Transfer",
    badge: "Transfer",
    colorText: "Beyaz tişört transfer baskı",
    fit: "Erkek/unisex",
    fabric: "DTF transfer baskı kağıdı",
    images: [
      veraxaImage(VERAXA_IMG.menB),
      veraxaImage(VERAXA_IMG.dtf)
    ],
    description: "Beyaz tişört için renkli DTF transfer baskı. Kendi tasarımını gönderebilir veya hazır baskı seçebilirsin."
  },
  {
    id: "dtf-hoodie-transfer",
    name: "VÉRAXA Hoodie DTF Transfer",
    price: 1499,
    oldPrice: 1899,
    category: "dtf",
    collection: "DTF Transfer",
    badge: "Hoodie",
    colorText: "Hoodie / sweatshirt transfer baskı",
    fit: "Hoodie transfer",
    fabric: "DTF transfer baskı kağıdı",
    images: [
      veraxaImage(VERAXA_IMG.hoodie),
      veraxaImage(VERAXA_IMG.dtf)
    ],
    description: "Hoodie ve sweatshirt için büyük yüzeyli DTF transfer baskı."
  },
  {
    id: "dtf-a4-transfer-sheet",
    name: "VÉRAXA A4 DTF Transfer Sheet",
    price: 129,
    oldPrice: 179,
    category: "dtf",
    collection: "Transfer Sheet",
    badge: "A4",
    colorText: "A4 transfer kağıdı",
    fit: "Uygulamaya hazır",
    fabric: "DTF transfer film",
    images: [
      veraxaImage(VERAXA_IMG.dtf),
      veraxaImage(VERAXA_IMG.menPrint)
    ],
    description: "A4 DTF transfer baskı kağıdı. Logo, yazı, küçük grafik ve kişisel tasarım için."
  },
  {
    id: "dtf-a3-transfer-sheet",
    name: "VÉRAXA A3 DTF Transfer Sheet",
    price: 219,
    oldPrice: 279,
    category: "dtf",
    collection: "Transfer Sheet",
    badge: "A3",
    colorText: "A3 transfer kağıdı",
    fit: "Büyük ön / sırt baskı",
    fabric: "DTF transfer film",
    images: [
      veraxaImage(VERAXA_IMG.dtf),
      veraxaImage(VERAXA_IMG.hoodie)
    ],
    description: "A3 DTF transfer baskı kağıdı. Büyük ön baskı, sırt baskısı ve geniş grafikler için."
  },
  {
    id: "dtf-meter-transfer",
    name: "VÉRAXA Metre DTF Transfer",
    price: 690,
    oldPrice: 790,
    category: "dtf",
    collection: "Transfer Sheet",
    badge: "Metre",
    colorText: "Metre işi transfer",
    fit: "Toplu üretim",
    fabric: "DTF transfer film",
    images: [
      veraxaImage(VERAXA_IMG.dtf),
      veraxaImage(VERAXA_IMG.menPrint)
    ],
    description: "Metre işi DTF transfer. Marka, ekip, logo dizilimi ve toplu üretim için."
  }
];
