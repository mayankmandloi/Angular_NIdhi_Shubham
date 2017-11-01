var app=angular.module("myModule",[]);
angular.module("myModule").controller("myController",function ($scope) {
  $scope.bheed=[{name:"nidhi",Rnum:001},{name:"shubham",Rnum:002},{name:"shivam",Rnum:007},{name:"suraj",Rnum:008}]
});

angular.module("myModule").filter("countchar",function () {
  return function (item){
    return item.length;
  }
});
 

app.filter("firstcaps",function () {
//angular.module("myModule").filter("firstcaps",function () {
  return function (item) {
    var first= item[0];
    var rest=item.slice(1);
    first=first.toUpperCase();
    return first+rest;
  };

});
  angular.module("myModule").filter("fine",function () {
    return function (item) {
      if (item=="nidhi") {
        return 20;
      }
    else if (item=="shubham") {
      return 20;
    }
  else if (item=="mayank") {
    return 30;
  }
else if (item=="shivam") {
  return 100;
}
else {
  return 0
}
    };
});
