class ListaNaoOrdenadaSimples extends HTMLElement {
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

customElements.define('lista-nao-ordenada-simples', ListaNaoOrdenadaSimples);


class ListaNaoOrdenadaComplexa extends HTMLElement {
    static get observedAttributes() {
        return [this._nomeDoAtributo];
    }

    constructor() {
        super();
        this._variavel = [];
        this._nomeDoAtributo = 'meu-atributo-personalizado';
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === this._nomeDoAtributo) {
            this._variavel = JSON.parse(newValue);
            this.renderList();
        }
    }

    connectedCallback() {
        this.style.color = "red";
        const variavelAttribute = this.getAttribute(this._nomeDoAtributo);
        if (variavelAttribute) {
            this._variavel = JSON.parse(variavelAttribute);
        } else {
            this._variavel = [1, 2, 3];
        }
        this.renderList();
    }

    renderList() {
        const ul = document.createElement('ul');
        this._variavel.forEach(value => {
            const li = document.createElement('li');
            li.textContent = value;
            ul.appendChild(li);
        });
        this.innerHTML = '';
        this.appendChild(ul);
    }
}

customElements.define('lista-nao-ordenada-complexa', ListaNaoOrdenadaComplexa);

