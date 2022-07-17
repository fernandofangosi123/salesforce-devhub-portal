import { LightningElement, wire } from 'lwc';
import currentUserId from '@salesforce/user/Id';
import getCurrentUserName from '@salesforce/apex/TilesController.getCurrentUserName';

export default class Selector extends LightningElement {
    connectedCallback() {
        console.log('INIT');
    }

    selectedProductId;
    userId = currentUserId;

    @wire(getCurrentUserName, { userId: '$userId' }) currentName;
    name = JSON.stringify(this.currentName);

    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }
}