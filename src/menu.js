import plate1Img from './img/plate1.jpg';
import plate2Img from './img/plate2.jpg';
import plate3Img from './img/plate3.jpg';
import plate4Img from './img/plate4.jpg';
import plate5Img from './img/plate5.jpg';
import plate6Img from './img/plate6.jpg';

import drink1Img from './img/drink1.jpg';
import drink2Img from './img/drink2.jpg';
import drink3Img from './img/drink3.jpeg';
import drink4Img from './img/drink4.jpg';
import drink5Img from './img/drink5.jpg';
import drink6Img from './img/drink6.jpg';


const menu = (function() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
          title.textContent = 'Menu';
          title.classList.add('title');

    function createDishesSec() {
        const sec = document.createElement('section');
              sec.setAttribute('aria-label', 'dishes');
              sec.classList.add('dishes-sec');
        const dishesBg = document.createElement('div');
              dishesBg.classList.add('dishes-bg');
        const dishesTitle = document.createElement('h2');
              dishesTitle.textContent = 'Dishes';

        const optContainer = document.createElement('div');
              optContainer.classList.add('opt-container');

        const div1 = document.createElement('div');
              div1.classList.add('img-div');
        const div2 = div1.cloneNode(false);
        const div3 = div1.cloneNode(false);
        const div4 = div1.cloneNode(false);
        const div5 = div1.cloneNode(false);
        const div6 = div1.cloneNode(false);

        const plate1 = new Image();
              plate1.src = plate1Img;
        const plate2 = new Image();
              plate2.src = plate2Img;
        const plate3 = new Image();
              plate3.src = plate3Img;
        const plate4 = new Image();
              plate4.src = plate4Img;
        const plate5 = new Image();
              plate5.src = plate5Img;
        const plate6 = new Image();
              plate6.src = plate6Img;
            
        div1.appendChild(plate1);
        div2.appendChild(plate2);
        div3.appendChild(plate3);
        div4.appendChild(plate4);
        div5.appendChild(plate5);
        div6.appendChild(plate6);

        content.append(title, sec);
        sec.append(dishesBg, optContainer);
        dishesBg.appendChild(dishesTitle);
        optContainer.append(div1, div2, div3, div4, div5, div6);
    }

    function createDrinksSec() {
      const sec = document.createElement('section');
            sec.setAttribute('aria-label', 'drinks');
            sec.classList.add('drinks-sec');
      const drinksBg = document.createElement('div');
            drinksBg.classList.add('drinks-bg');
      const drinksTitle = document.createElement('h2');
            drinksTitle.textContent = 'Drinks';

      const optContainer = document.createElement('div');
            optContainer.classList.add('opt-container');

      const div1 = document.createElement('div');
            div1.classList.add('img-div');
      const div2 = div1.cloneNode(false);
      const div3 = div1.cloneNode(false);
      const div4 = div1.cloneNode(false);
      const div5 = div1.cloneNode(false);
      const div6 = div1.cloneNode(false);

      const drink1 = new Image();
            drink1.src = drink1Img;
      const drink2 = new Image();
            drink2.src = drink2Img;
      const drink3 = new Image();
            drink3.src = drink3Img;
      const drink4 = new Image();
            drink4.src = drink4Img;
      const drink5 = new Image();
            drink5.src = drink5Img;
      const drink6 = new Image();
            drink6.src = drink6Img;
          
      div1.appendChild(drink1);
      div2.appendChild(drink2);
      div3.appendChild(drink3);
      div4.appendChild(drink4);
      div5.appendChild(drink5);
      div6.appendChild(drink6);

      content.append(sec);
      sec.append(drinksBg, optContainer);
      drinksBg.appendChild(drinksTitle);
      optContainer.append(div1, div2, div3, div4, div5, div6);
  }

  const plateName = document.createElement('h3');
        plateName.textContent = 'LoremIpsum';
        plateName.classList.add('plate-name');
  const desc = document.createElement('p');
        desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        desc.classList.add('desc');

  function showDetails(event) {
      const img = event.target;
            img.style.opacity = '.3';
      const div = event.path[1];
            div.append(plateName, desc);
  }

  function hideDetails(event) {
     const img = event.target;
           img.style.opacity = '1';
      plateName.remove();
      desc.remove();
  }
    
    createDishesSec();
    createDrinksSec();

    const imgDiv = document.querySelectorAll('.img-div');
    
    imgDiv.forEach((div) => {
      div.addEventListener('mouseover', showDetails);
      div.addEventListener('mouseout', hideDetails);
    })


})()

export {menu};