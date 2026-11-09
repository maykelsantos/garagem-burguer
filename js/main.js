(function () {
  const GB = window.GB;
  const L = GB.links;
  const page = document.body.dataset.page || "";

  const icons = {
    whats: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h12l1 14H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };
  window.GB_ICONS = icons;

  const priceHTML = (v) => v == null ? '<span class="price" style="font-size:22px">Consulte</span>' : `<span class="price"><small>R$</small>${v.toFixed(2).replace(".", ",")}</span>`;
  const h = (hh) => hh + "h";

  /* ---------- cabeçalho e rodapé ---------- */
  const links = [
    ["index.html", "Início", "inicio"],
    ["cardapio.html", "Cardápio", "cardapio"],
    ["a-garagem.html", "A Garagem", "garagem"],
    ["pit-stop.html", "Pit Stop", "pitstop"],
    ["contato.html", "Contato", "contato"]
  ];
  const header = document.getElementById("header");
  if (header) {
    header.innerHTML = `
    <header class="topbar">
      <div class="container topbar__inner">
        <a class="brand" href="index.html" aria-label="Garagem Burguer, página inicial">
          <img src="img/neon-g.jpg" alt="" width="30" height="48"><span>Garagem Burguer</span>
        </a>
        <nav class="nav" id="nav" aria-label="Principal">
          ${links.map(([href, t, id]) => `<a href="${href}"${id === page ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
        </nav>
        <a class="btn btn--red btn--sm" href="${L.pedido}" target="_blank" rel="noopener">${icons.bag}Peça agora</a>
        <button class="menu-toggle" type="button" aria-controls="nav" aria-expanded="false" aria-label="Abrir menu">${icons.menu}</button>
      </div>
    </header>`;
    const btn = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".nav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open);
      btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      btn.innerHTML = open ? icons.close : icons.menu;
    });
  }

  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div>
            <a class="brand" href="index.html"><img src="img/neon-g.jpg" alt="" width="30" height="48"><span>Garagem Burguer</span></a>
            <p class="footer__slogan">Vem de <span class="red">Garagem</span></p>
          </div>
          <div>
            <h4>Páginas</h4>
            <ul>${links.map(([href, t]) => `<li><a href="${href}">${t}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Horários</h4>
            <ul>
              <li class="muted">Seg, Qua, Qui e Dom · 18h–22h</li>
              <li class="muted">Sex e Sáb · 18h–23h</li>
              <li class="muted">Terça · fechado</li>
            </ul>
          </div>
          <div>
            <h4>Fale com a gente</h4>
            <ul>
              <li><a href="${L.pedido}" target="_blank" rel="noopener">Pedido online</a></li>
              <li><a href="${L.whatsapp}" target="_blank" rel="noopener">WhatsApp ${L.whatsappTexto}</a></li>
              <li><a href="${L.instagram}" target="_blank" rel="noopener">Instagram ${L.instagramUser}</a></li>
              <li><a href="${L.mapa}" target="_blank" rel="noopener">${GB.endereco.linha1}<br>${GB.endereco.linha2}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom estd"><span>Estd.</span><span>2019 · Garagem Burguer</span></div>
      </div>
    </footer>
    <a class="fab-whats" href="${L.whatsapp}" target="_blank" rel="noopener" aria-label="Conversar no WhatsApp">${icons.whats}</a>
    <div class="mobile-cta">
      <a class="btn btn--red" href="${L.pedido}" target="_blank" rel="noopener">${icons.bag}Peça agora</a>
      <a class="btn btn--ghost" href="${L.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icons.whats}WhatsApp</a>
    </div>`;
  }

  /* ---------- aberto / fechado (horário de Recife) ---------- */
  function agoraRecife() {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Recife", weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    const dias = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { dia: dias[get("weekday")], hora: (+get("hour") % 24) + (+get("minute")) / 60 };
  }
  function status() {
    const { dia, hora } = agoraRecife();
    const hoje = GB.horarios[dia];
    if (hoje && hora >= hoje[0] && hora < hoje[1]) return { open: true, txt: `Aberto agora · até ${h(hoje[1])}`, dia };
    if (hoje && hora < hoje[0]) return { open: false, txt: `Fechado · abre hoje às ${h(hoje[0])}`, dia };
    for (let i = 1; i <= 7; i++) {
      const d = (dia + i) % 7;
      if (GB.horarios[d]) return { open: false, txt: `Fechado · abre ${i === 1 ? "amanhã" : GB.dias[d].toLowerCase()} às ${h(GB.horarios[d][0])}`, dia };
    }
    return { open: false, txt: "Fechado", dia };
  }
  const st = status();
  document.querySelectorAll("[data-status]").forEach((el) => {
    el.classList.add("status", st.open ? "is-open" : "is-closed");
    el.textContent = st.txt;
  });

  /* ---------- tabela de horários ---------- */
  const hoursEl = document.querySelector("[data-hours]");
  if (hoursEl) {
    const ordem = [1, 2, 3, 4, 5, 6, 0];
    hoursEl.innerHTML = ordem.map((d) => {
      const hr = GB.horarios[d];
      return `<tr class="${d === st.dia ? "is-today" : ""}"><td>${GB.dias[d]}</td><td class="${hr ? "" : "off"}">${hr ? `${hr[0]}:00 – ${hr[1]}:00` : "Fechado"}</td></tr>`;
    }).join("");
  }

  /* ---------- cards de burger ---------- */
  function card(b) {
    const img = b.semFoto
      ? `<div class="card__img card__img--vazio"><img src="img/neon-g.jpg" alt=""><span>FOTO EM BREVE</span></div>`
      : `<div class="card__img"><img src="img/foto-${b.slug}.jpg" alt="Burger ${b.nome}" loading="lazy">${b.destaque ? '<span class="card__badge">MAIS PEDIDO</span>' : ""}</div>`;
    const resumo = b.ficha.slice(0, 3).join(", ").toLowerCase();
    return `
    <article class="card">
      <a href="burger.html?b=${b.slug}" tabindex="-1" aria-hidden="true">${img}</a>
      <div class="card__body">
        <h3 class="card__name"><a href="burger.html?b=${b.slug}">${b.nome}</a></h3>
        <p class="card__desc">${resumo.charAt(0).toUpperCase() + resumo.slice(1)}…</p>
        <div class="card__foot">
          ${priceHTML(b.preco)}
          <a class="btn btn--red btn--sm" href="${L.pedido}" target="_blank" rel="noopener" aria-label="Pedir ${b.nome}">Pedir</a>
        </div>
      </div>
    </article>`;
  }

  const rail = document.querySelector("[data-campeoes]");
  if (rail) rail.innerHTML = GB.burgers.filter((b) => b.destaque).concat(GB.burgers.filter((b) => !b.destaque && !b.semFoto).slice(0, 2)).map(card).join("");

  const insta = document.querySelector("[data-insta]");
  if (insta) {
    insta.innerHTML = ["porsche", "fusca", "camaro", "monza", "opala", "jaguar", "maserati", "mini-cooper"].slice(0, 8)
      .map((s) => `<a href="${L.instagram}" target="_blank" rel="noopener" aria-label="Ver no Instagram"><img src="img/arte-${s}.webp" alt="Post do burger ${s.replace("-", " ")}" loading="lazy"></a>`).join("");
  }

  /* ---------- cardápio ---------- */
  const menu = document.querySelector("[data-menu]");
  if (menu) {
    const tabs = document.querySelector("[data-tabs]");
    tabs.innerHTML = GB.categorias.map((c, i) => `<a class="chip${i === 0 ? " is-active" : ""}" href="#${c.id}">${c.nome}</a>`).join("");
    menu.innerHTML = GB.categorias.map((c) => {
      let body;
      if (c.id === "burgers") body = `<div class="grid-cards">${GB.burgers.map(card).join("")}</div>`;
      else if (c.id === "combos") body = `<div class="combo-list">${GB.combos.map((k) => `
        <div class="combo">
          <h3 class="display h3">${k.nome}</h3>
          <p>${k.desc}</p>
          <div class="card__foot">${priceHTML(k.preco)}<a class="btn btn--dark btn--sm" href="${L.pedido}" target="_blank" rel="noopener">Pedir combo</a></div>
        </div>`).join("")}</div>`;
      else body = `<div class="soon"><span>Os itens de ${c.nome.toLowerCase()} estão no pedido online.</span><a class="btn btn--ghost btn--sm" href="${L.pedido}" target="_blank" rel="noopener">Ver ${c.nome.toLowerCase()}</a></div>`;
      return `<section class="menu-section" id="${c.id}"><h2 class="display h2">${c.nome}</h2>${body}</section>`;
    }).join("");

    // destaca a aba da seção visível
    const chips = [...tabs.querySelectorAll(".chip")];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          chips.forEach((c) => c.classList.toggle("is-active", c.getAttribute("href") === "#" + e.target.id));
          const active = tabs.querySelector(".is-active");
          if (active) active.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
        }
      });
    }, { rootMargin: "-160px 0px -60% 0px" });
    menu.querySelectorAll(".menu-section").forEach((s) => obs.observe(s));
  }

  /* ---------- ficha do burger ---------- */
  const ficha = document.querySelector("[data-ficha]");
  if (ficha) {
    const slug = new URLSearchParams(location.search).get("b") || "mclaren";
    const b = GB.burgers.find((x) => x.slug === slug) || GB.burgers[0];
    document.title = `${b.nome} · Garagem Burguer`;
    const art = b.semFoto
      ? `<div class="card__img card__img--vazio" style="aspect-ratio:9/16;border-radius:22px"><img src="img/neon-g.jpg" alt=""><span>FOTO EM BREVE</span></div>`
      : `<img src="img/arte-${b.slug}.webp" alt="Arte do burger ${b.nome} com a ficha técnica" width="640" height="1137">`;
    ficha.innerHTML = `
      <div class="ficha__art">${art}</div>
      <div class="ficha__info">
        <a class="back" href="cardapio.html#burgers">← Voltar ao cardápio</a>
        <p class="estd"><span>Estd.</span><span>2019</span></p>
        <h1 class="display h1">${b.nome}</h1>
        <p class="ficha__frase">${b.frase}</p>
        <div>
          <p class="eyebrow" style="margin-bottom:12px">Ficha técnica</p>
          <ul class="spec">${b.ficha.map((i) => `<li>${i}</li>`).join("")}</ul>
        </div>
        <div style="display:flex;align-items:center;gap:24px;flex-wrap:wrap">
          ${b.preco == null ? '<span class="price" style="font-size:40px">Consulte o preço</span>' : `<span class="price" style="font-size:64px"><small>R$</small>${b.preco.toFixed(2).replace(".", ",")}</span>`}
        </div>
        <div class="btns">
          <a class="btn btn--red" href="${L.pedido}" target="_blank" rel="noopener">${icons.bag}Pedir este</a>
          <a class="btn btn--ghost" href="${L.whatsapp}?text=${encodeURIComponent("Olá! Quero pedir o " + b.nome + ".")}" target="_blank" rel="noopener">${icons.whats}Pedir no WhatsApp</a>
        </div>
      </div>`;
    const outros = document.querySelector("[data-outros]");
    if (outros) outros.innerHTML = GB.burgers.filter((x) => x.slug !== b.slug && !x.semFoto).slice(0, 4).map(card).join("");
  }

  /* ---------- lista de carros (A Garagem) ---------- */
  const frota = document.querySelector("[data-frota]");
  if (frota) frota.innerHTML = GB.burgers.map((b) => `<a href="burger.html?b=${b.slug}">${b.nome}</a>`).join("");

  /* ---------- links dinâmicos ---------- */
  document.querySelectorAll("[data-link]").forEach((a) => {
    const k = a.dataset.link;
    if (L[k]) { a.href = L[k]; a.target = "_blank"; a.rel = "noopener"; }
  });
  document.querySelectorAll("[data-icon]").forEach((el) => { el.insertAdjacentHTML("afterbegin", icons[el.dataset.icon] || ""); });
  document.querySelectorAll("[data-map]").forEach((el) => {
    el.innerHTML = `<iframe src="${L.mapaEmbed}" title="Mapa: ${GB.endereco.linha1}, ${GB.endereco.linha2}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  });

  /* ---------- animação ao rolar ---------- */
  const rev = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting || e.boundingClientRect.top < 0) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: .12 });
    rev.forEach((r) => io.observe(r));
  } else rev.forEach((r) => r.classList.add("is-in"));
})();
