function loadPodcasts() {
    var podcastList = document.getElementById('podcast-list-items');
    podcastList.innerHTML = '';  // clear the list
  
    // load all saved podcasts from local storage
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var podcast = JSON.parse(localStorage.getItem(key));
  
      var li = document.createElement('li');
      li.innerText = key + ': ' + podcast.name + ' (' + podcast.link + ')';
  
      var deleteBtn = document.createElement('span');
      deleteBtn.className = 'delete-btn';
      deleteBtn.innerHTML = '&#10006;'; // X symbol
      deleteBtn.addEventListener('click', deletePodcast.bind(null, key));
  
      li.appendChild(deleteBtn);
      podcastList.appendChild(li);
    }
  }
  
  function deletePodcast(key) {
    localStorage.removeItem(key);
    loadPodcasts(); // Reload the podcast list to reflect the deletion
  }
  
  document.getElementById('submit').addEventListener('click', function() {
    var password = document.getElementById('password').value;
  
    if (password === '12345') {
      var date = document.getElementById('date').value;
      var newPodcastName = document.getElementById('podcastName').value;
      var newPodcastLink = document.getElementById('podcastLink').value;
      var newPodcastImage = document.getElementById('podcastImage').value;
      var point1 = document.getElementById('point1').value;
      var point2 = document.getElementById('point2').value;
      var point3 = document.getElementById('point3').value;

  
      var podcast = {
        name: newPodcastName,
        link: newPodcastLink,
        image: newPodcastImage,
        points: [point1, point2, point3]
      };
  
      // Use the date as the key instead of the current day of the month
      localStorage.setItem(date, JSON.stringify(podcast));
      alert("Podcast info saved for " + date + "!");
  
      // Reload the podcast list to include the new podcast
      loadPodcasts();
    } else {
      alert("Invalid password!");
    }
  });
  
  // Load the saved podcasts when the page is opened
  loadPodcasts();

  