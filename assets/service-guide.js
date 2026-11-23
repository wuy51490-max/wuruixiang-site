(() => {
  const guide = document.querySelector('[data-service-guide]');
  if (!guide) return;

  const list = guide.querySelector('[data-guide-options]');
  const links = [...list.querySelectorAll('a')];
  const panels = links.map(link => document.querySelector(link.hash));
  if (panels.some(panel => !panel)) return;

  list.setAttribute('role', 'tablist');
  list.setAttribute('aria-label', '选择法律问题');
  panels.forEach((panel, index) => {
    links[index].setAttribute('role', 'tab');
    links[index].setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.tabIndex = 0;
  });

  function select(activeIndex, focus = false) {
    links.forEach((link, index) => {
      const active = index === activeIndex;
      link.setAttribute('aria-selected', String(active));
      link.tabIndex = active ? 0 : -1;
      panels[index].hidden = !active;
    });
    if (focus) links[activeIndex].focus();
  }

  function navigateToHash() {
    const index = links.findIndex(link => link.hash === location.hash);
    if (index >= 0) select(index);
  }

  links.forEach((link, index) => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      select(index);
    });
    link.addEventListener('keydown', event => {
      let next;
      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight': next = (index + 1) % links.length; break;
        case 'ArrowUp':
        case 'ArrowLeft': next = (index + links.length - 1) % links.length; break;
        case 'Home': next = 0; break;
        case 'End': next = links.length - 1; break;
        case ' ': next = index; break;
        default: return;
      }
      event.preventDefault();
      select(next, true);
    });
  });

  select(0);
  navigateToHash();
  window.addEventListener('hashchange', navigateToHash);
})();
