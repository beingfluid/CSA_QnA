angular.module( 'being-fluid' ).controller( "CSAQnAController", CSAQnAController );

CSAQnAController.$inject = ["$scope","$http"];

function CSAQnAController($scope,$http) {
    $http.get( "../csa_qna.json" ).then( function ( response ) {
        $scope.recommendations = response.data;
    } );
}