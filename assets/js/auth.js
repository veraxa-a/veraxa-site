(function(){
  let authMode = "login";

  function loadScript(src){
    return new Promise(function(resolve,reject){
      if(document.querySelector('script[src="'+src+'"]')){
        resolve();
        return;
      }

      const script=document.createElement("script");
      script.src=src;
      script.onload=resolve;
      script.onerror=reject;
      document.head.appendChild(script);
    });
  }

  function getFirebaseConfig(){
    return window.VERAXA_CONFIG && window.VERAXA_CONFIG.firebase
      ? window.VERAXA_CONFIG.firebase.config
      : null;
  }

  function setAuthMessage(message){
    const note=document.querySelector(".auth-note");
    if(note) note.textContent=message;
  }

  function setAuthMode(mode){
    authMode=mode;

    const title=document.querySelector(".auth-box h2");
    const primary=document.querySelector(".auth-primary");
    const switcher=document.getElementById("authSwitch");

    if(title){
      title.textContent=mode==="register" ? "VÉRAXA Kayıt" : "VÉRAXA Hesabı";
    }

    if(primary){
      primary.textContent=mode==="register" ? "Kayıt Ol" : "Giriş Yap";
    }

    if(switcher){
      switcher.innerHTML=mode==="register"
        ? 'Zaten hesabın var mı? <button type="button" onclick="veraxaSwitchAuthMode(\'login\')">Giriş yap</button>'
        : 'Hesabın yok mu? <button type="button" onclick="veraxaSwitchAuthMode(\'register\')">Kayıt ol</button>';
    }
  }

  function renderUser(user){
    const loginButtons=document.querySelectorAll('[onclick="veraxaOpenAuth()"]');

    loginButtons.forEach(function(button){
      if(user){
        button.textContent=user.displayName || user.email || "Hesabım";
      }else{
        button.textContent="Giriş";
      }
    });

    const authBox=document.querySelector(".auth-box");
    if(authBox && user){
      setAuthMessage("Giriş yapıldı: " + (user.email || user.displayName || "VÉRAXA Üyesi"));
    }
  }

  async function initFirebase(){
    const config=getFirebaseConfig();

    if(!config){
      setAuthMessage("Firebase config bulunamadı.");
      return null;
    }

    await loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    await loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js");

    if(!firebase.apps.length){
      firebase.initializeApp(config);
    }

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    firebase.auth().onAuthStateChanged(function(user){
      renderUser(user);
    });

    firebase.auth().getRedirectResult().catch(function(error){
      setAuthMessage("Google giriş hatası: " + error.message);
    });

    return firebase.auth();
  }

  async function emailAuth(){
    const auth=await initFirebase();
    if(!auth) return;

    const email=document.getElementById("authEmail")?.value.trim();
    const password=document.getElementById("authPassword")?.value;

    if(!email || !password){
      setAuthMessage("E-posta ve şifre gir.");
      return;
    }

    try{
      if(authMode==="register"){
        await auth.createUserWithEmailAndPassword(email,password);
        setAuthMessage("Kayıt başarılı.");
      }else{
        await auth.signInWithEmailAndPassword(email,password);
        setAuthMessage("Giriş başarılı.");
      }

      setTimeout(function(){
        if(typeof veraxaCloseAuth==="function") veraxaCloseAuth();
      },700);
    }catch(error){
      if(authMode==="login" && error.code==="auth/user-not-found"){
        setAuthMessage("Bu e-posta kayıtlı değil. Kayıt ol seçeneğini kullan.");
      }else{
        setAuthMessage(error.message);
      }
    }
  }

  async function googleAuth(){
    const auth=await initFirebase();
    if(!auth) return;

    const provider=new firebase.auth.GoogleAuthProvider();

    try{
      await auth.signInWithRedirect(provider);
    }catch(error){
      setAuthMessage("Google giriş hatası: " + error.message);
    }
  }

  async function logout(){
    const auth=await initFirebase();
    if(!auth) return;

    await auth.signOut();
    setAuthMessage("Çıkış yapıldı.");
    renderUser(null);
  }

  function enhanceAuthModal(){
    const authBox=document.querySelector(".auth-box");
    if(!authBox) return;

    const primary=document.querySelector(".auth-primary");
    const ghost=document.querySelector(".auth-ghost");

    if(primary){
      primary.onclick=emailAuth;
    }

    if(ghost){
      ghost.onclick=googleAuth;
    }

    if(!document.getElementById("authSwitch")){
      const switcher=document.createElement("div");
      switcher.id="authSwitch";
      switcher.className="auth-switch";
      authBox.appendChild(switcher);
    }

    if(!document.getElementById("authLogout")){
      const logoutBtn=document.createElement("button");
      logoutBtn.id="authLogout";
      logoutBtn.className="auth-ghost";
      logoutBtn.type="button";
      logoutBtn.textContent="Çıkış Yap";
      logoutBtn.onclick=logout;
      authBox.appendChild(logoutBtn);
    }

    setAuthMode("login");
  }

  window.veraxaSwitchAuthMode=setAuthMode;
  window.veraxaEmailAuth=emailAuth;
  window.veraxaGoogleAuth=googleAuth;
  window.veraxaLogout=logout;

  document.addEventListener("DOMContentLoaded",function(){
    enhanceAuthModal();
    initFirebase();
  });
})();
