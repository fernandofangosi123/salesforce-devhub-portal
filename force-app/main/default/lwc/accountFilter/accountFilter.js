import { LightningElement } from 'lwc';

export default class AccountFilter extends LightningElement {
    searchText;

    connectedCallback() {
        console.log('INIT FILTER');
    }

    setAccountName(evt){
        this.searchText = evt.target.value;
    }

    handleSearchButton(){
        console.log('Apertou o botão, enviar o evento para o pai-----'+this.searchText);

        const event = new CustomEvent('searchaccount', {
            // detail contains only primitives
            detail: this.searchText
        });
        // Fire the event from c-tile
        this.dispatchEvent(event);

        //Enable Spinner
        sendSpinnerEvent(true);
    }
}