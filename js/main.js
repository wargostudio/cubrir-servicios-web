// =========================================================
// CUBRIR SERVICIOS — main.js
// =========================================================
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile menu ---------- */
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a plain link is tapped
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Mobile submenu toggle (Servicios)
    document.querySelectorAll('.mobile-menu .drop-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        btn.classList.toggle('open');
        var submenu = btn.nextElementSibling;
        if (submenu) submenu.classList.toggle('open');
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (el) {
        if (el !== item) el.classList.remove('open');
      });
      item.classList.toggle('open', !wasOpen);
    });
  });

  /* ---------- Quote form (hero) & Contact form ---------- */
  var FORM_ENDPOINT = 'https://formsubmit.co/ajax/info@cubrirservicios.com';

  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      var submitBtn = form.querySelector('.submit-btn');
      var requiredFields = form.querySelectorAll('[required]');
      var valid = true;
      requiredFields.forEach(function (f) {
        if (!f.value.trim()) valid = false;
      });

      if (!msg) return;
      msg.classList.remove('ok', 'err');

      if (!valid) {
        msg.textContent = 'Por favor completá los campos obligatorios antes de enviar.';
        msg.classList.add('err', 'show');
        return;
      }

      if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.7'; }
      msg.textContent = 'Enviando...';
      msg.classList.add('ok', 'show');

      var formData = new FormData(form);
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) { return res.ok ? res.json() : Promise.reject(res); })
        .then(function () {
          msg.textContent = '¡Gracias! Recibimos tu consulta, te vamos a contactar a la brevedad.';
          msg.classList.remove('err');
          msg.classList.add('ok', 'show');
          form.reset();
        })
        .catch(function () {
          msg.textContent = 'Hubo un problema al enviar. Probá de nuevo o escribinos por WhatsApp.';
          msg.classList.remove('ok');
          msg.classList.add('err', 'show');
        })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = ''; }
        });
    });
  });

  /* ---------- Mock quote-tool options (visual only) ---------- */
  document.querySelectorAll('.mock-opt').forEach(function (opt) {
    opt.addEventListener('click', function () {
      var siblings = opt.parentElement.querySelectorAll('.mock-opt');
      siblings.forEach(function (s) { s.classList.remove('sel'); });
      opt.classList.add('sel');
    });
  });

  /* ---------- Animated counters ---------- */
  var counterEls = document.querySelectorAll('.counter[data-target]');
  if (counterEls.length) {
    var animateCounter = function (el) {
      var target = parseInt(el.getAttribute('data-target'), 10) || 0;
      var duration = 1600;
      var startTime = null;
      var formatNum = function (n) {
        return Math.round(n).toLocaleString('es-AR');
      };
      var step = function (timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatNum(target * eased);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = formatNum(target);
        }
      };
      window.requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      var counterIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterIo.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counterEls.forEach(function (el) { counterIo.observe(el); });
    } else {
      counterEls.forEach(function (el) { animateCounter(el); });
    }
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Reviews carousel ---------- */
  var rcTrack = document.getElementById('rc-track');
  if (rcTrack) {
    var rcCards = Array.prototype.slice.call(rcTrack.children);
    var rcDotsWrap = document.getElementById('rc-dots');
    var rcPrev = document.getElementById('rc-prev');
    var rcNext = document.getElementById('rc-next');

    rcCards.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'rc-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Ir a reseña ' + (i + 1));
      dot.addEventListener('click', function () {
        rcCards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      });
      rcDotsWrap.appendChild(dot);
    });
    var rcDots = Array.prototype.slice.call(rcDotsWrap.children);

    var scrollByCard = function (dir) {
      var cardWidth = rcCards[0].getBoundingClientRect().width + 18;
      rcTrack.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
    };
    rcPrev.addEventListener('click', function () { scrollByCard(-1); });
    rcNext.addEventListener('click', function () { scrollByCard(1); });

    var updateActiveDot = function () {
      var trackLeft = rcTrack.getBoundingClientRect().left;
      var closest = 0;
      var closestDist = Infinity;
      rcCards.forEach(function (card, i) {
        var dist = Math.abs(card.getBoundingClientRect().left - trackLeft);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      rcDots.forEach(function (d, i) { d.classList.toggle('active', i === closest); });
    };
    var rcScrollTimer;
    rcTrack.addEventListener('scroll', function () {
      clearTimeout(rcScrollTimer);
      rcScrollTimer = setTimeout(updateActiveDot, 100);
    }, { passive: true });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = '0 8px 24px -18px rgba(1,66,106,0.35)';
      } else {
        header.style.boxShadow = 'none';
      }
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Cotizador iframe auto-resize ---------- */
  var cotizadorFrame = document.querySelector('.cotizador-iframe');
  if (cotizadorFrame) {
    window.addEventListener('message', function (e) {
      if (e.data && typeof e.data.pwCotizadorHeight === 'number') {
        cotizadorFrame.style.height = (e.data.pwCotizadorHeight + 8) + 'px';
      }
    });
  }
});
