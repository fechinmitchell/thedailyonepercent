// Function to toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode'); // Toggle the .dark-mode class on the body
  
    // Save the current theme preference to local storage
    var isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }
  
  // Set the initial theme on page load based on the saved preference
  document.addEventListener('DOMContentLoaded', function() {
    var darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    var currentTheme = localStorage.getItem('theme');
    
    // Set the dark mode based on the saved setting
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      darkModeCheckbox.checked = true;
    }
  
    // Event listener for the dark mode toggle
    darkModeCheckbox.addEventListener('change', toggleDarkMode);
  
    // Fetch the podcast data and update the DOM
    var date = new Date();
    var dateString = date.toISOString().slice(0,10); // "YYYY-MM-DD"
    var podcastElement = document.getElementById('podcast');
    var podcastImageElement = document.getElementById('podcast-image');
    var podcastPointsElement = document.getElementById('podcast-points');
  
    fetch('https://raw.githubusercontent.com/fechinmitchell/RedPillPodcasts/main/podcast-data.json')
      .then(response => response.json())
      .then(data => {
        var podcast = data[dateString];
        if (podcast && podcast.name && podcast.link && podcast.keyPoints) {
          var link = document.createElement('a');
          link.href = podcast.link;
          link.target = "_blank";
          link.innerText = podcast.name;
          podcastElement.appendChild(link);
  
          podcastImageElement.src = podcast.image || "placeholder.jpg";
          podcastPointsElement.innerText = podcast.keyPoints;
        } else {
          podcastElement.innerText = 'No podcast for today.';
          podcastImageElement.src = "placeholder.jpg";
        }
      })
      .catch(error => {
        console.error('Failed to parse podcast data', error);
        podcastElement.innerText = 'Failed to load podcast data.';
      });
  });
  
  
  