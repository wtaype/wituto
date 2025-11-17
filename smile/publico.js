import $ from 'jquery';
import './header.js';
import './footer.js';
import { db } from '../firebase/init.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Mensaje, savels, getls, removels } from './widev.js';

// === VISTA PÚBLICA ===
export async function publicoContenido() {
  $('.app').html(`
    ${header()} 
    <main class="miweb miwp">Hola mi hermosa chica, te amooo mucho grrrr</main>
    ${footer()}
  `);
}