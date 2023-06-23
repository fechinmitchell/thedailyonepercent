document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    var dayOfMonth = date.getDate();
    var podcast = null;
    try {
      podcast = JSON.parse(localStorage.getItem(dayOfMonth));
    } catch (e) {
      console.error('Failed to parse podcast data', e);
    }
  
    var podcastElement = document.getElementById('podcast');
    if (podcast && podcast.name && podcast.link) {
      var link = document.createElement('a');
      link.href = podcast.link;
      link.target = "_blank"; // open in new tab
      link.innerText = podcast.name;
      podcastElement.appendChild(link);
    } else {
      podcastElement.innerText = 'No podcast for today';
    }
  
    var clickCount = 0;
    document.getElementById('logo').addEventListener('click', function() {
      clickCount++;
      if (clickCount == 2) {
        var password = prompt('Enter password');
        if (password == 'your_password_here') {
          var newPodcastName = prompt('Enter the name of the podcast for ' + dayOfMonth);
          var newPodcastLink = prompt('Enter the link to the podcast for ' + dayOfMonth);
          localStorage.setItem(dayOfMonth, JSON.stringify({ name: newPodcastName, link: newPodcastLink }));
        }
        clickCount = 0;
      }
    });
  
    document.getElementById('admin-button').addEventListener('click', function() {
      var password = prompt('Enter password');
      if (password == 'your_password_here') {
        var newPodcastName = prompt('Enter the name of the podcast for ' + dayOfMonth);
        var newPodcastLink = prompt('Enter the link to the podcast for ' + dayOfMonth);
        localStorage.setItem(dayOfMonth, JSON.stringify({ name: newPodcastName, link: newPodcastLink }));
      }
    });
  });
  
  
  