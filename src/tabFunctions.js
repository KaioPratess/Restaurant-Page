import {menu} from './menu.js';
import {about} from './about.js';
import {contact} from './contact.js';
import { home } from './home.js';

const content = document.querySelector('#content');

function openMenu() {
  content.textContent = '';
  home.createHeader();
  menu();
  home.createFooter();
}

function openAbout() {
  content.textContent = '';
  home.createHeader();
  about();
  home.createFooter();
}

function openContact() {
  content.textContent = '';
  home.createHeader();
  contact();
  home.createFooter();
}

function openHome() {
  content.textContent = '';
  home.createHeader();
  home.createIntro();
  home.createFooter();
}

export {openMenu, openAbout, openContact, openHome};