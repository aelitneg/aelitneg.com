const template = document.createElement('template');
template.innerHTML = `
  <style>
      @import url('/styles/utilities.css');
    .icon svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  </style>
  <span class="inline-flex items-center flex-center"></span>
`;

class IconComponent extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.append(template.content.cloneNode(true));
    }
  }

  static get observedAttributes() {
    return ['name', 'size', 'color', 'aria-label'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'name') {
      this.update();
    } else {
      this.updateAttributes();
    }
  }

  async update() {
    const icon = this.shadowRoot.querySelector('span');
    const name = this.getAttribute('name');
    if (!name) return;

    try {
      const response = await fetch(`/icons/${name}.svg`);
      icon.innerHTML = await response.text();
      this.updateAttributes();
    } catch (error) {
      console.error(`Failed to load icon ${name}`, error);
    }
  }

  updateAttributes() {
    const svg = this.shadowRoot.querySelector('svg');
    if (!svg) return;

    if (this.hasAttribute('aria-label')) {
      svg.setAttribute('aria-label', this.getAttribute('aria-label'));
    }

    if (this.hasAttribute('size')) {
      if (!svg.hasAttribute('viewBox')) {
        const width = svg.getAttribute('width') || '24';
        const height = svg.getAttribute('height') || '24';
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      }

      svg.removeAttribute('width');
      svg.removeAttribute('height');

      svg.style.width = this.getAttribute('size');
      svg.style.height = this.getAttribute('size');
    }

    if (this.hasAttribute('color')) {
      svg.style.fill = this.getAttribute('color');
    }
  }
}

export const registerIconComponent = () =>
  customElements.define('ag-icon', IconComponent);
