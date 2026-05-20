const VERAXA_FALLBACKS = {
  womenDark: "https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=900",
  womenLight: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=900",
  dress: "https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=900",
  set: "https://images.pexels.com/photos/7679651/pexels-photo-7679651.jpeg?auto=compress&cs=tinysrgb&w=900",

  menBlackTee: "https://images.pexels.com/photos/26967988/pexels-photo-26967988.jpeg?auto=compress&cs=tinysrgb&w=900",
  menDarkTee: "https://images.pexels.com/photos/15544302/pexels-photo-15544302.jpeg?auto=compress&cs=tinysrgb&w=900",
  menPlainTee: "https://images.pexels.com/photos/16701781/pexels-photo-16701781.jpeg?auto=compress&cs=tinysrgb&w=900",
  menOutdoorTee: "https://images.pexels.com/photos/11268392/pexels-photo-11268392.jpeg?auto=compress&cs=tinysrgb&w=900",
  menHoodie: "https://images.pexels.com/photos/19982386/pexels-photo-19982386.jpeg?auto=compress&cs=tinysrgb&w=900",
  menHoodieAlt: "https://images.pexels.com/photos/21702333/pexels-photo-21702333.jpeg?auto=compress&cs=tinysrgb&w=900",

  dtfStudio: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=900",
  dtfTransfer: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=900",
  dtfWorkshop: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=900",
  blankTee: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=900"
};

function veraxaLocalImage(fileName, fallback) {
  return {
    src: "assets/images/products/" + fileName,
    fallback: fallback
  };
}

function veraxaPair(firstFile, secondFile, firstFallback, secondFallback) {
  return [
    veraxaLocalImage(firstFile, firstFallback),
    veraxaLocalImage(secondFile, secondFallback || firstFallback)
  ];
}

window.VERAXA_PRODUCTS = [
  {
    name: "VÉRAXA Fitilli Atlet Siyah",
    price: "₺ 699.00",
    category: "women",
    label: "Kadın",
    images: veraxaPair("01 (1).jpg", "02 (2).jpg", VERAXA_FALLBACKS.womenDark, VERAXA_FALLBACKS.womenDark),
    description: "Fitilli dokulu siyah atlet. Minimal, sade ve günlük luxury görünüm için seçili basic parça."
  },
  {
    name: "VÉRAXA Fitilli Atlet Ekru",
    price: "₺ 699.00",
    category: "women",
    label: "Kadın",
    images: veraxaPair("01 (5).jpg", "02 (6).jpg", VERAXA_FALLBACKS.womenLight, VERAXA_FALLBACKS.womenLight),
    description: "Ekru tonlarda fitilli atlet. Açık renk kombinler ve yazlık sade görünüm için premium basic."
  },
  {
    name: "VÉRAXA Crop Basic Siyah",
    price: "₺ 749.00",
    category: "women",
    label: "Kadın",
    images: veraxaPair("01 (29).jpg", "02 (30).jpg", VERAXA_FALLBACKS.womenDark, VERAXA_FALLBACKS.womenDark),
    description: "Siyah crop basic üst. Rahat kalıp, net siluet ve modern şehir görünümü."
  },
  {
    name: "VÉRAXA Crop Basic Beyaz",
    price: "₺ 749.00",
    category: "women",
    label: "Kadın",
    images: veraxaPair("01 (45).jpg", "02 (46).jpg", VERAXA_FALLBACKS.womenLight, VERAXA_FALLBACKS.womenLight),
    description: "Beyaz crop basic üst. Temiz, sade ve premium günlük kombinler için."
  },
  {
    name: "VÉRAXA Çizgili Polo Siyah",
    price: "₺ 849.00",
    category: "women",
    label: "Kadın",
    images: veraxaPair("01 (49).jpg", "02 (50).jpg", VERAXA_FALLBACKS.womenDark, VERAXA_FALLBACKS.womenDark),
    description: "Siyah çizgili polo formu. Zamansız, net ve günlük şıklığa yakın bir parça."
  },
  {
    name: "VÉRAXA Çizgili Polo Açık Ton",
    price: "₺ 849.00",
    category: "women",
    label: "Kadın",
    images: veraxaPair("01 (53).jpg", "02 (54).jpg", VERAXA_FALLBACKS.womenLight, VERAXA_FALLBACKS.womenLight),
    description: "Açık ton çizgili polo. Hafif, temiz ve yazlık kombinlere uygun luxury basic."
  },
  {
    name: "VÉRAXA Oversize Blouse",
    price: "₺ 999.00",
    category: "women",
    label: "Kadın",
    images: veraxaPair("01 (63).jpg", "02 (64).jpg", VERAXA_FALLBACKS.womenDark, VERAXA_FALLBACKS.womenLight),
    description: "Dökümlü oversize blouse. Rahat form, sade duruş ve premium günlük kullanım."
  },
  {
    name: "VÉRAXA Oversize Striped Tee",
    price: "₺ 899.00",
    category: "women",
    label: "Kadın",
    images: veraxaPair("01 (71).jpg", "02 (72).jpg", VERAXA_FALLBACKS.womenDark, VERAXA_FALLBACKS.womenLight),
    description: "Oversize çizgili tişört. Rahat kalıp ve modern streetwear çizgisi."
  },
  {
    name: "VÉRAXA Blue Midi Dress",
    price: "₺ 1,299.00",
    category: "women",
    label: "Kadın",
    images: veraxaPair("01 (95).jpg", "02 (96).jpg", VERAXA_FALLBACKS.dress, VERAXA_FALLBACKS.dress),
    description: "Mavi midi elbise. Zarif yaka formu, akışkan siluet ve sade premium duruş."
  },
  {
    name: "VÉRAXA Black Polo Dress",
    price: "₺ 1,199.00",
    category: "women",
    label: "Kadın",
    images: veraxaPair("01 (103).jpg", "02 (104).jpg", VERAXA_FALLBACKS.dress, VERAXA_FALLBACKS.dress),
    description: "Siyah polo elbise. Kontrast yaka detayıyla sade, net ve modern görünüm."
  },
  {
    name: "VÉRAXA Grey Two Piece Set",
    price: "₺ 1,699.00",
    category: "sets",
    label: "Takımlar",
    images: veraxaPair("01 (107).jpg", "02 (108).jpg", VERAXA_FALLBACKS.set, VERAXA_FALLBACKS.set),
    description: "Gri ikili takım. Rahat pantolon ve bağlama detaylı üst ile premium günlük set."
  },
  {
    name: "VÉRAXA Navy Two Piece Set",
    price: "₺ 1,699.00",
    category: "sets",
    label: "Takımlar",
    images: veraxaPair("01 (111).jpg", "02 (112).jpg", VERAXA_FALLBACKS.set, VERAXA_FALLBACKS.set),
    description: "Lacivert ikili takım. Dökümlü üst, geniş paça pantolon ve zarif bel detayı."
  },

  {
    name: "VÉRAXA Men Noir Oversize Tee",
    price: "₺ 899.00",
    category: "men",
    label: "Erkek",
    images: [
      VERAXA_FALLBACKS.menBlackTee,
      VERAXA_FALLBACKS.menDarkTee
    ],
    description: "Erkek siyah oversize tişört. Tok kumaş, sade logo dili ve güçlü streetwear görünümü."
  },
  {
    name: "VÉRAXA Men Stone Oversize Tee",
    price: "₺ 899.00",
    category: "men",
    label: "Erkek",
    images: [
      VERAXA_FALLBACKS.menPlainTee,
      VERAXA_FALLBACKS.menOutdoorTee
    ],
    description: "Erkek açık ton oversize tişört. Minimal kombinler için premium basic."
  },
  {
    name: "VÉRAXA Men Signature Hoodie",
    price: "₺ 1,499.00",
    category: "men",
    label: "Erkek",
    images: [
      VERAXA_FALLBACKS.menHoodie,
      VERAXA_FALLBACKS.menHoodieAlt
    ],
    description: "Erkek signature hoodie. Günlük kullanım için rahat kalıp, güçlü görünüm ve premium sweatshirt dokusu."
  },
  {
    name: "VÉRAXA Men Minimal Sweatshirt",
    price: "₺ 1,399.00",
    category: "men",
    label: "Erkek",
    images: [
      VERAXA_FALLBACKS.menHoodieAlt,
      VERAXA_FALLBACKS.menHoodie
    ],
    description: "Erkek minimal sweatshirt. Sade duruş, rahat kalıp ve sezonluk premium streetwear parçası."
  },

  {
    name: "VÉRAXA Custom DTF Siyah Tee",
    price: "Teklif Al",
    category: "dtf",
    label: "DTF STUDIO",
    images: [
      VERAXA_FALLBACKS.dtfStudio,
      VERAXA_FALLBACKS.blankTee
    ],
    description: "Siyah tişört üzerine logo, yazı, illüstrasyon veya özel görsel DTF baskı."
  },
  {
    name: "VÉRAXA Custom DTF Beyaz Tee",
    price: "Teklif Al",
    category: "dtf",
    label: "DTF STUDIO",
    images: [
      VERAXA_FALLBACKS.blankTee,
      VERAXA_FALLBACKS.dtfStudio
    ],
    description: "Beyaz tişört üzerine özel DTF baskı. Marka tasarımı, logo, yazı veya kişisel tasarım."
  },
  {
    name: "VÉRAXA DTF Hoodie Baskı",
    price: "Teklif Al",
    category: "dtf",
    label: "DTF STUDIO",
    images: [
      VERAXA_FALLBACKS.menHoodie,
      VERAXA_FALLBACKS.dtfStudio
    ],
    description: "Hoodie veya sweatshirt üzerine özel DTF baskı uygulaması."
  },
  {
    name: "VÉRAXA A4 DTF Transfer Kağıdı",
    price: "Teklif Al",
    category: "dtf",
    label: "Transfer Kağıdı",
    images: [
      VERAXA_FALLBACKS.dtfTransfer,
      VERAXA_FALLBACKS.dtfStudio
    ],
    description: "A4 ölçüde DTF transfer kağıdı. Kendi tasarımını gönder, baskıya hazır transfer olarak hazırlanır."
  },
  {
    name: "VÉRAXA A3 DTF Transfer Kağıdı",
    price: "Teklif Al",
    category: "dtf",
    label: "Transfer Kağıdı",
    images: [
      VERAXA_FALLBACKS.dtfWorkshop,
      VERAXA_FALLBACKS.dtfTransfer
    ],
    description: "A3 ölçüde DTF transfer kağıdı. Daha büyük tasarımlar, sırt baskısı ve çoklu logo baskıları için."
  },
  {
    name: "VÉRAXA Metre DTF Transfer",
    price: "Teklif Al",
    category: "dtf",
    label: "Transfer Kağıdı",
    images: [
      VERAXA_FALLBACKS.dtfWorkshop,
      VERAXA_FALLBACKS.dtfTransfer
    ],
    description: "Metre bazlı DTF transfer siparişi. Çoklu logo, marka baskısı ve toplu üretim için teklif alınır."
  }
];
