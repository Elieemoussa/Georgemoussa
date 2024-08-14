
  // Function to get query parameters
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
  }

  document.addEventListener('DOMContentLoaded', () => {
    const queryParams = getQueryParams();
    
    // Check if the 'hidePage' parameter is present and set to 'true'
    if (queryParams.hidePage === 'true') {
      const page4 = document.getElementById('page-4');
      if (page4) {
        // Remove the item from the DOM
        page4.parentNode.removeChild(page4);
        
        // Reinitialize the carousel if necessary (specific to Bootstrap)
        const carouselElement = document.querySelector('.carousel');
        if (carouselElement) {
          const carousel = bootstrap.Carousel.getInstance(carouselElement);
          if (carousel) {
            carousel._items = carouselElement.querySelectorAll('.carousel-item');
            carousel._config = {...carousel._config, interval: 5000}; // Update as per your configuration
            carousel.cycle();
          }
        }
      }
    }
  });



