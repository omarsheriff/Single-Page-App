import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super(); 
        this.setTitle("Skills"); 
    }

    async getHtml(){
        return `
            <h1>Skills</h1>
            <p>
            Programming:
            </p>

            <p>
            - Python
            <p>
            - JavaScript
            <p>
            - C
            <p>
            - React
            <p>
            - Java
            </p>    
        `;
    }
}