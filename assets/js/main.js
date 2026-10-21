(() => {
  'use strict';

  /* ----------------------------------------------------------
     Back to top
  ---------------------------------------------------------- */
  const btt = document.querySelector('.back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    btt.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------------
     Fade-in on scroll (IntersectionObserver)
  ---------------------------------------------------------- */
  const items = document.querySelectorAll('.grid__item');
  if (items.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
  }

  /* ----------------------------------------------------------
     Portfolio filter (fashion.html only)
  ---------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const grid       = document.getElementById('fashion-grid');

  if (filterBtns.length && grid) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
        btn.classList.add('filter-btn--active');

        const filter = btn.dataset.filter;

        grid.querySelectorAll('.grid__item').forEach(item => {
          const match = filter === 'all' || item.dataset.category === filter;
          item.classList.toggle('grid__item--hidden', !match);
          // re-trigger fade for newly visible items
          if (match && !item.classList.contains('in-view')) {
            item.classList.add('in-view');
          }
        });
      });
    });
  }

})();
