angular.module( 'being-fluid' )
    .config( RoutesConfig );

RoutesConfig.$inject = ["$routeProvider"];

function RoutesConfig ( $routeProvider) {
    $routeProvider
        .when( '/csa_qna', {
        template: `<main class="px-3">
   
  <div style="text-align: center;">
    <h1>Servicenow: Certified System Administrator</h1>
    <h3>( Practice Set )</h3>
    <h6>This practice set is based on the <a href="https://community.servicenow.com/community?id=community_Article&sys_id=a0e7f10bdb01dd50f77799ead3961917">community post</a> created by <i>Lon Landry</i>. Created for better readability, Happy Learning.</h6>
  </div>
    <div class="container py-5 h-100" ng-repeat="recinfo in recommendations">
        <div class="card">
          <div class="card-body">
              <div class="shadow-1-strong">
                 {{recinfo["Number"]}} <span style="color: grey;">(Category: {{recinfo["Category"]}})</span>
              </div>
              <p class="mb-0 mt-2 font-italic text-dark" ng-bind-html="recinfo['Front (html)']"></p>
              <footer class="pt-4 mt-4 border-top" ng-bind-html="recinfo['Back (HTML)']"></footer>
          </div>
        </div>
    </div>

  </main>`,
        controller: 'CSAQnAController'
    } ).otherwise( {
        redirectTo:"/csa_qna"
    });
}
