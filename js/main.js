/* main.js — Pixel Researcher Site */

/* ── Typewriter Effect ── */
(function typewriterInit() {
  const roles = [
    "Computational Biologist",
    "Associate Professor",
    "GNN Researcher",
    "Open Science Advocate",
    "Protein Structure Nerd",
  ];
  const el = document.getElementById("typewriter");
  if (!el) return;

  let roleIdx = 0, charIdx = 0, deleting = false;
  const SPEED_TYPE = 70, SPEED_DEL = 35, PAUSE = 1800;

  function tick() {
    const current = roles[roleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? SPEED_DEL : SPEED_TYPE);
  }

  tick();
})();

/* ── Pixel Avatar Generator ── */
(function pixelAvatarInit() {
  const container = document.getElementById("pixelFace");
  if (!container) return;

  // 8×8 pixel art — 0=transparent, 1=skin, 2=hair, 3=glasses, 4=shirt
  const palette = {
    0: "transparent",
    1: "#c8956c",  // skin
    2: "#2d1a0e",  // dark hair
    3: "#4FC3F7",  // glasses (blue, matches accent)
    4: "#39FF14",  // shirt (neon green)
    5: "#1a0f06",  // very dark
    6: "#e8b08a",  // lighter skin
    7: "#111827",  // shirt dark
  };

  const art = [
    [0,2,2,2,2,2,2,0],
    [2,2,2,2,2,2,2,2],
    [0,1,6,1,1,6,1,0],
    [0,1,3,1,1,3,1,0],
    [0,1,1,1,1,1,1,0],
    [0,1,5,1,1,5,1,0],
    [0,4,4,4,4,4,4,0],
    [0,4,4,7,7,4,4,0],
  ];

  art.forEach(row => {
    row.forEach(code => {
      const px = document.createElement("div");
      px.className = "pa-pixel";
      px.style.background = palette[code] || "transparent";
      container.appendChild(px);
    });
  });
})();

/* ── Mobile Nav Toggle ── */
(function navInit() {
  const btn   = document.querySelector(".nav-hamburger");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
  });

  // Close on link click
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();

/* ── Scroll-activated nav highlight ── */
(function navHighlight() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => {
          const href = a.getAttribute("href").replace("#","");
          a.style.color = href === entry.target.id
            ? "var(--green)"
            : "";
          a.style.textShadow = href === entry.target.id
            ? "0 0 6px var(--green)"
            : "";
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach(s => observer.observe(s));
})();

/* ── Pixel progress bar entrance animation ── */
(function progressAnimate() {
  const fills = document.querySelectorAll(".pixel-fill");
  if (!fills.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = el.style.getPropertyValue("--fill");
        el.style.setProperty("--fill", "0%");
        el.style.transition = "width 600ms steps(10)";
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.width = target;
          });
        });
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  fills.forEach(f => observer.observe(f));
})();

/* ── Pixel "glitch" effect on hero name hover ── */
(function glitchInit() {
  const name = document.querySelector(".hero-name");
  if (!name) return;

  const original = name.innerHTML;
  let timeout;

  name.addEventListener("mouseenter", () => {
    timeout = setInterval(() => {
      const chars = "!@#$%^&*<>?|/\\";
      const scrambled = original.replace(/[A-Za-z]/g, c =>
        Math.random() > 0.7
          ? chars[Math.floor(Math.random() * chars.length)]
          : c
      );
      name.innerHTML = scrambled;
    }, 60);
  });

  name.addEventListener("mouseleave", () => {
    clearInterval(timeout);
    name.innerHTML = original;
  });
})();

/* ── Console easter egg ── */
(function consoleEgg() {
  const s = [
    "%c▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
    "%c HELLO, CURIOUS HUMAN      ",
    "%c You found the console.    ",
    "%c This site was hand-crafted",
    "%c with pixel-perfect care.  ",
    "%c -- Dr. Voss               ",
    "%c▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  ];
  const style = "color: #39FF14; background: #0d0d0d; font-family: monospace; font-size: 13px; padding: 2px 0;";
  s.forEach(line => console.log(line, style));
})();
