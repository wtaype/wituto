import{g as $,d as r,s as y,$ as i,a as u,b as k,M as d,w as b,r as _}from"./main-CjMQ_gaS.js";import{h,f as g}from"./footer-DB98J1rq.js";import{b as w,d as p,p as E,r as D,j,h as q,q as M,e as I,n as T,c as A,t as L}from"./firebase-CJaRaGK5.js";import"./jquery-BwXq8HW-.js";/* empty css              */const v=async s=>{try{const t=$(`post_${s}`);if(t)return t;const a=await w(p(r,"posts",s));if(!a.exists())return null;const o={id:a.id,...a.data()};return await E(p(r,"posts",s),{vistas:D(1)}),y(`post_${s}`,o,1),o}catch(t){return console.error(t),null}},x=async(s=!0)=>{try{const t=$("posts_lista");if(t)return s?t.filter(l=>l.activo):t;const a=M(I(r,"posts"),T("fecha","desc"));let c=(await A(a)).docs.map(l=>({id:l.id,...l.data()}));return s&&(c=c.filter(l=>l.activo)),y("posts_lista",c,.5),c}catch(t){return console.error(t),[]}},U=async(s,t)=>{const a=await v(s);if(!a||!a.activo)return i(".app").html(`${h(t)}<main class="miweb"><div class="pst-err"><i class="fas fa-exclamation-circle"></i><h2>Post no encontrado</h2><a href="/">Volver al inicio</a></div></main>${g()}`);const o=u(a.fecha),l=(await x(!0)).filter(e=>e.id!==s).slice(0,5),n=t?`
    <div class="pst-actions">
      <button class="btn-action btn-edit-post" data-id="${a.id}">
        <i class="fas fa-edit"></i> Editar
      </button>
      <button class="btn-action btn-delete-post" data-id="${a.id}" data-tit="${a.titulo}">
        <i class="fas fa-trash-alt"></i> Eliminar
      </button>
    </div>
  `:"";i(".app").html(`
    ${h(t)}
    <main class="miweb">
      <div class="pst-layout">
        <article class="pst-main">
          ${a.imagen?`<img src="${a.imagen}" alt="${a.titulo}" class="pst-hero">`:""}
          
          <div class="pst-header-row">
            <h1 class="pst-titulo">${a.titulo}</h1>
            ${n}
          </div>

          <div class="pst-meta">
            <span><i class="fas fa-user"></i> ${a.autor}</span>
            <span><i class="fas fa-calendar"></i> ${o}</span>
          </div>

          <div class="pst-contenido">${a.contenido}</div>

          <div class="pst-footer-info">
            <span class="pst-categoria"><i class="fas fa-folder"></i> ${a.categoria}</span>
            <div class="pst-tags">
              ${a.tags?.map(e=>`<span class="pst-tag">${e}</span>`).join("")||""}
            </div>
            <span class="pst-vistas"><i class="fas fa-eye"></i> ${a.vistas||0} vistas</span>
          </div>
        </article>

        <aside class="pst-sidebar">
          <div class="sidebar-card">
            <h3 class="sidebar-titulo">Últimos Posts</h3>
            <div class="sidebar-posts">
              ${l.length?l.map(e=>{const f=e.contenido.replace(/<[^>]*>/g," ").substring(0,150).trim()+"...";return`
                  <a href="/${e.id}" target="_blank" class="sidebar-post">
                    ${e.imagen?`<img src="${e.imagen}" alt="${e.titulo}" class="sidebar-post-img">`:""}
                    <div class="sidebar-post-info">
                      <h4>${e.titulo}</h4>
                      <p>${f}</p>
                      <span class="sidebar-post-meta">${u(e.fecha)}</span>
                    </div>
                  </a>
                `}).join(""):'<p class="sidebar-empty">No hay posts disponibles</p>'}
            </div>
          </div>
        </aside>
      </div>
    </main>
    ${g()}
  `),i(".btn-edit-post").off("click").on("click",async function(){const e=await v(i(this).data("id"));e&&P(e)}),i(".btn-delete-post").off("click").on("click",function(){C(i(this).data("id"),i(this).data("tit"))})},m=async(s,t=null)=>{const a=s.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,""),o=i("#id_status");return a?t&&a===t?(o.html(`ID: <code>${a}</code>`).removeClass("vacio ocupado").addClass("disponible"),a):(await w(p(r,"posts",a))).exists()?(o.html('<i class="fas fa-times-circle"></i> Ya existe, cambia el título').removeClass("vacio disponible").addClass("ocupado"),null):(o.html(`Disponible: <code>${a}</code>`).removeClass("vacio ocupado").addClass("disponible"),a):(o.html('<i class="fas fa-exclamation-circle"></i> Escribe un título').removeClass("disponible ocupado").addClass("vacio"),null)},P=(s=null)=>{const t=s!==null,o=k.currentUser?.displayName||"";if(i("#modalPost").remove(),i("body").append(`
    <div id="modalPost" class="modal">
      <div class="modal-content modal-post">
        <div class="modal-header">
        <h3><i class="fas fa-${t?"edit":"plus-circle"}"></i> ${t?"Editar":"Nuevo"} Post</h3>
        <button class="close-modal"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
          <form id="fpost">
            
            <div class="form_gr">
              <label class="form_lab"><i class="fas fa-heading"></i> Título</label>
              <input type="text" id="ptit" value="${s?.titulo||""}" placeholder="Ej: Mi primer post increíble" ${t?"disabled":""} required>
              <span id="id_status" class="id-status vacio"><i class="fas fa-info-circle"></i> El ID se generará automáticamente</span>
            </div>

            <div class="form_gr">
              <label class="form_lab"><i class="fas fa-code"></i> Contenido HTML</label>
              <textarea id="pcnt" rows="12" placeholder="<p>Escribe tu contenido en HTML...</p>" required>${s?.contenido||""}</textarea>
              <span class="char-count"><i class="fas fa-text-height"></i> <span id="cnt_count">0</span> caracteres</span>
            </div>

            <div class="form_gr">
              <label class="form_lab"><i class="fas fa-image"></i> Imagen URL</label>
              <input type="url" id="pimg" value="${s?.imagen||""}" placeholder="https://ejemplo.com/imagen.jpg">
            </div>

            <div class="form_row">
              <div class="form_gr">
                <label class="form_lab"><i class="fas fa-tag"></i> Categoría</label>
                <input type="text" id="pcat" value="${s?.categoria||""}" placeholder="desarrollo, tutoriales..." required>
              </div>
              <div class="form_gr">
                <label class="form_lab"><i class="fas fa-tags"></i> Tags (separar con coma)</label>
                <input type="text" id="ptag" value="${s?.tags?.join(", ")||""}" placeholder="javascript, firebase, tutorial">
              </div>
            </div>

            <div class="form_row">
              <div class="form_gr">
                <label class="form_lab"><i class="fas fa-user"></i> Autor</label>
                <input type="text" id="paut" value="${s?.autor||o}" placeholder="Nombre completo" required>
              </div>
              <div class="form_gr">
                <label class="form_lab"><i class="fas fa-toggle-on"></i> Estado</label>
                <select id="pact" class="inp_sel">
                  <option value="true" ${s?.activo!==!1?"selected":""}>Activo</option>
                  <option value="false" ${s?.activo===!1?"selected":""}>Inactivo</option>
                </select>
              </div>
            </div>

            ${t?`
            <div class="post-stats">
              <div class="stat-item">
                <i class="fas fa-eye"></i>
                <span>${s?.vistas||0} vistas</span>
              </div>
              <div class="stat-item">
                <i class="fas fa-calendar"></i>
                <span>Creado: ${u(s?.fecha)}</span>
              </div>
            </div>
            `:""}

            <button type="submit" class="btn_pri" id="bguardar">
              <i class="fas fa-save"></i> ${t?"Actualizar":"Crear"} Post
            </button>
          </form>
        </div>
      </div>
    </div>
  `),window.abrirModal("modalPost"),t)m(s.titulo,s.id);else{let c;i("#ptit").on("input",function(){clearTimeout(c),c=setTimeout(()=>m(i(this).val(),s?.id),500)})}i("#pcnt").on("input",function(){i("#cnt_count").text(i(this).val().length)}).trigger("input"),i("#fpost").off("submit").on("submit",async c=>{c.preventDefault();const l=t?s.titulo:i("#ptit").val().trim(),n=t?s.id:await m(l,s?.id);if(!n){d("Por favor cambia el título, ese ID ya existe","error");return}b("#bguardar",!0,t?"Actualizando":"Creando");try{const e={id:n,titulo:l,autor:i("#paut").val().trim(),categoria:i("#pcat").val().trim(),imagen:i("#pimg").val().trim(),contenido:i("#pcnt").val().trim(),tags:i("#ptag").val().split(",").map(f=>f.trim()).filter(Boolean),activo:i("#pact").val()==="true",...t?{}:{fecha:j(),vistas:0}};await q(p(r,"posts",n),e,{merge:!0}),d(`Post ${t?"actualizado":"creado"} correctamente`,"success"),_("posts_lista"),window.cerrarModal("modalPost"),i(".tbl-pst").length&&N(),t&&window.location.reload()}catch(e){console.error(e),d("Error al guardar el post","error")}finally{b("#bguardar",!1)}})},C=async(s,t)=>{if(confirm(`¿Seguro que deseas eliminar "${t}"?

Esta acción no se puede deshacer.`))try{await L(p(r,"posts",s)),d("Post eliminado correctamente","success"),_("posts_lista",`post_${s}`),window.location.href="/"}catch(a){console.error(a),d("Error al eliminar el post","error")}},N=async()=>{const s=await x(!1),t=s.length?s.map(a=>`
      <tr>
        <td class="td-fecha">${u(a.fecha)}</td>
        <td class="td-titulo"><strong>${a.titulo}</strong></td>
        <td class="td-cat">${a.categoria}</td>
        <td class="td-vistas"><i class="fas fa-eye"></i> ${a.vistas||0}</td>
        <td class="td-estado">
          <span class="bdg ${a.activo?"bdg-ok":"bdg-no"}">
            ${a.activo?"Activo":"Inactivo"}
          </span>
        </td>
        <td class="td-acciones">
          <button class="btn-acc btn-ver" data-id="${a.id}" title="Ver en nueva pestaña">
            <i class="fas fa-external-link-alt"></i>
          </button>
          <button class="btn-acc btn-edit" data-id="${a.id}" title="Editar post">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn-acc btn-del" data-id="${a.id}" data-tit="${a.titulo}" title="Eliminar post">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    `).join(""):'<tr><td colspan="6" class="td-vacio">No hay posts creados todavía</td></tr>';i(".tbl-pst tbody").html(t),i(".btn-ver").off("click").on("click",function(){window.open(`/${i(this).data("id")}`,"_blank")}),i(".btn-edit").off("click").on("click",async function(){const a=await v(i(this).data("id"));a&&P(a)}),i(".btn-del").off("click").on("click",function(){C(i(this).data("id"),i(this).data("tit"))})};export{P as abrirModalPost,N as cargarPostsAdmin,C as eliminarPost,x as listarPosts,U as mostrarPost,v as obtenerPost};
