sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("com.managegoods.controller.Main", {
            onInit: function () {

            },

            // onLoginPress: function () {
            //     var oView = this.getView();
            //     var oUsernameInput = oView.byId("usernameInput");
            //     var oPasswordInput = oView.byId("passwordInput");
            //     var sUsername = oUsernameInput.getValue();
            //     var sPassword = oPasswordInput.getValue();

            //     // Add your authentication logic here (e.g., sending a request to a server).
            //     // For demonstration purposes, let's assume the login is successful if
            //     // the username and password are both "admin".

            //     if (sUsername === "admin" && sPassword === "admin") {
            //         MessageToast.show("Login successful!");
            //         this.getOwnerComponent().getRouter().navTo("main");
            //         // Redirect to the home page or perform other actions upon successful login.
            //     } else {
            //         MessageToast.show("Invalid credentials. Please try again.");
            //     }
            // }
        });
    });

