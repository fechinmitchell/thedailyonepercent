document.addEventListener('DOMContentLoaded', function() {
  var date = new Date();
  var dateString = date.toISOString().slice(0,10); // "YYYY-MM-DD"
  var podcast = null;
  
  // Fetch data from the external source
  fetch('https://raw.githubusercontent.com/<your-github-username>/<your-repo-name>/main/podcast-data.json')
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


  
  
  