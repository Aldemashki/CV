(function () {
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    return root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
  }

  document.getElementById('theme-btn').addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  document.getElementById('print-btn').addEventListener('click', function () {
    window.print();
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // Language switching. German text in the HTML is captured once as the default.
  var LANGS = ['de', 'en', 'ar'];
  var textEls = document.querySelectorAll('[data-i18n]');
  var ariaEls = document.querySelectorAll('[data-i18n-aria]');
  var metaDesc = document.querySelector('meta[name="description"]');
  var de = { meta_title: document.title, meta_description: metaDesc.content };
  textEls.forEach(function (el) { de[el.dataset.i18n] = el.innerHTML.trim().replace(/\s+/g, ' '); });
  ariaEls.forEach(function (el) { de[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
  var dict = { de: de, en: window.I18N.en, ar: window.I18N.ar };

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'de';
    var t = dict[lang];
    textEls.forEach(function (el) { if (t[el.dataset.i18n]) el.innerHTML = t[el.dataset.i18n]; });
    ariaEls.forEach(function (el) { if (t[el.dataset.i18nAria]) el.setAttribute('aria-label', t[el.dataset.i18nAria]); });
    document.title = t.meta_title;
    metaDesc.content = t.meta_description;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      setLang(b.dataset.lang);
      try { localStorage.setItem('lang', b.dataset.lang); } catch (e) {}
      try {
        var url = new URL(location.href);
        url.searchParams.set('lang', b.dataset.lang);
        history.replaceState(null, '', url);
      } catch (e) {}
    });
  });

  setLang(root.lang);
})();
