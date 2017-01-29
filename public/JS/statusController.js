angular.module('app.status')
    .controller('statusControl', statusControl);

function statusControl($firebaseArray) {

    var ref = firebase.database().ref().child('Depot');
    var self = this;

    //Bindable Variables
    self.hej = "Welcome From Controller";
    self.depotthings = $firebaseArray(ref);
    self.searchText = "";
    self.newDepotObject = {
        Beholdning: "",
        Navn: "",
        Note: ""
    };


    //Function Declarations
    self.safeNewData = safeNewData;

    // TO Do When Entering:



    //Functions

    function safeNewData() {
        self.newDepotObject.Beholdning = parseInt(self.newDepotObject.Beholdning);
        self.depotthings.$add(self.newDepotObject).then(function (ref) {
            self.newDepotObject = {};
            self.showForm = false;
        });
    }

}
