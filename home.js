// home.js

// Wait until the page content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  console.log("Home page loaded.");

  // Array containing the GIPHY embed URLs
  const giphyLinks = [
    "https://giphy.com/embed/1YuORg3yUnw17ePNoi",
    "https://giphy.com/embed/l1J9E977qe4mR0SaI",
    "https://giphy.com/embed/BAIXsUq1KjWcKfI8FL",
    "https://giphy.com/embed/1106GUH98kKOeWI5UP"
  ];

  // Get the element with ID "giphy-gallery" where the videos will be inserted
  const giphyGallery = document.getElementById("giphy-gallery");
  let galleryHTML = "";

  // Loop over each URL and create an iframe inside a div for it
  giphyLinks.forEach(link => {
    galleryHTML += `
      <div class="giphy-box">
        <iframe src="${link}" frameborder="0" allowfullscreen></iframe>
      </div>
    `;
  });

  // Insert the constructed HTML into the gallery section
  giphyGallery.innerHTML = galleryHTML;
});

  