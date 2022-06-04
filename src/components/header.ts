import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('header-component')
export class HeaderComponent extends LitElement {
  static styles = css``;

  @property({ type: Number })
  completedTodos = 0;
  @property({ type: Number })
  totalTodos = 0;
  render() {
    return html`
      <header>
        <h1>A beautiful todo app</h1>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'header-component': HeaderComponent;
  }
}
