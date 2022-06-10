import restaurantImg from './img/restaurant.jpg';

const about = function() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
          title.textContent = 'About';
          title.classList.add('title');

    content.append(title)

    function createSec() {
        const aboutContainer = document.createElement('div');
              aboutContainer.classList.add('about-container');

        const imgDiv = document.createElement('div');
              imgDiv.classList.add('img-container');
        const img = new Image();
              img.src = `${restaurantImg}`;

        const p = document.createElement('p');
              p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nunc a dolor ultricies vestibulum. Vestibulum ullamcorper auctor urna, in imperdiet quam interdum et. Etiam elit lorem, varius in augue et, pulvinar volutpat orci. Fusce porttitor dui purus. Nunc eu nulla neque. In purus metus, vehicula non tincidunt ut, rutrum in turpis. Vivamus et risus quis dolor rhoncus luctus nec vitae ante. Vivamus nisi leo, sagittis non vestibulum at, aliquet nec arcu. Quisque auctor dictum risus, quis rhoncus leo tempor eget. Duis auctor nec erat non gravida. Nunc lacinia euismod nisl ut pulvinar. Donec porta, odio nec consequat volutpat, diam felis gravida urna, accumsan ullamcorper leo augue eget lorem. Cras ultrices tristique massa, id lobortis odio interdum sit amet. Donec libero nibh, pulvinar ut ante nec, viverra imperdiet ligula. Fusce felis purus, congue eu turpis quis, varius fringilla velit. Mauris ut dolor accumsan, euismod ex nec, ultricies elit.';
              p.classList.add('about-p')
        
        aboutContainer.append(imgDiv, p);
        imgDiv.append(img);
        content.append(aboutContainer);
    }

    createSec();
};

export {about};