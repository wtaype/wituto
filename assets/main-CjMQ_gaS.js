const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/personal-CUFB4Wff.js","assets/footer-DB98J1rq.js","assets/footer-CllRp9-2.css","assets/posts-DBBlEP1A.js","assets/firebase-CJaRaGK5.js","assets/jquery-BwXq8HW-.js","assets/icons-U16A1v7v.css","assets/publico-qoSKG3JQ.js"])))=>i.map(i=>d[i]);
import{r as z,g as U}from"./jquery-BwXq8HW-.js";/* empty css              */import{i as V,g as B,a as W,b as R,d as P,c as I,q as A,e as q,w as D,f as Y,u as J,s as H,h as K,j as G,k as Z,l as X,o as Q,m as ee}from"./firebase-CJaRaGK5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function l(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=l(i);fetch(i.href,r)}})();const te="modulepreload",oe=function(a){return"/wituto/"+a},_={},L=function(o,l,c){let i=Promise.resolve();if(l&&l.length>0){let y=function(m){return Promise.all(m.map(t=>Promise.resolve(t).then(s=>({status:"fulfilled",value:s}),s=>({status:"rejected",reason:s}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),u=d?.nonce||d?.getAttribute("nonce");i=y(l.map(m=>{if(m=oe(m),m in _)return;_[m]=!0;const t=m.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${s}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":te,t||(n.as="script"),n.crossOrigin="",n.href=m,u&&n.setAttribute("nonce",u),document.head.appendChild(n),t)return new Promise((p,f)=>{n.addEventListener("load",p),n.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${m}`)))})}))}function r(d){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=d,window.dispatchEvent(u),!u.defaultPrevented)throw d}return i.then(d=>{for(const u of d||[])u.status==="rejected"&&r(u.reason);return o().catch(r)})};var ae=z();const e=U(ae),re={apiKey:"AIzaSyDtT9zxd8bNzYlriGKUvotz96J0NZ75GuU",authDomain:"wituto.firebaseapp.com",projectId:"wituto",storageBucket:"wituto.firebasestorage.app",messagingSenderId:"164180756800",appId:"1:164180756800:web:a5888f963443ceb8ef92a5"},T=V(re),E=B(T),x=W(T),ie=a=>{const o=e(`#${a}`);if(!o.length)return console.warn(`Modal #${a} no existe`);o.addClass("active"),e("body").addClass("modal-open"),setTimeout(()=>{o.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},se=a=>{e(`#${a}`).removeClass("active"),e(".modal.active").length||e("body").removeClass("modal-open")},$=()=>{e(".modal").removeClass("active"),e("body").removeClass("modal-open")};window.abrirModal=ie;window.cerrarModal=se;window.cerrarTodos=$;(()=>{const a=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal,.close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover,.close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.btn-auth.loading{opacity:.85;cursor:not-allowed;pointer-events:none}.btn-auth.loading i{margin-right:6px}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}#recuperarModal *:not(i),#registroModal *:not(i),#loginModal *:not(i){font-family:'Poppins',segoe ui}.btn-auth i{color:var(--F)}",o=e(".wiModalCss");o.length?o.text(a):e("head").append(`<style class="wiModalCss">${a}</style>`),e(document).off(".wimodal").on("click.wimodal",".close-modal",$).on("click.wimodal",".modal",l=>{e(l.target).is(".modal")&&$()}).on("keydown.wimodal",l=>{l.key==="Escape"&&$()})})();(()=>{const a=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],o=c=>{const[i,r]=e(c).data("tema").split("|");e("html").attr("data-theme",i),(e('meta[name="theme-color"]')[0]||e('<meta name="theme-color">').appendTo("head")[0]).content=r,k("wiTema",`${i}|${r}`,720),e(".mtha").removeClass("mtha"),e(c).addClass("mtha")},l=()=>{e(".witemas").html(a.map(([r,d])=>`<div class="tema" data-tema="${r}|${d}" style="background:${d}"></div>`).join(""));const c=N("wiTema"),i=e(`[data-tema="${c}"]`)[0]||e(".tema").first()[0];i&&o(i),e(document).off("click.witema").on("click.witema",".tema",r=>o(r.currentTarget))};return e(".witemas").length?l():new MutationObserver(c=>c.some(({addedNodes:i})=>[...i].some(r=>r.querySelector?.(".witemas")))&&(l(),!0)).observe(document.body,{childList:1,subtree:1}),{set:o}})();const fe=a=>{if(!a)return"";const o=a.toDate?.()||a._seconds&&new Date(a._seconds*1e3)||a.seconds&&new Date(a.seconds*1e3)||new Date(a);return isNaN(o)?"":`${o.getDate().toString().padStart(2,"0")}/${(o.getMonth()+1).toString().padStart(2,"0")}/${o.getFullYear()}`},w=(a,o=!0,l="")=>{const c=e(a);if(o){const i=l||c.text().trim();c.data("txt",i).prop("disabled",!0).html(`${i} <i class="fas fa-spinner fa-spin"></i>`)}else c.prop("disabled",!1).text(c.data("txt")||l||"Continuar")},ne=a=>{const o="smile.html";window.location.href=new URL(o,window.location.href).toString()},b=(a,o="success")=>{e(".alert-box").remove();const l={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:c,txt:i,border:r,icon:d}=l[o]||l.error,u=e(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${c};
            color: ${i};
            border-left: 4px solid ${r};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
            
        ">
            <i class="fas ${d}"></i>
            <span>${a}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>u.fadeOut(300,()=>u.remove()),3e3)};function k(a,o,l){try{localStorage.setItem(a,JSON.stringify({value:o,expiry:Date.now()+l*36e5,type:typeof o,isArray:Array.isArray(o)}))}catch(c){console.error("Error savels",c)}}function N(a){try{const o=localStorage.getItem(a);if(!o)return null;const l=JSON.parse(o);return!l||Date.now()>l.expiry?(localStorage.removeItem(a),null):l.value}catch(o){return console.error("Error getls:",o),le(a),null}}function le(...a){a.forEach(o=>{o&&typeof o=="string"&&localStorage.removeItem(o)})}function M(a,o,l="top",c=1800){const i={success:"--success",error:"--error",warning:"--warning",info:"--info"},r=i[l]?l:null,d=r?"top":l;if(e("#witip-styles").length||e('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof a=="string"&&(a.includes(",")||a.match(/^[.#a-z]/i)))return e(a).each((de,j)=>M(j,o,l,c)),e(a);const u=e(a);if(!u.length)return;clearTimeout(u.data("witip-timer")),e(".witip").remove();const y=u.attr("id")||u.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),m=e("<div>",{class:`witip ${d} ${r||""}`,"data-for":y,html:o,css:{"border-color":r?`var(${i[r]})`:"var(--mco)"}});r&&m.css("background-color",`var(${i[r]})`),e("body").append(m);const{left:t,top:s,right:n,bottom:p,width:f,height:h}=u[0].getBoundingClientRect(),g=m.outerWidth(),v=m.outerHeight(),S={top:{x:t+f/2-g/2,y:s-v-8},bottom:{x:t+f/2-g/2,y:p+8},left:{x:t-g-8,y:s+h/2-v/2},right:{x:n+8,y:s+h/2-v/2}};let{x:C,y:F}=S[d];return C=Math.max(8,Math.min(C,window.innerWidth-g-8)),F=Math.max(8,Math.min(F,window.innerHeight-v-8)),m.css({left:C,top:F}),u.data("witip-timer",setTimeout(()=>{m.addClass("show"),c>0&&setTimeout(()=>{m.removeClass("show"),setTimeout(()=>m.remove(),200)},c)},10)),u}function ce(){const a=`
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
</div>`,o=`
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
</div>`,l=`
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
</div>`;e(function(){let c="smiles",i="wiAuthIn",r="wiAuthRol",d="usuario";e(document).on("click",".login",()=>abrirModal("loginModal")),e(document).on("click",".registrar",()=>abrirModal("registroModal")),e(".crearCuenta").click(()=>{abrirModal("registroModal"),cerrarModal("loginModal")}),e(".conCuenta").click(()=>{abrirModal("loginModal"),cerrarModal("registroModal")}),e(".olvidastePass").click(()=>{abrirModal("recuperarModal"),cerrarModal("loginModal")}),e(".volverLogin").click(()=>{abrirModal("loginModal"),cerrarModal("recuperarModal")}),e(".togglePass").click(function(){const t=e(this).siblings("input"),s=t.attr("type")==="password";t.attr("type",s?"text":"password"),e(this).toggleClass("fa-eye fa-eye-slash")}),e('.miauth input:not([type="checkbox"])').on("click",function(){M(this,e(this).attr("placeholder"))}),e("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){e(this).val(e(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recEmail","#Recuperar"]].forEach(([t,s])=>{e(t).on("input keyup",n=>{e(s).removeClass("inactivo"),n.key==="Enter"&&(e(s).click(),e(s).addClass("inactivo"))})});const u={regEmail:[t=>t.toLowerCase(),t=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(t)||"Correo inválido"],regUsuario:[t=>t.toLowerCase().replace(/[^a-z0-9_]/g,""),t=>t.length>=4||"Usuario 4-20 caracteres"],regNombre:[t=>t.trim(),t=>t.length>0||"Ingrese nombre"],regApellidos:[t=>t.trim(),t=>t.length>0||"Ingrese apellidos"],regPassword:[t=>t,t=>t.length>=6||"Mínimo 6 caracteres"],regPassword1:[t=>t,t=>t===e("#regPassword").val()||"Contraseñas no coinciden"]};e.each(u,function(t,[s,n]){e(`#${t}`).on("blur",function(){const p=s(e(this).val());e(this).val(p);const f=n(p);f!==!0&&M(this,f,"error")})});let y=!1;e("#regUsuario").on("blur focus",async function(){const t=e(this).val();if(t.length>=3)try{const n=(await R(P(x,c,t))).exists();y=!n,M(this,`Usuario ${n?"no disponible":"disponible ✅"}`,n?"error":"success","top",7e3)}catch(s){console.error(s)}});let m=!1;e("#regEmail").on("blur focus",async function(){const t=e(this).val();if(t.length>=3)try{const n=!(await I(A(q(x,c),D("email","==",t)))).empty;m=!n,M(this,`Email ${n?"no disponible":"disponible ✅"}`,n?"error":"success","top",7e3)}catch(s){console.error(s)}}),e("#Registrar").click(async function(){w(this,!0,"Registrando");const t=[[y,e("#regUsuario")[0],"Usuario no disponible"],[m,e("#regEmail")[0],"Email no disponible"],...Object.entries(u).map(([s,[n,p]])=>{const f=e(`#${s}`),h=n(f.val()),g=p(h);return[g===!0,f[0],g!==!0?g:""]})];for(const[s,n,p]of t)if(!s&&p&&(w(this,!1),M(n,p,"error"),n.focus(),!0))return;try{const s=["regEmail","regUsuario","regNombre","regApellidos","regPassword"],[n,p,f,h,g]=s.map(C=>e("#"+C).val().trim()),{user:v}=await Y(E,n,g);await Promise.all([J(v,{displayName:p}),H(v)]),console.log("Registro completo en Auth ✅"+Date());const S=P(x,c,p);await K(S,{usuario:p,email:n,nombre:f,apellidos:h,rol:d,creacion:G(),uid:v.uid}),console.log("Registro completo en Firestore ✅"+Date()),b("Registro completado! ✅")}catch(s){b({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[s.code]||s.message)||console.error(s)}finally{k(i,"wIn",24),k(r,d,24),setTimeout(()=>ne(),3e3),cerrarModal("registroModal"),w(this,!1)}}),e("#Login").click(async function(){w(this,!0,"Iniciando sessión");try{const[t,s]=["#email","#password"].map(h=>e(h).val()),n=t.includes("@"),p=n?null:await R(P(x,c,t));if(!n&&!p.exists())throw new Error("Usuario no encontrado");const f=n?t:p.data().email;await Z(E,f,s),k(i,"wIn",24),k(r,p.data().rol,24)}catch(t){b({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[t.code]||t.message,"error"),console.error(t)}finally{cerrarModal("loginModal"),w(this,!1)}}),e("#Recuperar").click(async function(){w(this,!0,"Restablecer Contraseña");try{const[t,s]=["#recEmail","#recFechaNacimiento"].map(h=>e(h).val()),n=t.includes("@")?t:await(async()=>{const h=await R(P(x,c,t));return h.exists()?h.data().email:null})();if(!n)return b("Usuario no registrado","error");const p=await I(A(q(x,c),D("email","==",n)));if(p.empty)return b("Email incorrecto o no existe","error");if(p.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==s)return b("Fecha de nacimiento incorrecta","error");await X(E,n),b("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(t){console.error(t)}finally{w(this,!1)}})}),e("body").append(a+o+l)}ce();const O=async a=>{const o=window.location.pathname.slice(1);if(!o)if(a){const{personalContenido:r}=await L(async()=>{const{personalContenido:d}=await import("./personal-CUFB4Wff.js");return{personalContenido:d}},__vite__mapDeps([0,1,2,3,4,5,6]));return r(a)}else{const{publicoContenido:r}=await L(async()=>{const{publicoContenido:d}=await import("./publico-qoSKG3JQ.js");return{publicoContenido:d}},__vite__mapDeps([7,1,2,4,5,6]));return r()}const{obtenerPost:l,mostrarPost:c}=await L(async()=>{const{obtenerPost:r,mostrarPost:d}=await import("./posts-DBBlEP1A.js");return{obtenerPost:r,mostrarPost:d}},__vite__mapDeps([3,1,2,4,5,6]));await l(o)?c(o,a):e(".app").html('<div class="pst-err"><i class="fas fa-exclamation-circle"></i><h2>404</h2><p>Página no encontrada</p><a href="/">Volver</a></div>')};Q(E,async a=>{let o=null;if(a&&(o=N("wiSmile"),!o))try{o=(await I(A(q(x,"smiles"),D("usuario","==",a.displayName)))).docs[0]?.data()||{},k("wiSmile",o,1440)}catch(l){console.error(l)}await O(o)});window.addEventListener("popstate",async()=>await O(N("wiSmile")));e(document).on("click",".bt_salir",async()=>{await ee(E),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(o=>localStorage.removeItem(o))}});export{e as $,b as M,fe as a,E as b,x as d,N as g,le as r,k as s,w};
