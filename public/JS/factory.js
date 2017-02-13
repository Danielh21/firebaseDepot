/**
 * Created by daniel on 13-02-2017.
 */

angular.module('app.status')
    .factory('statusFactory', statusFactory);


function statusFactory(){

    var service = {
        copyFbRecord : copyFbRecord
    }


    function copyFbRecord(oldRef, newRef) {
        oldRef.once('value', function(snap)  {
            newRef.set( snap.val(), function(error) {
                if( error && typeof(console) !== 'undefined' && console.error ) {  console.error(error); }
            });
        });
    }

    return service;


}