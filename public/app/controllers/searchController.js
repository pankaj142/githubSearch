angular.module('searchController',['ngMaterial', 'ngMessages'])

  .controller("searchCntrl", function($scope, $http, $mdDialog){
  		$scope.username ="";
  		$scope.searchUser =function(){
  			$http.get("https://api.github.com/search/users?q="+$scope.username+"in:login")
		    .then(function(response) {
		        $scope.users = response.data.items;
            if($scope.users.length == 0){
              //no users 
              var confirm = $mdDialog.confirm()
                  .title('Hey, no user is available with this username!')
                  .textContent('Please, check username spelling and !')
                  .ariaLabel('Offscreen Demo')
                  .ok('Okay')

                $mdDialog.show(confirm).then(function() {
                  $scope.status = '';
                }, function() {
                  $scope.status = '';
                });
              console.log("no users")
            }
		        console.log($scope.users);
		    });
  		}

  });
