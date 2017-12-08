'use strict';

/* global angular */
/* https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#application-structure */

(function () {
    'use strict';

    angular.module('client', [
    // 3rd party
    'ui.router', 'ui.bootstrap', "highcharts-ng", 'toastr',

    //base / common
    'client.layout', 'client._common',

    //services
    'client.authentication', 'client.services',

    //views /controllers
    'client.crud', 'client.home', 'client.components', 'client.map', 'client.hub-oc', 'client.hubs', "client.metrics", "client.search", "client.seatcheck"]);

    angular.module('client').config(RouteConfig).run(StateErrorHandler);

    StateErrorHandler.$inject = ['$rootScope', '$log'];

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', function (info) {
            return $log.log(info);
        });
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.authentication', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('app.register', {
            url: '/register',
            views: {
                'content@app': {
                    templateUrl: 'client/authentication/views/register.html',
                    controller: 'authenticationController as login'
                }
            }
        }).state('app.login', {
            url: '/login',
            views: {
                'content@app': {
                    templateUrl: 'client/authentication/views/login.html',
                    controller: 'authenticationController as login'
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.components', ['highcharts-ng']);
})();
'use strict';

/* global angular */
(function () {
	'use strict';

	angular.module('client.constants', []);
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.crud', []);
})();
'use strict';

/* global angular */
(function () {
	'use strict';

	angular.module('client.filters', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.home', ['ui.router']).config(RouteConfig);
    RouteConfig.$inject = ['$stateProvider'];
    function RouteConfig($stateProvider) {
        $stateProvider
        // route for the home page
        .state('site.home', {
            url: '/',
            views: {
                'content@site': {
                    templateUrl: 'client/home/home.html',
                    controller: 'homeController as homeCtrl'
                }
            }
        }).state('site.confirmation', {
            url: '/confirmation',
            views: {
                'content@site': {
                    templateUrl: 'client/confirmation/confirmation.html',
                    controller: 'confirmationController as ctrl'
                }
            }
        }).state('site.payment', {
            url: '/payment',
            views: {
                'content@site': {
                    component: 'paymentComponent'
                }
            }
        }).state('site.hub-request', {
            url: '/request-hub',
            views: {
                'content@site': {
                    component: 'hubRequest'
                }
            }
        }).state('site.hub-confirmed', {
            url: '/hub-confirmed',
            views: {
                'content@site': {
                    templateUrl: '/client/confirmation/hub-confirmation.html',
                    controller: 'confirmationController as ctrl'
                }

            }
        }).state('site.admin', {
            url: '/admin',
            views: {
                'content@site': {
                    templateUrl: 'client/home/admin/admin.html',
                    controller: 'adminController as adCtrl'
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.hubs', ['ui.router']).config(RouteConfig);
    RouteConfig.$inject = ['$stateProvider'];
    function RouteConfig($stateProvider) {
        $stateProvider
        // route for the home page
        .state('site.hubs', {
            url: '/hubs',
            abstract: true
        }).state('site.hubs.hub-la', {
            url: '/hub-la',
            views: {
                'content@site': {
                    templateUrl: 'client/hubs/hub-la/hub-la.html',
                    controller: 'hubLaController as laCtrl'
                }
            }
        }).state('site.hubs.hub-valley', {
            url: '/hub-valley',
            views: {
                'content@site': {
                    templateUrl: 'client/hubs/hub-valley/hub-valley.html',
                    controller: 'hubValleyController as valCtrl'
                }
            }
        }).state('site.hubs.hub-ie', {
            url: '/hub-ie',
            views: {
                'content@site': {
                    templateUrl: 'client/hubs/hub-ie/hub-ie.html',
                    controller: 'hubInlandEmpireController as ieCtrl'
                }
            }
        });
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.layout', ['ui.router']);

    angular.module('client.layout').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'client/layout/layout.tpl.html'
                },

                'navbar@site': {
                    templateUrl: 'client/layout/navbar/navbar.html',
                    controller: 'navbarController as navbarCtrl'
                },

                'footer@site': {
                    templateUrl: 'client/layout/footer/footer.html',
                    controller: 'footerController as ctrl'
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.map', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site.map', {
            url: '/map',
            views: {
                'content@site': {
                    templateUrl: 'client/map/map.html',
                    controller: 'mapController as mapCtrl'
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.metrics', ['ui.router', 'highcharts-ng']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site.metrics', {
            url: '/metrics',
            views: {
                'content@site': {
                    templateUrl: 'client/metrics/metrics.html',
                    controller: 'metricsController as metricsCtrl'
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.search', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site.search', {
            url: '/search',
            views: {
                'content@site': {
                    templateUrl: 'client/search/search.html',
                    controller: 'searchController as searchCtrl'
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.seatcheck', ['ui.router']).config(RouteConfig);
    RouteConfig.$inject = ['$stateProvider'];
    function RouteConfig($stateProvider) {
        $stateProvider
        // route for the home page
        .state('site.seatcheck', {
            url: '/seats',
            abstract: true
        }).state('site.seatcheck.seatcheck', {
            url: '/check',
            views: {
                'content@site': {
                    templateUrl: 'client/seatcheck/seatcheck.html',
                    controller: 'seatController as seatCtrl'
                }
            }
        });
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.services', []);
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client._common', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.hub-oc', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site.hub-oc', {
            url: '/hub-oc',
            views: {
                'content@site': {
                    templateUrl: 'client/components/hub-oc/hub-oc.html',
                    controller: 'hubOcController as ocCtrl'
                }
            }
        });
    }
})();
/* global $ angular */
'use strict';

$(function () {
    // moment.js default language
    // moment.locale('en')

    angular.bootstrap(document, ['client'], { strictDi: true });
});
'use strict';

(function () {
    'use strict';

    angular.module('client.home').controller('confirmationController', ConfirmationController);

    ConfirmationController.$inject = ['$log'];

    function ConfirmationController($log) {

        init();

        function init() {
            $log.log('confirmation landed');
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.home').controller('homeController', HomeController);

    HomeController.$inject = ['$state'];

    function HomeController($state) {
        var $ctrl = this;

        $ctrl.redirect = _redirect;

        function _redirect(hub) {
            $state.go('site.hubs.' + hub);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.map').controller('mapController', MapController);
    MapController.$inject = ["mapServices"];
    function MapController(mapServices) {
        var $ctrl = this;
        var map;
        $ctrl.total;

        $ctrl.$onInit = function () {
            initalizeMap();
            mapLayers();
            mapEventListeners();
            draggableRoutes();
        };

        var initalizeMap = function initalizeMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: 34.041025, lng: -118.269642 }
            });
        };

        var draggableRoutes = function draggableRoutes() {
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: true,
                map: map,
                suppressBicyclingLayer: true
                // panel: document.getElementById('right-panel')

            });

            directionsDisplay.addListener('directions_changed', function () {
                computeTotalDistance(directionsDisplay.getDirections());
            });

            displayRoute('LA Convention Center, CA', 'Dodgers Stadium, CA', directionsService, directionsDisplay);
        };

        function displayRoute(origin, destination, service, display) {
            service.route({
                origin: origin,
                destination: destination,
                waypoints: null, //[{location: 'Adelaide, SA'}, {location: 'Broken Hill, NSW'}]
                travelMode: 'BICYCLING' //DRIVING,BICYCLING,TRANSIT,WALKING
                // optimizeWaypoints: true,
                // provideRouteAlternatives: true,
                // avoidFerries: false,
                // avoidHighways: true,
                // avoidTolls: true,
            }, function (response, status) {
                if (status === 'OK') {
                    display.setDirections(response);
                } else {
                    alert('Could not display directions due to: ' + status);
                }
            });
        }

        function computeTotalDistance(result) {
            var total = 0;
            var myroute = result.routes[0];
            for (var i = 0; i < myroute.legs.length; i++) {
                total += myroute.legs[i].distance.value;
            }
            // $ctrl.total = (total / 1000 / 0.621371).toFixed(2);

            total = (total / 1000 / 0.621371).toFixed(2);
            document.getElementById('total').innerHTML = total + ' mi';
        }

        //Map Layers
        var trafficLayer = void 0;
        var transitLayer = void 0;
        var bikeWaysLayer = void 0;
        var bikeShareLayer = void 0;
        var monumentLayer = void 0;
        var parkLayer = void 0;

        var mapLayers = function mapLayers() {
            getParks();
            getBikeShare();
            getBikeWays();
            getTraffic();
            getTransit();
            getMonuments();
        };

        var getTraffic = function getTraffic() {
            trafficLayer = new google.maps.TrafficLayer();
            // trafficLayer.setMap(map);
        };

        var getTransit = function getTransit() {
            transitLayer = new google.maps.TransitLayer();
            // transitLayer.setMap(map);
        };

        var getMetroLinkStops = function getMetroLinkStops() {
            mapServices.getMetroLinkStops().then(function (data) {
                $ctrl.metroStopsLayer = new google.maps.Data();
                $ctrl.metroStopsLayer.addGeoJson(data);
                // $ctrl.metroStopsLayer.setMap(map);
            }).catch(onGetError);
        };

        var getBikeWays = function getBikeWays() {
            mapServices.getBikeWays().then(function (data) {
                bikeWaysLayer = new google.maps.Data();
                bikeWaysLayer.addGeoJson(data);
                var bikeWaysStyle = {
                    strokeColor: "#ff3df2",
                    strokeWeight: 3
                };
                layerStyling(bikeWaysLayer, bikeWaysStyle);
            });
            bikeWaysLayer = new google.maps.Data();
            // bikeLanesLayer.setMap(map)
        };

        var getBikeShare = function getBikeShare() {
            var bikeMarker = '../css/images/bikeshare2.png';
            var bikeShareJSON = 'client/map/geojson/bike.geojson';
            bikeShareLayer = new google.maps.Data();
            bikeShareLayer.setStyle({ icon: bikeMarker });
            bikeShareLayer.loadGeoJson(bikeShareJSON);
            // bikeShareLayer.setMap(map);
        };

        var getParks = function getParks() {
            mapServices.getParks().then(function (data) {
                parkLayer = new google.maps.Data();
                parkLayer.addGeoJson(data);
                var parkMarker = '../css/images/nature2.png';
                var parkStyle = {
                    fillColor: "rgb(12, 252, 184)",
                    fillOpacity: .9,
                    strokeColor: "orange",
                    strokeWeight: 1
                };
                layerStyling(parkLayer, parkStyle);
                // parkLayer.setMap(map);
            }).catch(onGetError);
        };

        var getMonuments = function getMonuments() {
            mapServices.getMonuments().then(function (data) {
                monumentLayer = new google.maps.Data();
                monumentLayer.addGeoJson(data);
                var monumentStyle = {
                    fillColor: 'purple',
                    strokeColor: 'purple',
                    strokeWeight: 1
                };
                layerStyling(monumentLayer, monumentStyle);
                mapInfoWindow(monumentLayer);
                // monumentLayer.setMap(map);
            });
        };

        //STYLE LAYERS
        var layerStyling = function layerStyling(layer, style) {
            layer.setStyle({
                fillColor: style.fillColor,
                fillOpacity: style.fillOpacity,
                strokeColor: style.strokeColor,
                strokeOpacity: style.strokeOpacity,
                strokeWeight: style.strokeWeight
            });
        };

        //ADD EVENT LISTENERS
        var infowindow = new google.maps.InfoWindow();
        function mapInfoWindow(layer, content) {
            layer.addListener('click', function (event) {
                var data = event.feature.f;
                var content = '<div id="iw-container">' + ('<div class="iw-title">' + data.NAME + '</div>') + '<div class="iw-content">' + '<div class="iw-subTitle">History</div>' + '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' + '<p>The written history of Los Angeles city and county began with a Colonial Mexican town that was founded by 11 Mexican families which were known as " Los Pobladores" that established a settlement in Southern California that changed little in the three decades after 1848, when California became part of the United States.</p>' + '<div class="iw-subTitle">Contacts</div>' + '<p>Los Angeles, CA<br><br>' + '<br>Phone. +2135554568<br>e-mail: losangeles@email.com<br>www: www.website.com</p>' + '</div>' + '<div class="iw-bottom-gradient"></div>' + '</div>';

                infowindow.setContent(content);
                infowindow.setPosition(event.latLng);
                infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -34) });
                infowindow.open(map);
            });
        }

        function mapEventListeners() {
            google.maps.event.addListener(map, 'click', function () {
                infowindow.close();
            });

            google.maps.event.addDomListener(window, "resize", function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });
        }

        //TOGGLE LAYERS
        $ctrl.toggleTraffic = function () {
            trafficLayer.setMap(trafficLayer.getMap() ? null : map);
        };
        $ctrl.toggleTransit = function () {
            transitLayer.setMap(transitLayer.getMap() ? null : map);
        };
        $ctrl.toggleParks = function () {
            parkLayer.setMap(parkLayer.getMap() ? null : map);
        };
        $ctrl.toggleMonuments = function () {
            monumentLayer.setMap(monumentLayer.getMap() ? null : map);
        };
        $ctrl.toggleBikeshare = function () {
            bikeShareLayer.setMap(bikeShareLayer.getMap() ? null : map);
            bikeWaysLayer.setMap(bikeWaysLayer.getMap() ? null : map);
        };

        function onGetError(error) {
            console.log(error);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.metrics').controller('metricsController', MetricsController);

    MetricsController.$inject = [];

    function MetricsController() {
        'use strict';

        var vm = this;
        vm.chartName = "Line Chart";

        vm.changeChart = _changeChart;

        vm.$onInit = function () {
            vm.chartConfig = {
                chart: {
                    height: 100,
                    width: 100,
                    reflow: true,
                    type: "column",
                    plotBorderColor: '#346691',
                    plotBorderWidth: 2,
                    zoomType: 'x',
                    panning: true,
                    panKey: 'shift'
                },
                xAxis: {
                    categories: [],
                    crosshair: true,
                    endOnTick: true
                },
                yAxis: {
                    title: {
                        text: "Number/Frequency"
                    },
                    allowDecimals: false
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.1,
                        borderWidth: 0.5
                    }
                },
                title: {
                    text: 'Traffic Related Data'
                },
                series: [{
                    name: "Population Congestion Over Time",
                    data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                }, {
                    name: "Commute time for getting from point A to point B",
                    data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                }, {
                    name: "Available parking sports",
                    data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                }, {
                    name: "Express Lanes Cost",
                    data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                }]
            };
        };

        function _changeChart() {
            if (vm.chartName == "Line Chart") {
                vm.chartConfig.chart.type = "line";
                vm.chartName = "Column Chart";
            } else {
                vm.chartConfig.chart.type = "column";
                vm.chartName = "Line Chart";
            }
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.search').controller('searchController', SearchController);

    SearchController.$inject = [];

    function SearchController() {
        'use strict';

        var vm = this;
        vm.userLocation = null;
        vm.searchComplete = false;
        vm.initalizeMap = initalizeMap;
        //  vm.mapLayers = mapLayers;
        //vm.mapStyling = mapStyling;
        // vm.mapInfoWindow = mapInfoWindow;
        vm.mapEventListeners = mapEventListeners;
        vm.findLocation = findLocation;
        vm.layersArray = [];
        var infowindow = new google.maps.InfoWindow();
        var map;

        var myLatLng1 = { lat: 34.0562, lng: -118.2365 };
        var myLatLng2 = { lat: 34.0403, lng: -118.2696 };
        var myLatLng3 = { lat: 34.0447, lng: -118.2646 };
        var myLatLng5 = { lat: 34.0430, lng: -118.2673 };
        var myLatLng6 = { lat: 34.0458, lng: -118.2681 };

        vm.$onInit = function () {};

        function findLocation() {
            console.log(vm.userLocation);
            vm.searchComplete = true;
            vm.initalizeMap();
            //   vm.mapLayers();
            //   vm.mapInfoWindow();
            vm.mapEventListeners();
        }

        function initalizeMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: 34.0403, lng: -118.2696 }
            });

            var marker2 = new google.maps.Marker({
                position: myLatLng2,
                map: map,
                title: 'Current Location'
            });

            var marker3 = new google.maps.Marker({
                position: myLatLng3,
                map: map,
                title: ' Attraction 2 - Grammy Museum'
            });

            var marker5 = new google.maps.Marker({
                position: myLatLng5,
                map: map,
                title: 'Attraction 1 - Staples Center'
            });

            var marker6 = new google.maps.Marker({
                position: myLatLng6,
                map: map,
                title: 'Attraction 3 - Regal Cinemas'
            });

            var marker = new google.maps.Marker({
                position: myLatLng2,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 5
                },
                map: map,
                title: 'Hubbub Service - LA Convention Center Shuttle'
            });

            //draggable routes
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: true,
                map: map,
                panel: document.getElementById('right-panel')
            });

            directionsDisplay.addListener('directions_changed', function () {
                computeTotalDistance(directionsDisplay.getDirections());
            });

            // displayRoute('LA Convention Center, CA', 'Regal Cinemas L.A. LIVE 14, 1000 W Olympic Blvd, Los Angeles, CA 90015', directionsService,
            //     directionsDisplay);
        }

        function displayRoute(origin, destination, service, display) {
            service.route({
                origin: origin,
                destination: destination,
                waypoints: null, //[{location: 'Adelaide, SA'}, {location: 'Broken Hill, NSW'}]
                travelMode: 'DRIVING',
                avoidTolls: true
            }, function (response, status) {
                if (status === 'OK') {
                    display.setDirections(response);
                } else {
                    alert('Could not display directions due to: ' + status);
                }
            });
        }

        function computeTotalDistance(result) {
            var total = 0;
            var myroute = result.routes[0];
            for (var i = 0; i < myroute.legs.length; i++) {
                total += myroute.legs[i].distance.value;
            }
            total = total / 1000;
            document.getElementById('total').innerHTML = total + ' km';
        }

        // vm.layer1 = new google.maps.TransitLayer();
        // vm.layer2 = new google.maps.Marker({
        //     position: myLatLng1,
        //     map: map,
        //     title: 'Hub1'
        // });
        // vm.layer3 = new google.maps.Data();
        // vm.layer4 = new google.maps.Data();
        // vm.layer5 = new google.maps.Data();
        // vm.layer6 = new google.maps.Data();

        // function mapLayers() {
        //     vm.geo1 = 'client/map/geojson/rec-parks.geojson';
        //     vm.geo2 = 'client/map/geojson/hist-mon.geojson';
        //     vm.geo3 = 'client/map/geojson/ped-dist.geojson';
        //     vm.geo4 = 'client/map/geojson/bike.geojson';


        //     vm.layer3.loadGeoJson(vm.geo1);
        //     vm.layer4.loadGeoJson(vm.geo2);
        //     vm.layer5.loadGeoJson(vm.geo3);
        //     vm.layer6.loadGeoJson(vm.geo4);

        //     var bikeMarker = '../css/images/bikeshare2.png';
        //     var parkMarker = '../css/images/nature2.png';
        //     vm.layer1.setMap(map);
        //     vm.layer2.setMap(map);
        //     vm.layer3.setMap(map);
        //     vm.layer4.setMap(map);
        //     vm.layer5.setMap(map);
        //     vm.layer6.setMap(map);
        //    vm.layer6.setStyle({icon: bikeMarker}) 
        //    vm.layer3.setStyle({icon: parkMarker}) 
        // }

        // function mapStyling(layer,color) {
        //     layer.setStyle({
        //         fillColor: color,
        //         strokeWeight: 1
        //     });
        // }
        // mapStyling(vm.layer4,'purple');

        // function mapInfoWindow() {
        //     vm.layer4.addListener('click', function (event) {
        //         var data = event.feature.f
        //         vm.table = '<div id="iw-container">' +
        //         `<div class="iw-title">${data.NAME}</div>` +
        //         '<div class="iw-content">' +
        //           '<div class="iw-subTitle">History</div>' +
        //           '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
        //           '<p>The written history of Los Angeles city and county began with a Colonial Mexican town that was founded by 11 Mexican families which were known as " Los Pobladores" that established a settlement in Southern California that changed little in the three decades after 1848, when California became part of the United States.</p>' +
        //           '<div class="iw-subTitle">Contacts</div>' +
        //           '<p>Los Angeles, CA<br><br>'+
        //           '<br>Phone. +2135554568<br>e-mail: losangeles@email.com<br>www: www.website.com</p>'+
        //         '</div>' +
        //         '<div class="iw-bottom-gradient"></div>' +
        //         '</div>';


        //         // vm.table = document.createElement("table");
        //         // for (var name in data) {
        //             // var value = data[name];
        //             // console.log(data);
        //             // var value = data.NAME;

        //             // var tr = document.createElement('tr');
        //             // var leftRow = document.createElement('td');
        //             // leftRow.innerHTML = name;
        //             // tr.appendChild(leftRow);
        //             // var rightRow = document.createElement('td');
        //             // rightRow.innerHTML = value;
        //             // tr.appendChild(rightRow);
        //             // vm.table.appendChild(tr);
        //         // }
        //         infowindow.setContent(vm.table);
        //         infowindow.setPosition(event.latLng);
        //         infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -34) });
        //         infowindow.open(map);
        //     });
        // }

        function mapEventListeners() {
            google.maps.event.addListener(map, 'click', function () {
                infowindow.close();
            });

            google.maps.event.addDomListener(window, "resize", function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });
        }

        // vm.toggleLayer1 = () => {
        //     vm.layer1.setMap(vm.layer1.getMap() ? null : map);
        // }
        // vm.toggleLayer2 = () => {
        //     vm.layer2.setMap(vm.layer2.getMap() ? null : map);
        // }
        // vm.toggleLayer3 = () => {
        //     vm.layer3.setMap(vm.layer3.getMap() ? null : map);
        // }
        // vm.toggleLayer4 = () => {
        //     vm.layer4.setMap(vm.layer4.getMap() ? null : map);
        // }
        // vm.toggleLayer5 = () => {
        //     vm.layer5.setMap(vm.layer5.getMap() ? null : map);
        // }
        // vm.toggleLayer6 = () => {
        //     vm.layer6.setMap(vm.layer6.getMap() ? null : map);
        // }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.home').controller('seatController', SeatController);

    SeatController.$inject = ['sdkService', '$log', 'toastr'];

    function SeatController(sdkService, $log, toastr) {
        var vm = this;
        vm.seatCheck = _seatCheck;
        vm.loadSeats = _loadSeats;

        vm.isFirst = 0;

        function _seatCheck() {
            if (vm.isFirst == 0) {
                return "/content/css/images/seats.jpg";
            } else if (vm.isFirst == 1) {
                return "/content/css/images/seats1.jpg";
            } else if (vm.isFirst == 2) {
                return "/content/css/images/seats2.jpg";
            } else if (vm.isFirst == 3) {
                return "/content/css/images/seats3.jpg";
            } else if (vm.isFirst == 4) {
                return "/content/css/images/seats4.jpg";
            } else return "/content/css/images/seats1.jpg";
        }

        function _loadSeats() {
            _readAll();
        }

        function _readAll() {
            sdkService.readAll().then(function (data) {
                vm.isFirst = 0;
                for (var i = 0; i < data.seats.length; i++) {
                    if (data.seats[i].isOccupied == true) {
                        vm.isFirst += 1;
                    }
                }
                if (vm.isFirst >= 3) {
                    toastr.success('Ignition set to "Start".');
                } else toastr.warning('Ignition set to "Off". Must have 75% of passenger capacity.');
            }).catch(function (err) {
                toastr.warning('Too many requests made.');
            });
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.services').factory('mapServices', MapServicesFactory);

    MapServicesFactory.$inject = ["$http"];

    function MapServicesFactory($http) {
        return {
            getMetroStops: getMetroStops,
            getMonuments: getMonuments,
            getParks: getParks,
            getBikeWays: getBikeWays
        };

        function getMetroStops() {
            return $http.get('http://geohub.lacity.org/datasets/ae53fbeb5d5348c7b7f48a9348fd7ff6_186.geojson').then(onSuccess).catch(onError);
        }

        function getMonuments() {
            return $http.get('http://geohub.lacity.org/datasets/d0920dbc9b73473e9acafda961abc2ef_9.geojson').then(onSuccess).catch(onError);
        }

        function getParks() {
            return $http.get('http://geohub.lacity.org/datasets/138bf27d90f94293b19ffe35f4f5f076_5.geojson').then(onSuccess).catch(onError);
        }
        function getBikeWays() {
            return $http.get('http://geohub.lacity.org/datasets/230abc621b144dbc96cca83d65bd454d_0.geojson').then(onSuccess).catch(onError);
        }

        function onSuccess(response) {
            return response.data;
        }

        function onError(error) {
            return $q.reject(error.data);
        }
    }
})();
'use strict';

(function () {
    angular.module('client.home').factory('sdkService', SdkService);

    SdkService.$inject = ['$http'];

    function SdkService($http) {

        var sdkKey = '8da14a60-256c-4aad-9467-791d7795686d';

        return {
            readAll: _readAll
        };

        function _readAll() {
            var config = {
                url: 'https://api.smartcar.com/v1.0/vehicles/fea30381-7935-4de0-a93e-552d204eefe0/seats',
                method: 'GET',
                headers: {
                    'AUTHORIZATION': 'Bearer ' + sdkKey
                }
            };
            return $http(config).then(xhrSuccess).catch(onError);
        }
    }

    function xhrSuccess(response) {
        return response.data;
    }

    function onError(err) {
        return err;
    }
})();
'use strict';

/* global angular */
/* https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#data-services */
(function () {
    'use strict';

    angular.module('client.services').factory('sendGridService', SendGridFactory);

    SendGridFactory.$inject = ['$http', '$q'];

    function SendGridFactory($http, $q) {
        return {
            sendmail: sendmail
        };

        function sendmail() {
            console.log("sendmail");
            // using SendGrid's v3 Node.js Library
            // https://github.com/sendgrid/sendgrid-nodejs
            var sgMail = require('@sendgrid/mail');
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            var msg = {
                to: 'test@example.com',
                from: 'test@example.com',
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
                html: '<strong>and easy to do anywhere, even with Node.js</strong>'
            };
            sgMail.send(msg);
        }
    }
})();
'use strict';

(function () {
        'use strict';

        angular.module('client.services').factory('thirdPartyApiServices', ThirdPartyApiServicesFactory);

        ThirdPartyApiServicesFactory.$inject = ['$http', '$q'];

        function ThirdPartyApiServicesFactory($http, $q) {
                'use strict';

                return {
                        getMainLineRoutes: getMainLineRoutes,
                        getHOVRoutes: getHOVRoutes,
                        getMainLineLinks: getMainLineLinks,
                        getHOVLinks: getHOVLinks,
                        getIncidents: getIncidents,
                        getRoadWorks: getRoadWorks,
                        getRoadConditions: getRoadConditions,
                        getRoadWays: getRoadWays,
                        getMessageSigns: getMessageSigns,
                        getTransitProviders: getTransitProviders,
                        getParkRideLots: getParkRideLots
                };

                function getMainLineRoutes() {
                        return $http.get('/api/get-main-line').then(_onSuccess).catch(_onError);
                };

                function getHOVRoutes() {
                        return $http.get('/api/get-HOV-routes').then(_onSuccess).catch(_onError);
                };

                function getMainLineLinks() {
                        return $http.get('/api/get-main-line-links').then(_onSuccess).catch(_onError);
                };

                function getHOVLinks() {
                        return $http.get('/api/get-HOV-links').then(_onSuccess).catch(_onError);
                };

                function getIncidents() {
                        return $http.get('/api/get-incidents').then(_onSuccess).catch(_onError);
                };

                function getRoadWorks() {
                        return $http.get('/api/get-road-works').then(_onSuccess).catch(_onError);
                };

                function getRoadConditions() {
                        return $http.get('/api/get-road-conditions').then(_onSuccess).catch(_onError);
                };

                function getRoadWays() {
                        return $http.get('/api/get-road-ways').then(_onSuccess).catch(_onError);
                };

                function getMessageSigns() {
                        return $http.get('/api/get-message-signs').then(_onSuccess).catch(_onError);
                };

                function getTransitProviders() {
                        return $http.get('/api/get-transit-providers').then(_onSuccess).catch(_onError);
                };

                function getParkRideLots() {
                        return $http.get('/api/get-park-ride-lots').then(_onSuccess).catch(_onError);
                };

                function _onSuccess(response) {
                        console.log(response.data.items);
                        return response.data.items;
                }

                function _onError(error) {
                        console.log(error);
                        return $q.reject(error.data);
                }
        }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.authentication').controller('authenticationController', AuthenticationController);

    AuthenticationController.$inject = ['authenticationService', '$controller'];

    function AuthenticationController(authenticationService, $controller) {
        'use strict';

        var vm = this;
        $controller('BaseController', { vm: vm });

        vm.user = {};
        vm.register = _register;
        vm.signin = _signin;

        function _register() {
            authenticationService.register(vm.user).then(function (data) {
                vm.user = null;
                vm.alert = data.alert;
            }).catch(function (err) {
                return console.log(err);
            });
        }

        function signin() {
            authenticationService.signin(vm.user).then(function (data) {
                vm.user = null;
                vm.alert = data.alert;
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }
})();
'use strict';

/* global angular */

(function () {
    'use strict';

    angular.module('client.authentication').factory('authenticationService', AuthenticationServiceFactory);

    AuthenticationServiceFactory.$inject = ['$http', '$q', 'baseService'];

    function AuthenticationServiceFactory($http, $q, baseService) {
        var authenticationService = Object.create(baseService);

        authenticationService.register = _register;
        authenticationService.signin = _signin;

        return authenticationService;

        function _register(userData) {
            return $http.post('/api/users/register', userData).then(function (response) {
                return response.data;
            }).catch(function (err) {
                console.log(err.data);
                return $q.reject(err.data);
            });
        }

        function signin(userData) {
            return $http.post('/api/users/login', userData).then(function (response) {
                return response.data;
            }).catch(function (err) {
                console.log(err.data);
                return $q.reject(err.data);
            });
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.crud').component('hubOc', {
        templateUrl: 'client/components/hub-oc/hub-oc.html',
        controller: 'hubOcController as ctrl'
    });

    angular.module('client.crud').controller('hubOcController', HubOcController);

    HubOcController.$inject = ['$log'];

    function HubOcController($log) {
        var vm = this;
        vm.hub = "Orange County";
        vm.rates = {
            metroB: '135.95',
            metroP: '195.95',
            metroSP: '225.95'
        };
        vm.$onInit = _init;

        function _init() {
            console.log("hub oc init");
        }
    }
})();
'use strict';

(function () {

    angular.module('client.components').component('hubRequest', {
        templateUrl: '/client/components/hub-request/hub-request.html',
        controller: "requestController"
    });

    angular.module('client.components').controller('requestController', RequestController);
    RequestController.$inject = ['toastr', '$state'];
    function RequestController(toastr, $state) {
        var vm = this;
        vm.submit = _submit;

        function init() {}
        function _submit() {
            toastr.success("Request Submitted");
            $state.go('site.hub-confirmed');
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.components').component('mapComponent', {
        templateUrl: '/client/components/map/map.html',
        controller: MapController
    });

    MapController.$inject = [];
    function MapController() {
        var vm = this;

        vm.initalizeMap = initalizeMap;
        vm.mapLayers = mapLayers;
        vm.toggleLayer = toggleLayer;
        vm.mapStyling = mapStyling;
        vm.mapInfoWindow = mapInfoWindow;
        vm.mapEventListeners = mapEventListeners;

        vm.toggleLayer2 = toggleLayer2;
        vm.toggleActive = true;
        vm.toggleActive2 = true;
        var infowindow = new google.maps.InfoWindow();
        var map;

        var myLatLng1 = { lat: 34.0562, lng: -118.2365 };
        var myLatLng2 = { lat: 34.0739, lng: -118.2400 };

        vm.$onInit = function () {
            vm.initalizeMap();
            vm.mapLayers();
            vm.mapStyling();
            vm.mapInfoWindow();
            vm.mapEventListeners();
        };

        function initalizeMap() {

            vm.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: 34.041025, lng: -118.269642 }
            });

            var marker2 = new google.maps.Marker({
                position: myLatLng2,
                map: vm.map,
                title: 'Hub2'
            });

            //draggable routes
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: true,
                map: vm.map,
                panel: document.getElementById('right-panel')
            });

            directionsDisplay.addListener('directions_changed', function () {
                computeTotalDistance(directionsDisplay.getDirections());
            });

            displayRoute('LA Convention Center, CA', 'Dodgers Stadium, CA', directionsService, directionsDisplay);
        }

        function displayRoute(origin, destination, service, display) {
            service.route({
                origin: origin,
                destination: destination,
                waypoints: null, //[{location: 'Adelaide, SA'}, {location: 'Broken Hill, NSW'}]
                travelMode: 'DRIVING',
                avoidTolls: true
            }, function (response, status) {
                if (status === 'OK') {
                    display.setDirections(response);
                } else {
                    alert('Could not display directions due to: ' + status);
                }
            });
        }

        function computeTotalDistance(result) {
            var total = 0;
            var myroute = result.routes[0];
            for (var i = 0; i < myroute.legs.length; i++) {
                total += myroute.legs[i].distance.value;
            }
            total = total / 1000;
            document.getElementById('total').innerHTML = total + ' km';
        }

        vm.layer1 = new google.maps.TransitLayer();
        vm.layer2 = new google.maps.Marker({
            position: myLatLng1,
            map: vm.map,
            title: 'Hub1'
        });
        function mapLayers() {
            // vm.gcCities = 'client/map/Recreation_and_Parks_Facilities.geojson';
            // vm.map.data.loadGeoJson(vm.gcCities);

            vm.layer1.setMap(vm.map);
            vm.layer2.setMap(vm.map);
        }

        function mapStyling() {
            vm.map.data.setStyle({
                fillColor: 'green',
                strokeWeight: 1
            });
            //set color based on object property
            // vm.map.data.setStyle(function (feature) {
            //     var color = feature.getProperty('COLOR');
            //     return {
            //         fillColor: color,
            //         strokeWeight: 1
            //     }
            // });
        }

        function mapInfoWindow() {
            vm.map.data.addListener('click', function (event) {
                var data = event.feature.f;
                vm.table = document.createElement("table");
                for (var name in data) {
                    var value = data[name];
                    var tr = document.createElement('tr');
                    var leftRow = document.createElement('td');
                    leftRow.innerHTML = name;
                    tr.appendChild(leftRow);
                    var rightRow = document.createElement('td');
                    rightRow.innerHTML = value;
                    tr.appendChild(rightRow);
                    vm.table.appendChild(tr);
                }
                infowindow.setContent(vm.table);
                infowindow.setPosition(event.latLng);
                infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -34) });
                infowindow.open(vm.map);
            });
        }
        function mapEventListeners() {
            google.maps.event.addListener(vm.map, 'click', function () {
                infowindow.close();
            });
            google.maps.event.addDomListener(window, "resize", function () {
                var center = vm.map.getCenter();
                google.maps.event.trigger(vm.map, "resize");
                vm.map.setCenter(center);
            });
        }

        function toggleLayer() {
            if (vm.toggleActive === true) {
                console.log("true");
                console.log(vm.toggleActive);
                vm.layer1.setMap(null);
                vm.toggleActive = false;
            } else {
                console.log("false");
                console.log(vm.toggleActive);
                vm.layer1.setMap(vm.map);
                vm.toggleActive = true;
            }
        }

        function toggleLayer2() {
            if (vm.toggleActive2 === true) {
                console.log("true");
                console.log(vm.toggleActive2);
                vm.layer2.setMap(null);
                vm.toggleActive2 = false;
            } else {
                console.log("false");
                console.log(vm.toggleActive2);
                vm.layer2.setMap(vm.map);
                vm.toggleActive2 = true;
            }
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.components').component('metricsComponent', {
        templateUrl: '/client/components/metrics/metrics.html',
        controller: MetricsController
    });

    MetricsController.$inject = [];

    function MetricsController() {
        'use strict';

        var $ctrl = this;
        $ctrl.chartName = "Line Chart";

        $ctrl.changeChart = _changeChart;

        $ctrl.$onInit = function () {
            $ctrl.chartConfig = {
                chart: {
                    height: 500,
                    width: 800,
                    reflow: true,
                    type: "column",
                    plotBorderColor: '#346691',
                    plotBorderWidth: 2,
                    zoomType: 'x',
                    panning: true,
                    panKey: 'shift'
                },
                xAxis: {
                    categories: [],
                    crosshair: true,
                    endOnTick: true
                },
                yAxis: {
                    title: {
                        text: "Number/Frequency"
                    },
                    allowDecimals: false
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.1,
                        borderWidth: 0.5
                    }
                },
                title: {
                    text: 'Traffic Related Data'
                },
                series: [{
                    name: "Population Congestion Over Time",
                    data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                }, {
                    name: "Commute time for getting from point A to point B",
                    data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                }, {
                    name: "Available parking sports",
                    data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                }, {
                    name: "Express Lanes Cost",
                    data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                }]
            };
        };

        function _changeChart() {
            if ($ctrl.chartName == "Line Chart") {
                $ctrl.chartConfig.chart.type = "line";
                $ctrl.chartName = "Column Chart";
            } else {
                $ctrl.chartConfig.chart.type = "column";
                $ctrl.chartName = "Line Chart";
            }
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.components').component('paymentComponent', {
        templateUrl: '/client/components/payment/payment.html',
        controller: PaymentController
    });

    PaymentController.$inject = ['$http', '$log', "$state", "toastr"];
    function PaymentController($http, $log, $state, toastr) {
        var $ctrl = this;
        $ctrl.submit = _submit;

        $ctrl.name = 'Joe Tourist';
        $ctrl.cardNumber = '****-****-****-9090';
        // $ctrl.cardSecCode = '900'
        $ctrl.addressA = '1034 Traveling St';
        $ctrl.city = 'Topeka';
        $ctrl.state = 'KS';
        $ctrl.zip = '66605';

        init();

        function init() {
            $log.log('payment component landed');
        }

        function _submit() {
            var reservation = {
                name: $ctrl.cardName,
                cardType: $ctrl.cardType,
                cardNumber: $ctrl.cardNumber,
                cardExpiration: $ctrl.cardExpirationMonth + "|" + $ctrl.cardExpirationYear,
                cardSecCode: $ctrl.cardSecCode,
                addressA: $ctrl.addressA,
                addressB: $ctrl.addressB,
                city: $ctrl.city,
                state: $ctrl.state,
                zip: $ctrl.zip
            };
            toastr.success('Success!!');
            $log.log(reservation);
            $state.go('site.confirmation');
            // shuttleService.submitPayment(reservation)
            //     .then(result => alert('Reservation Completed!'))
        }
    }
})();
'use strict';

(function () {
    angular.module('client.hubs').component('shuttlesComponent', {
        templateUrl: '/client/components/shuttles-component/shuttles.html',
        controller: 'shuttlesController',
        bindings: {
            rates: '<',
            hub: '<'
        }
    });

    angular.module('client.hubs').controller('shuttlesController', ShuttlesController);

    ShuttlesController.$inject = [];

    function ShuttlesController() {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.services = [{ metroB: 'Metro Basic' }, { metroP: 'Metro Plus' }, { metroSP: 'Metro SuperPlus' }];
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.home').controller('adminController', AdminController);

    AdminController.$inject = ['$log'];

    function AdminController($log) {
        var $ctrl = this;
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.hubs').controller('hubInlandEmpireController', HubInlandEmpireController);

    HubInlandEmpireController.$inject = ['$log', '$window'];

    function HubInlandEmpireController($log, $window) {
        var vm = this;
        vm.hub = "Inland Empire";
        vm.rates = {
            metroB: '135.95',
            metroP: '195.95',
            metroSP: '225.95'
        };

        init();

        function init() {
            $window.scrollTo(0, 0);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.hubs').controller('hubLaController', HubLaController);

    HubLaController.$inject = ['$log', '$window'];

    function HubLaController($log, $window) {
        var vm = this;

        init();
        vm.hub = "Los Angeles";
        vm.rates = {
            metroB: '195.95',
            metroP: '245.95',
            metroSP: '300.00'
        };

        function init() {
            $window.scrollTo(0, 0);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.hubs').controller('hubValleyController', HubValleyController);

    HubValleyController.$inject = ['$log', '$window'];

    function HubValleyController($log, $window) {
        var vm = this;
        vm.hub = "San Fernando Valley";
        vm.rates = {
            metroB: '175.95',
            metroP: '225.95',
            metroSP: '265.95'
        };

        init();

        function init() {
            $window.scrollTo(0, 0);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.layout').controller('footerController', FooterController);

    FooterController.$inject = [];

    function FooterController() {
        var $ctrl = this;
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.layout').controller('navbarController', NavBarController);

    NavBarController.$inject = ['$window'];

    function NavBarController($window) {
        var $ctrl = this;

        $ctrl.logout = function () {
            userService.logout().then(_onLogoutSuccess).catch(_onError);
        };

        function _onLogoutSuccess(res) {
            console.log(res);
            localStorage.clear();
            $window.location.href = '/';
        }
        function _onError(err) {
            console.log(err);
        }
    }
})();
'use strict';

// Description: This will inject an instance of this controller into the scope of the child controller
// Usage: Psuedo inheritance in child controller, $controller('BaseController', { vm: vm });
// Refs: http://jasonwatmore.com/post/2014/03/25/angularjs-a-better-way-to-implement-a-base-controller
/* global angular */
(function () {
    'use strict';

    angular.module('client._common').controller('BaseController', BaseController);

    BaseController.$inject = ['$document', '$log', 'vm'];

    function BaseController($document, $log, vm) {
        vm.closeAlert = function () {
            vm.alert = null;
        };

        vm.$document = $document;
        vm.$log = $log;
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client._common').factory('baseService', BaseServiceFactory);

    BaseServiceFactory.$inject = ['$http'];

    function BaseServiceFactory($http) {
        return {
            checkBaseMethod: function checkBaseMethod() {
                console.log('this is from the baseService');
            }
        };
    }
})();