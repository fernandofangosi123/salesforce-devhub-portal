({
	doInit : function(component, event, helper) {
		console.log('INIT BASE');
	},
    
    cmpEventHandler : function(component, event, helper) {
        console.log('Event received, call server');
        helper.callServer(component, event); 
	}
})