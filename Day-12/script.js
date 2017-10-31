angular.module("bookModule",[]);


// -------------------------------------
angular.module("bookModule").controller("bookListController",function(){
    this.Book=Books;
});
angular.module("bookModule").directive("bookPreview",function(){
    return {
        templateUrl:"templates/bookPreview2.html",
        scope:{book:"="}
    }
})


// -----------------------------------
angular.module("bookModule").controller("singleBookCOntroller",function(){});
