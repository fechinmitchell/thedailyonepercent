document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    var dayOfMonth = date.getDate();
    var podcast = localStorage.getItem(dayOfMonth);
  
    document.getElementById('podcast').innerText = podcast || 'No podcast for today';
  
    document.getElementById('admin-button').addEventListener('click', function() {
      // Here you could add a password check or other method of verifying the super user
      var newPodcast = prompt('Enter the podcast for ' + dayOfMonth);
      localStorage.setItem(dayOfMonth, newPodcast);
    });
  });
  