import{$ as c,g as n,d as e,s as l}from"./main-CfMgKPRB.js";import{h as p,f as r}from"./footer-ybMcg2RT.js";import{q as d,n as m,e as u,c as f}from"./firebase-CJaRaGK5.js";import"./jquery-BwXq8HW-.js";/* empty css              */async function g(){const t=n("posts_publicos");if(t)return t;const a=d(u(e,"posts"),m("fecha","desc")),i=(await f(a)).docs.map(o=>({id:o.id,...o.data()})).filter(o=>o.activo);return l("posts_publicos",i,.5),i}async function w(){const t=await g(),a=t.length?t.map(s=>{const i=(s.contenido||"").replace(/<[^>]*>/g," "),o=i.slice(0,80).trim()+(i.length>80?"...":"");return`
          <a href="/${s.id}" class="post-card">
            ${s.imagen?`<img src="${s.imagen}" alt="${s.titulo}" class="post-img">`:'<div class="post-no-img"><i class="fas fa-image"></i></div>'}
            <div class="post-info">
              <h3>${s.titulo}</h3>
              <p style="font-size:var(--fz_c4);color:var(--txs);margin-top:1vh;">${o}</p>
            </div>
          </a>`}).join(""):'<div class="no-posts">Aún no hay posts publicados.</div>';c(".app").html(`
    ${p()}
    <main class="miweb miwp">
      <section class="pub-hero">
        <h1>WiTuto Blog</h1>
        <p>Explora los últimos posts publicados</p>
      </section>
      <section class="pub-posts">
        <div class="posts-grid">
          ${a}
        </div>
      </section>
    </main>
    ${r()}
  `)}export{w as publicoContenido};
