import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('footer-component')
export class FooterComponent extends LitElement {
  static styles = css``;

  @property()
  render() {
    return html`<footer>
      &copy;
      <p>people who do stuff</p>
    </footer>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'footer-component': FooterComponent;
  }
}
