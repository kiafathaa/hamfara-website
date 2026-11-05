// Skrip bersama untuk semua halaman.
(function () {
  // Email: di laptop/PC membuka Gmail, di HP membuka aplikasi email.
  var m = document.getElementById('mailLink');
  if (m && matchMedia('(pointer:fine)').matches) {
    m.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=Infohampara@gmail.com';
    m.target = '_blank';
    m.rel = 'noopener';
  }

  // Peta (hanya ada di kontak.html). Pengaturan ada di js/config.js.
  var C = window.HAMFARA_CONFIG || {};
  var q = encodeURIComponent(C.mapQuery || '');
  var emb = C.mapEmbedUrl || ('https://www.google.com/maps?q=' + q + '&z=17&output=embed');
  var f = document.getElementById('mapFrame'); if (f) f.src = emb;
  var o = document.getElementById('mapOpen');  if (o) o.href = 'https://www.google.com/maps/search/?api=1&query=' + q;
  var d = document.getElementById('mapDir');   if (d) d.href = 'https://www.google.com/maps/dir/?api=1&destination=' + q;
})();
