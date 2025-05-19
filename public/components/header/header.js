const template = document.createElement('template');
template.innerHTML = `
  <style>@import url('/styles/utilities.css')</style>
  <header class="p-1">
    <h1 class="font-lg m-0">andrew gentile</h1>
    <p class="m-0">@aelitneg</p>
  </header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.append(template.content.cloneNode(true));
    }
  }
}

export const registerHeaderComponent = () =>
  customElements.define('ag-header', HeaderComponent);
