({
	callServer : function(component, event) {
		var accountName = event.getParam("accountName");
        
        // Create the action
        let action = component.get("c.getAccounts");
        action.setParams({
            "reportedName": accountName
        });
        // Add callback behavior for when response is received
        action.setCallback(this, function(response){
            let state = response.getState();
            let result = response.getReturnValue();
            component.set('v.showSpinner',false);
            
            if(state === "SUCCESS"){
                
                if(result.length > 0){
                    component.set('v.accounts',result);
                    component.set('v.hasAccounts',true);
                    
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Sucesso",
                        "message": "Conta(s) encontrada(s) com sucesso",
                        "type": "success"
                    });
                }else{
                    component.set('v.accounts',undefined);
                    component.set('v.hasAccounts',false);
                    
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Erro",
                        "message": "Nenhuma conta foi encontrada",
                        "type": "error"
                    });
                }
                toastEvent.fire();
            }else{
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
	}
})