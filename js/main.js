/* ============================================================
   BRIGADIER'S DEFENCE & SKILL INSTITUTE — shared behaviours
   One file serves every page; each block is guarded by the
   existence of the element it drives.
   ============================================================ */
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const desk = matchMedia('(min-width: 1101px)').matches;

/* If the animation CDN is unreachable the site must still be a working,
   readable website — never a blank page behind a stuck page-wipe. */
const HAS_GSAP = typeof gsap !== 'undefined';
if (!HAS_GSAP) document.documentElement.classList.add('no-js');

if (HAS_GSAP) {
  gsap.registerPlugin(ScrollTrigger);
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
}

/* ---------- Lenis smooth scroll ---------- */
let lenis = null;
if (HAS_GSAP && !reduced && typeof Lenis !== 'undefined') {
  lenis = new Lenis({ duration: 1.05, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  window.lenis = lenis;
}

/* ---------- CONTENT RENDERER — builds sections from js/content.js ---------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
(() => {
  const C = window.BDSI_CONTENT;
  if (!C) return;

  /* programmes */
  const list = document.getElementById('programmeList');
  if (list && C.programmes) {
    list.innerHTML = C.programmes.map((p, i) => `
      <article class="course-row glass glass--hov" data-a>
        <div class="course-row__media pframe brackets" data-plx>
          <img src="${esc(p.image)}" alt="${esc(p.title)} — Brigadier's Defence &amp; Skill Institute" loading="lazy">
          <span class="pframe__cap"><b>//</b> ${esc(p.label)}</span>
        </div>
        <div>
          <span class="course-row__no">PROGRAMME ${String(i + 1).padStart(2, '0')}</span>
          <h2>${esc(p.title)}</h2>
          <div class="course-row__sub">${esc(p.sub)}</div>
          <p>${esc(p.desc)}</p>
          <div class="course-row__tags">${(p.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          <div class="course-row__ctas">
            <a href="contact.html" class="btn${p.accent ? '' : ' btn--ghost'}">Enquire Now ⟶</a>
            <a href="https://wa.me/917207847051?text=${encodeURIComponent("Hello, I want to enquire about the " + p.title + " programme at Brigadier's Institute.")}" target="_blank" rel="noopener" class="btn btn--ghost btn--sm">WhatsApp</a>
          </div>
        </div>
      </article>`).join('');
  }

  /* strengths */
  const sgrid = document.getElementById('strengthGrid');
  if (sgrid && C.strengths) {
    sgrid.innerHTML = C.strengths.map((s, i) => `
      <article class="scard glass glass--hov" data-a data-d="${(i * 0.06).toFixed(2)}">
        <div class="scard__img">
          <span class="scard__no">${String(i + 1).padStart(2, '0')}</span>
          <img src="${esc(s.image)}" alt="${esc(s.title)}" loading="lazy">
        </div>
        <div class="scard__body"><b>${esc(s.title)}</b><p>${esc(s.text)}</p></div>
      </article>`).join('');
  }

  /* gallery album */
  const album = document.getElementById('album');
  if (album && C.gallery) {
    album.innerHTML = C.gallery.map((g, i) => `
      <figure class="aitem" data-a data-d="${((i % 3) * 0.07).toFixed(2)}" data-lb="${i}">
        <img src="${esc(g.image)}" alt="${esc(g.caption)}" loading="lazy">
        <span class="aitem__veil"></span>
        <figcaption class="aitem__cap"><span>${esc(g.caption)}</span><b>${String(i + 1).padStart(2, '0')}</b></figcaption>
      </figure>`).join('');
  }

  /* faculty nameplates */
  const pgrid = document.getElementById('facultyGrid');
  if (pgrid && C.faculty) {
    pgrid.innerHTML = C.faculty.map((f, i) => `
      <article class="plate" data-a data-d="${((i % 4) * 0.06).toFixed(2)}">
        <span class="rivet"></span><span class="rivet"></span><span class="rivet"></span><span class="rivet"></span>
        <div class="plate__dept">${esc(f.dept)}</div>
        <h3>${esc(f.name)}</h3>
        <p>${esc(f.text)}</p>
      </article>`).join('');
  }

  /* blog index */
  const blogGrid = document.getElementById('blogGrid');
  if (blogGrid && C.blog) {
    blogGrid.innerHTML = C.blog.map((b, i) => `
      <article class="pcard glass glass--hov" data-a data-d="${(i * 0.08).toFixed(2)}">
        <a class="pcard__media" href="${esc(b.url)}">
          <img src="${esc(b.image)}" alt="${esc(b.title)}" loading="lazy">
          <span class="pcard__cat">${esc(b.category)}</span>
        </a>
        <div class="pcard__body">
          <div class="pcard__meta">${esc(b.dateLabel)} <i>·</i> ${esc(b.read)}</div>
          <h2><a href="${esc(b.url)}">${esc(b.title)}</a></h2>
          <p>${esc(b.excerpt)}</p>
          <div class="pcard__foot">
            <span class="pcard__by">${esc(b.author)}</span>
            <span class="pcard__go">Read <span class="arr">⟶</span></span>
          </div>
        </div>
      </article>`).join('');
  }

  /* faq */
  const faq = document.getElementById('faqList');
  if (faq && C.faq) {
    faq.innerHTML = C.faq.map((f, i) => `
      <div class="fq glass" data-a data-d="${Math.min(i * 0.04, 0.24).toFixed(2)}">
        <button class="fq__q" aria-expanded="false" aria-controls="fqa${i}">
          <span>${esc(f.q)}</span><span class="pm" aria-hidden="true">+</span>
        </button>
        <div class="fq__a" id="fqa${i}"><p>${esc(f.a)}</p></div>
      </div>`).join('');
  }
})();

/* ---------- page wipe: exit on load, enter on internal nav ---------- */
const wipe = document.getElementById('wipe');
/* The transition is the logo alone: it settles on a plain page, then the
   whole layer lifts away. No panels, no wordmark. */
function wipeOut(){
  if (!wipe) return;
  if (reduced || !HAS_GSAP) { wipe.classList.add('is-done'); return; }
  gsap.timeline({ onComplete: () => wipe.classList.add('is-done') })
    .fromTo('.wipe__logo img', { opacity: 0, scale: 0.94 },
                               { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }, 0)
    .to('.wipe__logo img', { opacity: 0, duration: 0.45, ease: 'power2.in' }, 0.75)
    .to('.wipe', { opacity: 0, duration: 0.5, ease: 'power2.inOut' }, 0.8);
}
function wipeIn(href){
  if (reduced || !HAS_GSAP || !wipe) { location.href = href; return; }
  wipe.classList.remove('is-done');
  gsap.set('.wipe', { opacity: 0 });
  gsap.set('.wipe__logo img', { opacity: 0, scale: 0.94 });
  gsap.timeline({ onComplete: () => location.href = href })
    .to('.wipe', { opacity: 1, duration: 0.35, ease: 'power2.out' }, 0)
    .to('.wipe__logo img', { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' }, 0.1);
}
document.querySelectorAll('a[href$=".html"]').forEach(a => {
  const href = a.getAttribute('href');
  if (/^https?:/i.test(href)) return;
  a.addEventListener('click', e => {
    e.preventDefault();
    if (href.split('#')[0] === (location.pathname.split('/').pop() || 'index.html')) return;
    wipeIn(href);
  });
});
window.addEventListener('pageshow', e => { if (e.persisted) wipeOut(); });
wipeOut();

/* ---------- active nav link ---------- */
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a, .mnav a').forEach(a => {
  if (a.getAttribute('href') === here) a.classList.add('on');
});

/* ---------- same-page anchors ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: -90, duration: 1.2 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---------- custom cursor ---------- */
const dot = document.getElementById('curDot'), ring = document.getElementById('curRing');
if (dot && desk && HAS_GSAP) {
  const dx = gsap.quickTo(dot, 'x', { duration: 0.08 }), dy = gsap.quickTo(dot, 'y', { duration: 0.08 });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.32, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: 0.32, ease: 'power3' });
  window.addEventListener('pointermove', e => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); });
  document.querySelectorAll('a, button, .glass--hov, .pframe, .aitem, .plate').forEach(el => {
    el.addEventListener('pointerenter', () => document.body.classList.add('cur-hover'));
    el.addEventListener('pointerleave', () => document.body.classList.remove('cur-hover'));
  });
} else if (dot) { dot.remove(); ring.remove(); }

/* ---------- nav hide on scroll down ---------- */
const nav = document.getElementById('nav');
let lastY = 0;
if (nav && HAS_GSAP) ScrollTrigger.create({
  onUpdate(self){
    const y = self.scroll();
    nav.classList.toggle('hidden', y > 420 && y > lastY);
    lastY = y;
  }
});

/* ---------- mobile menu ---------- */
const mnav = document.getElementById('mnav');
const burger = document.getElementById('burger');
if (burger && mnav) {
  burger.addEventListener('click', () => mnav.classList.add('open'));
  document.getElementById('mnavX').addEventListener('click', () => mnav.classList.remove('open'));
  mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mnav.classList.remove('open')));
}

/* ---------- generic reveals: long, soft, slightly scaled ---------- */
if (HAS_GSAP) document.querySelectorAll('[data-a]').forEach(el => {
  gsap.fromTo(el, { y: 38, opacity: 0, scale: 0.985 }, {
    y: 0, opacity: 1, scale: 1, duration: 1.15, ease: 'expo.out',
    delay: parseFloat(el.dataset.d || 0),
    scrollTrigger: { trigger: el, start: 'top 88%', once: true }
  });
});

/* ---------- hero glass composition: entrance, drift, depth parallax ----------
   Each panel carries data-depth; higher values sit "closer" and so move
   further under the pointer, which is what creates the sense of layers. */
const hstack = document.getElementById('hstack');
if (hstack && HAS_GSAP) {
  const panels = [...hstack.querySelectorAll('[data-fl]')];

  gsap.from(panels, {
    opacity: 0, y: 54, scale: 0.94, duration: 1.3, ease: 'expo.out',
    stagger: 0.13, delay: reduced ? 0 : 0.5
  });
  gsap.from([hstack.querySelector('.hstack__ring'), hstack.querySelector('.hstack__ring--2')], {
    opacity: 0, scale: 0.82, duration: 1.6, ease: 'expo.out', stagger: 0.15, delay: 0.35
  });

  if (!reduced) {
    /* each panel breathes on its own cycle so the group never pulses in unison */
    panels.forEach((p, i) => {
      gsap.to(p, {
        y: '+=14', duration: 3.1 + i * 0.55, yoyo: true, repeat: -1,
        ease: 'sine.inOut', delay: i * 0.42
      });
    });

    if (desk) {
      const movers = panels.map(p => ({
        el: p,
        depth: parseFloat(p.dataset.depth || 1),
        x: gsap.quickTo(p, 'x', { duration: 0.9, ease: 'power3' }),
        rY: gsap.quickTo(p, 'rotationY', { duration: 1.1, ease: 'power3' }),
        rX: gsap.quickTo(p, 'rotationX', { duration: 1.1, ease: 'power3' })
      }));
      gsap.set(panels, { transformPerspective: 1100, transformOrigin: '50% 50%' });

      window.addEventListener('pointermove', e => {
        const cx = e.clientX / innerWidth - 0.5, cy = e.clientY / innerHeight - 0.5;
        movers.forEach(m => {
          m.x(cx * 30 * m.depth);
          m.rY(cx * 7 * m.depth);
          m.rX(-cy * 5 * m.depth);
        });
      });
    }

    /* the whole stack drifts up a little as the hero leaves */
    gsap.to(hstack, {
      yPercent: -12, opacity: 0.45, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 }
    });
  }
}

/* ---------- scroll progress rail ---------- */
if (HAS_GSAP) {
  const bar = document.createElement('div');
  bar.className = 'sprog';
  document.body.appendChild(bar);
  gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { scrub: 0.3 } });
}

/* ---------- magnetic buttons ---------- */
if (HAS_GSAP && desk && !reduced) document.querySelectorAll('.btn').forEach(b => {
  b.addEventListener('pointermove', e => {
    const r = b.getBoundingClientRect();
    gsap.to(b, {
      x: (e.clientX - r.left - r.width / 2) * 0.16,
      y: (e.clientY - r.top - r.height / 2) * 0.22,
      duration: 0.5, ease: 'power3.out', overwrite: 'auto'
    });
  });
  b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.5)' }));
});

/* ---------- counters ---------- */
function counter(el){
  const t = parseFloat(el.dataset.count), dec = !!el.dataset.decimal;
  const o = { v: 0 };
  gsap.to(o, { v: t, duration: 1.7, ease: 'power2.out', onUpdate(){
    el.textContent = dec ? (o.v / 10).toFixed(1) : Math.round(o.v).toLocaleString('en-IN');
  }});
}
if (HAS_GSAP) document.querySelectorAll('[data-count]').forEach(el => {
  ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => counter(el) });
});

/* ---------- hero intro (home only) ---------- */
if (HAS_GSAP && document.querySelector('.hero__title')) {
  gsap.set('.hero__title .row > span', { y: '112%' });
  gsap.set('.hero__crest, .hero__badge, .hero__motto, .hero__sub, .hero__ctas, .hero__cue, .hero__rails', { opacity: 0 });
  gsap.set('.shard', { opacity: 0, y: 44 });
  gsap.timeline({ delay: reduced ? 0 : 0.65 })
    .to('.hero__crest', { opacity: 1, duration: 0.8, ease: 'power2.out' }, 0)
    .to('.hero__title .row > span', { y: 0, duration: 1.1, ease: 'power4.out', stagger: 0.1 }, 0.1)
    .to('.hero__badge, .hero__motto, .hero__sub, .hero__ctas', { opacity: 1, duration: 0.9, ease: 'power2.out', stagger: 0.1 }, 0.5)
    .to('.shard', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 }, 0.65)
    .to('.hero__cue, .hero__rails', { opacity: 1, duration: 0.8 }, 1);

  if (!reduced) document.querySelectorAll('.shard').forEach((s, i) => {
    gsap.to(s, { y: '+=12', duration: 2.5 + i * 0.4, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: i * 0.35 });
  });
  if (desk && !reduced) {
    window.addEventListener('pointermove', e => {
      const cx = e.clientX / innerWidth - 0.5, cy = e.clientY / innerHeight - 0.5;
      document.querySelectorAll('.shard').forEach((s, i) => {
        gsap.to(s, { x: cx * (16 + i * 7), duration: 1, ease: 'power2.out', overwrite: 'auto' });
      });
      gsap.to('.orb--g1', { x: cx * -34, y: cy * -22, duration: 1.4, ease: 'power2.out', overwrite: 'auto' });
      gsap.to('.orb--b',  { x: cx * 26,  y: cy * 20,  duration: 1.4, ease: 'power2.out', overwrite: 'auto' });
    });
  }
  if (!reduced) {
    gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.4 } })
      .to('.hero__center', { yPercent: -20, opacity: 0.1, ease: 'none' }, 0)
      .to('.shard', { yPercent: 32, opacity: 0, ease: 'none' }, 0);
  }
}

/* ---------- orbs drift with scroll ---------- */
if (HAS_GSAP && !reduced) {
  gsap.to('.orb--g1', { yPercent: 24, ease: 'none', scrollTrigger: { scrub: 1.2 } });
  gsap.to('.orb--g2', { yPercent: -18, ease: 'none', scrollTrigger: { scrub: 1.2 } });
}

/* ---------- word-by-word manifesto (about) ---------- */
const mani = HAS_GSAP ? document.querySelector('[data-words]') : null;
if (mani) {
  const walk = node => {
    [...node.childNodes].forEach(ch => {
      if (ch.nodeType === 3) {
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(tok => {
          if (/^\s*$/.test(tok)) frag.appendChild(document.createTextNode(tok));
          else { const s = document.createElement('span'); s.className = 'wd'; s.textContent = tok; frag.appendChild(s); }
        });
        node.replaceChild(frag, ch);
      } else if (ch.nodeType === 1) walk(ch);
    });
  };
  walk(mani);
  gsap.to(mani.querySelectorAll('.wd'), {
    opacity: 1, stagger: 0.045, ease: 'none',
    scrollTrigger: { trigger: mani, start: 'top 80%', end: 'bottom 50%', scrub: 0.4 }
  });
}

/* ---------- timeline bar (about) ---------- */
const tbar = document.querySelector('.tline__bar');
if (tbar && HAS_GSAP) gsap.to(tbar, { scaleX: 1, duration: 1.5, ease: 'power3.inOut',
  scrollTrigger: { trigger: '.tline', start: 'top 75%', once: true } });

/* ---------- media parallax inside frames ---------- */
if (HAS_GSAP && !reduced) document.querySelectorAll('[data-plx] img').forEach(img => {
  gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none',
    scrollTrigger: { trigger: img.closest('[data-plx]'), start: 'top bottom', end: 'bottom top', scrub: true } });
});

/* ---------- footer big word ---------- */
const fw = document.querySelector('.foot__word');
if (fw && HAS_GSAP && !reduced) gsap.fromTo(fw, { yPercent: 44 }, { yPercent: 0, ease: 'none',
  scrollTrigger: { trigger: '.foot', start: 'top 96%', end: 'top 50%', scrub: true } });

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.fq__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.fq');
    const panel = item.querySelector('.fq__a');
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.style.maxHeight = open ? panel.scrollHeight + 'px' : 0;
    if (lenis) setTimeout(() => ScrollTrigger.refresh(), 480);
  });
});

/* ---------- gallery lightbox ---------- */
const lbox = document.getElementById('lbox');
if (lbox) {
  const shots = (window.BDSI_CONTENT && window.BDSI_CONTENT.gallery) || [];
  const lImg = lbox.querySelector('img'), lCap = lbox.querySelector('.lbox__cap');
  let idx = 0;
  const show = i => {
    idx = (i + shots.length) % shots.length;
    lImg.src = shots[idx].image;
    lImg.alt = shots[idx].caption;
    lCap.textContent = shots[idx].caption;
  };
  const open = i => { show(i); lbox.classList.add('open'); if (lenis) lenis.stop(); };
  const close = () => { lbox.classList.remove('open'); if (lenis) lenis.start(); };
  document.querySelectorAll('[data-lb]').forEach(el => {
    el.addEventListener('click', () => open(+el.dataset.lb));
  });
  lbox.querySelector('.lbox__x').addEventListener('click', close);
  lbox.querySelector('.lbox__nav--p').addEventListener('click', e => { e.stopPropagation(); show(idx - 1); });
  lbox.querySelector('.lbox__nav--n').addEventListener('click', e => { e.stopPropagation(); show(idx + 1); });
  lbox.addEventListener('click', e => { if (e.target === lbox) close(); });
  window.addEventListener('keydown', e => {
    if (!lbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
}

/* ---------- enquiry form → WhatsApp handoff + toast ---------- */
const form = document.getElementById('regForm');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const msg = `Enquiry from the website%0A%0AName: ${d.get('name') || '-'}%0APhone: ${d.get('phone') || '-'}%0AEmail: ${d.get('email') || '-'}%0ACity: ${d.get('city') || '-'}%0AProgramme: ${d.get('programme') || '-'}%0AMessage: ${d.get('message') || '-'}`;
  const t = document.getElementById('toast');
  if (t) { t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 5000); }
  window.open(`https://wa.me/917207847051?text=${msg}`, '_blank', 'noopener');
  form.reset();
});
