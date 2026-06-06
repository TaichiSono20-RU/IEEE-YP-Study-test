document.querySelectorAll('.faq-item').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-item').forEach((item) => item.setAttribute('aria-expanded', 'false'));
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
    }
  });
});
