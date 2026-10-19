// Usuário do WhatsApp para o link wa.me (não expõe o número). Vazio = botão some.
const WHATSAPP = "@flavioedu.silva";
const BIRTH = new Date(2002, 11, 30);

const PT = {
  "skip": "Pular para o conteúdo",
  "nav.about": "Sobre", "nav.projects": "Projetos", "nav.path": "Trajetória", "nav.off": "Fora do código", "nav.contact": "Contato",
  "hero.live": "ONLINE",
  "hero.pre": "A oficina de",
  "hero.pitch": "<b>Desenvolvedor full-stack e analista de sistemas.</b> Comecei consertando máquinas industriais; hoje construo integrações, automações e infraestrutura self-hosted, entregando software com agentes de IA.",
  "hero.cta": "Fale comigo",
  "stats.since": "primeira linha de código",
  "stats.age": "anos",
  "stats.roles": "empregos, do chão de fábrica à TI",
  "stats.langs": "idiomas: PT · EN · IT",
  "about.title": "Sobre",
  "about.p1": "Sou o Flavio, desenvolvedor brasileiro morando em Nápoles, na Itália. Aprendi programação de jogos no ensino técnico (2016–2018), passei alguns anos trabalhando com as mãos como mecânico industrial e técnico de TI, e voltei para o código de vez em 2024.",
  "about.p2": "Essa mistura é o meu diferencial: resolvo problemas que cruzam <b>software</b> (APIs, scraping, bancos de dados, CRMs e ERPs) e <b>hardware e redes</b> (servidores Linux, Docker, virtualização, IoT). Se dá para automatizar ou hospedar em casa, eu quero automatizar e hospedar.",
  "about.p3": "Trabalho de forma <b>AI-native</b>: dirijo agentes de código como o Claude Code e sou dono do que faz um software dar certo: a especificação, os critérios de aceite e as decisões de risco.",
  "stack.lang": "Linguagens", "stack.libs": "Frameworks e bibliotecas", "stack.int": "Integrações e automação", "stack.ai": "Ferramentas de IA",
  "projects.title": "Projetos",
  "p.auvo": "Captura, trata e sincroniza leads e dados de campo do Auvo para o Vtiger CRM, para o comercial parar de copiar planilha na mão.",
  "p.n8n.t": "Nodes próprios n8n",
  "p.n8n": "Nodes nativos do n8n para o Vtiger CRM e a Auvo API v2: scripts avulsos viram blocos de arrastar e soltar.",
  "p.kanban": "Kanban interno para a operação do dia a dia da Purifikar, em contêiner e self-hosted.",
  "p.iot.t": "Estação de clima IoT",
  "p.iot": "Lê temperatura, umidade e pressão e envia para o meu servidor de casa via MQTT.",
  "p.hw": "Raspa e organiza dados do catálogo Hot Wheels numa coleção digital.",
  "p.homelab.t": "Homelab",
  "p.homelab": "Proxmox, Docker e Traefik com TLS automático, expostos por Cloudflare Tunnels para contornar o CGNAT da Starlink.",
  "path.title": "Trajetória",
  "path.now": "Agora",
  "path.ami.r": "Construtor de produtos AI-native",
  "path.ami": "Dono do produto e do risco em software escrito por agentes de IA: defino o \"pronto\", escrevo os critérios de aceite e faço os trade-offs.",
  "path.pfk.r": "Analista de sistemas e desenvolvedor",
  "path.pfk": "Ferramentas internas, infraestrutura, integrações ERP/CRM, parametrização fiscal no Omie e limpeza de dados para relatórios.",
  "path.neo.r": "Técnico de produção e infraestrutura de TI",
  "path.neo": "Função híbrida: redes e servidores, mais a linha de produção de uma empresa de comunicação visual.",
  "path.art.r": "Mecânico industrial",
  "path.art": "Manutenção de máquinas e diagnóstico mecânico. Onde aprendi a depurar qualquer coisa.",
  "path.nave": "Técnico em Programação de Jogos Digitais integrado ao médio. Hoje também cursando Análise e Desenvolvimento de Sistemas na Anhanguera.",
  "off.title": "Fora do código",
  "off.k1": "Pista", "off.v1": "Kart e preparação de motores; encontros de clássicos e esportivos de Minas Gerais a Pompeia.",
  "off.k2": "Simulador", "off.v2": "BeamNG.drive no volante G29, Minecraft com mods de Create, Satisfactory. Automação até quando estou jogando.",
  "off.k3": "Academia", "off.v3": "Musculação, com foco em hipertrofia.",
  "off.k4": "Tela", "off.v4": "De Volta para o Futuro, sempre. Depois O Jogo da Imitação, Suits e Friends.",
  "contact.title": "Contato",
  "contact.lead": "Precisa de uma integração, uma automação ou um servidor que simplesmente funcione? Me manda uma mensagem.",
  "contact.wa": "Falar no WhatsApp",
  "contact.note": "Nápoles, Itália · CET · respondo em português, inglês ou italiano.",
  "foot.made": "Feito com agentes de IA, revisado à mão.",
  "foot.credit": "Design inspirado no",
};

const CONSOLE = {
  en: [
    ["$ ", "whoami"], ["", "flavio eduardo · {age} · napoli, it"],
    ["$ ", "cat path.log"], ["", "industrial mechanic → it infra → systems dev → ai-native"],
    ["$ ", "docker compose ps"],
    ["", "n8n            <ok>up</ok>   automations"],
    ["", "vtiger-sync    <ok>up</ok>   auvo → crm"],
    ["", "traefik        <ok>up</ok>   tls via let's encrypt"],
    ["", "weather-iot    <ok>up</ok>   esp8266 · mqtt"],
    ["$ ", "claude \"ship it\""],
  ],
  pt: [
    ["$ ", "whoami"], ["", "flavio eduardo · {age} anos · napoli, it"],
    ["$ ", "cat trajetoria.log"], ["", "mecânico industrial → infra de ti → dev de sistemas → ai-native"],
    ["$ ", "docker compose ps"],
    ["", "n8n            <ok>up</ok>   automações"],
    ["", "vtiger-sync    <ok>up</ok>   auvo → crm"],
    ["", "traefik        <ok>up</ok>   tls via let's encrypt"],
    ["", "weather-iot    <ok>up</ok>   esp8266 · mqtt"],
    ["$ ", "claude \"bota no ar\""],
  ],
};

const root = document.documentElement;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} },
};

function age() {
  const now = new Date();
  let a = now.getFullYear() - BIRTH.getFullYear();
  if (now < new Date(now.getFullYear(), BIRTH.getMonth(), BIRTH.getDate())) a--;
  return a;
}

// ---- Idioma: o HTML guarda o inglês; o PT substitui e o original volta ao trocar.
function applyLang(lang) {
  root.setAttribute("data-lang", lang);
  root.lang = lang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
    const pt = PT[el.dataset.i18n];
    el.innerHTML = lang === "pt" && pt ? pt : el.dataset.en;
  });
  typeConsole(lang);
}
document.getElementById("lang-toggle").addEventListener("click", () => {
  const next = root.getAttribute("data-lang") === "pt" ? "en" : "pt";
  store.set("lang", next);
  applyLang(next);
});

// ---- Tema
document.getElementById("theme-toggle").addEventListener("click", () => {
  const dark = root.getAttribute("data-theme")
    ? root.getAttribute("data-theme") === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  const next = dark ? "light" : "dark";
  root.setAttribute("data-theme", next);
  store.set("theme", next);
});

// ---- Relógio de Nápoles no selo "ONLINE"
const clock = document.getElementById("clock");
const fmt = new Intl.DateTimeFormat("it-IT", { timeZone: "Europe/Rome", hour: "2-digit", minute: "2-digit" });
const tick = () => { clock.textContent = fmt.format(new Date()); };
tick();
setInterval(tick, 15000);

// ---- Dados que mudam sozinhos
document.getElementById("age").dataset.to = age();
document.getElementById("age").textContent = age();
document.getElementById("year").textContent = new Date().getFullYear();
const wa = document.getElementById("wa-link");
if (WHATSAPP) wa.href = "https://wa.me/" + WHATSAPP;
else wa.remove();

// ---- Terminal digitando
let consoleRun = 0;
function lineHTML(prefix, text) {
  const safe = text.replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/&lt;ok>(.*?)&lt;\/ok>/g, '<span class="ok">$1</span>');
  return (prefix ? '<span class="p">' + prefix + "</span>" : "") + safe;
}
function typeConsole(lang) {
  const el = document.getElementById("console");
  const lines = CONSOLE[lang].map(([p, t]) => [p, t.replace("{age}", age())]);
  const run = ++consoleRun;
  if (reduced) {
    el.innerHTML = lines.map(([p, t]) => lineHTML(p, t)).join("\n") + ' <span class="cursor"></span>';
    return;
  }
  let i = 0, done = [];
  const step = () => {
    if (run !== consoleRun) return;
    if (i >= lines.length) { el.innerHTML = done.join("\n") + ' <span class="cursor"></span>'; return; }
    const [p, t] = lines[i];
    if (!p) { done.push(lineHTML(p, t)); i++; el.innerHTML = done.join("\n"); setTimeout(step, 140); return; }
    let n = 0;
    const type = () => {
      if (run !== consoleRun) return;
      n++;
      el.innerHTML = done.concat(lineHTML(p, t.slice(0, n)) + '<span class="cursor"></span>').join("\n");
      if (n < t.length) setTimeout(type, 38 + Math.random() * 40);
      else { done.push(lineHTML(p, t)); i++; setTimeout(step, 320); }
    };
    type();
  };
  el.innerHTML = '<span class="cursor"></span>';
  setTimeout(step, 500);
}

// ---- Movimento (GSAP). Sem GSAP ou com movimento reduzido, tudo aparece parado.
function motion() {
  if (reduced || !window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".wordmark .split").forEach((w) => {
    w.innerHTML = [...w.textContent].map((c) => '<span class="ch">' + c + "</span>").join("");
  });
  gsap.timeline({ defaults: { ease: "power3.out" } })
    .from(".live", { y: -12, opacity: 0, duration: .5 })
    .from(".portrait", { scale: .7, opacity: 0, duration: .8, ease: "back.out(1.6)" }, "-=.2")
    .from(".wordmark-pre", { opacity: 0, letterSpacing: ".9em", duration: .9 }, "-=.5")
    .from(".wordmark .ch", { yPercent: 110, opacity: 0, rotate: 6, duration: .7, stagger: .035 }, "-=.7")
    .from(".pitch, .hero .hero-cta", { y: 16, opacity: 0, duration: .6, stagger: .12 }, "-=.35");

  gsap.to(".hero-grid", { backgroundPosition: "0 140px", ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.from(el, { y: 28, opacity: 0, duration: .7, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });

  document.querySelectorAll(".count").forEach((el) => {
    const to = +el.dataset.to, from = to > 1000 ? to - 40 : 0, o = { v: from };
    el.textContent = from;
    gsap.to(o, { v: to, duration: 1.4, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 92%" },
      onUpdate: () => { el.textContent = Math.round(o.v); } });
  });

  const tl = document.querySelector(".timeline");
  tl.style.setProperty("--tl", "0%");
  gsap.to(tl, { "--tl": "100%", ease: "none", scrollTrigger: { trigger: tl, start: "top 75%", end: "bottom 60%", scrub: .6 } });
}

applyLang(root.getAttribute("data-lang") || "en");
motion();
