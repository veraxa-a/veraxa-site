const VERAXA_PRODUCT_FILES = [
  "01 (1).jpg",
  "02 (2).jpg",
  "03.jpg",
  "04 (4).jpg",
  "01 (5).jpg",
  "02 (6).jpg",
  "03 (7).jpg",
  "04.jpg",
  "01 (9).jpg",
  "02 (10).jpg",
  "03 (11).jpg",
  "04 (12).jpg",

  "05.jpg",
  "06.jpg",
  "06 (14).jpg",
  "07.jpg",
  "07 (15).jpg",
  "08.jpg",
  "08 (16).jpg",
  "09 (17).jpg",
  "10 (18).jpg",
  "11 (19).jpg",
  "12 (20).jpg",
  "13 (21).jpg",
  "14 (22).jpg",
  "15 (23).jpg",
  "16 (24).jpg",
  "17 (25).jpg",
  "18 (26).jpg",
  "19 (27).jpg",
  "20 (28).jpg",
  "01 (29).jpg",
  "02 (30).jpg",
  "03 (31).jpg",
  "04 (32).jpg",

  "05 (33).jpg",
  "07 (35).jpg",
  "08 (36).jpg",
  "09 (37).jpg",
  "10 (38).jpg",
  "11 (39).jpg",
  "12 (40).jpg",
  "13 (41).jpg",
  "14 (42).jpg",
  "15 (43).jpg",
  "16 (44).jpg",

  "01 (45).jpg",
  "02 (46).jpg",
  "03 (47).jpg",
  "04 (48).jpg",
  "01 (49).jpg",
  "02 (50).jpg",
  "04 (52).jpg",
  "01 (53).jpg",
  "02 (54).jpg",
  "03 (55).jpg",
  "05 (57).jpg",
  "06 (58).jpg",
  "07 (59).jpg",
  "08 (60).jpg",
  "10 (62).jpg",

  "01 (63).jpg",
  "02 (64).jpg",
  "03 (65).jpg",
  "04 (66).jpg",
  "05 (67).jpg",
  "06 (68).jpg",
  "07 (69).jpg",
  "08 (70).jpg",

  "01 (71).jpg",
  "03 (73).jpg",
  "04 (74).jpg",
  "05 (75).jpg",
  "06 (76).jpg",
  "07 (77).jpg",
  "08 (78).jpg",
  "09 (79).jpg",
  "10 (80).jpg",

  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg"
];

const VERAXA_PRODUCT_NAMES = [
  "Fitilli Atlet Siyah",
  "Fitilli Atlet Ekru",
  "Fitilli Atlet Krem",
  "Fitilli Atlet Gri",
  "Fitilli Atlet Kahve",
  "Fitilli Atlet Antrasit",

  "Crop Basic Siyah",
  "Crop Basic Beyaz",
  "Crop Basic Krem",
  "Crop Basic Kahve",
  "Crop Basic Gri",
  "Crop Basic Stone",
  "Crop Basic Soft",
  "Crop Basic Signature",
  "Crop Basic Minimal",
  "Crop Basic Daily",

  "Oversize Basic Tee Siyah",
  "Oversize Basic Tee Ekru",
  "Oversize Basic Tee Krem",
  "Oversize Basic Tee Gri",
  "Oversize Basic Tee Signature",

  "Çizgili Polo Siyah",
  "Çizgili Polo Açık Ton",
  "Çizgili Polo Krem",
  "Çizgili Polo Lacivert",
  "Çizgili Polo Kahve",
  "Çizgili Polo Soft",
  "Çizgili Polo Minimal",
  "Çizgili Polo Daily",

  "Oversize Blouse Siyah",
  "Oversize Blouse Ekru",
  "Oversize Blouse Soft",
  "Oversize Blouse Signature",

  "Oversize Striped Tee Siyah",
  "Oversize Striped Tee Ekru",
  "Oversize Striped Tee Krem",
  "Oversize Striped Tee Lacivert",
  "Oversize Striped Tee Soft",
  "Oversize Striped Tee Daily",

  "Blue Midi Dress Soft Blue",
  "Blue Midi Dress Signature",
  "Black Polo Dress Siyah",
  "Black Polo Dress Signature",
  "Grey Two Piece Set",
  "Navy Two Piece Set",
  "Premium Set Soft",
  "Premium Set Signature"
];

function veraxaImage(fileName) {
  return {
    src: "assets/images/products/" + fileName,
    fallback: ""
  };
}

function veraxaPriceFor(index) {
  if (index >= 42) return "₺ 1,699.00";
  if (index >= 39) return "₺ 1,299.00";
  if (index >= 29) return "₺ 999.00";
  if (index >= 21) return "₺ 849.00";
  if (index >= 16) return "₺ 899.00";
  if (index >= 6) return "₺ 749.00";
  return "₺ 699.00";
}

function veraxaCategoryFor(index) {
  return index >= 42 ? "sets" : "women";
}

function veraxaLabelFor(index) {
  return index >= 42 ? "Takımlar" : "Kadın";
}

function veraxaDescriptionFor(index) {
  if (index >= 42) {
    return "Kadın ikili takım koleksiyonu. Rahat kalıp, sade görünüm ve premium günlük kullanım için seçili set.";
  }

  if (index >= 39) {
    return "Kadın elbise koleksiyonu. Zarif form, sade siluet ve modern luxury görünüm.";
  }

  if (index >= 33) {
    return "Oversize çizgili kadın tişört. Rahat kalıp, modern çizgi ve günlük luxury stil.";
  }

  if (index >= 29) {
    return "Dökümlü oversize kadın blouse. Rahat form, sade duruş ve premium günlük kullanım.";
  }

  if (index >= 21) {
    return "Çizgili polo kadın koleksiyonu. Zamansız çizgi, sade renk dengesi ve günlük şıklık.";
  }

  if (index >= 16) {
    return "Oversize kadın basic tişört. Rahat kalıp, yumuşak doku ve sade premium görünüm.";
  }

  if (index >= 6) {
    return "Crop formda premium kadın basic üst. Modern kesim, temiz görünüm ve şehir stiline uygun rahat kalıp.";
  }

  return "Fitilli dokulu premium kadın atlet. Günlük luxury kombinler için sade, rahat ve net duruşlu basic parça.";
}

window.VERAXA_PRODUCTS = [];

for (let i = 0; i < VERAXA_PRODUCT_FILES.length; i += 2) {
  const productIndex = Math.floor(i / 2);
  const firstImage = VERAXA_PRODUCT_FILES[i];
  const secondImage = VERAXA_PRODUCT_FILES[i + 1];

  if (!firstImage || !secondImage) continue;

  window.VERAXA_PRODUCTS.push({
    name: "VÉRAXA " + (VERAXA_PRODUCT_NAMES[productIndex] || "Kadın Look " + String(productIndex + 1).padStart(2, "0")),
    price: veraxaPriceFor(productIndex),
    category: veraxaCategoryFor(productIndex),
    label: veraxaLabelFor(productIndex),
    images: [
      veraxaImage(firstImage),
      veraxaImage(secondImage)
    ],
    description: veraxaDescriptionFor(productIndex)
  });
}
