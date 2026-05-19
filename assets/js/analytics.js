(function(){
  function getConfig(){
    return window.VERAXA_CONFIG && window.VERAXA_CONFIG.analytics
      ? window.VERAXA_CONFIG.analytics
      : {};
  }

  function loadScript(src, callback){
    const script=document.createElement("script");
    script.async=true;
    script.src=src;
    script.onload=callback || function(){};
    document.head.appendChild(script);
  }

  function initGoogleAnalytics(id){
    if(!id) return;

    loadScript("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id), function(){
      window.dataLayer = window.dataLayer || [];

      function gtag(){
        window.dataLayer.push(arguments);
      }

      window.gtag = gtag;

      gtag("js", new Date());
      gtag("config", id);
    });
  }

  function initMetaPixel(id){
    if(!id) return;

    window.fbq = window.fbq || function(){
      window.fbq.callMethod
        ? window.fbq.callMethod.apply(window.fbq, arguments)
        : window.fbq.queue.push(arguments);
    };

    if(!window.fbq.queue) window.fbq.queue = [];
    window.fbq.loaded = true;
    window.fbq.version = "2.0";

    loadScript("https://connect.facebook.net/en_US/fbevents.js", function(){
      window.fbq("init", id);
      window.fbq("track", "PageView");
    });
  }

  window.veraxaTrack = function(eventName, payload){
    if(window.gtag){
      window.gtag("event", eventName, payload || {});
    }

    if(window.fbq){
      window.fbq("trackCustom", eventName, payload || {});
    }
  };

  document.addEventListener("DOMContentLoaded", function(){
    const config=getConfig();

    initGoogleAnalytics(config.googleAnalyticsId);
    initMetaPixel(config.metaPixelId);

    window.veraxaTrack("VeraxaPageReady", {
      build: window.VERAXA_CONFIG?.build || "unknown"
    });
  });
})();
