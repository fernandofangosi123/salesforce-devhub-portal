import { LightningElement, api } from 'lwc';

export default class AccountTable extends LightningElement {
    @api accounts;

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Industry', fieldName: 'Industry' }
    ];
    
    connectedCallback() {
        console.log('INIT TABLE');
        console.log('accounts----> '+JSON.stringify(this.accounts));
    }
}