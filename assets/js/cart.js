(function(){
  function getCart(){
    return JSON.parse(localStorage.getItem("veraxa_cart") || "[]");
  }

  function saveCart(cart){
    localStorage.setItem("veraxa_cart", JSON.stringify(cart));
  }

  function findProduct(productId){
    return (window.VERAXA_PRODUCTS || []).find(function(product){
      return product.id === productId;
    });
  }

  function money(value){
    if(typeof veraxaMoney === "function"){
      return veraxaMoney(value);
    }

    return "₺ " + Number(value).toLocaleString("tr-TR");
  }

  function escape(value){
    if(typeof veraxaEscape === "function"){
      return veraxaEscape(value);
    }

    return String(value || "").replace(/[&<>"']/g, function(char){
      return {
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&#039;"
      }[char];
    });
  }

  window.veraxaCartApi = {
    get: getCart,
    save: saveCart,
    clear: function(){
      saveCart([]);
      if(typeof veraxaUpdateCounts === "function") veraxaUpdateCounts();
    },
    total: function(){
      return getCart().reduce(function(sum,item){
        return sum + Number(item.price || 0);
      },0);
    },
    count: function(){
      return getCart().length;
    },
    remove: function(index){
      const cart=getCart();
      cart.splice(index,1);
      saveCart(cart);
      if(typeof veraxaUpdateCounts === "function") veraxaUpdateCounts();
    },
    add: function(productId,size){
      const product=findProduct(productId);
      if(!product) return;

      const cart=getCart();
      cart.push({
        id:product.id,
        name:product.name,
        price:product.price,
        size:size || "Belirtilmedi"
      });

      saveCart(cart);

      if(typeof veraxaUpdateCounts === "function") veraxaUpdateCounts();
      if(typeof veraxaOpenCart === "function") veraxaOpenCart();
    },
    whatsappMessage: function(){
      const cart=getCart();

      if(!cart.length){
        return "";
      }

      let message="Merhaba VÉRAXA, sipariş vermek istiyorum:\n\n";

      cart.forEach(function(item,index){
        message +=
          (index + 1) + ") " + item.name + "\n" +
          "Fiyat: " + money(item.price) + "\n" +
          "Beden: " + item.size + "\n\n";
      });

      message += "Toplam: " + money(window.veraxaCartApi.total());

      return message;
    },
    renderSummary: function(containerId){
      const container=document.getElementById(containerId);
      if(!container) return;

      const cart=getCart();

      if(!cart.length){
        container.innerHTML='<p class="empty-state">Sepetin boş.</p>';
        return;
      }

      container.innerHTML =
        cart.map(function(item,index){
          return (
            '<div class="cart-item">' +
              '<strong>' + escape(item.name) + '</strong>' +
              '<span>' + money(item.price) + '</span>' +
              '<small>Beden: ' + escape(item.size) + '</small>' +
              '<button type="button" onclick="veraxaCartApi.remove(' + index + ')">Sil</button>' +
            '</div>'
          );
        }).join("") +
        '<div class="cart-total"><strong>Toplam</strong><span>' + money(window.veraxaCartApi.total()) + '</span></div>';
    }
  };

  document.addEventListener("DOMContentLoaded",function(){
    const cartCount=document.getElementById("cartCount");
    if(cartCount){
      cartCount.textContent=window.veraxaCartApi.count();
    }
  });
})();
