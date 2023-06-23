document.getElementById('loginButton').addEventListener('click', function() {
  var password = document.getElementById('password').value;

  if (password == 'your_password_here') {
    document.getElementById('loginPopup').style.display = 'none';  // Hide the login popup
    document.getElementById('podcastNamePopup').style.display = 'block';  // Show the podcast name popup
  }

  // Handle podcast name input
  document.getElementById('podcastNameButton').addEventListener('click', function() {
    var newPodcastName = document.getElementById('podcastName').value;
    document.getElementById('podcastNamePopup').style.display = 'none';  // Hide the podcast name popup
    document.getElementById('podcastLinkPopup').style.display = 'block';  // Show the podcast link popup

    // Handle podcast link input
    document.getElementById('podcastLinkButton').addEventListener('click', function() {
      var newPodcastLink = document.getElementById('podcastLink').value;
      document.getElementById('podcastLinkPopup').style.display = 'none';  // Hide the podcast link popup

      // Store new podcast data
      localStorage.setItem(dayOfMonth, JSON.stringify({ name: newPodcastName, link: newPodcastLink }));
    });
  });
});


  
  
  