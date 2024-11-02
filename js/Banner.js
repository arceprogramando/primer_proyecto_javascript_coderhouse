class BannerHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const classes = this.getAttribute('class') || '';

    this.innerHTML = `
      <div class="${classes}">
        <p>Venta Por Caja Exclusivamente</p>
      </div>
    `;
  }
}

window.customElements.define('banner-header', BannerHeader);
