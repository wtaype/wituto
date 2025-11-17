import $ from 'jquery';

import { header } from './header.js';
import { footer } from './footer.js';
import { abrirModalPost, cargarPostsAdmin } from './posts.js';

export function personalContenido(wi) {
  $('.app').html(`
    ${header(wi)} 
    <main class="miweb miwp">
      <section class="admin-panel">
        <div class="admin-header">
          <h2><i class="fas fa-newspaper"></i> Gestión de Posts</h2>
          <button class="btn_pri" id="btn_nuevo_post">
            <i class="fas fa-plus"></i> Agregar Post
          </button>
        </div>

        <div class="tabla-wrapper">
          <table class="tabla-posts tabla-registros">
            <thead>
              <tr>
                <th>Título</th>
                <th>Categoría</th>
                <th>Autor</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Vistas</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr><td colspan="7" style="text-align:center;padding:3vh;">Cargando...</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
    ${footer()}
  `);

  // Cargar posts
  cargarPostsAdmin();

  // Evento agregar post
  $('#btn_nuevo_post').off('click').on('click', () => abrirModalPost());

}