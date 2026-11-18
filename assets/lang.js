(function () {
  var q = new URLSearchParams(location.search);
  var saved = null;
  try { saved = localStorage.getItem('qs-lang'); } catch (e) {}
  var lang = q.get('lang') || saved || ((navigator.language || '').slice(0, 2) === 'ar' ? 'ar' : 'en');
  function apply(l) {
    lang = l === 'ar' ? 'ar' : 'en';
    document.documentElement.lang = lang === 'ar' ? 'ar-AE' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('lang', lang);
    var t = document.getElementById('titles');
    if (t) document.title = t.getAttribute('data-' + lang);
    try { localStorage.setItem('qs-lang', lang); } catch (e) {}
  }
  apply(lang);
  var b = document.getElementById('lang');
  if (b) b.addEventListener('click', function () { apply(lang === 'ar' ? 'en' : 'ar'); });
})();
