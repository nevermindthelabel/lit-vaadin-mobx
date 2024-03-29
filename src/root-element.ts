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
      place-items: center;
      padding: 1em 2em;
    }
    header-component {
      grid-column: 1 / -1;
      width: calc(100vw - 2em);
    }
    footer-component {
      grid-column: 1 / -1;
      width: calc(100vw - 2em);
    }
  `;

  @property({ type: Number })
  completedTodos = 0;
  @property({ type: Number })
  totalTodos = 0;
  render() {
    return html`<header-component
        .totalTodos=${this.totalTodos}
        .completedTodos=${this.completedTodos}
      ></header-component>
      <main>
        <todo-view @todo-added=${this.handleAddedTodos} @todos-updated=${this.handleUpdatedTodos}></todo-view>
      </main>
      <footer-component></footer-component> `;
  }

  handleUpdatedTodos(e: CustomEvent) {
    const { todos, completed } = e.detail;
    this.totalTodos = todos;
    this.completedTodos = completed;
  }

  handleAddedTodos(e: CustomEvent) {
    const { todos, completed } = e.detail;
    this.totalTodos = todos;
    this.completedTodos = completed;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'root-element': RootElement;
  }
}
