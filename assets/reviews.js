(() => {
  const list = document.querySelector('[data-review-list]');
  const summary = document.querySelector('[data-review-summary]');
  fetch('./assets/reviews.json', { cache: 'no-cache' })
    .then(response => {
      if (!response.ok) throw new Error('Reviews unavailable');
      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data)) throw new Error('Invalid reviews');
      const reviews = data.filter(r => r && typeof r.name === 'string' && r.name.trim() &&
        typeof r.review === 'string' && r.review.trim() && Number.isInteger(r.rating) && r.rating >= 1 && r.rating <= 5);
      if (!reviews.length) return;
      const cards = reviews.map(review => {
        const card = document.createElement('article');
        card.className = 'review-card';
        const stars = document.createElement('div');
        stars.className = 'review-stars';
        stars.setAttribute('aria-label', `${review.rating} out of 5 stars`);
        stars.textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const quote = document.createElement('blockquote');
        quote.textContent = review.review;
        const name = document.createElement('h3');
        name.textContent = review.name;
        const project = document.createElement('p');
        project.textContent = typeof review.project === 'string' ? review.project : '';
        card.append(stars, quote, name, project);
        return card;
      });
      list.replaceChildren(...cards);
      const average = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
      summary.textContent = `${average.toFixed(1)} / 5 · ${reviews.length} published customer ${reviews.length === 1 ? 'review' : 'reviews'}`;
    })
    .catch(() => {
      list.querySelector('p').textContent = 'Reviews are unavailable right now. You can still share your experience using the form.';
    });

  const form = document.querySelector('[data-review-form]');
  const status = document.querySelector('[data-review-status]');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const button = form.querySelector('[type="submit"]');
    button.disabled = true;
    button.textContent = 'Sending review…';
    status.textContent = '';
    try {
      if (['file:', ''].includes(location.protocol) || ['localhost', '127.0.0.1'].includes(location.hostname)) {
        throw new Error('Preview only');
      }
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      status.textContent = 'Thank you! Your review has been submitted for approval. It will appear here after it is published.';
    } catch (error) {
      status.textContent = error.message === 'Preview only'
        ? 'Review submissions are available on the live website. Your review has not been sent from this preview.'
        : 'Your review could not be sent. Please try again. Your text has been kept.';
    } finally {
      button.disabled = false;
      button.textContent = 'Submit review';
    }
  });
})();
