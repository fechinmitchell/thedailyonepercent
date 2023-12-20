document.addEventListener('DOMContentLoaded', function() {
    // Toggle dark mode
    var darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    if (darkModeCheckbox) {
      darkModeCheckbox.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', this.checked ? 'dark' : 'light');
      });
    }
  
    // Set the initial theme on page load based on the saved preference
    var currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      if (darkModeCheckbox) {
        darkModeCheckbox.checked = true;
      }
    }
  
    // Fetch podcast data and update the DOM
    var date = new Date();
    var dateString = date.toISOString().slice(0,10); // "YYYY-MM-DD"
    var podcast = null;
    
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
      })
      .catch(e => {
        console.error('Failed to parse podcast data', e);
        var podcastElement = document.getElementById('podcast');
        podcastElement.innerText = 'Failed to load podcast data.';
      });
  });
  