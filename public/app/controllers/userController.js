
angular.module('userController',['ngMaterial', 'ngMessages'])
  .filter('myFormat', function() {
	    return function(x) {
	    	return x.split('T')[0];
	    };
	})
  
  .controller('userCntrl',function($scope, $routeParams, $http,$mdDialog){
    $scope.showUser=true;
  	$scope.userLogin = $routeParams.id; 
  	console.log($scope.userLogin);
  	//get api requset for user details
  	$http.get("https://api.github.com/users/"+$scope.userLogin)
        .then(function(response){

            	console.log("userdata",response)
            	$scope.userDetails=response.data;
            	$scope.created_at=$scope.userDetails.created_at.split('T')[0];
            	console.log($scope.created_at)

            	//get api request for repository details
    		    $http.get($scope.userDetails.repos_url)
    		         .then(function(response){
    		         	console.log(response)
    		         	$scope.userRepos=response.data;
    		         	console.log("repos",$scope.userRepos)
    		         });

                }
            ,function(error){
              console.log("error data",error);
              $scope.showUser=false;

              //no user 
              var confirm = $mdDialog.confirm()
                  .title('Hey, No user is available with this username!')
                  .textContent('Please, check username spelling and try again!')
                  .ariaLabel('Offscreen Demo')
                  .ok('Okay')

                $mdDialog.show(confirm).then(function() {
                  $scope.status = '';
                }, function() {
                  $scope.status = '';
                });

            });

        console.log("repos",$scope.userRepos)
  	
  });
