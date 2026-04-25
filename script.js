/* ================================================
   VIHANGI MINSADEE - PORTFOLIO JAVASCRIPT
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ── */
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    navbar && navbar.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile nav toggle ── */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks?.classList.toggle('open');
  });

  /* Close mobile nav on link click */
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle?.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ── Active nav link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Intersection Observer – fade-up animations ── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => observer.observe(el));
  }

  /* ── Hero scroll-down button ── */
  const scrollBtn = document.querySelector('.hero-scroll-btn');
  scrollBtn?.addEventListener('click', () => {
    const next = document.querySelector('.skills-section, .blog-section, .contact-section');
    next?.scrollIntoView({ behavior: 'smooth' });
  });

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('.btn-submit');
    const btnText = btn.querySelector('.btn-text');
    const original = btnText?.textContent;

    /* Loading state */
    btn.disabled = true;
    if (btnText) btnText.textContent = 'Sending…';
    btn.style.opacity = '0.75';

    /* Simulate send */
    setTimeout(() => {
      form.style.display = 'none';
      const success = document.querySelector('.form-success');
      if (success) success.classList.add('visible');
    }, 1400);
  });

  /* ── Blog card click ── */
  document.querySelectorAll('.blog-card').forEach(card => {
    const href = card.dataset.href;
    if (href) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => window.open(href, '_blank'));
    }
  });

  /* ── Smooth anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

});