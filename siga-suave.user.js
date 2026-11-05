// ==UserScript==
// @name         SIGA Suave
// @description  Tema más amable y adaptación a celular para siga.usm.cl (solo cambia la apariencia)
// @match        https://siga.usm.cl/*
// @run-at       document-start
// @version      0.6.4
// @namespace    https://github.com/TopitoTobal/siga-suave
// @author       Tobal
// @license      MIT
// @homepage     https://github.com/TopitoTobal/siga-suave
// @supportURL   https://github.com/TopitoTobal/siga-suave/issues
// @downloadURL  https://raw.githubusercontent.com/TopitoTobal/siga-suave/main/siga-suave.user.js
// @updateURL    https://raw.githubusercontent.com/TopitoTobal/siga-suave/main/siga-suave.user.js
// @grant        none
// ==/UserScript==
// Íconos del menú: Material Icons (Google), licencia Apache 2.0.
(() => {
  "use strict";
  const ACCENT = "azul";       // azul | dorado
  const THEME = "auto";        // auto | claro | oscuro
  const RESPONSIVE = true;     // adapta SIGA al ancho del celular (si algo se ve mal, pon false)
  const SALTAR_TIENDA = true;  // "Correo y Credencial" abre directo la tienda de apps
  // Interruptores para descartar fallos: si una pantalla te devuelve al menú, pon false de a uno y prueba.
  const MARCOS = true;         // ajusta la altura de los marcos de SIGA (cabecera, título, pie)
  const MENU_TARJETAS = true;  // menú principal en tarjetas
  const COLORES = true;        // celdas, botones y tablas

  const root = document.documentElement;
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const listo = (f) => (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", f) : f());
  const cargado = (f) => (document.readyState === "complete" ? f() : addEventListener("load", f));

  // Tema (atributos que usa el CSS)
  const oscuro = THEME === "oscuro" || (THEME === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
  Object.entries({ "data-sg": "on", "data-sg-theme": oscuro ? "dark" : "light", "data-sg-accent": ACCENT, "data-sg-resp": RESPONSIVE ? "on" : "off" })
    .forEach(([k, v]) => root.setAttribute(k, v));
  const estilo = document.createElement("style");
  estilo.textContent = `$ {--sg-bg:#f3f5f9;--sg-sf:#fff;--sg-ink:#1b2433;--sg-mu:#5d6b82;--sg-ln:#dde3ee;--sg-ac:#1f4e9c;--sg-ai:#fff;--sg-so:#e8eef9;--sg-r:10px;--sg-sh:0 1px 2px #14233c0f,0 6px 18px #14233c0f}$[data-sg-theme=dark]{--sg-bg:#10151f;--sg-sf:#182030;--sg-ink:#e7ecf5;--sg-mu:#98a5bb;--sg-ln:#28344b;--sg-so:#1e2a40;--sg-sh:0 1px 2px #0006;--sg-ai:#0c1424;--sg-ac:#6ea1ff}$[data-sg-accent=dorado]{--sg-ac:#b7791f}$[data-sg-theme=dark][data-sg-accent=dorado]{--sg-ac:#f0b84d}$ body{background:var(--sg-bg)!important;color:var(--sg-ink)!important;font-family:Inter,"Segoe UI",system-ui,sans-serif!important;font-size:15px;line-height:1.55;-webkit-font-smoothing:antialiased}$ :is(h1,h2,h3,h4){color:var(--sg-ink)!important;font-family:inherit!important;font-weight:650;letter-spacing:-.01em}$ a{text-decoration-thickness:1px;text-underline-offset:3px}$ a:hover{filter:brightness(1.15)}$ :focus-visible{outline:2px solid var(--sg-ac);outline-offset:2px}$ :is(nav,header,.navbar){background:var(--sg-sf)!important;border-color:var(--sg-ln)!important;box-shadow:var(--sg-sh)}$ footer{background:transparent!important;color:var(--sg-mu)!important}$ :is(.panel,.well,.box,.modal-content,.list-group-item,.dropdown-menu,fieldset){background:var(--sg-sf)!important;color:var(--sg-ink)!important;border:1px solid var(--sg-ln)!important;border-radius:var(--sg-r)!important;box-shadow:var(--sg-sh)}$ :is(.panel-heading,.modal-header){background:var(--sg-so)!important;color:var(--sg-ink)!important;border-color:var(--sg-ln)!important}$ table{border-collapse:separate;border-spacing:0;color:var(--sg-ink)!important;background:var(--sg-sf)!important;border:1px solid var(--sg-ln)!important;border-radius:var(--sg-r)}$ th{background:var(--sg-so)!important;color:var(--sg-ink)!important;font-weight:600;text-align:left;padding:10px 12px!important;border-bottom:1px solid var(--sg-ln)!important}$ td{color:var(--sg-ink)!important;padding:9px 12px!important;border-bottom:1px solid var(--sg-ln)!important}$ tr:last-child td{border-bottom:0!important}$ tbody tr:hover td{background:var(--sg-so)!important}$ :is(input:not([type=checkbox],[type=radio],[type=submit],[type=button]),select,textarea){background:var(--sg-sf)!important;color:var(--sg-ink)!important;border:1px solid var(--sg-ln)!important;border-radius:8px!important;padding:8px 10px;font:inherit}$ :is(a,a:link,a:visited,a:hover,a:active){color:var(--sg-ac)!important}$ :is(button,input[type=submit],input[type=button],.btn){background:var(--sg-ac)!important;color:var(--sg-ai)!important;border:0!important;border-radius:8px!important;padding:8px 14px;font:inherit;font-weight:600;cursor:pointer;transition:filter .12s,transform .12s}$ :is(button,.btn):hover{filter:brightness(1.1)}$ :is(button,.btn):active{transform:translateY(1px)}$ .btn.btn-default{background:var(--sg-so)!important;color:var(--sg-ink)!important}$ .alert{border-radius:var(--sg-r)!important;border:1px solid var(--sg-ln)!important}$ .nav-tabs>li.active>a{background:var(--sg-sf)!important;color:var(--sg-ac)!important;border-color:var(--sg-ln)!important}@media (prefers-reduced-motion:reduce){$ *{transition:none!important}}$[data-sg-theme=dark] img{background:#f4f6fb;border-radius:6px}$[data-sg-theme=dark] :is(td,th,p,span,li,label,font,b,strong,legend,div){color:var(--sg-ink)!important}$[data-sg-theme=dark] a *{color:inherit!important}$[data-sg-theme] :is(button,.btn,.sg-btn) *{color:inherit!important}$[data-sg-theme] :is(button,.btn){color:var(--sg-ai)!important}$[data-sg-theme] a>button,$[data-sg-theme] a>button *{color:var(--sg-ai)!important}$[data-sg-theme] [data-sg-keep] *{color:inherit!important}$ .Encabezado01,$ .Encabezado01 td{background:var(--sg-sf)!important}$ .Encabezado01 font{color:var(--sg-ink)!important}$ table.sg-orig{display:none!important}$ #sg-menu{padding:12px;max-width:920px;margin:0 auto}$ #sg-menu h2{font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--sg-mu)!important;margin:16px 4px 8px;font-weight:700}$ #sg-menu .sg-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px}$ #sg-menu a.sg-card{display:flex;align-items:center;gap:12px;min-height:56px;box-sizing:border-box;padding:12px 14px;background:var(--sg-sf);border:1px solid var(--sg-ln);border-radius:12px;box-shadow:var(--sg-sh);text-decoration:none;font-weight:600;font-size:15px;line-height:1.25}$ #sg-menu a.sg-card svg{width:24px;height:24px;flex:none;fill:var(--sg-ac)!important}$ #sg-menu a.sg-card i{display:none}$ #sg-menu a.sg-card:active{transform:translateY(1px)}@media (max-width:760px){$[data-sg-resp=on]{overflow-x:auto}$[data-sg-resp=on] img{max-width:100%;height:auto}$[data-sg-resp=on] table.sg-ancho{display:block;max-width:100%;height:auto!important;max-height:none!important;overflow:auto;-webkit-overflow-scrolling:touch}$[data-sg-resp=on] table.sg-foto.sg-ancho:not(.sg-denso){display:table;width:100%!important;table-layout:auto;overflow:visible}$[data-sg-resp=on] table.sg-foto.sg-ancho:not(.sg-denso) :is(td,th){width:auto!important;white-space:normal;overflow-wrap:break-word}$[data-sg-resp=on] :is(td,th,a,span,label,li,p,select,input,button,textarea){font-size:max(14px,1em)!important}$[data-sg-resp=on] a{padding-block:4px}$[data-sg-resp=on] input:not([type=checkbox],[type=radio]){min-height:44px}$[data-sg-resp=on] :is(select,textarea,button){min-height:44px}$[data-sg-resp=on] :is(input[type=checkbox],input[type=radio]){width:22px;height:22px}$ #sg-menu .sg-grid{grid-template-columns:1fr 1fr}$ #sg-menu a.sg-card{font-size:14px!important}$[data-sg-resp=on] :is(.alinleft,.alinright){float:none;display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:2px 4px}$[data-sg-resp=on] #header .siga{padding-right:8px}$[data-sg-resp=on] header img{max-height:36px;width:auto}$[data-sg-resp=on] #header .logo{padding:4px 8px!important}$[data-sg-resp=on] button.fa-button{min-height:36px;padding:6px 10px!important}$[data-sg-resp=on] table.sg-denso :is(td,th){font-size:11.5px!important;padding:3px 4px!important;line-height:1.25!important}}@media (max-width:420px){$[data-sg-resp=on] header img{max-height:30px}}`.replace(/\$/g, "html[data-sg=on]"); // "$" = alcance del tema
  (document.head || root).appendChild(estilo);

  // SIGA no declara viewport: el celular lo dibuja a ~980 px y lo achica. Se declara el ancho real.
  if (RESPONSIVE) {
    const poner = () => {
      let m = document.querySelector('meta[name="viewport"]');
      if (!m) { m = document.createElement("meta"); m.name = "viewport"; document.head.appendChild(m); }
      m.content = "width=device-width,initial-scale=1";
    };
    document.head ? poner() : listo(poner);
  }

  // Menú principal (menu.jsp): sus enlaces javascript:Enviar(...) se mueven tal cual a tarjetas agrupadas.
  const MENU = [
    [0, "ficha personal", "M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"],
    [0, "planes de carrera", "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99 3-1.01v11.7l-3 1.16V6.46zm14 11.08-3 1.01V6.86l3-1.16v11.84z"],
    [0, "resumen academico", "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"],
    [0, "avance curricular", "m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"],
    [0, "autorizacion academica", "M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39l-1.61 1.61z"],
    [0, "certificados", "M9.68 13.69 12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84-.88 2.85zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72A7.96 7.96 0 0 0 20 10zm-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 15-4 1.02v-3.1c1.18.68 2.54 1.08 4 1.08s2.82-.4 4-1.08v3.1L12 19z"],
    [1, "inscripcion", "M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm12 0h4v4h-4zm-5 13.86V20h2.1l5.98-5.97-2.12-2.12zm3-5.83V10h-4v4h2.03zm6.85-.47-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06c.2-.2.2-.51 0-.71z"],
    [1, "asignaturas inscritas", "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z"],
    [1, "horario asignaturas", "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"],
    [1, "horario personal", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"],
    [2, "solicitudes academicas", "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm7 4 4 4-4 4v-3h-4v-2h4v-3z"],
    [2, "cambio de mencion", "M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"],
    [2, "encuesta docente", "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9.5-2H18v-2h-5.5zm3.86-5.87c.2-.2.2-.51 0-.71l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l5.89-5.87z"],
    [2, "deuda", "M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"],
    [2, "correo y credencial", "<path d=\"M14 12h4v1.5h-4zm0 3h4v1.5h-4z\"/><path d=\"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11z\"/><circle cx=\"9\" cy=\"13.5\" r=\"1.5\"/><path d=\"M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39z\"/>"]];
  const OTRO = "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z";
  const GRUPOS = ["Mi carrera", "Mis ramos", "Trámites", "Otros"];
  const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  listo(() => {
    const links = $$("a.menu");
    if (!MENU_TARJETAS || links.length < 3 || document.getElementById("sg-menu")) return;
    const mk = (t, p) => Object.assign(document.createElement(t), p);
    const sec = GRUPOS.map((t) => ({ h: mk("h2", { textContent: t }), g: mk("div", { className: "sg-grid" }), n: 0 }));
    const tabla = links[0].closest("table");
    links.forEach((a) => {
      const t = norm(a.textContent), e = MENU.find((x) => t.indexOf(x[1]) === 0), s = sec[e ? e[0] : 3];
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const d = e ? e[2] : OTRO;
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("aria-hidden", "true");
      svg.innerHTML = d[0] === "<" ? d : `<path d="${d}"/>`;
      a.classList.add("sg-card");
      a.insertBefore(svg, a.firstChild);
      s.g.appendChild(a);
      s.n++;
    });
    const cont = mk("div", { id: "sg-menu" });
    sec.forEach((s) => s.n && cont.append(s.h, s.g));
    if (tabla) tabla.classList.add("sg-orig");
    document.body.insertBefore(cont, document.body.firstChild);
    root.style.overflowY = "auto";
  });

  // Colores: un solo recorrido (lecturas primero, escrituras después).
  //  - botones y enlaces con fondo propio: texto claro u oscuro según el fondo (nunca igual a él);
  //  - celdas, filas y contenedores: los blancos/grises quedan transparentes (manda el tema) y los colores
  //    con significado (p. ej. "tope" o "inscrita" en el horario) se conservan, con texto legible;
  //  - tablas: .sg-ancho si no caben en pantalla y .sg-denso si son grillas de 6 o más columnas.
  const RGB = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/;
  const hex = (v) => { const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec((v || "").trim()); return m && [1, 2, 3].map((i) => parseInt(m[i], 16)).join(); };
  const pasada = () => {
    const cs = getComputedStyle(root);
    const propios = ["bg", "sf", "so", "ac"].map((v) => hex(cs.getPropertyValue("--sg-" + v))).filter(Boolean);
    const els = $$("a,button,.btn,td,tr,tbody,thead,tfoot,table div,table center");
    const tablas = $$("table");
    const fondos = els.map((el) => { const e = getComputedStyle(el), m = RGB.exec(e.backgroundColor); return m && (m[4] === undefined || +m[4] >= 0.5) ? [+m[1], +m[2], +m[3], e.backgroundImage !== "none"] : null; });
    const w = root.clientWidth;
    const medidas = tablas.map((t) => [t.scrollWidth > w + 2, Array.from(t.rows).reduce((n, r) => Math.max(n, r.cells.length), 0) >= 6, Array.from(t.querySelectorAll("img")).some((im) => im.getBoundingClientRect().width > 60)]);
    els.forEach((el, i) => {
      const c = fondos[i];
      if (!c) return;
      const [r, g, b, conImagen] = c, texto = (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.55 ? "#0c1424" : "#fff";
      if (el.matches("a,button,.btn")) { el.style.setProperty("color", texto, "important"); el.classList.add("sg-btn"); return; }
      if (conImagen || propios.includes(c.slice(0, 3).join())) return; // con imagen de fondo (p. ej. la foto) no se toca
      const mx = Math.max(r, g, b);
      if (mx === 0 || (mx - Math.min(r, g, b)) / mx < 0.1) el.style.setProperty("background-color", "transparent", "important");
      else { el.style.setProperty("color", texto, "important"); el.setAttribute("data-sg-keep", ""); }
    });
    tablas.forEach((t, i) => { if (medidas[i][0]) t.classList.add("sg-ancho"); if (medidas[i][1]) t.classList.add("sg-denso"); if (medidas[i][2]) t.classList.add("sg-foto"); }); // solo se agregan: así no oscilan al cambiar su ancho
  };
  let t0;
  const luego = () => { clearTimeout(t0); t0 = setTimeout(pasada, 250); };
  if (COLORES) {
    listo(pasada);
    cargado(pasada);
    listo(() => new MutationObserver(luego).observe(root, { childList: true, subtree: true })); // contenido que llega tarde
  }

  // Cada pantalla de SIGA son marcos de altura fija (cabecera 120 px, título y pie en %): en el celular dejan huecos
  // enormes y en el PC recortan la cabecera. Cada marco fijo toma la altura real de su contenido; el de datos desliza.
  listo(() => {
    if (!MARCOS || top !== window || !document.querySelector("frameset")) return;
    const alto = (f) => {
      try {
        let m = 0;
        Array.from(f.contentDocument.body.children).forEach((e) => { const r = e.getBoundingClientRect(); if (r.height > 0) m = Math.max(m, r.bottom + (f.contentWindow.scrollY || 0)); });
        return Math.ceil(m);
      } catch (e) { return 0; }
    };
    const ajustar = () => {
      const tope = Math.round(innerHeight * 0.45);
      $$("frameset").reverse().forEach((fs) => { // los internos primero
        const rows = fs.getAttribute("rows");
        const hijos = Array.from(fs.children).filter((e) => /^FRAME(SET)?$/.test(e.tagName));
        const p = (rows || "").split(",").map((s) => s.trim());
        if (!rows || hijos.length !== p.length) return;
        const nuevo = p.map((v, i) => {
          if (hijos[i].tagName !== "FRAME") return v;
          if (v === "*") {
            // solo si hace falta: cambiar atributos de un marco puede hacer que SIGA lo recargue
            if ((hijos[i].getAttribute("scrolling") || "").toLowerCase() === "no") hijos[i].setAttribute("scrolling", "auto");
            return v;
          }
          const px = alto(hijos[i]);
          return px ? String(Math.min(px + 4, tope)) : v;
        }).join(",");
        if (nuevo !== rows) fs.rows = nuevo;
      });
    };
    cargado(() => { ajustar(); setTimeout(ajustar, 500); });
    $$("frame").forEach((f) => f.addEventListener("load", () => setTimeout(ajustar, 150)));
    addEventListener("resize", ajustar);
  });

  // "Correo y Credencial": salta la página con los dos botones y abre la tienda del celular (enlaces leídos de la página).
  if (SALTAR_TIENDA && /\/pag\/sisttui\/tui_consulta\.jsp/.test(location.pathname)) {
    listo(() => {
      const ua = navigator.userAgent;
      const sel = /Android/i.test(ua) ? 'a[href*="play.google.com"],a[href^="market://"]'
        : /iPhone|iPad|iPod/i.test(ua) ? 'a[href*="apps.apple.com"],a[href*="itunes.apple.com"]' : "";
      const a = sel && document.querySelector(sel);
      if (a && a.href) location.replace(a.href);
    });
  }
})();
