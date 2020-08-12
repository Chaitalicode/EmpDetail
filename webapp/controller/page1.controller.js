sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("ED.EmpDetails.controller.page1", {
		onInit: function () {

		},
		onClick:function(){
		    debugger;
		    var oInput1 = this.getView().byId("input0").getValue();
		    var oInput2 = this.getView().byId("input2").getValue();
		    
		    
		    if(oInput1 === "admin" && oInput2 === "admin"){
		    	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    	oRouter.navTo("Routepage2");
		    	
		    	
		    
		    }else if(oInput1 === "" && oInput2 === ""){
		    	
		        	MessageToast.show(" Enter admin name");
		    
		    }
		}
	});
});