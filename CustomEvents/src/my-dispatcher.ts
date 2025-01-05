import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('my-dispatcher')
class MyDispatcher extends LitElement {
  @query('input') _input!: HTMLInputElement;

  private _dispatchAction() {
    const name = this._input.value.trim();
    if (name) {
      const options = {
        detail: { name },
        bubbles: true,
        composed: true,
      };
      this.dispatchEvent(new CustomEvent('mylogin', options));
    }
  }

  render() {
    return html`
      <p>Enter Name: <input /></p>
      <button @click=${this._dispatchAction}>Click Me</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-dispatcher': MyDispatcher;
  }
}
