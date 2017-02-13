angular.module('app.status')
    .directive("statusDir",statusDir );


function statusDir() {
    var directive = {
        restrict: "AE",
        templateUrl: 'statusTemplate.html',
        scope: {
            childobj: '@'
        },
        controller: statusControl,
        controllerAs: 'vm',
        bindToController: false
    };

    return directive;
}





angular.module('app.status')
    .controller('statusControl', statusControl)


function statusControl($firebaseArray, $scope) {

    var self = this;
    var childObj = $scope.childobj;
    var ref = firebase.database().ref().child(childObj);

    //Bindable Variables
    self.header = childObj;
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
