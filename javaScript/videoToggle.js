document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById('home');
  const video = document.getElementById('hero-video');

  function playVideoCycle() {
    
    hero.classList.add('video-playing');
    video.currentTime = 0;
    video.play();
  }

  video.addEventListener('ended', () => {
    
    hero.classList.remove('video-playing');

    
    setTimeout(playVideoCycle, 8000); 
  });

  
  setTimeout(playVideoCycle, 8000); 
});
