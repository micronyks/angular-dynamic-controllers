require.config({
    baseUrl: 'Angular',
    urlArgs: 'v=1.0'
});

require(
    [
        'app',
        'routeResolver',
    ],
    function () {
        angular.bootstrap(document, ['myApp']);
    });
