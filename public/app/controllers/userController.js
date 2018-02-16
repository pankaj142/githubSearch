
angular.module('userController',[])
  .filter('myFormat', function() {
	    return function(x) {
	    	return x.split('T')[0];
	    };
	})
  
  .controller('userCntrl',function($scope, $routeParams, $http){
  	console.log("hey from user controller")
  	$scope.service_name="web developement";
  	$scope.userLogin = $routeParams.id; 
  	console.log($scope.userLogin);
  	//get api requset for user details
  	$http.get("https://api.github.com/users/"+$scope.userLogin)
        .then(function(response){
        	console.log(response)
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

            });

        console.log("repos",$scope.userRepos)
  	
  });
