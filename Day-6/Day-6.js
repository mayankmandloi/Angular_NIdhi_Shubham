angular.module("myApp",[]);
angular.module("myApp").controller("myController",function($scope) {
  this.KhiladiLog=[
   {Name:"SR.Tendulkar",Match:463,Runs:18426,Highest:200,hun:49,fif:96},
   {Name:"SC.Ganguly",Match:308,Runs:11221,Highest:183,hun:22,fif:71},
   {Name:"R.Dravid",Match:340,Runs:10768,Highest:153,hun:12,fif:82},
   {Name:"M.S Dhoni",Match:301,Runs:9571,Highest:183,hun:9,fif:66},
   {Name:"M.Azharuddin",Match:334,Runs:9378,Highest:153,hun:7,fif:58},
   {Name:"V.Kohli",Match:197,Runs:8707,Highest:183,hun:30,fif:45},
   {Name:"Yuvraj sing",Match:301,Runs:8609,Highest:150,hun:14,fif:52},
   {Name:"V.sehwag",Match:241,Runs:7995,Highest:219,hun:15,fif:37},
   {Name:"Rohit sharma",Match:166,Runs:5843,Highest:264,hun:13,fif:33},
   {Name:"S.k Raina",Match:233,Runs:5568,Highest:116,hun:5,fif:36},
   {Name:"A jadeja",Match:196,Runs:5359,Highest:119,hun:6,fif:30},
   {Name:"G gambhir",Match:147,Runs:5238,Highest:150,hun:11,fif:34},
   {Name:"N.S Sidhu",Match:136,Runs:4413,Highest:134,hun:6,fif:33},
   {Name:"K Srikant",Match:146,Runs:4091,Highest:123,hun:4,fif:27},
   {Name:"N kapil Dev",Match:225,Runs:3783,Highest:175,hun:1,fif:14},
   {Name:"S dhawan",Match:90,Runs:3779,Highest:137,hun:11,fif:21},
   {Name:"DB vengsarkar",Match:129,Runs:3508,Highest:105,hun:1,fif:23},
   {Name:"RJ Shastri",Match:150,Runs:3108,Highest:109,hun:4,fif:18}];




   this.sortByMe=function (byMe) {
     if($scope.orderText==byMe)//orderText= name , byMe = Match
      {
      $scope.orderText="-"+byMe;
      }
      else {
          $scope.orderText=byMe;
      }
   }
})
