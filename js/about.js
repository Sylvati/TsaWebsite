function toggleAnswer(event) {
    var answer = event.target.nextElementSibling;
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}

  const faqs = document.querySelectorAll('.faq-section h3');
  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('active');
    });
  });
