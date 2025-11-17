import $ from 'jquery';
import './wimodal.js';
import './posts.css';
import { db } from '../firebase/init.js';
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc, query, where, orderBy, increment, updateDoc, serverTimestamp } from 'firebase/firestore';
import { Mensaje, savels, getls, removels, wiSpin } from './widev.js';
import { header } from './header.js';
import { footer } from './footer.js';

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
    if (cache) return cache;
    const q = activos ? query(collection(db, 'posts'), where('activo', '==', true), orderBy('fecha', 'desc')) : query(collection(db, 'posts'), orderBy('fecha', 'desc'));
    const busq = await getDocs(q);
    const posts = busq.docs.map(d => ({ id: d.id, ...d.data() }));
    savels('posts_lista', posts, 0.5);
    return posts;
  } catch (e) { console.error(e); return []; }
};

// ==============================
// 🎨 MOSTRAR POST
// ==============================
export const mostrarPost = async (id, wi) => {
  const p = await obtenerPost(id);
  if (!p || !p.activo) return $('.app').html(`${header(wi)}<main class="miweb"><div class="pst-err"><i class="fas fa-exclamation-circle"></i><h2>Post no encontrado</h2><a href="/">← Volver</a></div></main>${footer()}`);
  const fecha = p.fecha?.toDate ? new Date(p.fecha.toDate()).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Sin fecha';
  $('.app').html(`${header(wi)}<main class="miweb"><article class="pst"><header class="pst-h"><span class="pst-cat">${p.categoria}</span><h1>${p.titulo}</h1><div class="pst-meta"><span><i class="fas fa-user"></i> ${p.autor}</span><span><i class="fas fa-calendar"></i> ${fecha}</span><span><i class="fas fa-eye"></i> ${p.vistas||0}</span></div>${p.imagen?`<img src="${p.imagen}" alt="${p.titulo}" class="pst-img">`:''}</header><div class="pst-cnt">${p.contenido}</div><footer class="pst-f">${p.tags?.map(t=>`<span class="tag">#${t}</span>`).join('')||''}</footer></article></main>${footer()}`);
  estilos();
};

// ==============================
// 📝 MODAL POST
// ==============================
export const abrirModalPost = (p = null) => {
  const edit = p !== null;
  $('#modalPost').remove();
  $('body').append(`<div id="modalPost" class="modal"><div class="modal-content" style="max-width:900px;"><div class="modal-header"><h3>${edit?'✏️ Editar':'➕ Nuevo'} Post</h3><button class="close-modal">&times;</button></div><div class="modal-body"><form id="fpost"><div class="form_row"><div class="form_gr"><label class="form_lab"><i class="fas fa-heading"></i> Título</label><input type="text" id="ptit" value="${p?.titulo||''}" required></div><div class="form_gr"><label class="form_lab"><i class="fas fa-tag"></i> Categoría</label><input type="text" id="pcat" value="${p?.categoria||''}" required></div></div><div class="form_gr"><label class="form_lab"><i class="fas fa-user"></i> Autor</label><input type="text" id="paut" value="${p?.autor||''}" required></div><div class="form_gr"><label class="form_lab"><i class="fas fa-image"></i> Imagen URL</label><input type="url" id="pimg" value="${p?.imagen||''}"></div><div class="form_gr"><label class="form_lab"><i class="fas fa-align-left"></i> Contenido HTML</label><textarea id="pcnt" rows="10" required>${p?.contenido||''}</textarea></div><div class="form_gr"><label class="form_lab"><i class="fas fa-tags"></i> Tags (coma)</label><input type="text" id="ptag" value="${p?.tags?.join(', ')||''}"></div><div class="form_row"><div class="form_gr"><label class="form_lab"><i class="fas fa-toggle-on"></i> Estado</label><select id="pact" class="inp_sel"><option value="true" ${p?.activo!==false?'selected':''}>Activo</option><option value="false" ${p?.activo===false?'selected':''}>Inactivo</option></select></div>${edit?`<div class="form_gr"><label class="form_lab"><i class="fas fa-eye"></i> Vistas</label><input type="number" value="${p?.vistas||0}" readonly style="background:#f0f0f0;"></div>`:''}</div><button type="submit" class="btn_pri" id="bguardar"><i class="fas fa-save"></i> ${edit?'Actualizar':'Crear'}</button></form></div></div></div>`);
  window.abrirModal('modalPost');
  $('#fpost').off('submit').on('submit', async (e) => {
    e.preventDefault();
    const tit = $('#ptit').val().trim();
    const id = p?.id || tit.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
    if (!edit) {
      const existe = await getDoc(doc(db, 'posts', id));
      if (existe.exists()) return Mensaje('Ya existe ese título, cámbialo un poco', 'error');
    }
    wiSpin('#bguardar', true, edit?'Actualizando':'Creando');
    try {
      const datos = { id, titulo: tit, autor: $('#paut').val().trim(), categoria: $('#pcat').val().trim(), imagen: $('#pimg').val().trim(), contenido: $('#pcnt').val().trim(), tags: $('#ptag').val().split(',').map(t=>t.trim()).filter(Boolean), activo: $('#pact').val()==='true', ...(edit?{}:{fecha:serverTimestamp(),vistas:0}) };
      await setDoc(doc(db, 'posts', id), datos, { merge: true });
      Mensaje(`Post ${edit?'actualizado':'creado'} ✅`, 'success');
      removels('posts_lista');
      window.cerrarModal('modalPost');
      if ($('.tbl-pst').length) cargarPostsAdmin();
    } catch (e) { console.error(e); Mensaje('Error al guardar', 'error'); } finally { wiSpin('#bguardar', false); }
  });
};

// ==============================
// 🗑️ ELIMINAR POST
// ==============================
export const eliminarPost = async (id, tit) => {
  if (!confirm(`¿Eliminar "${tit}"?`)) return;
  try {
    await deleteDoc(doc(db, 'posts', id));
    Mensaje('Post eliminado ✅', 'success');
    removels('posts_lista', `post_${id}`);
    cargarPostsAdmin();
  } catch (e) { console.error(e); Mensaje('Error al eliminar', 'error'); }
};

// ==============================
// 📋 ADMIN POSTS
// ==============================
export const cargarPostsAdmin = async () => {
  const posts = await listarPosts(false);
  const html = posts.length ? posts.map(p => {
    const fecha = p.fecha?.toDate ? new Date(p.fecha.toDate()).toLocaleDateString('es-ES') : 'Sin fecha';
    return `<tr><td><strong>${p.titulo}</strong></td><td>${p.categoria}</td><td>${p.autor}</td><td>${fecha}</td><td><span class="bdg ${p.activo?'bdg-ok':'bdg-no'}">${p.activo?'Activo':'Inactivo'}</span></td><td>${p.vistas||0}</td><td><button class="btn-ver" data-id="${p.id}"><i class="fas fa-eye"></i></button><button class="btn-edit" data-id="${p.id}"><i class="fas fa-edit"></i></button><button class="btn-del" data-id="${p.id}" data-tit="${p.titulo}"><i class="fas fa-trash"></i></button></td></tr>`;
  }).join('') : '<tr><td colspan="7" style="text-align:center;padding:3vh;">No hay posts</td></tr>';
  $('.tbl-pst tbody').html(html);
  $('.btn-ver').off('click').on('click', function() { window.open(`/${$(this).data('id')}`, '_blank'); });
  $('.btn-edit').off('click').on('click', async function() { const p = await obtenerPost($(this).data('id')); if (p) abrirModalPost(p); });
  $('.btn-del').off('click').on('click', function() { eliminarPost($(this).data('id'), $(this).data('tit')); });
};

