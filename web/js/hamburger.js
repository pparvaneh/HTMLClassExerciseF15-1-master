
      var drawer = document.querySelector('#atopmenu');
      var hamburger = document.querySelector('#hamburger');
      var nav = document.querySelector('nav');

      hamburger.addEventListener('click', function (e) {
        //drawer.classList.add('open');
        drawer.classList.toggle("open");
        e.stopPropagation();
        e.preventDefault();
      });
 


