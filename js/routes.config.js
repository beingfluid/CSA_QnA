angular.module( 'being-fluid' )
    .config( RoutesConfig );

RoutesConfig.$inject = ["$routeProvider"];

function RoutesConfig ( $routeProvider ) {
    $routeProvider
        .when( '/csa_qna', {
        templateUrl: '../csa_qna.html',
        controller: 'CSAQnAController'
    } ).otherwise( {
        redirectTo:"/csa_qna"
    });
}
