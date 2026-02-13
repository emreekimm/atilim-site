// src/apply.ts

type Division = "yougain" | "industrial" | "promotional" | "solar";

const DIVISION_COPY: Record<Division, {
  title: string;
  subtitle: string;
  who: string;
  geoNote: string;
  targetsHtml: string;
  roleLabel: string;
}> = {
  yougain: {
    title: "YouGain — Distributor Application",
    subtitle: "ATILIM LLC is seeking distribution partners for YouGain safety gloves.",
    who: "We are looking for country distributors in Europe and regional distributors in Africa.",
    geoNote: `First we separate as <strong>Europe</strong> and <strong>Africa</strong> and call it <strong>(EMEA)</strong>. We continue as <strong>EMEA</strong> below.`,
    targetsHtml: `
      <ul>
        <li><strong>EMEA (Europe & Africa)</strong> only.</li>
        <li>Africa regions: <strong>North / Central / South Africa</strong>.</li>
        <li><strong>Other countries are not evaluated at this stage.</strong></li>
      </ul>
    `,
    roleLabel: "Become a Distributor (YouGain)"
  },
  industrial: {
    title: "Industrial Power Transmission — Distributor Application",
    subtitle: "Industrial belts, bearings, pulleys, taper bushes and couplings.",
    who: "We are looking for distributors or same-sector firms capable of stocking and supplying factories.",
    geoNote: `<strong>Target countries are limited</strong>. Other countries are not evaluated at this stage.`,
    targetsHtml: `
      <ul>
        <li><strong>Target countries:</strong> Iraq, Syria, Azerbaijan, Georgia, Nigeria</li>
        <li>Must be able to sell in required quantities or stock products.</li>
        <li>Prefer: existing industrial customer network (factories).</li>
      </ul>
    `,
    roleLabel: "Become a Distributor (Industrial)"
  },
  promotional: {
    title: "Promotional Products — Reseller / Partner Application",
    subtitle: "Wholesale t-shirts and natural cotton tote bags for promotions and retail.",
    who: "Worldwide open. We welcome partners that can sell to businesses and organizations.",
    geoNote: `This division is <strong>open worldwide</strong>.`,
    targetsHtml: `
      <ul>
        <li>Supermarkets, cafes, retail chains (purchasing teams)</li>
        <li>Factories seeking uniform apparel for workers</li>
        <li>Organizations ordering for fairs / promotional giveaways</li>
        <li>Partners capable of serving these segments</li>
      </ul>
    `,
    roleLabel: "Become a Reseller (Promotional)"
  },
  solar: {
    title: "Solar Energy — Partner / Representative Application",
    subtitle: "Project development, engineering coordination and partner delivery.",
    who: "No distributors here — project-based engineering firms can act as representatives.",
    geoNote: `<strong>Target countries are limited</strong>. Other countries are not evaluated at this stage.`,
    targetsHtml: `
      <ul>
        <li><strong>Target countries:</strong> Turkey, Azerbaijan, Georgia, Bulgaria, Greece, Egypt</li>
        <li>Engineering / EPC capability preferred.</li>
        <li>Project-based cooperation (representation model).</li>
      </ul>
    `,
    roleLabel: "Become a Partner (Solar)"
  }
};

function getDivisionFromQuery(): Division {
  const p = new URLSearchParams(window.location.search);
  const raw = (p.get("division") || "yougain").toLowerCase();
  if (raw === "industrial" || raw === "promotional" || raw === "solar" || raw === "yougain") return raw;
  return "yougain";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]!));
}

export function mountApply(app: HTMLElement) {
  const division = getDivisionFromQuery();
  const copy = DIVISION_COPY[division];

  app.innerHTML = `
    <div class="apply_page">
      <div class="container">
        <div class="apply_header">
          <a class="apply_back" href="/#divisions">← Back</a>
          <h1 class="apply_title">${copy.title}</h1>
          <p class="apply_subtitle">${copy.subtitle}</p>
        </div>

        <div class="apply_grid">
          <div class="apply_card">
            <h2>We are looking for</h2>
            <p>${copy.who}</p>
            <div class="apply_note">${copy.geoNote}</div>
            <h3>Targets</h3>
            ${copy.targetsHtml}

            <div class="apply_maprow">
              <div class="apply_mapbox">
                <div class="apply_maplabel">Europe</div>
                <div class="apply_mapfake">Map placeholder</div>
              </div>
              <div class="apply_mapbox">
                <div class="apply_maplabel">Africa</div>
                <div class="apply_mapfake">Map placeholder</div>
              </div>
            </div>

            <p class="apply_small">
              Contact: <a href="mailto:info@atilim.ge">info@atilim.ge</a>
            </p>
          </div>

          <div class="apply_card">
            <h2>Application Form</h2>

            <form class="apply_form" name="distributor-application" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="distributor-application" />
              <input type="hidden" name="division" value="${escapeHtml(division)}" />

              <p class="hidden">
                <label>Don’t fill this out: <input name="bot-field" /></label>
              </p>

              <div class="field">
                <label>Company name</label>
                <input name="company" required placeholder="Company legal name" />
              </div>

              <div class="field_row">
                <div class="field">
                  <label>Country</label>
                  <input name="country" required placeholder="Country" />
                </div>
                <div class="field">
                  <label>Region (for Africa)</label>
                  <select name="africa_region">
                    <option value="">—</option>
                    <option>North Africa</option>
                    <option>Central Africa</option>
                    <option>South Africa</option>
                  </select>
                </div>
              </div>

              <div class="field_row">
                <div class="field">
                  <label>Contact person</label>
                  <input name="contact_person" required placeholder="Full name" />
                </div>
                <div class="field">
                  <label>Role / Title</label>
                  <input name="role" placeholder="Sales Director, Owner, Purchasing..." />
                </div>
              </div>

              <div class="field_row">
                <div class="field">
                  <label>Email</label>
                  <input name="email" type="email" required placeholder="name@company.com" />
                </div>
                <div class="field">
                  <label>Phone (WhatsApp)</label>
                  <input name="phone" placeholder="+90 ..." />
                </div>
              </div>

              <div class="field">
                <label>Website</label>
                <input name="website" placeholder="https://..." />
              </div>

              <div class="field_row">
                <div class="field">
                  <label>Years in business</label>
                  <input name="years" placeholder="e.g., 10" />
                </div>
                <div class="field">
                  <label>Team size</label>
                  <input name="team_size" placeholder="e.g., 25" />
                </div>
              </div>

              <div class="field">
                <label>Current portfolio / capabilities</label>
                <textarea name="portfolio" rows="4" placeholder="Which products do you sell / which customers do you serve?"></textarea>
              </div>

              <div class="field">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Tell us what you can do (coverage, stock, customers, engineering, etc.)"></textarea>
              </div>

              <button class="apply_submit" type="submit">${copy.roleLabel}</button>
              <div class="apply_status" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  // Netlify AJAX submit (sayfa yenilenmeden gönderir)
  const form = app.querySelector("form") as HTMLFormElement;
  const status = app.querySelector(".apply_status") as HTMLDivElement;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Submitting…";

    try {
      const formData = new FormData(form);
      const body = new URLSearchParams(formData as any).toString();

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
      });

      if (!res.ok) throw new Error("Network error");

      status.textContent = "Thank you! Your application has been received.";
      form.reset();
    } catch {
      status.textContent = "Sorry — submission failed. Please try again or email info@atilim.ge.";
    }
  });
}