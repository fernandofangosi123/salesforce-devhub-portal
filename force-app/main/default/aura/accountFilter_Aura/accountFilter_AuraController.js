({
	doInit : function(component, event, helper) {
		console.log('INIT FILTER');
	},
    
    handleSearchButton : function(component, event, helper) {
		console.log('Apertou o botão, enviar o evento para o pai-----'+component.get('v.searchText'));
        helper.sendEvent(component, event);
	}
})