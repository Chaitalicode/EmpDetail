/*global QUnit*/

sap.ui.define([
	"ED/EmpDetails/controller/page1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("page1 Controller");

	QUnit.test("I should test the page1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});