window.VERAXA_CONFIG = {
  build: "veraxa-build-clean-999",
  brand: {
    name: "VÉRAXA",
    slogan: "Luxury Streetwear & Custom DTF Studio",
    domain: "https://veraxa.co",
    instagram: "https://instagram.com/veraxa.co",
    telegram: "https://t.me/nilu_mi",
    whatsappPhone: "905468853731",
    whatsappDisplay: "+90 546 885 37 31"
  },

  currency: "₺",

  shipping: {
    freeShippingLimit: 2500,
    preparation: "1-3 iş günü",
    exchange: "14 gün değişim"
  },

  firebase: {
    enabled: true,
    config: {
      apiKey: "AIzaSyC9IEzvUlZ6JTtw6lVvUyYTsHpveNHeKWc",
      authDomain: "veraxa-2daad.firebaseapp.com",
      projectId: "veraxa-2daad",
      storageBucket: "veraxa-2daad.firebasestorage.app",
      messagingSenderId: "331694913024",
      appId: "1:331694913024:web:33797fbbf85d1330ea8ae5"
    }
  },

  analytics: {
    googleAnalyticsId: "",
    metaPixelId: ""
  },

  seo: {
    title: "VÉRAXA | Luxury Streetwear & Custom DTF Studio",
    description: "VÉRAXA luxury streetwear, kadın koleksiyonu, erkek/unisex parçalar ve custom DTF baskı stüdyosu.",
    image: "https://veraxa.co/assets/images/hero/hero-main.jpg"
  }
};

function veraxaWhatsAppUrl(message) {
  const phone = window.VERAXA_CONFIG.brand.whatsappPhone;
  return "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
}
