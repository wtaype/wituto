const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/personal-Cy3y3zVn.js","assets/footer-ybMcg2RT.js","assets/footer-BDTEmh8m.css","assets/posts-BpKa1luv.js","assets/firebase-CJaRaGK5.js","assets/jquery-BwXq8HW-.js","assets/posts-ZgkIHsf0.css","assets/icons-U16A1v7v.css","assets/publico-Dw2ppmiO.js"])))=>i.map(i=>d[i]);
import{r as j,g as U}from"./jquery-BwXq8HW-.js";/* empty css              */import{i as V,g as B,a as W,b as T,d as $,c as A,q as D,e as L,w as I,f as Y,u as X,s as J,h as H,j as K,k as G,l as Z,o as Q,m as ee}from"./firebase-CJaRaGK5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const oe="modulepreload",te=function(o){return"/wituto/"+o},N={},R=function(t,s,n){let r=Promise.resolve();if(s&&s.length>0){let C=function(m){return Promise.all(m.map(a=>Promise.resolve(a).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),u=d?.nonce||d?.getAttribute("nonce");r=C(s.map(m=>{if(m=te(m),m in N)return;N[m]=!0;const a=m.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":oe,a||(c.as="script"),c.crossOrigin="",c.href=m,u&&c.setAttribute("nonce",u),document.head.appendChild(c),a)return new Promise((p,f)=>{c.addEventListener("load",p),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${m}`)))})}))}function i(d){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=d,window.dispatchEvent(u),!u.defaultPrevented)throw d}return r.then(d=>{for(const u of d||[])u.status==="rejected"&&i(u.reason);return t().catch(i)})};var ae=j();const e=U(ae),ie={apiKey:"AIzaSyDtT9zxd8bNzYlriGKUvotz96J0NZ75GuU",authDomain:"wituto.firebaseapp.com",projectId:"wituto",storageBucket:"wituto.firebasestorage.app",messagingSenderId:"164180756800",appId:"1:164180756800:web:a5888f963443ceb8ef92a5"},_=V(ie),E=B(_),x=W(_),re=o=>{const t=e(`#${o}`);if(!t.length)return console.warn(`Modal #${o} no existe`);t.addClass("active"),e("body").addClass("modal-open"),setTimeout(()=>{t.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},se=o=>{e(`#${o}`).removeClass("active"),e(".modal.active").length||e("body").removeClass("modal-open")},P=()=>{e(".modal").removeClass("active"),e("body").removeClass("modal-open")};window.abrirModal=re;window.cerrarModal=se;window.cerrarTodos=P;(()=>{const o=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal,.close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover,.close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.btn-auth.loading{opacity:.85;cursor:not-allowed;pointer-events:none}.btn-auth.loading i{margin-right:6px}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}#recuperarModal *:not(i),#registroModal *:not(i),#loginModal *:not(i){font-family:'Poppins',segoe ui}.btn-auth i{color:var(--F)}",t=e(".wiModalCss");t.length?t.text(o):e("head").append(`<style class="wiModalCss">${o}</style>`),e(document).off(".wimodal").on("click.wimodal",".close-modal",P).on("click.wimodal",".modal",s=>{e(s.target).is(".modal")&&P()}).on("keydown.wimodal",s=>{s.key==="Escape"&&P()})})();(()=>{const o=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],t=n=>{const[r,i]=e(n).data("tema").split("|");e("html").attr("data-theme",r),(e('meta[name="theme-color"]')[0]||e('<meta name="theme-color">').appendTo("head")[0]).content=i,k("wiTema",`${r}|${i}`,720),e(".mtha").removeClass("mtha"),e(n).addClass("mtha")},s=()=>{e(".witemas").html(o.map(([i,d])=>`<div class="tema" data-tema="${i}|${d}" style="background:${d}"></div>`).join(""));const n=q("wiTema"),r=e(`[data-tema="${n}"]`)[0]||e(".tema").first()[0];r&&t(r),e(document).off("click.witema").on("click.witema",".tema",i=>t(i.currentTarget))};return e(".witemas").length?s():new MutationObserver(n=>n.some(({addedNodes:r})=>[...r].some(i=>i.querySelector?.(".witemas")))&&(s(),!0)).observe(document.body,{childList:1,subtree:1}),{set:t}})();const ge=o=>{if(!o)return"";const t=o.toDate?.()||o._seconds&&new Date(o._seconds*1e3)||o.seconds&&new Date(o.seconds*1e3)||new Date(o);return isNaN(t)?"":`${t.getDate().toString().padStart(2,"0")}/${(t.getMonth()+1).toString().padStart(2,"0")}/${t.getFullYear()}`},he=(o,t=null,s="¡Copiado!")=>{let n;if(o instanceof e)n=o.text()||o.val()||"";else if(o&&(o.nodeType===1||o.nodeType===3))n=o.textContent||o.value||"";else if(typeof o=="string"&&/^[.#\[]/.test(o)&&e(o).length){const d=e(o);n=d.text()||d.val()||""}else n=String(o??"");const r=()=>t?y(t,s,"success",1500):le(s,"success",1500),i=()=>{const d=e("<textarea>").val(n).appendTo("body");d[0].select(),document.execCommand("copy"),d.remove(),r()};navigator.clipboard?.writeText?navigator.clipboard.writeText(n).then(r).catch(i):i()},b=(o,t=!0,s="")=>{const n=e(o);if(t){const r=s||n.text().trim();n.data("txt",r).prop("disabled",!0).html(`${r} <i class="fas fa-spinner fa-spin"></i>`)}else n.prop("disabled",!1).text(n.data("txt")||s||"Continuar")},ne=o=>{const t="smile.html";window.location.href=new URL(t,window.location.href).toString()};function le(o,t="error",s=3e3){const n={success:"fa-check-circle",error:"fa-times-circle",warning:"fa-exclamation-triangle",info:"fa-info-circle"},r={success:"#2E7D32",error:"#D32F2F",warning:"#F9A825",info:"#0288D1"};e("#notificationsContainer").length||e("body").append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');const i=e(`
    <div class="notification" style="background:#fff;border-left:4px solid ${r[t]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${n[t]}" style="color:${r[t]};"></i>
      <span style="flex:1">${o}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);e("#notificationsContainer").append(i),requestAnimationFrame(()=>i.css({opacity:1,transform:"translateX(0)"})),i.find("button").on("click",()=>{i.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>i.remove(),300)}),setTimeout(()=>{i.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>i.remove(),300)},s)}const w=(o,t="success")=>{e(".alert-box").remove();const s={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:n,txt:r,border:i,icon:d}=s[t]||s.error,u=e(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${n};
            color: ${r};
            border-left: 4px solid ${i};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
            
        ">
            <i class="fas ${d}"></i>
            <span>${o}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>u.fadeOut(300,()=>u.remove()),3e3)};function k(o,t,s){try{localStorage.setItem(o,JSON.stringify({value:t,expiry:Date.now()+s*36e5,type:typeof t,isArray:Array.isArray(t)}))}catch(n){console.error("Error savels",n)}}function q(o){try{const t=localStorage.getItem(o);if(!t)return null;const s=JSON.parse(t);return!s||Date.now()>s.expiry?(localStorage.removeItem(o),null):s.value}catch(t){return console.error("Error getls:",t),ce(o),null}}function ce(...o){o.forEach(t=>{t&&typeof t=="string"&&localStorage.removeItem(t)})}function y(o,t,s="top",n=1800){const r={success:"--success",error:"--error",warning:"--warning",info:"--info"},i=r[s]?s:null,d=i?"top":s;if(e("#witip-styles").length||e('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof o=="string"&&(o.includes(",")||o.match(/^[.#a-z]/i)))return e(o).each((pe,O)=>y(O,t,s,n)),e(o);const u=e(o);if(!u.length)return;clearTimeout(u.data("witip-timer")),e(".witip").remove();const C=u.attr("id")||u.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),m=e("<div>",{class:`witip ${d} ${i||""}`,"data-for":C,html:t,css:{"border-color":i?`var(${r[i]})`:"var(--mco)"}});i&&m.css("background-color",`var(${r[i]})`),e("body").append(m);const{left:a,top:l,right:c,bottom:p,width:f,height:g}=u[0].getBoundingClientRect(),h=m.outerWidth(),v=m.outerHeight(),F={top:{x:a+f/2-h/2,y:l-v-8},bottom:{x:a+f/2-h/2,y:p+8},left:{x:a-h-8,y:l+g/2-v/2},right:{x:c+8,y:l+g/2-v/2}};let{x:M,y:S}=F[d];return M=Math.max(8,Math.min(M,window.innerWidth-h-8)),S=Math.max(8,Math.min(S,window.innerHeight-v-8)),m.css({left:M,top:S}),u.data("witip-timer",setTimeout(()=>{m.addClass("show"),n>0&&setTimeout(()=>{m.removeClass("show"),setTimeout(()=>m.remove(),200)},n)},10)),u}function de(){const o=`
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Login</h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Email o usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
        <span class="crearCuenta">Crear cuenta</span>
      </div>
    </div>
  </div>
</div>`,t=`
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear Cuenta</h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`,s=`
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer Contraseña</h2>
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;e(function(){let n="smiles",r="wiAuthIn",i="wiAuthRol",d="usuario";e(document).on("click",".login",()=>abrirModal("loginModal")),e(document).on("click",".registrar",()=>abrirModal("registroModal")),e(".crearCuenta").click(()=>{abrirModal("registroModal"),cerrarModal("loginModal")}),e(".conCuenta").click(()=>{abrirModal("loginModal"),cerrarModal("registroModal")}),e(".olvidastePass").click(()=>{abrirModal("recuperarModal"),cerrarModal("loginModal")}),e(".volverLogin").click(()=>{abrirModal("loginModal"),cerrarModal("recuperarModal")}),e(".togglePass").click(function(){const a=e(this).siblings("input"),l=a.attr("type")==="password";a.attr("type",l?"text":"password"),e(this).toggleClass("fa-eye fa-eye-slash")}),e('.miauth input:not([type="checkbox"])').on("click",function(){y(this,e(this).attr("placeholder"))}),e("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){e(this).val(e(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recEmail","#Recuperar"]].forEach(([a,l])=>{e(a).on("input keyup",c=>{e(l).removeClass("inactivo"),c.key==="Enter"&&(e(l).click(),e(l).addClass("inactivo"))})});const u={regEmail:[a=>a.toLowerCase(),a=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(a)||"Correo inválido"],regUsuario:[a=>a.toLowerCase().replace(/[^a-z0-9_]/g,""),a=>a.length>=4||"Usuario 4-20 caracteres"],regNombre:[a=>a.trim(),a=>a.length>0||"Ingrese nombre"],regApellidos:[a=>a.trim(),a=>a.length>0||"Ingrese apellidos"],regPassword:[a=>a,a=>a.length>=6||"Mínimo 6 caracteres"],regPassword1:[a=>a,a=>a===e("#regPassword").val()||"Contraseñas no coinciden"]};e.each(u,function(a,[l,c]){e(`#${a}`).on("blur",function(){const p=l(e(this).val());e(this).val(p);const f=c(p);f!==!0&&y(this,f,"error")})});let C=!1;e("#regUsuario").on("blur focus",async function(){const a=e(this).val();if(a.length>=3)try{const c=(await T($(x,n,a))).exists();C=!c,y(this,`Usuario ${c?"no disponible":"disponible ✅"}`,c?"error":"success","top",7e3)}catch(l){console.error(l)}});let m=!1;e("#regEmail").on("blur focus",async function(){const a=e(this).val();if(a.length>=3)try{const c=!(await A(D(L(x,n),I("email","==",a)))).empty;m=!c,y(this,`Email ${c?"no disponible":"disponible ✅"}`,c?"error":"success","top",7e3)}catch(l){console.error(l)}}),e("#Registrar").click(async function(){b(this,!0,"Registrando");const a=[[C,e("#regUsuario")[0],"Usuario no disponible"],[m,e("#regEmail")[0],"Email no disponible"],...Object.entries(u).map(([l,[c,p]])=>{const f=e(`#${l}`),g=c(f.val()),h=p(g);return[h===!0,f[0],h!==!0?h:""]})];for(const[l,c,p]of a)if(!l&&p&&(b(this,!1),y(c,p,"error"),c.focus(),!0))return;try{const l=["regEmail","regUsuario","regNombre","regApellidos","regPassword"],[c,p,f,g,h]=l.map(M=>e("#"+M).val().trim()),{user:v}=await Y(E,c,h);await Promise.all([X(v,{displayName:p}),J(v)]),console.log("Registro completo en Auth ✅"+Date());const F=$(x,n,p);await H(F,{usuario:p,email:c,nombre:f,apellidos:g,rol:d,creacion:K(),uid:v.uid}),console.log("Registro completo en Firestore ✅"+Date()),w("Registro completado! ✅")}catch(l){w({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[l.code]||l.message)||console.error(l)}finally{k(r,"wIn",24),k(i,d,24),setTimeout(()=>ne(),3e3),cerrarModal("registroModal"),b(this,!1)}}),e("#Login").click(async function(){b(this,!0,"Iniciando sessión");try{const[a,l]=["#email","#password"].map(g=>e(g).val()),c=a.includes("@"),p=c?null:await T($(x,n,a));if(!c&&!p.exists())throw new Error("Usuario no encontrado");const f=c?a:p.data().email;await G(E,f,l),k(r,"wIn",24),k(i,p.data().rol,24)}catch(a){w({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[a.code]||a.message,"error"),console.error(a)}finally{cerrarModal("loginModal"),b(this,!1)}}),e("#Recuperar").click(async function(){b(this,!0,"Restablecer Contraseña");try{const[a,l]=["#recEmail","#recFechaNacimiento"].map(g=>e(g).val()),c=a.includes("@")?a:await(async()=>{const g=await T($(x,n,a));return g.exists()?g.data().email:null})();if(!c)return w("Usuario no registrado","error");const p=await A(D(L(x,n),I("email","==",c)));if(p.empty)return w("Email incorrecto o no existe","error");if(p.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==l)return w("Fecha de nacimiento incorrecta","error");await Z(E,c),w("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(a){console.error(a)}finally{b(this,!1)}})}),e("body").append(o+t+s)}de();const z=async o=>{const t=window.location.pathname.slice(1);if(!t)if(o){const{personalContenido:i}=await R(async()=>{const{personalContenido:d}=await import("./personal-Cy3y3zVn.js");return{personalContenido:d}},__vite__mapDeps([0,1,2,3,4,5,6,7]));return i(o)}else{const{publicoContenido:i}=await R(async()=>{const{publicoContenido:d}=await import("./publico-Dw2ppmiO.js");return{publicoContenido:d}},__vite__mapDeps([8,1,2,4,5,7]));return i()}const{obtenerPost:s,mostrarPost:n}=await R(async()=>{const{obtenerPost:i,mostrarPost:d}=await import("./posts-BpKa1luv.js");return{obtenerPost:i,mostrarPost:d}},__vite__mapDeps([3,1,2,4,5,6,7]));await s(t)?n(t,o):e(".app").html('<div class="pst-err"><i class="fas fa-exclamation-circle"></i><h2>404</h2><p>Página no encontrada</p><a href="/">Volver</a></div>')};Q(E,async o=>{let t=null;if(o&&(t=q("wiSmile"),!t))try{t=(await A(D(L(x,"smiles"),I("usuario","==",o.displayName)))).docs[0]?.data()||{},k("wiSmile",t,1440)}catch(s){console.error(s)}await z(t)});window.addEventListener("popstate",async()=>await z(q("wiSmile")));e(document).on("click",".bt_salir",async()=>{await ee(E),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(t=>localStorage.removeItem(t))}});export{e as $,w as M,ge as a,E as b,b as c,x as d,q as g,ce as r,k as s,he as w};
