System.register((void 0), [], function() {
  "use strict";
  var homeModule = System.get("modules/home/home").homeModule;
  var Router = System.get("router").Router;
  var appModule = angular.module("App", ["ui.router", homeModule.name]);
  appModule.config(Router);
  return {};
});

System.register((void 0), [], function() {
  "use strict";
  function Router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state('home', {
      url: "/home",
      controller: "HomeCtrl as homeCtrl",
      templateUrl: "modules/home/home.html"
    }).state('details', {
      url: "/details",
      controller: "DetailsCtrl as detailsCtrl",
      templateUrl: "modules/home/details.html"
    });
  }
  var Router = ['$stateProvider', '$urlRouterProvider', Router];
  return {get Router() {
      return Router;
    }};
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8zIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzIiLCJhcHAuanMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xIiwicm91dGVyLmpzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxTQUFTLEFBQUMsVUFBb0IsR0FBQyxDQ0FwQyxVQUFRLEFBQUM7O0lDQUQsV0FBUyxFQ0FqQixDQUFBLE1BQUssSUFBSSxBQUFDLHFCQUFrQjtJRENwQixPQUFLLEVDRGIsQ0FBQSxNQUFLLElBQUksQUFBQyxVQUFrQjtBREc1QixBQUFJLElBQUEsQ0FBQSxTQUFRLEVBQUksQ0FBQSxPQUFNLE9BQU8sQUFBQyxDQUFDLEtBQUksQ0FBRyxFQUFDLFdBQVUsQ0FBRyxDQUFBLFVBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUVyRSxVQUFRLE9BQU8sQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FFTHhCLFdBQXVCO0FIRW5CLENERm9ELENBQUM7QUVPekQ7QUZQQSxLQUFLLFNBQVMsQUFBQyxVQUFvQixHQUFDLENDQXBDLFVBQVEsQUFBQzs7QUlBVCxTQUFTLE9BQUssQ0FBRSxjQUFhLENBQUcsQ0FBQSxrQkFBaUIsQ0FBRztBQUdoRCxxQkFBaUIsVUFBVSxBQUFDLENBQUMsT0FBTSxDQUFDLENBQUM7QUFFckMsaUJBQWEsTUFDSixBQUFDLENBQUMsTUFBSyxDQUFHO0FBQ1gsUUFBRSxDQUFHLFFBQU07QUFDWCxlQUFTLENBQUksdUJBQXFCO0FBQ2xDLGdCQUFVLENBQUcseUJBQXVCO0FBQUEsSUFDeEMsQ0FBQyxNQUNJLEFBQUMsQ0FBQyxTQUFRLENBQUc7QUFDZCxRQUFFLENBQUcsV0FBUztBQUNkLGVBQVMsQ0FBSSw2QkFBMkI7QUFDeEMsZ0JBQVUsQ0FBRyw0QkFBMEI7QUFBQSxJQUMzQyxDQUFDLENBQUM7RUFDVjtBQUFBLEFBRVcsSUFBQSxDQUFBLE1BQUssRUFBSSxFQUFDLGdCQUFlLENBQUcscUJBQW1CLENBQUcsT0FBSyxDQUFDLENBQUM7QURsQnBFLFNFQUEsWUFBd0I7QUFBRSxtQkFBd0I7SUFBRSxFRkE3QjtBSEVuQixDREZvRCxDQUFDO0FLa0JXIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlN5c3RlbS5yZWdpc3RlcigkX19wbGFjZWhvbGRlcl9fMCwgW10sICRfX3BsYWNlaG9sZGVyX18xKTsiLCJmdW5jdGlvbigpIHtcbiAgICAgICRfX3BsYWNlaG9sZGVyX18wXG4gICAgfSIsImltcG9ydCB7aG9tZU1vZHVsZX0gZnJvbSAnLi9tb2R1bGVzL2hvbWUvaG9tZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi9yb3V0ZXInO1xuXG52YXIgYXBwTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoXCJBcHBcIiwgW1widWkucm91dGVyXCIsIGhvbWVNb2R1bGUubmFtZV0pO1xuXG5hcHBNb2R1bGUuY29uZmlnKFJvdXRlcik7XG5cbiIsIlN5c3RlbS5nZXQoJF9fcGxhY2Vob2xkZXJfXzApIiwicmV0dXJuICRfX3BsYWNlaG9sZGVyX18wIiwiZnVuY3Rpb24gUm91dGVyKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblxuICAgIC8vIEZvciBhbnkgdW5tYXRjaGVkIHVybCwgcmVkaXJlY3QgdG8gL2hvbWVcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2hvbWVcIik7XG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2hvbWVcIixcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgOiBcIkhvbWVDdHJsIGFzIGhvbWVDdHJsXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJtb2R1bGVzL2hvbWUvaG9tZS5odG1sXCJcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKCdkZXRhaWxzJywge1xuICAgICAgICAgICAgdXJsOiBcIi9kZXRhaWxzXCIsXG4gICAgICAgICAgICBjb250cm9sbGVyIDogXCJEZXRhaWxzQ3RybCBhcyBkZXRhaWxzQ3RybFwiLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwibW9kdWxlcy9ob21lL2RldGFpbHMuaHRtbFwiXG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgdmFyIFJvdXRlciA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgUm91dGVyXTsiLCJnZXQgJF9fcGxhY2Vob2xkZXJfXzAoKSB7IHJldHVybiAkX19wbGFjZWhvbGRlcl9fMTsgfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==