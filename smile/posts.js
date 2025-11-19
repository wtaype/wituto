import $ from 'jquery';
import './wimodal.js';
import './posts.css';
import { db } from '../firebase/init.js';
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc, query, orderBy, increment, updateDoc, serverTimestamp } from 'firebase/firestore';
import { Mensaje, savels, getls, removels, wiSpin, getbd, wicopy } from './widev.js';
import { header } from './header.js';
import { footer } from './footer.js';
import { auth } from '../firebase/init.js';

// 🎨 HIGHLIGHT.JS
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-dark.css';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);

// ==== 🎯 OBTENER POST ==== 
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

// ==== 🎯 LISTAR POSTS ==== 
export const listarPosts = async (activos = true) => {
  try {
    const cache = getls('posts_lista');
    if (cache) return activos ? cache.filter(p => p.activo) : cache;
    const busq = await getDocs(query(collection(db, 'posts'), orderBy('fecha', 'desc')));
    let posts = busq.docs.map(d => ({ id: d.id, ...d.data() }));
    if (activos) posts = posts.filter(p => p.activo);
    savels('posts_lista', posts, 0.5);
    return posts;
  } catch (e) { console.error(e); return []; }
};

// ==== 🎨 MOSTRAR POST ==== 
export const mostrarPost = async (id, wi) => {
  const p = await obtenerPost(id);
  if (!p || !p.activo) return $('.app').html(`${header(wi)}<main class="miweb"><div class="pst-err"><i class="fas fa-exclamation-circle"></i><h2>Post no encontrado</h2><a href="/">Volver al inicio</a></div></main>${footer()}`);
  
  const ultimos = await listarPosts(true);
  const postsRecientes = ultimos.filter(post => post.id !== id).slice(0, 5);
  
  $('.app').html(`
    ${header(wi)}
    <main class="miweb">
      <div class="pst-layout">
        <article class="pst-main">
          ${p.imagen ? `<img src="${p.imagen}" alt="${p.titulo}" class="pst-hero">` : ''}
          
          <div class="pst-header-row">
            <h1 class="pst-titulo">${p.titulo}</h1>
            ${wi ? `
            <div class="pst-actions">
              <button class="btn-action btn-edit-post" data-id="${p.id}">
                <i class="fas fa-edit"></i> Editar
              </button>
              <button class="btn-action btn-delete-post" data-id="${p.id}" data-tit="${p.titulo}">
                <i class="fas fa-trash-alt"></i> Eliminar
              </button>
            </div>` : ''}
          </div>

          <div class="pst-meta">
            <span><i class="fas fa-user"></i> ${p.autor}</span>
            <span><i class="fas fa-calendar"></i> ${getbd(p.fecha)}</span>
          </div>

          <div class="pst-contenido">${p.contenido}</div>

          <div class="pst-footer-info">
            <span class="pst-categoria"><i class="fas fa-folder"></i> ${p.categoria}</span>
            <div class="pst-tags">${p.tags?.map(t => `<span class="pst-tag">${t}</span>`).join('') || ''}</div>
            <span class="pst-vistas"><i class="fas fa-eye"></i> ${p.vistas || 0} vistas</span>
          </div>
        </article>

        <aside class="pst-sidebar">
          <div class="sidebar-card">
            <h3 class="sidebar-titulo">Últimos Posts</h3>
            <div class="sidebar-posts">
              ${postsRecientes.length ? postsRecientes.map(post => `
                <a href="/${post.id}" target="_blank" class="sidebar-post">
                  ${post.imagen ? `<img src="${post.imagen}" alt="${post.titulo}" class="sidebar-post-img">` : ''}
                  <div class="sidebar-post-info">
                    <h4>${post.titulo}</h4>
                    <p>${post.contenido.replace(/<[^>]*>/g, ' ').substring(0, 150).trim()}...</p>
                    <span class="sidebar-post-meta">${getbd(post.fecha)}</span>
                  </div>
                </a>
              `).join('') : '<p class="sidebar-empty">No hay posts disponibles</p>'}
            </div>
          </div>
        </aside>
      </div>
    </main>
    ${footer()}
  `);

  // Highlight + Botones copiar
  setTimeout(() => {
    $('pre code').each((i, block) => {
      hljs.highlightElement(block);
      const $pre = $(block).parent();
      if (!$pre.find('.btn-copy-code').length) {
        $pre.css('position', 'relative').prepend(`
          <button class="btn-copy-code" title="Copiar código">
            <i class="fas fa-copy"></i>
          </button>
        `);
      }
    });
  }, 100);

  // Eventos copiar código
  $(document).on('click', '.btn-copy-code', function() {
    const codigo = $(this).siblings('code').text(); // ✅ Extraemos el texto primero
    wicopy(codigo, this, '¡Código copiado!'); // ✅ Pasamos el STRING directamente
  });

  // Eventos editar/eliminar
  $('.btn-edit-post').on('click', async function() {
    const postData = await obtenerPost($(this).data('id'));
    if (postData) abrirModalPost(postData);
  });

  $('.btn-delete-post').on('click', function() {
    eliminarPost($(this).data('id'), $(this).data('tit'));
  });
};

// ==== ✅ VALIDAR ID ==== 
const validarId = async (titulo, idActual = null) => {
  const id = titulo.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
  const $status = $('#id_status');
  const url = `${window.location.origin}/${id}`;
  
  if (!id) {
    $status.html('<i class="fas fa-exclamation-circle"></i> Escribe un título').removeClass('disponible ocupado').addClass('vacio');
    return null;
  }
  
  if (idActual && id === idActual) {
    $status.html(`
      <span class="id-disponible">ID: <code>${id}</code></span>
      <div class="id-actions">
        <button class="btn-id-action" data-action="open" data-url="${url}" title="Abrir en nueva pestaña">
          <i class="fas fa-external-link-alt"></i>
        </button>
        <button class="btn-id-action" data-action="copy" data-url="${url}" title="Copiar URL">
          <i class="fas fa-copy"></i>
        </button>
      </div>
    `).removeClass('vacio ocupado').addClass('disponible');
    return id;
  }
  
  const existe = await getDoc(doc(db, 'posts', id));
  
  if (existe.exists()) {
    $status.html('<i class="fas fa-times-circle"></i> Ya existe, cambia el título').removeClass('vacio disponible').addClass('ocupado');
    return null;
  } else {
    $status.html(`
      <span class="id-disponible">Disponible: <code>${id}</code></span>
      <div class="id-actions">
        <button class="btn-id-action" data-action="open" data-url="${url}" title="Ver cómo quedará">
          <i class="fas fa-external-link-alt"></i>
        </button>
        <button class="btn-id-action" data-action="copy" data-url="${url}" title="Copiar URL">
          <i class="fas fa-copy"></i>
        </button>
      </div>
    `).removeClass('vacio ocupado').addClass('disponible');
    return id;
  }
};

// ==== 📝 INSERTAR CÓDIGO ==== 
const insertarCodigo = (lenguaje) => {
  const textarea = document.getElementById('pcnt');
  const iconos = { javascript: '📜', html: '🌐', css: '🎨' };
  const template = `\n<h3>${iconos[lenguaje]} Código ${lenguaje.toUpperCase()}</h3>\n<pre><code class="language-${lenguaje}">\n// Tu código ${lenguaje} aquí\n\n</code></pre>\n`;
  const { selectionStart: start, selectionEnd: end, value: text } = textarea;
  
  textarea.value = text.substring(0, start) + template + text.substring(end);
  const newPos = start + template.indexOf('// Tu código');
  textarea.focus();
  textarea.setSelectionRange(newPos, newPos + `// Tu código ${lenguaje} aquí`.length);
  $('#cnt_count').text(textarea.value.length);
  
  // Feedback visual
  $(`[data-lang="${lenguaje}"]`).addClass('btn-code-active');
  setTimeout(() => $(`[data-lang="${lenguaje}"]`).removeClass('btn-code-active'), 300);
};

// ==== 📝 MODAL POST ==== 
export const abrirModalPost = (p = null) => {
  const edit = !!p;
  const nombreCompleto = auth.currentUser?.displayName || '';
  
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
              <div class="code-buttons">
                ${['javascript', 'html', 'css'].map(lang => `
                  <button type="button" class="btn-code" data-lang="${lang}" title="Insertar código ${lang.toUpperCase()}">
                    <i class="fab fa-${lang==='javascript'?'js-square':lang==='html'?'html5':'css3-alt'}"></i> ${lang.toUpperCase()}
                  </button>
                `).join('')}
              </div>
              <textarea id="pcnt" rows="12" placeholder="<p>Escribe tu contenido o usa los botones para insertar código...</p>" required>${p?.contenido||''}</textarea>
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
              <div class="stat-item"><i class="fas fa-eye"></i><span>${p?.vistas||0} vistas</span></div>
              <div class="stat-item"><i class="fas fa-calendar"></i><span>Creado: ${getbd(p?.fecha)}</span></div>
            </div>`:''}

            <button type="submit" class="btn_pri" id="bguardar">
              <i class="fas fa-save"></i> ${edit?'Actualizar':'Crear'} Post
            </button>
          </form>
        </div>
      </div>
    </div>
  `);
  
  window.abrirModal('modalPost');

  // Eventos botones código
  $('.btn-code').on('click', function() { insertarCodigo($(this).data('lang')); });

  // Eventos botones ID (abrir/copiar)
  $(document).on('click', '.btn-id-action', function() {
    const action = $(this).data('action');
    const url = $(this).data('url');
    action === 'open' ? window.open(url, '_blank') : wicopy(url, this, '¡URL copiada!');
  });

  // Validación tiempo real
  if (!edit) {
    let timeoutId;
    $('#ptit').on('input', function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => validarId($(this).val(), p?.id), 500);
    });
  } else {
    validarId(p.titulo, p.id);
  }

  // Contador caracteres
  $('#pcnt').on('input', function() { $('#cnt_count').text(this.value.length); }).trigger('input');

  // Submit form
  $('#fpost').on('submit', async (e) => {
    e.preventDefault();
    const tit = edit ? p.titulo : $('#ptit').val().trim();
    const id = edit ? p.id : await validarId(tit, p?.id);
    
    if (!id) return Mensaje('Por favor cambia el título, ese ID ya existe', 'error');
    
    wiSpin('#bguardar', true, edit?'Actualizando':'Creando');
    
    try {
      await setDoc(doc(db, 'posts', id), {
        id, titulo: tit, autor: $('#paut').val().trim(), categoria: $('#pcat').val().trim(),
        imagen: $('#pimg').val().trim(), contenido: $('#pcnt').val().trim(),
        tags: $('#ptag').val().split(',').map(t=>t.trim()).filter(Boolean),
        activo: $('#pact').val()==='true',
        ...(edit?{}:{fecha:serverTimestamp(),vistas:0})
      }, { merge: true });
      
      Mensaje(`Post ${edit?'actualizado':'creado'} correctamente`, 'success');
      removels('posts_lista');
      window.cerrarModal('modalPost');
      $('.tbl-pst').length && cargarPostsAdmin();
    } catch (e) {
      console.error(e);
      Mensaje('Error al guardar el post', 'error');
    } finally {
      wiSpin('#bguardar', false);
    }
  });
};

// ==== 🗑️ ELIMINAR POST ==== 
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

// ==== 📋 ADMIN POSTS ==== 
export const cargarPostsAdmin = async () => {
  const posts = await listarPosts(false);
  
  $('.tbl-pst tbody').html(posts.length ? posts.map(p => `
    <tr>
      <td class="td-fecha">${getbd(p.fecha)}</td>
      <td class="td-titulo"><strong>${p.titulo}</strong></td>
      <td class="td-cat">${p.categoria}</td>
      <td class="td-vistas"><i class="fas fa-eye"></i> ${p.vistas||0}</td>
      <td class="td-estado"><span class="bdg ${p.activo?'bdg-ok':'bdg-no'}">${p.activo?'Activo':'Inactivo'}</span></td>
      <td class="td-acciones">
        <button class="btn-acc btn-ver" data-id="${p.id}" title="Ver en nueva pestaña"><i class="fas fa-external-link-alt"></i></button>
        <button class="btn-acc btn-edit" data-id="${p.id}" title="Editar post"><i class="fas fa-edit"></i></button>
        <button class="btn-acc btn-del" data-id="${p.id}" data-tit="${p.titulo}" title="Eliminar post"><i class="fas fa-trash-alt"></i></button>
      </td>
    </tr>
  `).join('') : '<tr><td colspan="6" class="td-vacio">No hay posts creados todavía</td></tr>');
  
  // Eventos
  $('.btn-ver').on('click', function() { window.open(`/${$(this).data('id')}`, '_blank'); });
  $('.btn-edit').on('click', async function() {
    const p = await obtenerPost($(this).data('id'));
    p && abrirModalPost(p);
  });
  $('.btn-del').on('click', function() { eliminarPost($(this).data('id'), $(this).data('tit')); });
};