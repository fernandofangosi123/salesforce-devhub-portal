({
	doInit : function(component, event, helper) {
        console.log('INIT TABLE');
		var columns = [ 
            { label: 'Name', fieldName: 'Name'},
            { label: 'Industry', fieldName: 'Industry' }
        ];
        component.set('v.columns',columns);
	}
})