document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    var dayOfMonth = date.getDate();
    var podcast = localStorage.getItem(dayOfMonth);
  
    document.getElementById('podcast').innerText = podcast || 'No podcast for today';
  
    var clickCount = 0;
    document.getElementById('logo').addEventListener('click', function() {
      clickCount++;
      if (clickCount == 2) {
        var password = prompt('Enter password');
        if (password == 'your_password_here') {
          var newPodcast = prompt('Enter the podcast for ' + dayOfMonth);
          localStorage.setItem(dayOfMonth, newPodcast);
        }
        clickCount = 0;
      }
    });
  
    document.getElementById('admin-button').addEventListener('click', function() {
      var password = prompt('Enter password');
      if (password == 'your_password_here') {
        var newPodcast = prompt('Enter the podcast for ' + dayOfMonth);
        localStorage.setItem(dayOfMonth, newPodcast);
      }
    });
  });
  
  