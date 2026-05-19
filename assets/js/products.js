function veraxaPad(number) {
  return String(number).padStart(2, "0");
}

function veraxaAssetPath(path) {
  const clean = String(path).replace(/^\/+/, "");
  if (window.location.protocol === "file:") {
    return window.location.pathname.includes("/pages/") ? "../" + clean : clean;
  }
  return "/" + clean;
}

function veraxaFlatImage(sequence, originalNumber) {
  return veraxaAssetPath("assets/images/products/" + veraxaPad(sequence) + " (" + originalNumber + ").jpg");
}

function veraxaFolderImage(folder, sequence) {
  return veraxaAssetPath("assets/images/products/" + folder + "/" + veraxaPad(sequence) + ".jpg");
}

function veraxaImages(folder, originalNumbers) {
  return originalNumbers.map(function(originalNumber, index) {
    return {
      src: veraxaFlatImage(index + 1, originalNumber),
      fallback: veraxaFolderImage(folder, index + 1)
    };
  });
}

window.VERAXA_CATEGORIES = [
  { id: "women", title: "Kadın", description: "Fitilli atlet, crop basic, çizgili polo, elbise ve premium günlük kombinler." },
  { id: "men", title: "Erkek / Unisex", description: "Oversize basic tee ve unisex streetwear parçaları." },
  { id: "sets", title: "Takımlar", description: "Dökümlü iki parça takımlar ve sezon kombinleri." },
  { id: "dtf", title: "DTF Studio", description: "Kendi tasarımın için tişört, hoodie ve sweatshirt üzerine özel baskı." }
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
    images: veraxaImages("fitilli-atlet-koleksiyonu", [1,2,3,4,5,6,7,8,9,10,11,12,99,100,101,102]),
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
    images: veraxaImages("crop-basic-koleksiyonu", [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]),
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
    images: veraxaImages("oversize-basic-tee", [33,34,35,36,37,38,39,40,41,42]),
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
    images: veraxaImages("cizgili-polo-koleksiyonu", [43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62]),
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
    images: veraxaImages("oversize-blouse", [63,64,65,66,67,68,69,70]),
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
    images: veraxaImages("oversize-striped-tee", [71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94]),
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
    images: veraxaImages("blue-midi-dress", [95,96,97,98]),
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
    images: veraxaImages("black-polo-dress", [103,104,105,106]),
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
    images: veraxaImages("grey-two-piece-set", [107,108,109,110]),
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
    images: veraxaImages("navy-two-piece-set", [111,112,113,114]),
    description: "Lacivert ikili takım. Dökümlü üst, geniş paça pantolon ve zarif bel detayıyla premium görünüm."
  }
];
