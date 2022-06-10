import mapImg from './img/contact.png';
import instagramImg from './img/instagram.svg';
import twitterImg from './img/twitter.svg';
import facebookImg from './img/facebook.svg';

const contact = function() {
    const content = document.querySelector('#content');

      const title = document.createElement('h1');
      title.textContent = 'Contact';
      title.classList.add('title');

      content.append(title);
      
      const contactBg = document.createElement('div');
            contactBg.classList.add('contact-bg')

      const contactContainer = document.createElement('div');
            contactContainer.classList.add('contact-container');

      // map image
      const mapDiv = document.createElement('div');
            mapDiv.classList.add('map-container');
      const mapLink = document.createElement('a');
            mapLink.setAttribute('href', '#');
      const map = new Image();
            map.src = `${mapImg}`;
      
      mapLink.append(map);
      mapDiv.append(mapLink);

      // form
      const form = document.createElement('form');
            form.setAttribute('id', 'contact');
            form.setAttribute('action', '#');
            form.setAttribute('method', 'post');

      const name = document.createElement('div');
      const nameLabel = document.createElement('label');
            nameLabel.setAttribute('for', 'name');
            nameLabel.textContent = 'Name';
      const nameInput = document.createElement('input');
            nameInput.setAttribute('id', 'name');
            nameInput.setAttribute('name', 'name');

      name.append(nameLabel, nameInput)

      const email = document.createElement('div');
      const emailLabel = document.createElement('label');
            emailLabel.setAttribute('for', 'email');
            emailLabel.textContent = 'Email';
      const emailInput = document.createElement('input');
            emailInput.setAttribute('id', 'email');
            emailInput.setAttribute('name', 'email');
            emailInput.setAttribute('type', 'email');

      email.append(emailLabel, emailInput)

      const message = document.createElement('div');
      const messageLabel = document.createElement('label');
            messageLabel.setAttribute('for', 'message');
            messageLabel.textContent = 'Message';
      const messageInput = document.createElement('textarea');
            messageInput.setAttribute('id', 'message');
            messageInput.setAttribute('name', 'message');

      message.append(messageLabel, messageInput)

      const button = document.createElement('button');
            button.setAttribute('form', 'contact');
            button.classList.add('btn');
            button.textContent = 'Send';
      
      form.append(name, email, message, button);

      // Info
      const info = document.createElement('p');
            info.textContent = `Adress: Lorem ipsum dolor sit amet, 1203
                             Phone: 4343-3434
                             Email: contact@contact.com`;

      const socialMedia = document.createElement('div');
            socialMedia.classList.add('social-media');
      
      const div1 = document.createElement('div');
            div1.classList.add('social-media-svg');
      const div2 = div1.cloneNode(false);
      const div3 = div1.cloneNode(false);

      const instaLink = document.createElement('a');
            instaLink.setAttribute('href', 'https://www.instagram.com');
      const instagram = new Image();
            instagram.src = `${instagramImg}`;
      
      const twitterLink = document.createElement('a');
            twitterLink.setAttribute('href', 'https://www.twitter.com');
      const twitter = new Image();
            twitter.src = `${twitterImg}`;

      const faceLink = document.createElement('a');
            faceLink.setAttribute('href', 'https://www.facebook.com');
      const facebook = new Image();
            facebook.src = `${facebookImg}`;
      
      instaLink.append(instagram);
      twitterLink.append(twitter);
      faceLink.append(facebook);

      div1.append(instaLink);
      div2.append(twitterLink);
      div3.append(faceLink);

      socialMedia.append(div1, div2, div3);

      contactContainer.append(mapDiv, form, info, socialMedia);
      contactBg.append(contactContainer);
      content.append(contactBg);
}

export {contact}