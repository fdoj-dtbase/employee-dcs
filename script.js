document.addEventListener('DOMContentLoaded', function() {
  // Show popup announcement
  function showAnnouncement() {
    const popup = document.createElement('div');
    popup.className = 'announcement-popup';
    popup.innerHTML = `
      <span class="announcement-msg">This website is secured by Mitten Development</span>
      <button class="close-announcement" title="Close">&times;</button>
    `;
    document.body.appendChild(popup);

    // Close button event
    popup.querySelector('.close-announcement').onclick = function() {
      popup.style.opacity = '0';
      setTimeout(() => {
        popup.remove();
      }, 400);
    };

    // Auto-hide after 8 seconds
    setTimeout(() => {
      if (document.body.contains(popup)) {
        popup.style.opacity = '0';
        setTimeout(() => {
          popup.remove();
        }, 400);
      }
    }, 8000);
  }

  showAnnouncement();
});