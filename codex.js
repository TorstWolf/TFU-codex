/* Codex viewer — reads window.CODEX (from lore.js) and renders a drill-down encyclopedia.
   You shouldn't need to edit this file to add lore; edit lore.js instead. */
(() => {
  const C = window.CODEX;
  const $ = (sel) => document.querySelector(sel);

  // ---------- index the data ----------
  const byId = new Map();
  const kids = new Map();
  for (const e of C.entries) {
    if (byId.has(e.id)) console.warn(`[codex] duplicate id "${e.id}" — the later one wins`);
    byId.set(e.id, e);
  }
  for (const e of C.entries) {
    if (!e.parent) continue;
    if (!byId.has(e.parent)) { console.warn(`[codex] "${e.id}" has unknown parent "${e.parent}"`); continue; }
    if (!kids.has(e.parent)) kids.set(e.parent, []);
    kids.get(e.parent).push(e);
  }
  const root = C.entries.find((e) => !e.parent);
  const typeOrder = Object.keys(C.types);
  const typeLabel = (t, plural) => {
    const def = C.types[t];
    if (!def) return t ? t[0].toUpperCase() + t.slice(1) : "Entry";
    return plural ? def[1] : def[0];
  };
  const children = (id) => kids.get(id) || [];
  const countDescendants = (id) => children(id).reduce((n, k) => n + 1 + countDescendants(k.id), 0);

  // Entries that mention this one in their "related" list also show up here.
  const backlinks = new Map();
  for (const e of C.entries) for (const r of e.related || []) {
    if (!backlinks.has(r)) backlinks.set(r, []);
    backlinks.get(r).push(e.id);
  }

  // ---------- helpers ----------
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const href = (id) => "#/" + encodeURIComponent(id);
  const initials = (name) => name.replace(/^The\s+/i, "").split(/\s+/).filter((w) => /^[\p{L}\p{N}]/u.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  function path(e) {
    const out = [];
    for (let cur = e; cur; cur = cur.parent ? byId.get(cur.parent) : null) {
      out.unshift(cur);
      if (out.length > 50) break; // guards against parent loops
    }
    return out;
  }
  // nearest entry (itself first, then upwards) that has the given field
  const nearest = (e, field, skipSelf) => {
    const p = path(e).reverse();
    return p.slice(skipSelf ? 1 : 0).find((x) => x[field]) || null;
  };

  // ---------- faction themes ----------
  const themes = C.themes || {};
  const themeOf = (e) => themes[nearest(e, "theme")?.theme] || themes.default || {};
  const fontStack = (t) => (t.font ? `'${t.font}', var(--ui)` : "var(--ui)"); // single quotes: used inside style="…"
  const pageVars = (t) => ({
    "--accent": t.accent, "--accent-2": t.accent2 || t.accent,
    "--display": fontStack(t), "--display-tracking": t.tracking || "-.01em", "--display-case": t.caps ? "uppercase" : "none",
  });
  const cardStyle = (e) => {
    const t = themeOf(e);
    return `--a:${t.accent};--a2:${t.accent2 || t.accent};--cfont:${fontStack(t)};--ctrack:${t.tracking || "-.01em"};--ccase:${t.caps ? "uppercase" : "none"}`;
  };
  function applyTheme(e) {
    const vars = pageVars(themeOf(e));
    for (const [k, v] of Object.entries(vars)) if (v) document.documentElement.style.setProperty(k, v);
  }

  // ---------- text ----------
  // Paragraphs separated by blank lines; a block whose lines all start with "- " or "1. " becomes a list.
  function blocks(text) {
    const paras = (Array.isArray(text) ? text : String(text || "").split(/\n\s*\n/)).map((p) => p.trim()).filter(Boolean);
    return paras.map((p, i) => {
      const lines = p.split("\n").map((l) => l.trim());
      if (lines.every((l) => /^- /.test(l))) return `<ul>${lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join("")}</ul>`;
      if (lines.every((l) => /^\d+\. /.test(l))) return `<ol>${lines.map((l) => `<li>${inline(l.replace(/^\d+\. /, ""))}</li>`).join("")}</ol>`;
      return `<p${i === 0 ? ' class="lead"' : ""}>${inline(lines.join(" "))}</p>`;
    }).join("");
  }
  // Escapes text, then turns **bold**, [[id]] and [[id|label]] into markup.
  function inline(text) {
    return esc(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => {
      const t = byId.get(id.trim());
      return t
        ? `<a href="${href(t.id)}">${label || esc(t.name)}</a>`
        : `<span class="missing" title="No entry yet">${label || id}</span>`;
    });
  }

  // ---------- cards ----------
  function card(e) {
    const n = countDescendants(e.id);
    let thumb;
    if (e.image) thumb = `<img class="photo" src="${esc(e.image)}" alt="" loading="lazy">${e.emblem ? `<img class="badge" src="${esc(e.emblem)}" alt="">` : ""}`;
    else if (e.emblem) thumb = `<img class="mark" src="${esc(e.emblem)}" alt="">`;
    else thumb = `<span class="initials">${esc(initials(e.name))}</span>`;
    return `<a class="card" href="${href(e.id)}" style="${cardStyle(e)}">
      <div class="thumb">${thumb}</div>
      <div class="meta">
        <span class="sub">${esc(typeLabel(e.type))}</span>
        <h3>${esc(e.name)}</h3>
        ${e.summary ? `<p>${esc(e.summary)}</p>` : ""}
        ${n ? `<span class="count">${n} ${n === 1 ? "entry" : "entries"} within →</span>` : ""}
      </div>
    </a>`;
  }

  // ---------- page ----------
  function render(id) {
    const e = byId.get(id) || (id ? null : root);
    const view = $("#view");
    if (!e) {
      view.innerHTML = `<p class="empty">No entry called “${esc(id)}” exists yet.</p><a href="#/">Back to ${esc(root.name)}</a>`;
      document.title = C.title;
      return;
    }
    applyTheme(e);

    const trail = path(e);
    const crumbs = trail.map((p, i) => i === trail.length - 1
      ? `<span aria-current="page">${esc(p.name)}</span>`
      : `<a href="${href(p.id)}">${esc(p.name)}</a><span class="sep">/</span>`).join("");

    const owner = nearest(e, "emblem", true); // faction this entry belongs to
    const partOf = owner ? `<a class="part-of" href="${href(owner.id)}"><img src="${esc(owner.emblem)}" alt="">${esc(owner.name)}</a>` : "";
    const watermarkSrc = e.emblem || owner?.emblem;

    const hero = `<header class="hero${e.image ? " has-image" : ""}">
        ${e.image ? `<img class="hero-img" src="${esc(e.image)}" alt="${esc(e.name)}" title="View full picture">`
                  : watermarkSrc && !e.emblem ? `<img class="watermark" src="${esc(watermarkSrc)}" alt="">` : ""}
        <div class="hero-body">
          ${e.emblem || e.logo ? `<img class="hero-mark" src="${esc(e.emblem || e.logo)}" alt="${esc(e.name)} emblem">` : ""}
          <div>
            <div class="kind">${esc(typeLabel(e.type))}${partOf}${e.status ? `<span class="status" title="Not final canon yet">${esc(e.status)}</span>` : ""}</div>
            <h1>${esc(e.name)}</h1>
            ${e.tagline ? `<p class="tagline">${esc(e.tagline)}</p>` : ""}
          </div>
        </div>
      </header>`;

    const facts = e.facts && Object.keys(e.facts).length
      ? `<aside class="facts"><h2>At a glance</h2><dl>${Object.entries(e.facts).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${inline(v)}</dd></div>`).join("")}</dl></aside>`
      : "";
    const bodyHtml = blocks(e.body);
    const body = `<div class="body">${bodyHtml || (e.summary ? `<p class="lead">${esc(e.summary)}</p>` : `<p class="empty">This entry hasn't been written yet.</p>`)}</div>`;

    // children grouped by type, in the order the types are listed in lore.js
    const groups = new Map();
    for (const k of children(e.id)) {
      if (!groups.has(k.type)) groups.set(k.type, []);
      groups.get(k.type).push(k);
    }
    const ordered = [...groups.keys()].sort((a, b) => {
      const ia = typeOrder.indexOf(a), ib = typeOrder.indexOf(b);
      return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
    });
    const childHtml = ordered.map((t) => {
      const list = groups.get(t);
      return `<section class="group"><h2>${esc(typeLabel(t, true))} <small>${list.length}</small></h2>
        <div class="cards">${list.map(card).join("")}</div></section>`;
    }).join("");

    const rel = [...new Set([...(e.related || []), ...(backlinks.get(e.id) || [])])]
      .map((r) => byId.get(r)).filter(Boolean).filter((r) => r.id !== e.id);
    const relHtml = rel.length
      ? `<section class="group"><h2>Related</h2><div class="chips">${rel.map((r) => `<a class="chip" style="--a:${themeOf(r).accent}" href="${href(r.id)}">${esc(r.name)}<small>${esc(typeLabel(r.type))}</small></a>`).join("")}</div></section>`
      : "";

    const parent = e.parent && byId.get(e.parent);

    view.innerHTML = `
      <nav class="crumbs" aria-label="Breadcrumb">${crumbs}</nav>
      ${hero}
      <div class="content${facts ? "" : " solo"}">${body}${facts}</div>
      ${childHtml}
      ${relHtml}
      ${parent ? `<a class="up" href="${href(parent.id)}">↑ Back to ${esc(parent.name)}</a>` : ""}
    `;
    view.querySelector(".hero-img")?.addEventListener("click", () => openLightbox(e.image));
    document.title = `${e.name} · ${C.title}`;
    renderTree(e);
  }

  // ---------- lightbox ----------
  const lb = $("#lightbox");
  function openLightbox(src) { lb.querySelector("img").src = src; lb.hidden = false; }
  lb.addEventListener("click", () => { lb.hidden = true; });
  document.addEventListener("keydown", (ev) => { if (ev.key === "Escape") lb.hidden = true; });

  // ---------- side index ----------
  const open = new Set();
  const chevron = `<svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  function renderTree(current) {
    for (const p of path(current)) open.add(p.id);
    const node = (e) => {
      const ks = children(e.id);
      const isOpen = open.has(e.id);
      return `<li><div class="row">
          ${ks.length ? `<button class="tog" data-id="${esc(e.id)}" aria-expanded="${isOpen}" aria-label="Toggle ${esc(e.name)}">${chevron}</button>` : `<span class="spacer"></span>`}
          <a href="${href(e.id)}"${e.id === current.id ? ' class="current" aria-current="page"' : ""}>${e.emblem ? `<img src="${esc(e.emblem)}" alt="">` : ""}<span>${esc(e.name)}</span></a>
        </div>${ks.length && isOpen ? `<ul>${ks.map(node).join("")}</ul>` : ""}</li>`;
    };
    $("#tree").innerHTML = `<ul>${node(root)}</ul>`;
    $("#tree").querySelector(".current")?.scrollIntoView({ block: "nearest" });
  }
  $("#tree").addEventListener("click", (ev) => {
    const btn = ev.target.closest(".tog");
    if (btn) {
      const id = btn.dataset.id;
      open.has(id) ? open.delete(id) : open.add(id);
      renderTree(byId.get(currentId()) || root);
    } else if (ev.target.closest("a")) setDrawer(false);
  });

  // ---------- search ----------
  const q = $("#q"), results = $("#results");
  let hits = [], sel = 0;
  function search() {
    const term = q.value.trim().toLowerCase();
    if (!term) { results.hidden = true; return; }
    const score = (e) => {
      const n = e.name.toLowerCase();
      if (n === term) return 0;
      if (n.startsWith(term)) return 1;
      if (n.includes(term)) return 2;
      if ([e.tagline, e.summary, ...Object.values(e.facts || {})].join(" ").toLowerCase().includes(term)) return 3;
      return -1;
    };
    hits = C.entries.map((e) => [score(e), e]).filter(([s]) => s >= 0).sort((a, b) => a[0] - b[0]).slice(0, 10).map(([, e]) => e);
    sel = 0;
    results.innerHTML = hits.length
      ? hits.map((e, i) => `<li><a href="${href(e.id)}"${i === 0 ? ' class="active"' : ""}><span class="dot" style="--a:${themeOf(e).accent}"></span><span>${esc(e.name)}<small>${esc(typeLabel(e.type))} · ${path(e).slice(0, -1).map((p) => esc(p.name)).join(" / ") || "—"}</small></span></a></li>`).join("")
      : `<li class="none">Nothing found</li>`;
    results.hidden = false;
  }
  q.addEventListener("input", search);
  q.addEventListener("keydown", (ev) => {
    const links = results.querySelectorAll("a");
    if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
      ev.preventDefault();
      if (!links.length) return;
      links[sel]?.classList.remove("active");
      sel = (sel + (ev.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
      links[sel].classList.add("active");
    } else if (ev.key === "Enter" && hits[sel]) {
      location.hash = href(hits[sel].id);
      closeSearch();
    } else if (ev.key === "Escape") closeSearch();
  });
  results.addEventListener("click", (ev) => { if (ev.target.closest("a")) closeSearch(); });
  document.addEventListener("click", (ev) => { if (!ev.target.closest(".search")) results.hidden = true; });
  function closeSearch() { q.value = ""; results.hidden = true; q.blur(); }
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "/" && document.activeElement !== q) { ev.preventDefault(); q.focus(); }
  });

  // ---------- light / dark ----------
  const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };
  const saved = store.get("codex-theme");
  if (saved === "light" || saved === "dark") document.documentElement.dataset.theme = saved;
  $("#themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    store.set("codex-theme", next);
  });

  // ---------- mobile drawer ----------
  function setDrawer(on) {
    document.body.classList.toggle("tree-open", on);
    $("#treeBtn").setAttribute("aria-expanded", on);
    $("#scrim").hidden = !on;
  }
  $("#treeBtn").addEventListener("click", () => setDrawer(!document.body.classList.contains("tree-open")));
  $("#scrim").addEventListener("click", () => setDrawer(false));

  // ---------- routing ----------
  const currentId = () => decodeURIComponent(location.hash.replace(/^#\/?/, ""));
  function route() {
    render(currentId());
    window.scrollTo(0, 0);
  }

  $("#brand").textContent = C.title;
  if (C.backLink?.href) {
    const b = $("#back");
    b.href = C.backLink.href;
    b.textContent = C.backLink.label;
    b.hidden = false;
  }
  window.addEventListener("hashchange", route);
  route();
})();
