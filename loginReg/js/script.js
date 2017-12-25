var app=angular.module("myModule",['ngRoute']);
app.service("saveUser",function(){
    
    return {};
})
    app.config(function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:"templates/login.html",
            controller:function($scope,$location,saveUser){
                console.log(saveUser);
                console.log(saveUser.password);
                            $scope.showAll=function()
                            {
                               console.log($scope.username);
                               console.log($scope.password);
                               if($scope.username==saveUser.username&&$scope.password==saveUser.password)
                               {
                               $location.url("home");
                               }else{
                                $location.url("reg");
                               }

                            }
                        }
    });
    $routeProvider.when("/home",{
        templateUrl:"templates/home.html",
        controller:function($scope,$location,saveUser){
            $scope.username= saveUser.username;
            $scope.password= saveUser.password;
            $scope.email= saveUser.email;
            $scope.contact= saveUser.contact;
            $scope.logOut=function()
            {
                // saveUser.username="";
                // saveUser.password="";
                // saveUser.email="";
                // saveUser.contact="";
                $location.url("/");
            }
        }
    });

    $routeProvider.when("/reg",{
        templateUrl:"templates/reg.html",
        controller:function($scope,$location,saveUser)
                    {
                        console.log("hahaha");
                        $scope.saveData=function()
                        {
                            saveUser.username=$scope.username;
                            saveUser.password= $scope.password;
                            saveUser.email= $scope.email;
                            saveUser.contact= $scope.contact;
                            console.log($scope.username);
                            console.log($scope.password);
                            console.log($scope.email);
                            console.log($scope.contact);
                            $location.url("/");
    
                        }
                    }
    })
    }
    );