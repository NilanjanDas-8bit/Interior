/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


/*for the 3d model part not nesssery

//document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const canvas = document.getElementById('3d-canvas');
    const fullscreenButton = document.getElementById('fullscreen-button');
    let isFullscreen = false;
  
    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 3/4, 0.1, 1000); // Aspect ratio 3:4
    const renderer = new THREE.WebGLRenderer({ canvas });
  
    function resizeRendererToDisplaySize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const aspectRatio = 3 / 4; // Aspect ratio 3:4
      renderer.setSize(width, height);
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();
    }
  
    // Load GLTF model
    const loader = new THREE.GLTFLoader();
    loader.load('assets/img/scen/scen.gltf', function (gltf) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          // Ensure proper lighting by adding an ambient light
          const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
          scene.add(ambientLight);
          // Set the color of the shirt material to white
          if (child.name === 'shirt') { // Replace 'shirt' with the name of the shirt mesh
            child.material.color.set(0xffffff);
          }
          // Set the color of the background material to grey
          if (child.name === 'background') { // Replace 'background' with the name of the background mesh
            child.material.color.set(0x888888); // Adjust the color as needed
          }
        }
      });
      scene.add(gltf.scene);
    });
  
    // Adjust camera position
    camera.position.z = 5;
  
    // Render loop
    function animate() {
      resizeRendererToDisplaySize();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  
    window.addEventListener('resize', resizeRendererToDisplaySize);
  
    // Toggle fullscreen on canvas click
    canvas.addEventListener('click', function () {
      if (!isFullscreen) {
        container.requestFullscreen();
        isFullscreen = true;
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        isFullscreen = false;
      }
    });
  
    // Listen for fullscreen change event
    document.addEventListener('fullscreenchange', function () {
      isFullscreen = !isFullscreen;
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
  // Function to move to the next slide
  function nextSlide(slider) {
    const slides = slider.querySelectorAll('img');
    const currentSlide = slider.querySelector('img.active');
    const nextIndex = (currentSlide ? Array.from(slides).indexOf(currentSlide) : -1) + 1;
    const nextSlide = slides[nextIndex % slides.length];
    if (currentSlide) currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
  }

  // Automatically advance the slider every 3 seconds
  setInterval(function() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(function(slider) {
      nextSlide(slider);
    });
  }, 3000);
});
