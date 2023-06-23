document.getElementById('submit').addEventListener('click', function() {
    var password = document.getElementById('password').value;
  
    if (password === 'your_password_here') {
      var date = document.getElementById('date').value;
      var newPodcastName = document.getElementById('podcastName').value;
      var newPodcastLink = document.getElementById('podcastLink').value;
  
      // Use the date as the key instead of the current day of the month
      localStorage.setItem(date, JSON.stringify({ name: newPodcastName, link: newPodcastLink }));
      alert("Podcast info saved for " + date + "!");
    } else {
      alert("Invalid password!");
    }
  });
  