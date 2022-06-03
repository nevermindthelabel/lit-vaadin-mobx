import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './views/todo-view';
import './components/header';
import './components/footer';

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
    return html`<header-component></header-component>
      <main><todo-view></todo-view></main>
      <footer-component></footer-component> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'root-element': RootElement;
  }
}
