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
        showPasswordInput();
        clickCount = 0;
      }
    });
  
    document.getElementById('admin-button').addEventListener('click', function() {
      showPasswordInput();
    });
  
    function showPasswordInput() {
      var passwordPopup = document.createElement('div');
      passwordPopup.innerHTML = `
        <div class="popup">
          <label for="password-input">Enter password:</label>
          <input type="password" id="password-input">
          <button id="submit-button">Submit</button>
        </div>
      `;
  
      document.body.appendChild(passwordPopup);
  
      var submitButton = document.getElementById('submit-button');
      submitButton.addEventListener('click', function() {
        var passwordInput = document.getElementById('password-input');
        var password = passwordInput.value;
        if (password === 'your_password_here') {
          showPodcastInput(dayOfMonth);
        }
        passwordPopup.remove();
      });
    }
  
    function showPodcastInput(dayOfMonth) {
      var podcastPopup = document.createElement('div');
      podcastPopup.innerHTML = `
        <div class="popup">
          <label for="podcast-name-input">Enter the name of the podcast for ${dayOfMonth}:</label>
          <input type="text" id="podcast-name-input">
          <label for="podcast-link-input">Enter the link to the podcast for ${dayOfMonth}:</label>
          <input type="text" id="podcast-link-input">
          <button id="submit-button">Submit</button>
        </div>
      `;
  
      document.body.appendChild(podcastPopup);
  
      var submitButton = document.getElementById('submit-button');
      submitButton.addEventListener('click', function() {
        var nameInput = document.getElementById('podcast-name-input');
        var linkInput = document.getElementById('podcast-link-input');
        var newPodcastName = nameInput.value;
        var newPodcastLink = linkInput.value;
        localStorage.setItem(dayOfMonth, JSON.stringify({ name: newPodcastName, link: newPodcastLink }));
        podcastElement.innerHTML = `<a href="${newPodcastLink}" target="_blank">${newPodcastName}</a>`;
        podcastPopup.remove();
      });
    }
  });
  
  
  