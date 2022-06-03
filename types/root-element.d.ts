import { LitElement } from 'lit';
import './views/todo-view';
import './components/header';
import './components/footer';
export declare class RootElement extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'root-element': RootElement;
    }
}
