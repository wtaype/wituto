import $ from 'jquery';
import './posts.css';
import { header } from './header.js';
import { footer } from './footer.js';
import { db } from '../firebase/init.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { getls, savels } from './widev.js';

async function obtenerPostsPublicos() {
  const cache = getls('posts_publicos');
  if (cache) return cache;

  const q = query(
    collection(db, 'posts'),
    orderBy('fecha', 'desc')
  );
  const snap = await getDocs(q);

  // Filtramos activo en el cliente para evitar índice compuesto
  const posts = snap.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .filter(p => p.activo);

  savels('posts_publicos', posts, 0.5);
  return posts;
}

// === VISTA PÚBLICA ===
export async function publicoContenido() {
  const posts = await obtenerPostsPublicos();

  const cards = posts.length
    ? posts
        .map(p => {
          const textoPlano = (p.contenido || '').replace(/<[^>]*>/g, ' ');
          const desc = textoPlano.slice(0, 80).trim() + (textoPlano.length > 80 ? '...' : '');
          return `
          <a href="/${p.id}" class="post-card">
            ${p.imagen
              ? `<img src="${p.imagen}" alt="${p.titulo}" class="post-img">`
              : `<div class="post-no-img"><i class="fas fa-image"></i></div>`}
            <div class="post-info">
              <h3>${p.titulo}</h3>
              <p style="font-size:var(--fz_c4);color:var(--txs);margin-top:1vh;">${desc}</p>
            </div>
          </a>`;
        })
        .join('')
    : `<div class="no-posts">Aún no hay posts publicados.</div>`;

  $('.app').html(`
    ${header()}
    <main class="miweb miwp">
      <section class="pub-hero">
        <h1>WiTuto Blog</h1>
        <p>Explora los últimos posts publicados</p>
      </section>
      <section class="pub-posts">
        <div class="posts-grid">
          ${cards}
        </div>
      </section>
    </main>
    ${footer()}
  `);
}