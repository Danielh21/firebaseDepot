angular.module('app')
.controller('formController', formController);


function formController(){
    var self = this;

    self.newDepotObject = {
        Beholdning: "",
        Navn: "",
        Note: ""
    };
}

