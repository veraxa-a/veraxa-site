window.addEventListener("scroll",()=>{

  const header=document.querySelector(".header");

  if(window.scrollY>50){
    header.style.background="rgba(0,0,0,.92)";
  }else{
    header.style.background="linear-gradient(to bottom,rgba(0,0,0,.85),transparent)";
  }

});

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

  card.addEventListener("mouseenter",()=>{

    card.style.transform="translateY(-10px)";

  });

  card.addEventListener("mouseleave",()=>{

    card.style.transform="translateY(0px)";

  });

});
