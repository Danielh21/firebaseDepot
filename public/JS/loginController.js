/**
 * Created by daniel on 10-02-2017.
 */

angular.module('app.status')
    .controller('loginCtrl', loginCtrl);


function loginCtrl($firebaseAuth){

    var authObj = $firebaseAuth();
    var self = this;
    self.loggedin;

    // Bindable Objects


    //Functions Declarations
    self.login = login;

    //TO Do When Entered



    //Functions:

    function login(){
        var email = document.getElementById('email').value;
        var pass = document.getElementById('pass').value;
        authObj.$signInWithEmailAndPassword(email,pass)
            .then(authData => {
           console.log("Logged in as:", authData.uid);
           document.getElementById('email').value="";
           document.getElementById('pass').value="";
       }).catch(error => {
           console.error("Authentication failed:", error);
       });

    }

    // Auth Listner!
    authObj.$onAuthStateChanged(function(firebaseUser){

        if(firebaseUser){
            self.loggedin = true;
        }
        else{
            self.loggedin = false;
        }
    })
}


