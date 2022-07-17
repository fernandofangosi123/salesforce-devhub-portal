({
	sendEvent : function(component, event) {
		var cmpEvent = component.getEvent("cmpEvent");
        cmpEvent.setParams({
            "accountName" : component.get('v.searchText')
        });
        cmpEvent.fire();
        
        component.set('v.showSpinner',true);
	}
})