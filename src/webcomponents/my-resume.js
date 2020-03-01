import { LitElement, html } from '@polymer/lit-element';
class MyResume extends LitElement {
    static get properties() {
        return {
            url: { type: String },
            data: { type: Object },
            json: { type: Object },
            isLoading: { type: Boolean },
            isError: { type: Boolean },
        };
    }
    constructor() {
        super();
        this.url = '';
        this.isLoading = false;
        this.isError = false;
        setTimeout(() => {
            this.url = this.url + '/';
        }, 1000);
    }
    updated(changedProperties) {
        const url = changedProperties.get('url');
        if (url) {
            this.isLoading = true;
            this.isError = false;
            fetch(url)
                .then(async (s) => {
                    this.json = await s.json();
                })
                .catch(err => {
                    this.isError = true;
                })
                .finally(() => {
                    this.isLoading = false;
                });
        }
    }
    get DataTemplate() {
        if (this.json) {
            return html`
                <div class='resume-container'>
                 ${ this.getFullCollection(this.json)}
                </div>
        `;
        } else return html``;
    }
    getFullCollection(data) {
        return Object.keys(data).map((propName, index) => {
            return this.getHtmlContent(propName, data[propName]);
        });
    }
    getHtmlContent(propName, data) {
        const propType = typeof (data);
        if (propType === 'string')
            return html`
                    <div class='item'>
                            <div><label class='field-name'>${propName}</label></div>
                            <div  class='field-value'>${data}</div>
                    </div>
                `;
        else if (propType === 'object') {
            if (Array.isArray(data)) {
                return html`<div class='list'>
                        <h4 class='field-name'>${propName}</h4>
                        <div class='list-items'>${this.getFullCollection(data)}</div>
                    </div>`;
            } else {
                return html`<div class='object'>
                    <h4 class='field-name'>${propName}</h4>
                    <div class='object-items'>${this.getFullCollection(data)}</div>
                </div>`;
            }
        }

    }
    render() {
        return html`
            <style>
             .field-name{
                 font-weight:bold;
                 text-transform: capitalize;
             }
             .field-value{
                 font-style:italic;
                 font-size:90%;
             }
            </style>
            <div>${ this.isLoading ?
                html`<span>Loading...</span>` :
                this.isError ?
                    html`<span>some error occured, please try again</span>`
                    : (this.DataTemplate)}</div>
        `;
    }
}
customElements.define('my-resume', MyResume);