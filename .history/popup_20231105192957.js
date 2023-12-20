document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    var dateString = date.toISOString().slice(0,10); // "YYYY-MM-DD"
    var podcast = null;
    
    // Fetch data from the external source
    fetch('https://raw.githubusercontent.com/fechinmitchell/RedPillPodcasts/main/podcast-data.json')
      .then(response => response.json())
      .then(data => {
        podcast = data[dateString];
  
        var podcastElement = document.getElementById('podcast');
        var podcastImageElement = document.getElementById('podcast-image');
        var podcastPointsElement = document.getElementById('podcast-points');
        
        if (podcast && podcast.name && podcast.link && podcast.keyPoints) {
            var link = document.createElement('a');
            link.href = podcast.link;
            link.target = "_blank";
            link.innerText = podcast.name;
            podcastElement.appendChild(link);
  
            podcastImageElement.src = podcast.image || "placeholder.jpg";
            podcastPointsElement.innerText = podcast.keyPoints;
        } else {
            podcastElement.innerText = 'No podcast for today';
            podcastImageElement.src = "placeholder.jpg";
        }
  
        var clickCount = 0;
        document.getElementById('logo').addEventListener('click', function() {
            clickCount++;
            if (clickCount == 3) {
                window.open('form.html', '_blank');
                clickCount = 0;
            }
        });
      })
      .catch(e => console.error('Failed to parse podcast data', e));
});

// Function to toggle dark mode
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle('dark-mode'); // Toggle the .dark-mode class on the body
  
  // Save the current theme preference to local storage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Set the initial theme on page load based on the saved preference
document.addEventListener('DOMContentLoaded', function() {
  var currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// Add the event listener to the dark mode toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

  
  
  