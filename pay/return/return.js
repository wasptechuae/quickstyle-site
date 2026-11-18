// Forwards only a short allow-list of plain values to the app. The page never reads the
// result as "paid": the app asks the server for the payment's real status.
(function () {
  var q = new URLSearchParams(location.search);
  var out = new URLSearchParams();
  ['result', 'booking', 'payment'].forEach(function (k) {
    var v = q.get(k);
    if (v && /^[A-Za-z0-9_-]{1,64}$/.test(v)) out.set(k, v);
  });
  var s = out.toString();
  var url = 'quickstyle://payment-return' + (s ? '?' + s : '');
  document.getElementById('open').setAttribute('href', url);
  setTimeout(function () { location.href = url; }, 300);
})();
