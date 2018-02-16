angular.module('searchController',[])

  .controller("searchCntrl", function($scope, $http){
  		$scope.username ="";
  		$scope.searchUser =function(){
  			$http.get("https://api.github.com/search/users?q="+$scope.username+"in:login")
		    .then(function(response) {
		        $scope.users = response.data.items;
		        console.log($scope.users);
		    });
  		}

  });