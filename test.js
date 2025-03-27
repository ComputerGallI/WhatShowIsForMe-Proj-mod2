// test.js

// Wait until the page is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function(){
  // Prompt the user for their name when the page loads
  let userName = prompt("Please enter your name:");
  if (!userName) { userName = "Guest"; }
  // Save the user's name in local storage for later use
  localStorage.setItem("userName", userName);
  
  // Update the text of Question 2 to include the user's name
  document.getElementById("question2-text").textContent = 
    `Okay, ${userName}, that same person has now walked up and assaulted you! What will you do?`;
  
  let firstScore = 0;
  
  // Handle the submission for Question 1
  document.getElementById("submit1").addEventListener("click", function(){
    const answer1 = document.getElementById("answer1").value;
    if (answer1 === "") {
      alert("Please select an option for the first question.");
      return;
    }
    firstScore = parseInt(answer1);
    localStorage.setItem("firstScore", firstScore);
    // Hide Question 1 and show Question 2
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
  });
  
  // Handle the submission for Question 2
  document.getElementById("submit2").addEventListener("click", function(){
    const answer2 = document.getElementById("answer2").value;
    if (answer2 === "") {
      alert("Please select an option for the second question.");
      return;
    }
    const secondScore = parseInt(answer2);
    const totalScore = firstScore + secondScore;
    localStorage.setItem("totalScore", totalScore);
    // Hide Question 2 and display the results
    document.getElementById("question2").style.display = "none";
    displayResult(totalScore);
  });
  
  // Function to display results based on the total score
  function displayResult(score) {
    const resultDiv = document.getElementById("result");
    let resultHTML = "";
    let categories = [];
    
    // Category 1: Big Emotions & Drama (score range: 0-3)
    if(score >= 0 && score <= 3) {
      categories.push({
        title: "Big Emotions & Drama",
        details: "For people who love intense stories, powerful ballads, and emotional performances.",
        shows: [
          "Les Misérables – Epic, historical, emotional",
          "Dear Evan Hansen – Modern, emotional, teen-focused",
          "Next to Normal – Mental health, raw, rock-style",
          "Miss Saigon – Love and war, tragic, intense"
        ]
      });
    }
    
    // Category 2: Fun, Flashy & Dancey (score range: 4-5)
    if(score >= 4 && score <= 5) {
      categories.push({
        title: "Fun, Flashy & Dancey",
        details: "For people who want to be entertained with big numbers, glitz, and killer choreography.",
        shows: [
          "Chicago – Jazz, crime, Fosse-style dance",
          "Hairspray – 60s vibes, racial justice, dance-heavy",
          "Moulin Rouge! – Pop hits, glam, romance",
          "Six – Pop concert-style, girl power, historical twist"
        ]
      });
      // Also include Fantasy, Magic & Escape for the overlapping range (4-5)
      categories.push({
        title: "Fantasy, Magic & Escape",
        details: "For people who want to be transported to another world.",
        shows: [
          "Wicked – Witches, magic, prequel to The Wizard of Oz",
          "Hadestown – Mythology, haunting music, poetic storytelling",
          "Into the Woods – Twisted fairy tales, Sondheim style",
          "The Phantom of the Opera – Gothic romance, iconic score"
        ]
      });
    }
    
    // Category 3: Quirky, Funny & Feel-Good (score range: 5-6)
    if(score >= 5 && score <= 6) {
      categories.push({
        title: "Quirky, Funny & Feel-Good",
        details: "For those who love humor, heart, and something a bit off-beat.",
        shows: [
          "The Book of Mormon – Satirical, edgy, hilarious",
          "Beetlejuice – Dark comedy, fun effects, audience interaction",
          "Little Shop of Horrors – Campy, retro horror-comedy",
          "Shrek: The Musical – Family-friendly, parody vibes, heartfelt"
        ]
      });
    }
    
    // Build HTML for each matching category
    categories.forEach(function(cat) {
      resultHTML += `<h2>${cat.title}</h2>`;
      resultHTML += `<p>${cat.details}</p>`;
      resultHTML += `<strong>Possible Shows:</strong><ul>`;
      cat.shows.forEach(function(show) {
        resultHTML += `<li>${show}</li>`;
      });
      resultHTML += `</ul>`;
    });
    
    // Show the results
    resultDiv.innerHTML = resultHTML;
    resultDiv.style.display = "block";
  }
});

