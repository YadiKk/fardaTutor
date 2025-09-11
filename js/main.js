// Smooth scroll for in-page links
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href');
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Contact form: open mail client with prefilled content
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString();
    const email = (data.get('email') || '').toString();
    const message = (data.get('message') || '').toString();

    const subject = encodeURIComponent('Lesson inquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


