"use strict";

System.register([], function (_export) {
    var Router;
    function Router($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state("home", {
            url: "/home",
            controller: "HomeCtrl as homeCtrl",
            templateUrl: "modules/home/home.html"
        }).state("details", {
            url: "/details",
            controller: "DetailsCtrl as detailsCtrl",
            templateUrl: "modules/home/details.html"
        });
    }

    return {
        setters: [],
        execute: function () {
            Router = _export("Router", ["$stateProvider", "$urlRouterProvider", Router]);
        }
    };
});