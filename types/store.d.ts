interface Todo {
    task: string;
    completed: boolean;
}
declare class Store {
    todos: Todo[];
    constructor();
}
export declare const store: Store;
export {};
