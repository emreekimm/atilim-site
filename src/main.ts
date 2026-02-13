import "./style.css";
import { mountApply } from "./apply";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("#app bulunamadı");

// /apply sayfası
if (location.pathname === "/apply") {
  mountApply(app);
} else {
  app.innerHTML = `
  <header class="topbar">
    <div class="container topbar_inner">
      <a class="brand" href="#about" aria-label="ATILIM LLC">
        <img class="brand_logo" src="/atilim-logo.svg" alt="ATILIM LLC" />
      </a>

      <nav class="nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#divisions">Divisions</a>
        <a href="#partners">Partners</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container hero_center">
      <div class="hero_lockup" role="banner" aria-label="ATILIM LLC hero">
        <img class="hero_logo" src="/atilim-logo.svg" alt="ATILIM logo" />
        <div class="hero_text">
          <div class="hero_kicker">INDUSTRIAL SOLUTIONS</div>
          <div class="hero_llc">LLC</div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="section">
    <div class="container">
      <h2>About</h2>
      <p>
        ATILIM LLC operates across international trade and industrial supply, with a focus on reliable sourcing,
        partner coordination and end-to-end delivery.
      </p>
    </div>
  </section>

  <section id="divisions" class="section alt">
    <div class="container">
      <h2>Business Divisions</h2>

      <div class="cards">
        <div class="card pressable">
          <h3>Safety Gloves – YouGain</h3>
          <p>Authorized distribution and product portfolio for professional safety gloves.</p>
          <div class="card_links">
            <a class="card_link pressable_link" href="https://www.yougaingloves.com" target="_blank" rel="noopener">Visit brand site</a>
            <a class="card_link pressable_link" href="#" target="_blank" rel="noopener">Visit Amazon store</a>
            <a class="card_link pressable_link" href="/apply?division=yougain">Become a Distributor</a>
          </div>
        </div>

        <div class="card pressable">
          <h3>Industrial Power Transmission</h3>
          <p>Industrial belts, bearings, pulleys, taper bushes and couplings.</p>
          <div class="card_links">
            <a class="card_link pressable_link" href="https://scarulman.com.tr" target="_blank" rel="noopener">B2B catalog</a>
            <a class="card_link pressable_link" href="/apply?division=industrial">Become a Distributor</a>
          </div>
        </div>

        <div class="card pressable">
          <h3>Promotional Products</h3>
          <p>Wholesale t-shirts and natural cotton tote bags for promotions and retail.</p>
          <div class="card_links">
            <a class="card_link pressable_link" href="#" target="_blank" rel="noopener">Visit website</a>
            <a class="card_link pressable_link" href="https://amazon.example" target="_blank" rel="noopener">Visit Amazon store</a>
            <a class="card_link pressable_link" href="/apply?division=promo">Become a Partner</a>
          </div>
        </div>

        <div class="card pressable">
          <h3>Solar Energy</h3>
          <p>Project development, engineering coordination and partner delivery.</p>
          <div class="card_links">
            <a class="card_link pressable_link" href="#" target="_blank" rel="noopener">Visit website</a>
            <a class="card_link pressable_link" href="/apply?division=solar">Become a Representative</a>
          </div>
        </div>

        <div class="card pressable">
          <h3>Terra Vitalis</h3>
          <p>Brand platform and future project hub.</p>
          <div class="card_links">
            <a class="card_link pressable_link" href="#" target="_blank" rel="noopener">Visit website</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="partners" class="section">
    <div class="container">
      <h2>Partners</h2>
      <div class="partners_grid" aria-label="Partners logos">
        <img class="partner_logo" src="/partners/yougain.png" alt="YouGain" loading="lazy" />
        <img class="partner_logo" src="/partners/sca.png" alt="SCA" loading="lazy" />
        <img class="partner_logo" src="/partners/dp.png" alt="DP Innovation" loading="lazy" />
        <img class="partner_logo" src="/partners/atilim-arch.png" alt="ATILIM Architecture" loading="lazy" />
        <img class="partner_logo" src="/partners/terra.png" alt="Terra Vitalis" loading="lazy" />
      </div>
    </div>
  </section>

  <section id="contact" class="section alt">
    <div class="container">
      <h2>Contact</h2>

      <div class="contact_grid">
        <div class="contact_item">
          <div class="label">Email</div>
          <a href="mailto:info@atilim.ge">info@atilim.ge</a>
        </div>

        <div class="contact_item">
          <div class="label">Georgia</div>
          <a href="tel:+995595653300">+995 595 653 300</a>
        </div>

        <div class="contact_item">
          <div class="label">Türkiye (WhatsApp &amp; WeChat)</div>
          <a href="tel:+905303129763">+90 530 312 97 63</a>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer_inner">
      <span>© 2026 ATILIM LLC</span>
      <a href="https://atilim.ge" target="_blank" rel="noopener">atilim.ge</a>
    </div>
  </footer>
  `;
}

/* ====== Basılma hissi + tık sesi ====== */
let audioCtx: AudioContext | null = null;

function playClickSound() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const ctx = audioCtx;

    const o = ctx.createOscillator();
    const g = ctx.createGain();

    o.type = "square";
    o.frequency.setValueAtTime(520, ctx.currentTime);

    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);

    o.connect(g);
    g.connect(ctx.destination);

    o.start();
    o.stop(ctx.currentTime + 0.07);
  } catch {}
}

function press(el: HTMLElement) {
  el.classList.add("is-pressed");
  window.setTimeout(() => el.classList.remove("is-pressed"), 120);
}

document.querySelectorAll<HTMLElement>(".pressable").forEach((card) => {
  card.addEventListener("pointerdown", () => {
    playClickSound();
    press(card);
  });
});

document.querySelectorAll<HTMLElement>(".pressable_link").forEach((a) => {
  a.addEventListener("pointerdown", (e) => {
    playClickSound();
    const card = (e.currentTarget as HTMLElement).closest(".card") as HTMLElement | null;
    if (card) press(card);
  });
});