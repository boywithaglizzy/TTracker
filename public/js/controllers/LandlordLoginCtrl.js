angular.module('LandlordLoginCtrl', []).controller('LandlordLoginController', function($rootScope, $scope, $http, $location, $cookieStore, LoginService) {

    $scope.username = '';
    $scope.password = '';
    $rootScope.currentUser = null;
	// checks for correct login using the login service
    $scope.formSubmit = function() {
        console.log(LoginService.login($scope.username, $scope.password));
        $http({url:'/api/login', method:'POST', data: {'username': $scope.username, 'password' : $scope.password}}).then(function(response) {
            console.log(response);
            if(response.data.message == "success"){
                // $sessionStorage.currentUser = response.data.user;
                $cookieStore.put('currentUser', response.data.user);
                $rootScope.currentUser = response.data.user;
                console.log('successful login');
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $location.path("/landlord");
            }
            else {
                $scope.error = "Incorrect username or password!";
            }
        });
    };
})
