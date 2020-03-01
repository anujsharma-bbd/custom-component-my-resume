import { LitElement, html } from '@polymer/lit-element';
class MyResume extends LitElement {
    static get properties() {
        return {
            url: {
                type: String,
                hasChanged(newVal, oldVal) {
                    return newVal !== oldVal;
                }
            },
            data: { type: Object },
            json: { type: Object },
            isLoading: { type: Boolean },
            isError: { type: Boolean },
        };
    }
    constructor() {
        super();
        this.isLoading = false;
        this.isError = false;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name === 'url' && newValue && newValue !== oldValue) {
            this.loadResume(newValue);
        }
    }
    loadResume(url) {
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
                        <hr/>
                        <h3 class='field-name'>${propName}</h3>
                        <hr/>
                        <div class='list-items'>
                        ${
                    data.map(p => {
                        return this.getFullCollection(p)
                    })
                    }
                        </div>
                        <br/><br/>
                    </div>`;
            } else {
                return html`<div class='object'>
                    <hr/>
                    <h3 class='field-name'>${propName}</h3>
                    <hr/>
                    <div class='object-items'>
                        ${
                    this.getFullCollection(data)
                    }
                    </div>
                        <br/><br/>
                        </div>
                </div>`;
            }
        }

    }
    render() {
        console.log(this.url);
        return html`
            <style>
            .resume-container{
                padding: 10px;
                border: 1px solid #CCC;
                BORDER-RADIUS: 6PX;
                border-top: none;
            }
             .field-name{
                 font-weight:bold;
                 text-transform: capitalize;
                 color: gray;
             }
             h3.field-name{
                text-align: left;
                font-size: 24px;
                padding-left: 30px;
                color: navy;
             }
             hr{
                border: 0;
                width  :100%;
                height: 1px;
                background: #333;
                background: -webkit-gradient(linear, left top, right top, color-stop(0%,hsla(0,0%,0%,0)), color-stop(50%,hsla(0,0%,0%,.75)), color-stop(100%,hsla(0,0%,0%,0)));
                background: -webkit-linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,.75) 50%, hsla(0,0%,0%,0) 100%);
                background:    -moz-linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,.75) 50%, hsla(0,0%,0%,0) 100%);
                background:     -ms-linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,.75) 50%, hsla(0,0%,0%,0) 100%);
                background:      -o-linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,.75) 50%, hsla(0,0%,0%,0) 100%);
                background:         linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,0%,.75) 50%, hsla(0,0%,0%,0) 100%);
             }
             .field-value{
                 font-style:italic;
                 font-size:70%;
                 color: gray;
             }
             .list-items{
                padding: 10px 0px 0px 50px;
                display: inline-block;
                width: 100%;
                margin-bottom: 10px;
             }
             .object-items{
                 padding-left:50px;
             }
             .item{
                 margin-bottom:10px;
                 float: left;
                width: 50%;
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