function veraxaPad(number) {
  return String(number).padStart(2, "0");
}

function veraxaRange(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function veraxaImage(folder, imageNumber, originalNumber) {
  return {
    src: "assets/images/products/" + folder + "/" + veraxaPad(imageNumber) + ".jpg",
    fallback: "assets/images/products/" + veraxaPad(imageNumber) + " (" + originalNumber + ").jpg"
  };
}

function veraxaBuildCollection(collection) {
  const products = [];

  for (let i = 0; i < collection.originals.length; i += 2) {
    const productNumber = Math.floor(i / 2);
    const variant = collection.variants[productNumber] || "Look " + veraxaPad(productNumber + 1);

    products.push({
      name: "VÉRAXA " + collection.title + " " + variant,
      price: collection.price,
      category: collection.category || "women",
      label: collection.label || "Kadın",
      images: [
        veraxaImage(collection.folder, i + 1, collection.originals[i]),
        veraxaImage(collection.folder, i + 2, collection.originals[i + 1])
      ],
      description: collection.description
    });
  }

  return products;
}

const VERAXA_COLLECTIONS = [
  {
    folder: "fitilli-atlet-koleksiyonu",
    title: "Fitilli Atlet",
    price: "₺ 699.00",
    category: "women",
    label: "Kadın",
    originals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 99, 100, 101, 102],
    variants: [
      "Siyah",
      "Ekru",
      "Krem",
      "Gri",
      "Kahve",
      "Antrasit",
      "Sezon Rengi 01",
      "Sezon Rengi 02"
    ],
    description: "Fitilli dokulu premium kadın atlet. Günlük luxury kombinler için sade, rahat ve net duruşlu basic parça."
  },
  {
    folder: "crop-basic-koleksiyonu",
    title: "Crop Basic",
    price: "₺ 749.00",
    category: "women",
    label: "Kadın",
    originals: veraxaRange(13, 32),
    variants: [
      "Siyah",
      "Beyaz",
      "Krem",
      "Kahve",
      "Gri",
      "Antrasit",
      "Soft Beige",
      "Stone",
      "Minimal",
      "Signature"
    ],
    description: "Crop formda premium kadın basic üst. Modern kesim, temiz görünüm ve şehir stiline uygun rahat kalıp."
  },
  {
    folder: "oversize-basic-tee",
    title: "Oversize Basic Tee",
    price: "₺ 899.00",
    category: "women",
    label: "Kadın",
    originals: veraxaRange(33, 42),
    variants: [
      "Siyah",
      "Beyaz",
      "Krem",
      "Gri",
      "Daily"
    ],
    description: "Oversize kadın basic tişört. Rahat kalıp, yumuşak doku ve sade premium görünüm."
  },
  {
    folder: "cizgili-polo-koleksiyonu",
    title: "Çizgili Polo",
    price: "₺ 849.00",
    category: "women",
    label: "Kadın",
    originals: veraxaRange(43, 62),
    variants: [
      "Siyah",
      "Açık Ton",
      "Krem",
      "Lacivert",
      "Kahve",
      "Soft",
      "Minimal",
      "Daily",
      "Signature",
      "Sezon"
    ],
    description: "Çizgili polo kadın koleksiyonu. Zamansız çizgi, sade renk dengesi ve günlük şıklık için premium parça."
  },
  {
    folder: "oversize-blouse",
    title: "Oversize Blouse",
    price: "₺ 999.00",
    category: "women",
    label: "Kadın",
    originals: veraxaRange(63, 70),
    variants: [
      "Siyah",
      "Ekru",
      "Soft",
      "Signature"
    ],
    description: "Dökümlü oversize kadın blouse. Rahat form, sade duruş ve premium günlük kullanım için seçili model."
  },
  {
    folder: "oversize-striped-tee",
    title: "Oversize Striped Tee",
    price: "₺ 899.00",
    category: "women",
    label: "Kadın",
    originals: veraxaRange(71, 94),
    variants: [
      "Siyah",
      "Ekru",
      "Krem",
      "Lacivert",
      "Soft Beige",
      "Gri",
      "Daily",
      "Minimal",
      "Signature",
      "Street",
      "Sezon 01",
      "Sezon 02"
    ],
    description: "Oversize çizgili kadın tişört. Rahat kalıp, modern streetwear çizgisi ve sade luxury görünüm."
  },
  {
    folder: "blue-midi-dress",
    title: "Blue Midi Dress",
    price: "₺ 1,299.00",
    category: "women",
    label: "Kadın",
    originals: veraxaRange(95, 98),
    variants: [
      "Soft Blue",
      "Signature Blue"
    ],
    description: "Mavi midi kadın elbise. Zarif yaka formu, akışkan siluet ve sade premium duruş."
  },
  {
    folder: "black-polo-dress",
    title: "Black Polo Dress",
    price: "₺ 1,199.00",
    category: "women",
    label: "Kadın",
    originals: veraxaRange(103, 106),
    variants: [
      "Siyah",
      "Signature"
    ],
    description: "Siyah polo kadın elbise. Kontrast yaka detayıyla sade, net ve modern görünüm."
  },
  {
    folder: "grey-two-piece-set",
    title: "Grey Two Piece Set",
    price: "₺ 1,699.00",
    category: "sets",
    label: "Takımlar",
    originals: veraxaRange(107, 110),
    variants: [
      "Gri",
      "Signature"
    ],
    description: "Gri kadın ikili takım. Rahat pantolon ve bağlama detaylı üst ile premium günlük set."
  },
  {
    folder: "navy-two-piece-set",
    title: "Navy Two Piece Set",
    price: "₺ 1,699.00",
    category: "sets",
    label: "Takımlar",
    originals: veraxaRange(111, 114),
    variants: [
      "Lacivert",
      "Signature"
    ],
    description: "Lacivert kadın ikili takım. Dökümlü üst, geniş paça pantolon ve zarif bel detayı."
  }
];

window.VERAXA_PRODUCTS = VERAXA_COLLECTIONS.flatMap(veraxaBuildCollection);
