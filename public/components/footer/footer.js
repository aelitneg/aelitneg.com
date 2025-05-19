const template = document.createElement('template');
template.innerHTML = `
  <style>@import url('/styles/utilities.css')</style>
  <footer class="p-1 text-center">
    <div class="flex flex-row justify-center gap-1">
      <a href="https://github.com/aelitneg" aria-label="GitHub" class="no-underline">
        <ag-icon name="github" size="2rem" aria-label="GitHub"></ag-icon>
      </a>
      <a href="https://www.linkedin.com/in/aelitneg" aria-label="LinkedIn" class="no-underline">
        <ag-icon name="linkedin" size="2rem" aria-label="LinkedIn"></ag-icon>
      </a>
      <a href="https://bsky.app/profile/aelitneg.bsky.social" aria-label="Bluesky" class="no-underline">
        <ag-icon name="bluesky" size="2rem" aria-label="Bluesky"></ag-icon>
      </a>
    </div>
    <p>© <span id="year"></span> Andrew Gentile<p>
  </footer>
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.append(template.content.cloneNode(true));
    }
  }

  connectedCallback() {
    const year = this.shadowRoot.getElementById('year');
    year.textContent = new Date().getFullYear();
  }
}

export const registerFooterComponent = () =>
  customElements.define('ag-footer', FooterComponent);
