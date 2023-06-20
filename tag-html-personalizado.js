class ListaNaoOrdenada extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>`;
        this.style.color = "red";
    }
}

customElements.define('lista-nao-ordenada', ListaNaoOrdenada);