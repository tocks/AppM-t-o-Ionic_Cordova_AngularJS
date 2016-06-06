app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("meteo", {
    url: "/meteo",
    templateUrl: "templates/meteo.html",
    controller : "MeteoCtrl"
  });
  $stateProvider.state("infoMeteo", {
    url: "/infoMeteo/:city",
    templateUrl: "templates/infoMeteo.html",
    controller : "InfoMeteoCtrl"
  });
  $stateProvider.state("contact", {
    url: "/contact",
    templateUrl: "templates/contact.html",
    controller : "ContactCtrl"
  });
  $stateProvider.state("geo", {
    url: "/geo",
    templateUrl: "templates/geo.html",
    controller : "GeoCtrl"
  });
  $stateProvider.state("config", {
    url: "/config",
    templateUrl: "templates/config.html",
    controller : "ConfigCtrl"
  });

  $urlRouterProvider.otherwise("meteo")

});
