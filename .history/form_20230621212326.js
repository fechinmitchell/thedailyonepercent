document.getElementById('submit').addEventListener('click', function() {
    var password = document.getElementById('password').value;
  
    if (password === 'your_password_here') {
      var newPodcastName = document.getElementById('podcastName').value;
      var newPodcastLink = document.getElementById('podcastLink').value;
      var dayOfMonth = new Date().getDate();
      localStorage.setItem(dayOfMonth, JSON.stringify({ name: newPodcastName, link: newPodcastLink }));
      alert("Podcast info saved!");
    } else {
      alert("Invalid password!");
    }
  });
  