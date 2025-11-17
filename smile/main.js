import $ from 'jquery';
import './wiauth.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { wiTema, savels, getls } from './widev.js';
import { publicoContenido } from './publico.js';
import { personalContenido } from './personal.js';
import { obtenerPost, mostrarPost } from './posts.js';

// ==============================
// 🎯 ROUTER
// ==============================
const ruta = async (wi) => {
  const path = window.location.pathname.slice(1);
  if (!path) return wi ? personalContenido(wi) : publicoContenido();
  const post = await obtenerPost(path);
  post ? mostrarPost(path, wi) : $('.app').html(`<div class="pst-err"><i class="fas fa-exclamation-circle"></i><h2>404</h2><p>Página no encontrada</p><a href="/">← Volver al inicio</a></div>`);
};

// ==============================
// 🔥 AUTH
// ==============================
onAuthStateChanged(auth, async user => {
  let wi = null;
  if (user) {
    try {
      wi = getls('wiSmile');
      if (!wi) {
        const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
        wi = busq.docs[0]?.data() || {};
        savels('wiSmile', wi, 450);
      }
    } catch (e) { console.error(e); }
  }
  await ruta(wi);
});

window.addEventListener('popstate', async () => await ruta(getls('wiSmile')));

$(document).on('click', '.bt_salir', async () => {
  await signOut(auth);
  window.location.href = '/';
  try { localStorage.clear(); } catch (_) { Object.keys(localStorage).forEach(k => localStorage.removeItem(k)); }
});