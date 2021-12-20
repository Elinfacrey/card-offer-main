import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CardOfferMain-styles.js';

import "@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js";
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<card-offer-main></card-offer-main>
```

##styling-doc

@customElement card-offer-main
*/
export class CardOfferMain extends LitElement {
  static get is() {
    return 'card-offer-main';
  }

  // Declare properties
  static get properties() {
    return {
      items:{type:Array},
      nombre:{type:String},
      imagen:{type:String},
      cantidad:{type:Number}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.items = [];
    this.nombre = "";
    this.imagen = "";
    this.cantidad ;
  }






  
  static get styles() {
    return [
      styles,
      getComponentSharedStyles('card-offer-main-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
     <div class="card-offer-main">
       <div class="row">
           ${this.items.map((i) => html`
       <bbva-web-card-product  image="${i.imagen}"    preheading="Nuevo" heading="${i.nombre}" subheading="${i.cantidad}"    button-text="Comprar" link-text="Envìo gratis">
 
       </bbva-web-card-product>
       `)}
       </div>
      

     </div>
    `;
  }
}
