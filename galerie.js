const dropdown = document.querySelector('.dropdown');
const box = document.querySelector('.box');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  var experienceLink = document.getElementById('experience-link');
});


function showImage(container) {
    const images = container.getElementsByClassName('hover-image');
    images[0].classList.add('hidden');
    images[1].classList.remove('hidden');
  
    // Force le navigateur à réappliquer les styles, déclenchant ainsi la transition
    container.offsetWidth; 
    images[0].style.opacity = '0';
    images[1].style.opacity = '1';
  }
  
  function hideImage(container) {
    const images = container.getElementsByClassName('hover-image');
    images[0].classList.remove('hidden');
    images[1].classList.add('hidden');
  
    // Force le navigateur à réappliquer les styles, déclenchant ainsi la transition
    container.offsetWidth;
    images[0].style.opacity = '1';
    images[1].style.opacity = '0';
  }
  
  

function toggleTextVisibility(textDivId) {
    var textDiv = document.getElementById(textDivId);
    textDiv.style.display = (textDiv.style.display === 'block') ? 'none' : 'block';
  }

