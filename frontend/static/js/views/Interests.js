import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super(); 
        this.setTitle("Interests"); 
    }

    async getHtml(){
        return `
            <h1>Interests</h1>
            <p>Few interests apart from programming: </p>
            <p>- Playing Soccer</p>
            <p>- Playing Video Games</p>
            <p>- Trying new foods</p>
        `;
    }
}