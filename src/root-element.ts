import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './views/todo-view';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('root-element')
export class RootElement extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
    }
  `;

  @property()
  render() {
    return html`<header>header</header>
      <main><todo-view></todo-view></main>
      <footer>footer</footer> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'root-element': RootElement;
  }
}
