window.addEventListener("scroll",()=>{

  const header=document.querySelector(".header");

  if(window.scrollY>80){

    header.style.padding="18px 60px";
    header.style.background="rgba(0,0,0,.92)";
    header.style.backdropFilter="blur(14px)";

  }else{

    header.style.padding="24px 60px";
    header.style.background="linear-gradient(to bottom,rgba(0,0,0,.85),transparent)";

  }

});
