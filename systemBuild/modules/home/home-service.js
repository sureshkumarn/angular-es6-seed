System.register([], function (_export) {
    var HomeService;

    function HomeService($q) {

        "use strict";

        this.getGreeting = function () {
            var name = arguments[0] === undefined ? "Noname McDefault" : arguments[0];

            return $q(function (resolve) {
                return resolve("Hello, " + name + ".  Welcome to Angular in ES6!!");
            });
        };
    }

    return {
        setters: [],
        execute: function () {
            "use strict";

            HomeService.$inject = ["$q"];HomeService = HomeService;

            _export("HomeService", HomeService);
        }
    };
});