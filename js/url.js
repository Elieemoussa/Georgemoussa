
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
        page4.style.display = 'none';
      }
    }
  });

