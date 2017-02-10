angular.module('app')
    .controller('authController', authController);


function authController($firebaseAuth){

    var authObj = $firebaseAuth();
    var self = this;

    //Bindable Objects:
    self.loggedIn = new Boolean();
    self.userEmail;

    //Function Declarations
    self.logOff = logOff;

    //auth Listener:
    authObj.$onAuthStateChanged(function(firebaseUser){

        if(firebaseUser){
            console.log("Logged in " + firebaseUser);
            self.loggedIn = true;
            self.userEmail = firebaseUser.email;
        }
        else{
            console.log("Not Logged in!");
            self.loggedIn = false;
            self.userEmail = null
        }
    })

    // Functions
    function logOff(){
       var promise =  authObj.$signOut();
       promise.catch(e => console.log(e.message));
    }
}