import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="home">
    <div class="ambient ambient--one"></div>
    <div class="ambient ambient--two"></div>

    <section class="hero" aria-label="Flow home hero section">
      <div class="chip">
        <span class="chip-dot"></span>
        <span class="chip-text">Dynamic Motion</span>
      </div>

      <h1>Flow</h1>
      <p>
        fuck you
      </p>

      <div class="island" role="img" aria-label="Animated Dynamic Island inspired component">
        <span class="pulse pulse-left"></span>
        <span class="core"></span>
        <span class="pulse pulse-right"></span>
      </div>
    </section>
  </main>
`
