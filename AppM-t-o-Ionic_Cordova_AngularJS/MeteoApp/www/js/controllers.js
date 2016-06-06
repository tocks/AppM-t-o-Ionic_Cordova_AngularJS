app.controller("MeteoCtrl", function ($scope, $state) {
  $scope.getMeteo = function(ville){
    $state.go("infoMeteo", {
        city: ville
    });
  }
});


app.controller("InfoMeteoCtrl", function ($scope, $stateParams, $http, $ionicLoading) {
  url = "http://api.openweathermap.org/data/2.5/forecast/dailly?q="+$stateParams.city+"&APPID=9569dd40e0ba8532754ba66cc43177b3";

  $ionicLoading.show({
    template:"Chargement en cours ...."
  });

  $scope.meteo={};
  $http.get(url)
    .success(function (data) {
      $scope.meteo = data;
      $ionicLoading.hide();
  })
    .error(function (err) {
      consolog.log(err);
      $ionicLoading.hide();
    });
});


app.controller("ContactCtrl", function ($scope, $http) {

});


app.controller("GeoCtrl", function ($scope, $http, $cordovaGeolocation) {
  var options = {
    timeout: 10000,
    enableHighAccuracy:true
  }
  $cordovaGeolocation.getCurrentPosition(options)
    .then(function (position) {
      $scope.position = position;
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
          center: latLng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        theMap = new google.maps.Map(document.getElementById('map'),mapOptions);

        marker = new google.maps.Marker({
          position: latLng,
          map: theMap,
          title: "Je suis ici",
          label: "S"
        });
    },
    function (err) {
      console.log(err);
    }
    );


});


app.controller("ConfigCtrl", function ($scope, $http) {

});
