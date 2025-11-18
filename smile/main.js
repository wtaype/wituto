import $ from 'jquery';
import './wiauth.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { savels, getls } from './widev.js'; 

const ruta = async (wi) => {
  const path = window.location.pathname.slice(1);

  // Home pública o personal
  if (!path) {
    if (wi) {
      const { personalContenido } = await import('./personal.js');
      return personalContenido(wi);
    } else {
      const { publicoContenido } = await import('./publico.js');
      return publicoContenido();
    }
  }

  // Detalle de post
  const { obtenerPost, mostrarPost } = await import('./posts.js');
  const post = await obtenerPost(path);
  post
    ? mostrarPost(path, wi)
    : $('.app').html(`<div class="pst-err"><i class="fas fa-exclamation-circle"></i><h2>404</h2><p>Página no encontrada</p><a href="/">Volver</a></div>`);
};

onAuthStateChanged(auth, async user => {
  let wi = null;
  if (user) {
    // Cache agresivo de wiSmile
    wi = getls('wiSmile');
    if (!wi) {
      try {
        const snap = await getDocs(
          query(collection(db, 'smiles'), where('usuario', '==', user.displayName))
        );
        wi = snap.docs[0]?.data() || {};
        savels('wiSmile', wi, 1440); // cache 24h
      } catch (e) { console.error(e); }
    }
  }
  await ruta(wi);
});

window.addEventListener('popstate', async () => await ruta(getls('wiSmile')));

$(document).on('click', '.bt_salir', async () => {
  await signOut(auth);
  window.location.href = '/';
  try { localStorage.clear(); } catch (_) { Object.keys(localStorage).forEach(k => localStorage.removeItem(k)); }
});