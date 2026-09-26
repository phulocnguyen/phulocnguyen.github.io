const themeButton = document.querySelector('.theme-toggle');
function updateThemeButton() {
    const dark = document.documentElement.dataset.theme === 'dark';
    themeButton.textContent = dark ? 'light' : 'dark';
    themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
}
if (themeButton) {
    themeButton.hidden = false;
    updateThemeButton();
    themeButton.addEventListener('click', () => {
        const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = theme;
        try { localStorage.setItem('theme', theme); } catch (_) { /* Theme still works without storage. */ }
        updateThemeButton();
    });
}

document.querySelectorAll('.copy-citation').forEach(button => {
    if (!navigator.clipboard || !window.isSecureContext) {
        button.hidden = true; // The citation remains selectable in its disclosure.
        return;
    }
    button.addEventListener('click', async () => {
        const citation = button.closest('.citation');
        const status = citation.querySelector('.copy-status');
        try {
            await navigator.clipboard.writeText(citation.querySelector('code').textContent);
            status.textContent = 'Citation copied.';
        } catch (_) {
            status.textContent = 'Select the citation above to copy it manually.';
        }
    });
});

// Preserve the existing site's analytics configuration when served over HTTP.
if (location.protocol === 'http:' || location.protocol === 'https:') {
    fetch('assets/js/config.json')
        .then(response => response.ok ? response.json() : null)
        .then(config => {
            const id = config?.googleAnalyticsMeasurementId;
            if (!id || !/^G-[A-Z0-9]+$/.test(id)) return;
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', id);
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
            document.head.appendChild(script);
        })
        .catch(() => { /* Analytics availability must not affect the portfolio. */ });
}
