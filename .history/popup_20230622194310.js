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

  if (password === 'your_password_here') {
      var date = new Date(document.getElementById('date').value);
      var dateString = date.toISOString().slice(0,10); // "YYYY-MM-DD"
      var newPodcastName = document.getElementById('podcastName').value;
      var newPodcastLink = document.getElementById('podcastLink').value;

      // Use the date as the key instead of the current day of the month
      localStorage.setItem(dateString, JSON.stringify({ name: newPodcastName, link: newPodcastLink }));
      alert("Podcast info saved for " + dateString + "!");

      // Reload the podcast list to include the new podcast
      loadPodcasts();
  } else {
      alert("Invalid password!");
  }
});

// Load the saved podcasts when the page is opened
loadPodcasts();

document.addEventListener('DOMContentLoaded', function() {
  var date = new Date();
  var dateString = date.toISOString().slice(0,10); // "YYYY-MM-DD"
  var podcast = null;
  try {
      podcast = JSON.parse(localStorage.getItem(dateString));
  } catch (e) {
      console.error('Failed to parse podcast data', e);
  }

  var podcastElement = document.getElementById('podcast');
  if (podcast && podcast.name && podcast.link) {
      var link = document.createElement('a');
      link.href = podcast.link;
      link.target = "_blank";
      link.innerText = podcast.name;
      podcastElement.appendChild(link);
  } else {
      podcastElement.innerText = 'No podcast for today';
  }

  var clickCount = 0;
  document.getElementById('logo').addEventListener('click', function() {
      clickCount++;
      if (clickCount == 3) {
          window.open('form.html', '_blank');
          clickCount = 0;
      }
  });
});



  
  
  