// Apply the saved theme before the page renders. Dark is the template default.
(() => {
    let theme = 'dark';
    try {
        if (localStorage.getItem('theme') === 'light') theme = 'light';
    } catch (_) { /* Storage may be unavailable in private browsing. */ }
    document.documentElement.dataset.theme = theme;
})();
