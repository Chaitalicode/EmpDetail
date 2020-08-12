sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ED.EmpDetails.controller.page2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ED.EmpDetails.view.page2
		 */
		onInit: function () {
	      this.oRuter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		onPress:function(oEvent){
			debugger;
		   	var oItem = oEvent.getParameter("listItem").getBindingContextPath();
		
			 this.oRuter.navTo("Routepage3",{
		  	 	empName: oItem.split('/')[2]
		  	 });
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ED.EmpDetails.view.page2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ED.EmpDetails.view.page2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ED.EmpDetails.view.page2
		 */
		//	onExit: function() {
		//
		//	}

	});

});