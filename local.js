// local.js

console.log("Local Treasures page loaded.");

// When the user clicks the "Search" button:
document.getElementById("zipcode-submit").addEventListener("click", function(){
  // Get the zipcode from the input field and trim any extra spaces
  const zipcode = document.getElementById("zipcode").value.trim();
  if(zipcode === ""){
    alert("Please enter a valid zipcode.");
    return;
  }
  
  // Save the zipcode in local storage (for potential future use)
  localStorage.setItem("zipcode", zipcode);
  
  // Create a Google search URL using the zipcode and a fixed search term
  const query = encodeURIComponent(`${zipcode} Live Musical Theatre near me`);
  const searchURL = "https://www.google.com/search?q=" + query;
  
  // Open the Google search in a new tab
  window.open(searchURL, '_blank');
});
