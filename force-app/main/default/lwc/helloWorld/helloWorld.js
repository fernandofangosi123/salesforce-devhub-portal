import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'World';

    //HANDLER HELLO WORLD INPUT
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}