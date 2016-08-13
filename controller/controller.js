app.controller("flipkartcontroller",function($scope,flipkartfactory){
    $scope.list=flipkartfactory.show();
})