// Init icons
lucide.createIcons();

// Elements
const overlay = document.getElementById('figmaOverlay');
const openBtn = document.getElementById('openFigmaBtn');
const closeBtn = document.getElementById('closeFigmaBtn');
const closeBtn2 = document.getElementById('closeFigmaBtn2');
const continueBtn = document.getElementById('continueFigmaBtn');

// Open overlay
function openFigma() {
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

// Close overlay
function closeFigma() {
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

// Events
openBtn.addEventListener('click', openFigma);
closeBtn.addEventListener('click', closeFigma);
closeBtn2.addEventListener('click', closeFigma);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeFigma();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('active')) {
    closeFigma();
  }
});

continueBtn.addEventListener('click', () => {
  // later: echte figma link
  // window.open('https://figma.com', '_blank');
  closeFigma();
});
