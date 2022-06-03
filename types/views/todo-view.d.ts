import { LitElement } from 'lit';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
interface Todo {
    task: string;
    completed: boolean;
}
export declare class TodoView extends LitElement {
    static styles: import("lit").CSSResult;
    todos: Todo[];
    filter: string;
    task: string;
    render(): import("lit-html").TemplateResult<1>;
    filterChanged(e: CustomEvent): void;
    applyFilter(todos: Todo[]): Todo[];
    shortcutEvent(e: KeyboardEvent): void;
    updated(): void;
    updateTodo(aTodo: Todo): void;
    updateTask(e: InputEvent): void;
    addTodo(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'todo-view': TodoView;
    }
}
export {};
