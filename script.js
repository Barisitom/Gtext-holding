
// Navbar toggle for mobile (single small script used across pages)
const setupNavToggle = (btnId, menuId) => {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
};

setupNavToggle('nav-toggle','mobile-menu');
setupNavToggle('nav-toggle-2','mobile-menu-2');
setupNavToggle('nav-toggle-3','mobile-menu-3');
setupNavToggle('nav-toggle-4','mobile-menu-4');

// Simple contact form validation & faux submit
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('form-status');

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.style.color = 'crimson';
      return;
    }

    // lightweight email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.style.color = 'crimson';
      return;
    }

    // Simulate sending (replace with EmailJS or fetch to your API)
    status.textContent = 'Sending...';
    status.style.color = 'gray';

    setTimeout(() => {
      status.textContent = 'Thanks — we received your message and will contact you soon.';
      status.style.color = 'green';
      form.reset();
    }, 900);
  });
}