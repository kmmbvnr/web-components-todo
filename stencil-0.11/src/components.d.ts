/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface MyTodo {

    }
  }

  interface HTMLMyTodoElement extends StencilComponents.MyTodo, HTMLStencilElement {}

  var HTMLMyTodoElement: {
    prototype: HTMLMyTodoElement;
    new (): HTMLMyTodoElement;
  };
  interface HTMLElementTagNameMap {
    'my-todo': HTMLMyTodoElement;
  }
  interface ElementTagNameMap {
    'my-todo': HTMLMyTodoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-todo': JSXElements.MyTodoAttributes;
    }
  }
  namespace JSXElements {
    export interface MyTodoAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TodoInput {

    }
  }

  interface HTMLTodoInputElement extends StencilComponents.TodoInput, HTMLStencilElement {}

  var HTMLTodoInputElement: {
    prototype: HTMLTodoInputElement;
    new (): HTMLTodoInputElement;
  };
  interface HTMLElementTagNameMap {
    'todo-input': HTMLTodoInputElement;
  }
  interface ElementTagNameMap {
    'todo-input': HTMLTodoInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'todo-input': JSXElements.TodoInputAttributes;
    }
  }
  namespace JSXElements {
    export interface TodoInputAttributes extends HTMLAttributes {
      'onOnTodoInputSubmit'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TodoItem {
      'checked': boolean;
      'index': number;
      'text': string;
    }
  }

  interface HTMLTodoItemElement extends StencilComponents.TodoItem, HTMLStencilElement {}

  var HTMLTodoItemElement: {
    prototype: HTMLTodoItemElement;
    new (): HTMLTodoItemElement;
  };
  interface HTMLElementTagNameMap {
    'todo-item': HTMLTodoItemElement;
  }
  interface ElementTagNameMap {
    'todo-item': HTMLTodoItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'todo-item': JSXElements.TodoItemAttributes;
    }
  }
  namespace JSXElements {
    export interface TodoItemAttributes extends HTMLAttributes {
      'checked'?: boolean;
      'index'?: number;
      'onOnTodoItemChecked'?: (event: CustomEvent) => void;
      'onOnTodoItemRemove'?: (event: CustomEvent) => void;
      'text'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }