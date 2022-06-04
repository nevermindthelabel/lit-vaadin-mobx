import { LitElement } from 'lit';
export declare class HeaderComponent extends LitElement {
    static styles: import("lit").CSSResult;
    completedTodos: number;
    totalTodos: number;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'header-component': HeaderComponent;
    }
}
