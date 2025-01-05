import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-listener')
class MyListener extends LitElement {
  @property({ type: String }) name = '';

  private _handleLogin(event: CustomEvent) {
    this.name = event.detail.name;
  }

  render() {
    return html`
      <p @mylogin=${this._handleLogin}><slot></slot></p>
      <p>Entered Name: ${this.name}</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-listener': MyListener;
  }
}
