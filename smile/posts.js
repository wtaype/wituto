import $ from 'jquery';
import './wimodal.js';
import './posts.css';
import { db } from '../firebase/init.js';
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc, query, where, orderBy, increment, updateDoc, serverTimestamp } from 'firebase/firestore';
import { Mensaje, savels, getls, removels, wiSpin, getbd } from './widev.js';
import { header } from './header.js';
import { footer } from './footer.js';
import { auth } from '../firebase/init.js';

// ==============================
// 🎯 OBTENER POST
// ==============================
export const obtenerPost = async (id) => {
  try {
    const cache = getls(`post_${id}`);
    if (cache) return cache;
    const docRef = await getDoc(doc(db, 'posts', id));
    if (!docRef.exists()) return null;
    const post = { id: docRef.id, ...docRef.data() };
    await updateDoc(doc(db, 'posts', id), { vistas: increment(1) });
    savels(`post_${id}`, post, 1);
    return post;
  } catch (e) { console.error(e); return null; }
};

// ==============================
// 🎯 LISTAR POSTS
// ==============================
export const listarPosts = async (activos = true) => {
  try {
    const cache = getls('posts_lista');
    if (cache) {
      return activos ? cache.filter(p => p.activo) : cache;
    }

    // Sólo ordenamos por fecha; sin where para evitar índice compuesto
    const q = query(
      collection(db, 'posts'),
      orderBy('fecha', 'desc')
    );
    const busq = await getDocs(q);

    let posts = busq.docs.map(d => ({ id: d.id, ...d.data() }));
    if (activos) posts = posts.filter(p => p.activo);

    savels('posts_lista', posts, 0.5);
    return posts;
  } catch (e) { console.error(e); return []; }
};

// ==============================
// 🎨 MOSTRAR POST
// ==============================
export const mostrarPost = async (id, wi) => {
  const p = await obtenerPost(id);
  if (!p || !p.activo) return $('.app').html(`${header(wi)}<main class="miweb"><div class="pst-err"><i class="fas fa-exclamation-circle"></i><h2>Post no encontrado</h2><a href="/">Volver al inicio</a></div></main>${footer()}`);
  
  const fecha = getbd(p.fecha);
  const ultimos = await listarPosts(true);
  const postsRecientes = ultimos.filter(post => post.id !== id).slice(0, 5);
  
  const accionesHTML = wi ? `
    <div class="pst-actions">
      <button class="btn-action btn-edit-post" data-id="${p.id}">
        <i class="fas fa-edit"></i> Editar
      </button>
      <button class="btn-action btn-delete-post" data-id="${p.id}" data-tit="${p.titulo}">
        <i class="fas fa-trash-alt"></i> Eliminar
      </button>
    </div>
  ` : '';

  $('.app').html(`
    ${header(wi)}
    <main class="miweb">
      <div class="pst-layout">
        <article class="pst-main">
          ${p.imagen ? `<img src="${p.imagen}" alt="${p.titulo}" class="pst-hero">` : ''}
          
          <div class="pst-header-row">
            <h1 class="pst-titulo">${p.titulo}</h1>
            ${accionesHTML}
          </div>

          <div class="pst-meta">
            <span><i class="fas fa-user"></i> ${p.autor}</span>
            <span><i class="fas fa-calendar"></i> ${fecha}</span>
          </div>

          <div class="pst-contenido">${p.contenido}</div>

          <div class="pst-footer-info">
            <span class="pst-categoria"><i class="fas fa-folder"></i> ${p.categoria}</span>
            <div class="pst-tags">
              ${p.tags?.map(t => `<span class="pst-tag">${t}</span>`).join('') || ''}
            </div>
            <span class="pst-vistas"><i class="fas fa-eye"></i> ${p.vistas || 0} vistas</span>
          </div>
        </article>

        <aside class="pst-sidebar">
          <div class="sidebar-card">
            <h3 class="sidebar-titulo">Últimos Posts</h3>
            <div class="sidebar-posts">
              ${postsRecientes.length ? postsRecientes.map(post => {
                const contenidoCorto = post.contenido.replace(/<[^>]*>/g, ' ').substring(0, 150).trim() + '...';
                return `
                  <a href="/${post.id}" target="_blank" class="sidebar-post">
                    ${post.imagen ? `<img src="${post.imagen}" alt="${post.titulo}" class="sidebar-post-img">` : ''}
                    <div class="sidebar-post-info">
                      <h4>${post.titulo}</h4>
                      <p>${contenidoCorto}</p>
                      <span class="sidebar-post-meta">${getbd(post.fecha)}</span>
                    </div>
                  </a>
                `;
              }).join('') : '<p class="sidebar-empty">No hay posts disponibles</p>'}
            </div>
          </div>
        </aside>
      </div>
    </main>
    ${footer()}
  `);

  // Eventos para editar/eliminar
  $('.btn-edit-post').off('click').on('click', async function() {
    const postData = await obtenerPost($(this).data('id'));
    if (postData) abrirModalPost(postData);
  });

  $('.btn-delete-post').off('click').on('click', function() {
    eliminarPost($(this).data('id'), $(this).data('tit'));
  });
};

// ==============================
// ✅ VALIDAR ID ÚNICO
// ==============================
const validarId = async (titulo, idActual = null) => {
  const id = titulo.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
  const $status = $('#id_status');
  
  if (!id) {
    $status.html('<i class="fas fa-exclamation-circle"></i> Escribe un título').removeClass('disponible ocupado').addClass('vacio');
    return null;
  }
  
  if (idActual && id === idActual) {
    $status.html(`ID: <code>${id}</code>`).removeClass('vacio ocupado').addClass('disponible');
    return id;
  }
  
  const existe = await getDoc(doc(db, 'posts', id));
  
  if (existe.exists()) {
    $status.html('<i class="fas fa-times-circle"></i> Ya existe, cambia el título').removeClass('vacio disponible').addClass('ocupado');
    return null;
  } else {
    $status.html(`Disponible: <code>${id}</code>`).removeClass('vacio ocupado').addClass('disponible');
    return id;
  }
};

// ==============================
// 📝 MODAL POST
// ==============================
export const abrirModalPost = (p = null) => {
  const edit = p !== null;
  const usuario = auth.currentUser;
  const nombreCompleto = usuario?.displayName || '';
  
  $('#modalPost').remove();
  
  $('body').append(`
    <div id="modalPost" class="modal">
      <div class="modal-content modal-post">
        <div class="modal-header">
        <h3><i class="fas fa-${edit?'edit':'plus-circle'}"></i> ${edit?'Editar':'Nuevo'} Post</h3>
        <button class="close-modal"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
          <form id="fpost">
            
            <div class="form_gr">
              <label class="form_lab"><i class="fas fa-heading"></i> Título</label>
              <input type="text" id="ptit" value="${p?.titulo||''}" placeholder="Ej: Mi primer post increíble" ${edit?'disabled':''} required>
              <span id="id_status" class="id-status vacio"><i class="fas fa-info-circle"></i> El ID se generará automáticamente</span>
            </div>

            <div class="form_gr">
              <label class="form_lab"><i class="fas fa-code"></i> Contenido HTML</label>
              <textarea id="pcnt" rows="12" placeholder="<p>Escribe tu contenido en HTML...</p>" required>${p?.contenido||''}</textarea>
              <span class="char-count"><i class="fas fa-text-height"></i> <span id="cnt_count">0</span> caracteres</span>
            </div>

            <div class="form_gr">
              <label class="form_lab"><i class="fas fa-image"></i> Imagen URL</label>
              <input type="url" id="pimg" value="${p?.imagen||''}" placeholder="https://ejemplo.com/imagen.jpg">
            </div>

            <div class="form_row">
              <div class="form_gr">
                <label class="form_lab"><i class="fas fa-tag"></i> Categoría</label>
                <input type="text" id="pcat" value="${p?.categoria||''}" placeholder="desarrollo, tutoriales..." required>
              </div>
              <div class="form_gr">
                <label class="form_lab"><i class="fas fa-tags"></i> Tags (separar con coma)</label>
                <input type="text" id="ptag" value="${p?.tags?.join(', ')||''}" placeholder="javascript, firebase, tutorial">
              </div>
            </div>

            <div class="form_row">
              <div class="form_gr">
                <label class="form_lab"><i class="fas fa-user"></i> Autor</label>
                <input type="text" id="paut" value="${p?.autor||nombreCompleto}" placeholder="Nombre completo" required>
              </div>
              <div class="form_gr">
                <label class="form_lab"><i class="fas fa-toggle-on"></i> Estado</label>
                <select id="pact" class="inp_sel">
                  <option value="true" ${p?.activo!==false?'selected':''}>Activo</option>
                  <option value="false" ${p?.activo===false?'selected':''}>Inactivo</option>
                </select>
              </div>
            </div>

            ${edit?`
            <div class="post-stats">
              <div class="stat-item">
                <i class="fas fa-eye"></i>
                <span>${p?.vistas||0} vistas</span>
              </div>
              <div class="stat-item">
                <i class="fas fa-calendar"></i>
                <span>Creado: ${getbd(p?.fecha)}</span>
              </div>
            </div>
            `:''}

            <button type="submit" class="btn_pri" id="bguardar">
              <i class="fas fa-save"></i> ${edit?'Actualizar':'Crear'} Post
            </button>
          </form>
        </div>
      </div>
    </div>
  `);
  
  window.abrirModal('modalPost');

  // ==============================
  // 🔄 VALIDACIÓN EN TIEMPO REAL (solo si no es edición)
  // ==============================
  if (!edit) {
    let timeoutId;
    $('#ptit').on('input', function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => validarId($(this).val(), p?.id), 500);
    });
  } else {
    // Mostrar ID actual en edición
    validarId(p.titulo, p.id);
  }

  // Contador de caracteres
  $('#pcnt').on('input', function() {
    $('#cnt_count').text($(this).val().length);
  }).trigger('input');

  // ==============================
  // 💾 SUBMIT FORM
  // ==============================
  $('#fpost').off('submit').on('submit', async (e) => {
    e.preventDefault();
    
    const tit = edit ? p.titulo : $('#ptit').val().trim();
    const id = edit ? p.id : await validarId(tit, p?.id);
    
    if (!id) {
      Mensaje('Por favor cambia el título, ese ID ya existe', 'error');
      return;
    }
    
    wiSpin('#bguardar', true, edit?'Actualizando':'Creando');
    
    try {
      const datos = {
        id,
        titulo: tit,
        autor: $('#paut').val().trim(),
        categoria: $('#pcat').val().trim(),
        imagen: $('#pimg').val().trim(),
        contenido: $('#pcnt').val().trim(),
        tags: $('#ptag').val().split(',').map(t=>t.trim()).filter(Boolean),
        activo: $('#pact').val()==='true',
        ...(edit?{}:{fecha:serverTimestamp(),vistas:0})
      };
      
      await setDoc(doc(db, 'posts', id), datos, { merge: true });
      
      Mensaje(`Post ${edit?'actualizado':'creado'} correctamente`, 'success');
      removels('posts_lista');
      window.cerrarModal('modalPost');
      
      if ($('.tbl-pst').length) cargarPostsAdmin();
      if (edit) window.location.reload();
      
    } catch (e) {
      console.error(e);
      Mensaje('Error al guardar el post', 'error');
    } finally {
      wiSpin('#bguardar', false);
    }
  });
};

// ==============================
// 🗑️ ELIMINAR POST
// ==============================
export const eliminarPost = async (id, tit) => {
  if (!confirm(`¿Seguro que deseas eliminar "${tit}"?\n\nEsta acción no se puede deshacer.`)) return;
  
  try {
    await deleteDoc(doc(db, 'posts', id));
    Mensaje('Post eliminado correctamente', 'success');
    removels('posts_lista', `post_${id}`);
    window.location.href = '/';
  } catch (e) {
    console.error(e);
    Mensaje('Error al eliminar el post', 'error');
  }
};

// ==============================
// 📋 ADMIN POSTS
// ==============================
export const cargarPostsAdmin = async () => {
  const posts = await listarPosts(false);
  
  const html = posts.length ? posts.map(p => {
    const fecha = getbd(p.fecha);
    return `
      <tr>
        <td class="td-fecha">${fecha}</td>
        <td class="td-titulo"><strong>${p.titulo}</strong></td>
        <td class="td-cat">${p.categoria}</td>
        <td class="td-vistas"><i class="fas fa-eye"></i> ${p.vistas||0}</td>
        <td class="td-estado">
          <span class="bdg ${p.activo?'bdg-ok':'bdg-no'}">
            ${p.activo?'Activo':'Inactivo'}
          </span>
        </td>
        <td class="td-acciones">
          <button class="btn-acc btn-ver" data-id="${p.id}" title="Ver en nueva pestaña">
            <i class="fas fa-external-link-alt"></i>
          </button>
          <button class="btn-acc btn-edit" data-id="${p.id}" title="Editar post">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn-acc btn-del" data-id="${p.id}" data-tit="${p.titulo}" title="Eliminar post">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('') : '<tr><td colspan="6" class="td-vacio">No hay posts creados todavía</td></tr>';
  
  $('.tbl-pst tbody').html(html);
  
  // Eventos
  $('.btn-ver').off('click').on('click', function() {
    window.open(`/${$(this).data('id')}`, '_blank');
  });
  
  $('.btn-edit').off('click').on('click', async function() {
    const p = await obtenerPost($(this).data('id'));
    if (p) abrirModalPost(p);
  });
  
  $('.btn-del').off('click').on('click', function() {
    eliminarPost($(this).data('id'), $(this).data('tit'));
  });
};