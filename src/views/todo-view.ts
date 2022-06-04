import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';

const filters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

interface Todo {
  task: string;
  completed: boolean;
}

@customElement('todo-view')
export class TodoView extends LitElement {
  static styles = css``;

  @property({ type: Array })
  todos: Todo[] = [];

  @property({ type: String })
  filter = filters.SHOW_ALL;

  @property({ type: String })
  task = '';

  render() {
    return html`
      <div class="layout">
        <vaadin-text-field
          placeholder="task"
          value=${this.task}
          @change=${this.updateTask}
          @keyup=${this.shortcutEvent}
        ></vaadin-text-field>
        <vaadin-button theme="primary" @click=${this.addTodo}>Add a Todo</vaadin-button>
      </div>

      <div class="todos-list">
        ${this.applyFilter(this.todos).map(
          todo => html`<div class="item">
            <vaadin-checkbox ?checked=${todo.completed} @change=${() => this.updateTodo(todo)}
              >${todo.task}</vaadin-checkbox
            >
          </div>`
        )}
      </div>
      <vaadin-radio-group .value=${this.filter} @value-changed=${this.filterChanged}>
        ${Object.values(filters).map(f => html`<vaadin-radio-button .value=${f}>${f}</vaadin-radio-button>`)}
      </vaadin-radio-group>
      <div class="clear">
        <vaadin-button @click=${this.clearCompletedTodos}> Clear Completed Todos </vaadin-button>
      </div>
    `;
  }

  clearCompletedTodos() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  filterChanged(e: CustomEvent) {
    this.filter = e.detail.value;
  }

  applyFilter(todos: Todo[]) {
    switch (this.filter) {
      case filters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
      case filters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

  shortcutEvent(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  }

  updated() {
    console.log(this.todos);
  }

  updateTodo(aTodo: Todo) {
    this.todos = this.todos.map(todo => (aTodo === todo ? { task: todo.task, completed: !todo.completed } : todo));
  }

  updateTask(e: InputEvent) {
    this.task = (e.target as HTMLInputElement).value;
  }

  addTodo() {
    if (this.task) {
      this.todos = [...this.todos, { task: this.task, completed: false }];
      this.task = '';
      this.dispatchEvent(
        new CustomEvent('todo-added', {
          composed: true,
          bubbles: true,
          detail: { todos: this.todos.length, completed: this.todos.filter(todo => todo.completed).length }
        })
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-view': TodoView;
  }
}
