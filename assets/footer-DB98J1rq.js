import{$ as e}from"./main-CjMQ_gaS.js";window.header=s;function s(a=null){const r=!a;return`
<header class="top-header">
  <div class="header-container miwp">
    <div class="header-left">
      <a href="/"><h1><i class="fas fa-${r?"trophy":"heart"}"></i> ${r?"WiTuto":"MI DASHBOARD"}</h1></a>
    </div>
    <div class="header-right">
      <div class="witemas"></div>
      ${r?`
        <div class="sesion registrar"><span>Registrate</span></div>
        <div class="sesion login"><span>Login</span></div>
      `:`
        <div class="sesion">
          <img src="${a.imagen||"./smile.png"}" alt="${a.nombre}" class="user-avatar">
          <span>${a.nombre}</span>
        </div>
        <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> Salir</button>
      `}
    </div>
  </div>
</header>
  `}e("style").append(".top-header{background:var(--mco);box-shadow:0 .1vw .1vw 0 var(--bga);}.header-container{display:flex;justify-content:space-between;align-items:center;height:6vh;}.header-container :is(h1,button,span,i){color:var(--txa);}.header-container *:not(h1){font-weight:600;}h1{font-weight:900;word-spacing:.25vh;text-shadow:var(--bs_l);}h1 i{animation:brillar 2s infinite;}@keyframes brillar{0%,100%{color:var(--txa);filter:drop-shadow(0 0 5px var(--txa));}50%{color:var(--bg);filter:drop-shadow(0 0 20px var(--bg));}}.header-left,.header-right{display:flex;gap:1vh;}.sesion{height:4.5vh;display:flex;align-items:center;gap:.8vh;cursor:pointer;padding-inline:1.5vh;background:var(--bg1);border-radius:1.2vh;}.sesion:hover{transform:translateY(-.2vh);transition:var(--tr_s);}.user-avatar{height:80%;box-shadow:var(--bs_m);border-radius:50%;}.witemas{display:flex;align-items:center;padding-inline:1.9vh;gap:.2vh;background:var(--bg1);border-radius:1.2vh;}.witemas:hover{transform:translateY(-.2vh);transition:var(--tr_s);}.witemas>*{width:var(--fz_t1);height:var(--fz_t1);border-radius:50%;cursor:pointer;}.tema:hover,.mtha{box-shadow:var(--bs_m);transition:var(--tr_s);transform:scale(1.05);}.bt_salir{background:var(--bg1);border-radius:1.2vh;border:none;padding-inline:2vh;cursor:pointer;}.bt_salir:hover{transform:translateY(-.2vh);transition:var(--tr_s);}");window.footer=d;const t=2024,o="@wilder.taype",i="https://wtaype.github.io/",n="v10";function d(){const a=new Date;return`
  <footer class="foo wb txc psa">
    <span>Creado con <i class="fas fa-heart"></i> by <a class="ftx lkme" href="${i}" target="_blank">${o}</a></span>
    <span>${t} - <span class="wty">${a.getFullYear()}</span></span>
    <span class="abw"> | Acerca del app ${n} | actualizado:
    <span class="wtu">${a.toLocaleString()}</span></span>
  </footer>
  `}e("style").append(".foo{width:100%;text-align:center;padding-block:1.5vh 1vh;background:var(--wb);border-radius:1vh 1vh 0 0;}.foo *{font-size:var(--fz_s2);margin-inline:.3vh;}.foo a{color:var(--bg2);}.foo i{color:var(--mco);}.abwc{background:var(--bg);top:0;width:99%;height:100%;padding:2vh 2vw;overflow:scroll;line-height:1.80;}.abwok{background:var(--mco);color:var(--txa);}");export{d as f,s as h};
