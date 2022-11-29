export class GlobalBackgroundItem extends HTMLElement {
    constructor () {
        super();        
    }
    connectedCallback() {  
        this.render();
    } 
    static get observedAttributes() {
        return []; 
    } 
    attributeChangedCallback(attr, prev, next) {
        if(prev !== next) {
          this[`${attr}`] = next;
          this.render();
       }
    }
    render() {
        this.innerHTML = `
        <style>
        global-background-item {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;            
            bottom: 0;
            background: linear-gradient(180deg, var(--intro-section), var(--about-section), var(--faq-section), var(--custom-section), var(--contact-section));
            z-index: -10;
        }
        </style> 
        `;                 
    }
}