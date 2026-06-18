document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('gnbToggle');
  var menu = document.getElementById('gnbMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
      });
    });
  }

  window.addEventListener('scroll', function () {
    var gnb = document.querySelector('.gnb');
    if (gnb) {
      gnb.style.boxShadow =
        window.scrollY > 10 ? '0 2px 12px rgba(0,0,0,.25)' : 'none';
    }
  });
});
