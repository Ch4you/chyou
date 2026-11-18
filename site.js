(function () {
  var root = document.documentElement, btn = document.getElementById('theme-toggle-btn'), icon = document.getElementById('theme-icon');
  function eff() {
    var x = root.getAttribute('data-theme');
    if (x === 'light' || x === 'dark') return x;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paint() { icon.innerHTML = eff() === 'dark' ? '&#9790;' : '&#9728;'; }
  var saved = null;
  try { saved = localStorage.getItem('changhe-theme'); } catch (e) {}
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  paint();
  btn.addEventListener('click', function () {
    var next = eff() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('changhe-theme', next); } catch (e) {}
    paint();
  });
})();
