'use strict';

define(['app'], function (app) {

    var injectParams = [];

    var HomeController = function () {
debugger;
        var vm = this;

        vm.home="Nikhil Shah";

            };

    HomeController.$inject = injectParams;

    app.register.controller('HomeController', HomeController);

});
