(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const u={yougain:{title:"YouGain — Distributor Application",subtitle:"ATILIM LLC is seeking distribution partners for YouGain safety gloves.",who:"We are looking for country distributors in Europe and regional distributors in Africa.",geoNote:"First we separate as <strong>Europe</strong> and <strong>Africa</strong> and call it <strong>(EMEA)</strong>. We continue as <strong>EMEA</strong> below.",targetsHtml:`
      <ul>
        <li><strong>EMEA (Europe & Africa)</strong> only.</li>
        <li>Africa regions: <strong>North / Central / South Africa</strong>.</li>
        <li><strong>Other countries are not evaluated at this stage.</strong></li>
      </ul>
    `,roleLabel:"Become a Distributor (YouGain)"},industrial:{title:"Industrial Power Transmission — Distributor Application",subtitle:"Industrial belts, bearings, pulleys, taper bushes and couplings.",who:"We are looking for distributors or same-sector firms capable of stocking and supplying factories.",geoNote:"<strong>Target countries are limited</strong>. Other countries are not evaluated at this stage.",targetsHtml:`
      <ul>
        <li><strong>Target countries:</strong> Iraq, Syria, Azerbaijan, Georgia, Nigeria</li>
        <li>Must be able to sell in required quantities or stock products.</li>
        <li>Prefer: existing industrial customer network (factories).</li>
      </ul>
    `,roleLabel:"Become a Distributor (Industrial)"},promotional:{title:"Promotional Products — Reseller / Partner Application",subtitle:"Wholesale t-shirts and natural cotton tote bags for promotions and retail.",who:"Worldwide open. We welcome partners that can sell to businesses and organizations.",geoNote:"This division is <strong>open worldwide</strong>.",targetsHtml:`
      <ul>
        <li>Supermarkets, cafes, retail chains (purchasing teams)</li>
        <li>Factories seeking uniform apparel for workers</li>
        <li>Organizations ordering for fairs / promotional giveaways</li>
        <li>Partners capable of serving these segments</li>
      </ul>
    `,roleLabel:"Become a Reseller (Promotional)"},solar:{title:"Solar Energy — Partner / Representative Application",subtitle:"Project development, engineering coordination and partner delivery.",who:"No distributors here — project-based engineering firms can act as representatives.",geoNote:"<strong>Target countries are limited</strong>. Other countries are not evaluated at this stage.",targetsHtml:`
      <ul>
        <li><strong>Target countries:</strong> Turkey, Azerbaijan, Georgia, Bulgaria, Greece, Egypt</li>
        <li>Engineering / EPC capability preferred.</li>
        <li>Project-based cooperation (representation model).</li>
      </ul>
    `,roleLabel:"Become a Partner (Solar)"}};function g(){const a=(new URLSearchParams(window.location.search).get("division")||"yougain").toLowerCase();return a==="industrial"||a==="promotional"||a==="solar"||a==="yougain"?a:"yougain"}function v(e){return e.replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}function m(e){const a=g(),t=u[a];e.innerHTML=`
    <div class="apply_page">
      <div class="container">
        <div class="apply_header">
          <a class="apply_back" href="/#divisions">← Back</a>
          <h1 class="apply_title">${t.title}</h1>
          <p class="apply_subtitle">${t.subtitle}</p>
        </div>

        <div class="apply_grid">
          <div class="apply_card">
            <h2>We are looking for</h2>
            <p>${t.who}</p>
            <div class="apply_note">${t.geoNote}</div>
            <h3>Targets</h3>
            ${t.targetsHtml}

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
              <input type="hidden" name="division" value="${v(a)}" />

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

              <button class="apply_submit" type="submit">${t.roleLabel}</button>
              <div class="apply_status" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;const s=e.querySelector("form"),i=e.querySelector(".apply_status");s.addEventListener("submit",async r=>{r.preventDefault(),i.textContent="Submitting…";try{const l=new FormData(s),p=new URLSearchParams(l).toString();if(!(await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:p})).ok)throw new Error("Network error");i.textContent="Thank you! Your application has been received.",s.reset()}catch{i.textContent="Sorry — submission failed. Please try again or email info@atilim.ge."}})}const n=document.querySelector("#app");if(!n)throw new Error("#app bulunamadı");location.pathname==="/apply"?m(n):n.innerHTML=`
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
  `;let o=null;function c(){try{o||(o=new(window.AudioContext||window.webkitAudioContext));const e=o,a=e.createOscillator(),t=e.createGain();a.type="square",a.frequency.setValueAtTime(520,e.currentTime),t.gain.setValueAtTime(1e-4,e.currentTime),t.gain.exponentialRampToValueAtTime(.12,e.currentTime+.005),t.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.06),a.connect(t),t.connect(e.destination),a.start(),a.stop(e.currentTime+.07)}catch{}}function d(e){e.classList.add("is-pressed"),window.setTimeout(()=>e.classList.remove("is-pressed"),120)}document.querySelectorAll(".pressable").forEach(e=>{e.addEventListener("pointerdown",()=>{c(),d(e)})});document.querySelectorAll(".pressable_link").forEach(e=>{e.addEventListener("pointerdown",a=>{c();const t=a.currentTarget.closest(".card");t&&d(t)})});
