angular.module( 'being-fluid' )
    .config( RoutesConfig );

RoutesConfig.$inject = ["$routeProvider"];

function RoutesConfig ( $routeProvider ) {
    $routeProvider
        .when( '/', {
        templateUrl: '../csa_qna.html',
        controller: 'CSAQnAController'
    } ).otherwise( {
        redirectTo:"/"
    });
}
