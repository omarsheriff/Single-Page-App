import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super(); 
        this.setTitle("About"); 
    }

    async getHtml(){
        return `
            <h1>A Little About Me</h1>
            <p>
            My name is Omar Sherif, I am currently studying Mechanical Engineering in the University of Ottawa. Although I enjoy studying
            Mechanical Engineering, I also have a passion for programming.
            My goal is to learn Mechanical Engineering from university, since it's harder to learn independently, while also learning software
            during my free time. The reason I created this single page application is purely for practice, since I have been learning Javascript
            recently.

            </p>
        `;
    }
}