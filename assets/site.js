(() => {
  'use strict';
  document.documentElement.classList.add('js-enabled');

  const menu = document.querySelector('#siteNav');
  const toggle = document.querySelector('#menuToggle');
  const setMenu = (open, restoreFocus = false) => {
    if (!menu || !toggle) return;
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('[data-menu-label]').textContent = open ? '收起' : '菜单';
    if (restoreFocus) toggle.focus();
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu?.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  const compact = matchMedia('(max-width: 50em)');
  compact.addEventListener('change', event => { if (!event.matches) setMenu(false); });

  const topButton = document.querySelector('#scrollTop');
  if (topButton) {
    const updateTop = () => { topButton.hidden = window.scrollY < 600; };
    window.addEventListener('scroll', updateTop, { passive: true });
    topButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      document.querySelector('.brand')?.focus({ preventScroll: true });
    });
    updateTop();
  }

  const search = document.querySelector('#articleSearch');
  const cards = [...document.querySelectorAll('[data-search-card]')];
  const count = document.querySelector('#resultCount');
  const empty = document.querySelector('#searchEmpty');
  if (search && count && empty) {
    const filter = () => {
      const words = search.value.trim().toLocaleLowerCase('zh-CN').split(/\s+/).filter(Boolean);
      let visible = 0;
      cards.forEach(card => {
        const haystack = card.textContent.toLocaleLowerCase('zh-CN');
        card.hidden = !words.every(word => haystack.includes(word));
        if (!card.hidden) visible += 1;
      });
      count.textContent = words.length ? `找到 ${visible} 篇文章` : `全部文章 · ${cards.length} 篇`;
      empty.hidden = visible > 0;
    };
    search.addEventListener('input', filter);
    document.querySelector('#clearSearch')?.addEventListener('click', () => {
      search.value = '';
      filter();
      search.focus();
    });
    filter();
  }

  const dialog = document.querySelector('#imageDialog');
  if (dialog && typeof dialog.showModal === 'function') {
    const picture = dialog.querySelector('img');
    const caption = dialog.querySelector('#imageCaption');
    let previousOverflow = '';
    document.querySelectorAll('a[data-img]').forEach(link => {
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        const title = link.dataset.title || link.querySelector('img')?.alt || link.textContent.trim();
        picture.src = link.href;
        picture.alt = title;
        caption.textContent = title;
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialog.showModal();
      });
    });
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => {
      document.body.style.overflow = previousOverflow;
      picture.removeAttribute('src');
    });
  }
})();
