import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountRetrieverController.getAccounts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountBase extends LightningElement {
    searchName;
    accounts;
    hasAccounts;
    showSpinner;

    connectedCallback() {
        console.log('INIT BASE');
        this.hasAccounts = false;
    }

    handleSearchAccountEvent(evt){
        console.log('Evento Accounts recebido---- '+evt.detail);
        this.searchName = evt.detail;
        this.showSpinner = true;

        getAccounts({ reportedName: this.searchName })
            .then((result) => {
                console.log('Resultados OK-----> '+JSON.stringify(result)); 
                console.log('Resultados Tamanho-----> '+result.length); 

                this.showSpinner = false;
                
                if(result.length > 0){
                    this.accounts = result;
                    this.hasAccounts = true;

                    this.showToast('Sucesso', 'Conta(s) encontrada(s) com sucesso','success');
                }else{
                    this.accounts = undefined;
                    this.hasAccounts = false;
                    this.showToast('Erro', 'Nenhuma conta foi encontrada','error');
                }
            })
            .catch((error) => {
                this.showSpinner = false;
                this.error = error;
            });
    }

    showToast(title, message, type){
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant : type
        });
        this.dispatchEvent(event);
    }
}