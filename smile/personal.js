import $ from 'jquery';
import './posts.css';
import { header } from './header.js';
import { footer } from './footer.js';
import { abrirModalPost, cargarPostsAdmin } from './posts.js';

export function personalContenido(wi) {
  $('.app').html(`
    ${header(wi)} 
    <main class="miweb miwp">
      <section class="adm-pnl">
        <div class="adm-h">
          <div class="adm-h-left">
            <h2><i class="fas fa-newspaper"></i> Gestión de Posts</h2>
            <p class="adm-sub">Administra tus publicaciones del blog</p>
          </div>
          <button class="btn_pri" id="bnuevo">
            <i class="fas fa-plus-circle"></i> Nuevo Post
          </button>
        </div>

        <div class="tabla-wrapper">
          <table class="tbl-pst">
            <thead>
              <tr>
                <th><i class="fas fa-calendar"></i> Fecha</th>
                <th><i class="fas fa-heading"></i> Título</th>
                <th><i class="fas fa-tag"></i> Categoría</th>
                <th><i class="fas fa-eye"></i> Vistas</th>
                <th><i class="fas fa-toggle-on"></i> Estado</th>
                <th><i class="fas fa-cog"></i> Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="6" class="td-loading">
                  <i class="fas fa-spinner fa-spin"></i> Cargando posts...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
    ${footer()}
  `);

  cargarPostsAdmin();
  $('#bnuevo').off('click').on('click', () => abrirModalPost());
}