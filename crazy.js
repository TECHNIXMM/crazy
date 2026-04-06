const shape = document.querySelector('.shape');

// Follow mouse movement
document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;
  shape.style.left = x + 'px';
  shape.style.top = y + 'px';
});

// Click effect
shape.addEventListener('click', () => {
  shape.style.transform = 'translate(-50%, -50%) scale(1.4)';
  shape.style.boxShadow = '0 0 50px rgba(255,77,109,0.8), 0 0 100px rgba(255,77,109,0.6)';
  setTimeout(() => {
    shape.style.transform = 'translate(-50%, -50%) scale(1)';
    shape.style.boxShadow = '0 0 30px rgba(255,77,109,0.6), 0 0 60px rgba(255,77,109,0.6)';
  }, 300);
});


// Disable right-click
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.key === 'F12') {
    e.preventDefault();
    alert('No peeking! 😎');
  }
});