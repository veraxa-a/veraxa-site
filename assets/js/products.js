function pad(num){
  return String(num).padStart(2,"0");
}

function flatImg(seq, number){
  return `assets/images/products/${pad(seq)} (${number}).jpg`;
}

function folderImg(slug, seq){
  return `assets/images/products/${slug}/${pad(seq)}.jpg`;
}

function makeImages(slug, numbers){
  return numbers.map((number,index)=>({
    src:flatImg(index+1,number),
    fallback:folderImg(slug,index+1)
  }));
}

window.VERAXA_PRODUCTS=[
  {
    name:"VÉRAXA Fitilli Atlet Koleksiyonu",
    price:"₺ 699.00",
    category:"women",
    label:"Kadın",
    images:makeImages("fitilli-atlet-koleksiyonu",[1,2,3,4,5,6,7,8,9,10,11,12,99,100,101,102]),
    description:"Fitilli dokulu premium atlet koleksiyonu. Siyah, beyaz, gri, bej ve sezon renkleriyle modern basic görünüm."
  },
  {
    name:"VÉRAXA Crop Basic Koleksiyonu",
    price:"₺ 749.00",
    category:"women",
    label:"Kadın",
    images:makeImages("crop-basic-koleksiyonu",[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]),
    description:"Crop formda, yumuşak dokulu premium basic üst koleksiyonu."
  },
  {
    name:"VÉRAXA Oversize Basic Tee",
    price:"₺ 899.00",
    category:"men",
    label:"Erkek / Unisex",
    images:makeImages("oversize-basic-tee",[33,34,35,36,37,38,39,40,41,42]),
    description:"Erkek ve unisex kullanıma uygun oversize basic tişört koleksiyonu."
  },
  {
    name:"VÉRAXA Çizgili Polo Koleksiyonu",
    price:"₺ 849.00",
    category:"women",
    label:"Kadın",
    images:makeImages("cizgili-polo-koleksiyonu",[43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62]),
    description:"Zamansız çizgili polo formu. Günlük şıklık için güçlü ve net bir parça."
  },
  {
    name:"VÉRAXA Oversize Blouse",
    price:"₺ 999.00",
    category:"women",
    label:"Kadın",
    images:makeImages("oversize-blouse",[63,64,65,66,67,68,69,70]),
    description:"Dökümlü, rahat ve şık oversize blouse modeli."
  },
  {
    name:"VÉRAXA Oversize Striped Tee",
    price:"₺ 899.00",
    category:"women",
    label:"Kadın",
    images:makeImages("oversize-striped-tee",[71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94]),
    description:"Oversize çizgili tişört koleksiyonu. Rahat kalıp ve modern streetwear çizgisi."
  },
  {
    name:"VÉRAXA Blue Midi Dress",
    price:"₺ 1,299.00",
    category:"women",
    label:"Kadın",
    images:makeImages("blue-midi-dress",[95,96,97,98]),
    description:"Mavi midi elbise. Zarif yaka formu ve akışkan silüet."
  },
  {
    name:"VÉRAXA Black Polo Dress",
    price:"₺ 1,199.00",
    category:"women",
    label:"Kadın",
    images:makeImages("black-polo-dress",[103,104,105,106]),
    description:"Siyah polo elbise. Kontrast yaka detayıyla sade ve modern görünüm."
  },
  {
    name:"VÉRAXA Grey Two Piece Set",
    price:"₺ 1,699.00",
    category:"women",
    label:"Kadın",
    images:makeImages("grey-two-piece-set",[107,108,109,110]),
    description:"Gri ikili takım. Rahat pantolon ve bağlama detaylı üst."
  },
  {
    name:"VÉRAXA Navy Two Piece Set",
    price:"₺ 1,699.00",
    category:"women",
    label:"Kadın",
    images:makeImages("navy-two-piece-set",[111,112,113,114]),
    description:"Lacivert ikili takım. Dökümlü üst, geniş paça pantolon ve zarif bel detayı."
  }
];
