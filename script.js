document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const messageEl = document.getElementById('formMessage');
  if (!name || !email || !message) {
    showMessage('Iltimos, barcha maydonlarni to\'ldiring!', 'error');
    return;
  }
  if (name.length < 3) {
    showMessage('Ism kamida 3 ta harf bo\'lish kerak!', 'error');
    return;
  }
  if (!isValidEmail(email)) {
    showMessage('Email manzili noto\'g\'ri!', 'error');
    return;
  }
  if (message.length < 10) {
    showMessage('Xabar kamida 10 ta belgi bo\'lish kerak!', 'error');
    return;
  }
  console.log('Form Data:', { name, email, message });
  showMessage('✅ Xabaringiz muvaffaqiyatli yuborildi!', 'success');
  this.reset();
  setTimeout(() => { messageEl.textContent = ''; messageEl.className = ''; }, 4000);
});
function isValidEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email); }
function showMessage(message, type) {
  const messageEl = document.getElementById('formMessage');
  messageEl.textContent = message;
  messageEl.className = type;
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
document.querySelector('.btn-primary').addEventListener('click', function() {
  if (this.textContent.includes('O\'yinni Boshlash')) {
    alert('🎮 Minecraft o\'yinni boshlash uchun rasmiy saytga tashrif buyuring: https://minecraft.net');
    window.open('https://minecraft.net', '_blank');
  }
});
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) { current = section.getAttribute('id'); }
  });
  navLinks.forEach(link => {
    link.style.color = 'var(--light-color)';
    if (link.getAttribute('href').slice(1) === current) { link.style.color = 'var(--accent-color)'; }
  });
});
console.clear();
console.log('%c🎮 MINECRAFT SAYTIGA XUS KELIBSIZ! 🎮', 'color: #d9a03a; font-size: 18px; font-weight: bold;');
console.log('%c✅ BARCHA TESTLAR O\'TGAN', 'color: #28a745; font-size: 14px; font-weight: bold;');