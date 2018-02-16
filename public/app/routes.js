angular.module('appRoutes',["ngRoute"])

   
   .config(function($routeProvider, $locationProvider){
      console.log("hello from routes");
   	 $routeProvider
   	 	.when("/dashboard",{
   	 		templateUrl : "app/views/pages/dashboard.html"
   	 	})
   	 	.when('/clients',{
   	 		templateUrl : "app/views/pages/clients.html"
   	 	})
         .when("/search",{
            templateUrl : "app/views/pages/search.html",
            controller :"searchCntrl"
         })
         .when("/user/:id",{
            templateUrl : "app/views/pages/user.html",
            controller :"userCntrl"
         })
   	 	//.otherwise({redirectTo : '/dashboard'});

       //to remove # from route    
       /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
       });*/  
   });