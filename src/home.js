import {openMenu, openAbout, openContact, openHome} from './tabFunctions.js';


const home = (function () {
    const content = document.querySelector('#content');

    function createHeader() {
          const header = document.createElement('header');
          header.classList.add('header');
          const logo = document.createElement('a');
                logo.setAttribute('href', '#');
                logo.classList.add('logo');

          const nav = document.createElement('nav');
                nav.classList.add('nav');

          const ul = document.createElement('ul');
          const l1 = document.createElement('li');
          const l2 = document.createElement('li');
          const l3 = document.createElement('li');

          const menu = document.createElement('a');
                menu.setAttribute('href', '#');
          const about = document.createElement('a');
                about.setAttribute('href', '#');
          const contact = document.createElement('a');
                contact.setAttribute('href', '#'); 

          logo.textContent = 'Shrimps'
          menu.textContent = 'Menu';
          about.textContent = 'About';
          contact.textContent = 'Contact';

          l1.appendChild(menu);
          l2.appendChild(about);
          l3.appendChild(contact)
          ul.appendChild(l1);
          ul.appendChild(l2);
          ul.appendChild(l3);
          nav.appendChild(ul);
          header.appendChild(logo);
          header.appendChild(nav);
          content.appendChild(header);

          menu.addEventListener('click', openMenu);
          about.addEventListener('click', openAbout);
          contact.addEventListener('click', openContact);
          logo.addEventListener('click', openHome);
    }

    function createIntro() {
          const intro = document.createElement('div');
                intro.classList.add('intro');

          const descContainer = document.createElement('div');

          const copy = document.createElement('h1');
                copy.classList.add('copy');
                copy.textContent = 'The best SeaFood in the country!'
          const desc = document.createElement('p');
                desc.classList.add('desc')
                desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ex, efficitur sit amet mi imperdiet, lacinia placerat nulla.'

          descContainer.appendChild(copy);   
          descContainer.appendChild(desc);
          intro.appendChild(descContainer);   
          content.appendChild(intro);
          } 

          function createFooter() {
          const footer = document.createElement('footer');
                footer.classList.add('footer');
                footer.textContent = 'Made by KaioPratess';

          content.appendChild(footer);
    }

    return {createHeader, createFooter, createIntro}
})()

export {home}