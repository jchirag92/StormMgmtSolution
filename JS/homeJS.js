

var centerWeather = new google.maps.LatLng(14.530415228007362, 120.025634765625);
var centerStorm = new google.maps.LatLng(11.2543, 124.9617);

var marker;
var polyline;
var weatherLayer;
var sp1 = new google.maps.LatLng(6.8, 143.00);
var sp2 = new google.maps.LatLng(10.2, 129.1);
var sp3 = new google.maps.LatLng(11.8, 120.6);
var sp4 = new google.maps.LatLng(14.5, 113.2);
var sp5 = new google.maps.LatLng(17.8, 109.0);
var map1;
var mapw;
//var map2;


var lineSymbol;
var lineSymbolDay;

var polyA1;
var polyA2;
var polyA3;

var polyB1;
var polyB2;
var polyB3;

var polyC1;
var polyC2;
var polyC3;

var polyDay1;
var polyDay2;
var polyDay3;
var polyDay4;
var polyDay5;

var cordsDay1;
var cordsDay2;
var cordsDay3;
var cordsDay4;
var cordsDay5;

//custom weather layer begins


var clearsky = 'http://openweathermap.org/img/w/01d.png';
var fewclouds = 'http://openweathermap.org/img/w/02d.png';
var scatterdclouds = 'http://openweathermap.org/img/w/03d.png';
var brokenclouds = 'http://openweathermap.org/img/w/04d.png';
var showerrain = 'http://openweathermap.org/img/w/09d.png';
var rain = 'http://openweathermap.org/img/w/10d.png';
var thunderstrom = 'http://openweathermap.org/img/w/11d.png';
var snow = 'http://openweathermap.org/img/w/13d.png';
var mist = 'http://openweathermap.org/img/w/50d.png';


var infowindowimg = ['IMG/clearsky.jpg', 'IMG/fewclouds.jpg', 'IMG/scatteredcloud.jpg', 'IMG/brokenclouds.jpg', 'IMG/showerrain.png', 'IMG/rain.jpg', 'IMG/thunderstorm.jpg', 'IMG/snow.jpg', 'IMG/mist.jpg'];


var icons = [clearsky, fewclouds, scatterdclouds, brokenclouds, showerrain, rain, thunderstrom, snow, mist];

var conditions = ['clear sky', 'few clouds', 'scatterd clouds', 'broken clouds', 'shower rain', 'rain', 'thunder strom', 'snow', 'mist'];

var a = '<img src="IMG/clearsky.jpg" height="20" width="20"/>';
var b = '<img src="IMG/fewclouds.jpg" height="20" width="20"/>';
var c = '<img src="IMG/scatteredcloud.jpg" height="20" width="20" />';
var d = '<img src="IMG/brokenclouds.jpg" height="20" width="20" />';
var e = '<img src="IMG/showerrain.png" height="20" width="20" />';
var f = '<img src="IMG/rain.jpg"  height="20" width="20"/>';
var g = '<img src="IMG/thunderstorm.jpg" height="20" width="20" />';
var h = '<img src="IMG/snow.jpg" height="20" width="20" />';
var i = '<img src="IMG/mist.jpg" height="20" width="20" />';



//storing cloud status scuch as clear sky, scattered.... to be used in for loop below 





//End of custom weather layer
var dayWise = new Array();


function initialize() {
    // google.maps.visualRefresh = true;



    var cordA1 = [
                new google.maps.LatLng(10.0912062, 130.2838063), //Latitude: 10.0912062 Longitude: 130.2838063//

                new google.maps.LatLng(11.0771653, 126.1888404)
    ];

    var cordA2 = [
                new google.maps.LatLng(9.7900202, 130.2831483),

                new google.maps.LatLng(10.7764758, 126.1885448)

    ];
                                                                    //    E            D      	 C		    B		    A				
    var cordA3 = [										            //	----		 ----	   ----	      ----        ----  1
            new google.maps.LatLng(9.4260974, 130.2822125),			//	----		 ----      ----		  ----		  ----	2
            new google.maps.LatLng(10.4100288, 126.1888201)			//	 ----		 ----      ----		  ----		  ----	3

    ];


    var cordB1 = [
            new google.maps.LatLng(11.0771653, 126.1888404),
            new google.maps.LatLng(11.9780895, 121.3008417)
    ];

    var cordB2 = [
                new google.maps.LatLng(10.7764758, 126.1885448),
                new google.maps.LatLng(11.6778583, 121.3007479)

    ];

    var cordB3 = [
            new google.maps.LatLng(10.4100288, 126.1888201),//Latitude: 10.2462044   Longitude: 126.9838761//

            new google.maps.LatLng(11.3693968, 121.3008587)

    ];

    var cordC1 = [
            new google.maps.LatLng(11.9780895, 121.3008417),
            new google.maps.LatLng(13.4770688, 116.9208823),

    ];

    var cordC2 = [
            new google.maps.LatLng(11.6778583, 121.3007479),
            new google.maps.LatLng(13.1765088, 116.9203996),

    ];

    var cordC3 = [
            new google.maps.LatLng(11.3693968, 121.3008587),
            new google.maps.LatLng(12.8759458, 116.919918),

    ];

    var mapProp1 =
            {
                center: centerStorm,
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };

    //var mapProp2 =
    //		{
    //		    center: centerWeather,
    //		    zoom: 8,
    //		    mapTypeId: google.maps.MapTypeId.RODEMAP,
    //		};



    map1 = new google.maps.Map(document.getElementById("stormMap"), mapProp1);


    map1.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById("legend"));

    var Stormimage =
    {
        url: '\\IMG\\stormMarker.png',
        size: new google.maps.Size(50, 50),
    }

    var iconPosition = new google.maps.LatLng(9.7900202, 130.2831483);

    marker = new google.maps.Marker
    ({
        icon: Stormimage,
    });

    marker.setMap(map1);
    marker.setPosition(iconPosition);

    //-----------------------------------------------------------------------------------------//
    // map2 = new google.maps.Map(document.getElementById("weatherMap"), mapProp2);
    //-----------------------------------------------------------------------------------------//
    //   var dashLine = {
    //   path: 'M 0,-1 0,1',    strokeOpacity: 1,
    ////    scale: 4
    //  };

    //--------------------------------------------------------------------------//


    //MAP 1 Create the polyline and add the symbol to it via the 'icons' property.


    polyA1 = new google.maps.Polyline
    ({
        path: cordA1,
        strokeWeight: 20,
        strokeOpacity: 0.2,

        map: map1,
        strokeColor: '#ffc40d',


    });


    polyA3 = new google.maps.Polyline
    ({
        path: cordA3,
        strokeWeight: 20,
        strokeOpacity: 0.3,

        map: map1,
        strokeColor: '#ffc40d',
    });


    polyB1 = new google.maps.Polyline
    ({
        path: cordB1,
        strokeWeight: 20,
        strokeOpacity: 0.3,

        map: map1,
        strokeColor: '#46a546'
    });


    polyB3 = new google.maps.Polyline
    ({
        path: cordB3,
        strokeWeight: 20,
        strokeOpacity: 0.3,


        map: map1,
        strokeColor: '#46a546'
    });

    polyC1 = new google.maps.Polyline
    ({
        path: cordC1,
        strokeWeight: 20,
        strokeOpacity: 0.3,


        map: map1,
        strokeColor: '#049cdb'
    });


    polyC3 = new google.maps.Polyline
    ({
        path: cordC3,
        strokeWeight: 20,
        strokeOpacity: 0.3,

        map: map1,
        strokeColor: '#049cdb'

    });


    lineSymbolDay =
    {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 5,
        strokeColor: 'black',


    };

    lineSymbol =
    {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 5,
        strokeColor: 'black',


    };

    polyA2 = new google.maps.Polyline({
        path: cordA2,
        icons: [{
            icon: lineSymbol,
            offset: '100%'
        }],
        map: map1,
        strokeColor: 'red',
        strokeWeight: 200,
        strokeOpacity: 0.5,
    });



    polyB2 = new google.maps.Polyline({
        path: cordB2,
        icons: [{
            icon: lineSymbol,
            offset: '100%'
        }],
        map: map1,
        strokeColor: '#ffc40d',
        strokeWeight: 200,
        strokeOpacity: 0.5,
    });

    polyC2 = new google.maps.Polyline({
        path: cordC2,
        icons: [{
            icon: lineSymbol,
            offset: '100%'
        }],
        map: map1,
        strokeColor: '#46a546',
        strokeWeight: 200,
        strokeOpacity: 0.5,
    });

    //-------------------------------------------------------------// 

    //    // MAP 2 - Show Weather information Google weather layer

    //var weatherOn = false;

    //weatherLayer = new google.maps.weather.WeatherLayer
    //		({
    //		    temperatureUnits: google.maps.weather.TemperatureUnit.CELSIUS,
    //		    windSpeedUnits: google.maps.weather.WindSpeedUnit.MILES_PER_HOUR,
    //		    suppressInfoWindows: false

    //		});
    //weatherLayer.setMap(map2);

    //var cloudLayer = new google.maps.weather.CloudLayer();
    //cloudLayer.setMap(map2);

    //google.maps.event.addListener(weatherLayer, 'click', function (e) {
    //   document.getElementById("location").innerHTML = e.featureDetails.location;
    //   document.getElementById("wind").innerHTML = e.featureDetails.current.windDirection + ' at ' + e.featureDetails.current.windSpeed + ' miles/hr';
    //   document.getElementById("temperature").innerHTML = e.featureDetails.current.temperature + ' °C ';
    //    document.getElementById("humidity").innerHTML = e.featureDetails.current.humidity + '%';
    //});

    //-------------------------------------------------------------------------//
    //DAY WISE CO_ORDINATES AND LINES

    cordsDay1 = [
 //    			new google.maps.LatLng(6.4,156.0),
 //			    new google.maps.LatLng(6.4,152.7),
 //                new google.maps.LatLng(6.0,150.2),
 //			    new google.maps.LatLng(6.5,147.3),
                 new google.maps.LatLng(9.9881682, 129.0993353),
                 new google.maps.LatLng(9.9881682, 129.0993353),


                 new google.maps.LatLng(9.9881682, 129.0993353),
                 new google.maps.LatLng(10.6, 127.0)
    ];


    cordsDay2 = [
 //    			new google.maps.LatLng(6.8,143.0),
 //			    new google.maps.LatLng(7.1,141.2),
                new google.maps.LatLng(10.6, 127.0),
                 new google.maps.LatLng(10.6, 127.0),
                 new google.maps.LatLng(10.6, 127.0),
                 new google.maps.LatLng(10.6, 127.0),


                 new google.maps.LatLng(10.6, 127.0),
                 new google.maps.LatLng(11.0750123, 124.7856626)

    ];

    cordsDay3 = [
//                new google.maps.LatLng(9.3,131.1),										
//    			new google.maps.LatLng(10.2,129.1),
                new google.maps.LatLng(11.0750123, 124.7856626),//Start

                new google.maps.LatLng(11.0750123, 124.7856626),
                new google.maps.LatLng(11.0750123, 124.7856626),
                new google.maps.LatLng(11.0750123, 124.7856626),
                new google.maps.LatLng(11.6553923, 122.0513009)//end

    ];

    cordsDay4 = [
                new google.maps.LatLng(11.6553923, 122.0513009),
                new google.maps.LatLng(11.6553923, 122.0513009),
                new google.maps.LatLng(11.6553923, 122.0513009),
                new google.maps.LatLng(12.2735072, 119.5606272),
            //    new google.maps.LatLng(17.8,109.0)         
    ];

    cordsDay5 = [
                 new google.maps.LatLng(12.2735072, 119.5606272),
                 new google.maps.LatLng(12.2735072, 119.5606272),
                 new google.maps.LatLng(12.2735072, 119.5606272),
                 new google.maps.LatLng(12.2735072, 119.5606272),
                 new google.maps.LatLng(12.2735072, 119.5606272),
                 new google.maps.LatLng(13.8668639, 117.3366929)
    ];


    polyDay1 = new google.maps.Polyline
    ({
        path: cordsDay1,
        //		    icons: [{
        //      			        icon:lineSymbolDay,
        //			            offset: '100%'
        //		   	        }],

        strokeColor: 'red',
        strokeWeight: 8,
        strokeOpacity: 0.6
    });
    dayWise.push(polyDay1);

    polyDay2 = new google.maps.Polyline
    ({
        path: cordsDay2,
        //		    icons: [{
        //      			        icon: lineSymbolDay,
        //			            offset: '100%'
        //		   	        }],
        //    
        strokeColor: '#FF6600',
        strokeWeight: 8,
        strokeOpacity: 0.6
    });
    dayWise.push(polyDay2);

    polyDay3 = new google.maps.Polyline
   ({
       path: cordsDay3,
       //		    icons: [{
       //      			        icon: lineSymbolDay,
       //			            offset: '100%'
       //		   	        }],
       //    
       strokeColor: '#ffc40d',
       strokeWeight: 8,
       strokeOpacity: 0.6
   });
    dayWise.push(polyDay3);

    polyDay4 = new google.maps.Polyline
    ({
        path: cordsDay4,
        //		    icons: [{
        //      			        icon: lineSymbolDay,
        //			            offset: '100%'
        //		   	        }],
        //    
        strokeColor: 'green',
        strokeWeight: 8,
        strokeOpacity: 0.6
    });
    dayWise.push(polyDay4);

    polyDay5 = new google.maps.Polyline
    ({
        path: cordsDay5,
        //		    icons: [{
        //      			        icon: lineSymbolDay,
        //			            offset: '100%'
        //		   	        }],

        strokeColor: '#0198E1',
        strokeWeight: 0,
        strokeOpacity: 0
    });
    dayWise.push(polyDay5);


    followPath();

    //custom weather map initialization begins

    var centerwmap = { lat: 15.4755, lng: 119.8927 };
    mapw = new google.maps.Map(document.getElementById('weatherMap'),
        {
            zoom: 8,
            center: centerwmap,
            zoomControl: true,
            scaleControl: true,
            mapTypeId: google.maps.MapTypeId.RODEMAP
        });

    mapw.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('weatherlegend'));


    //-----------------Icon For Batangas------------------------------//
    var contentString1 = '<iframe src="https://www.meteoblue.com/en/weather/widget/daily/batangas_philippines_1726280?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=1&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=1&layout=light"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups" style="width: 378px;height: 458px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/forecast/week/batangas_philippines_1726280?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>';
    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1,
    });
    var markerbatangas = new google.maps.Marker({
        position: new google.maps.LatLng(13.756465, 121.058308),
        map: mapw,
        icon: { url: fewclouds, scaledSize: new google.maps.Size(60, 65) },
        title: 'Batangas'
    });

    markerbatangas.addListener('click', function () {
        infowindow1.open(mapw, markerbatangas);
    });

    //---------------Icon For Rizal------------------------//

    var contentString2 = '<iframe src="https://www.meteoblue.com/en/weather/widget/daily/rizal_philippines_1691606?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=1&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=1&layout=light"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups" style="width: 378px;height: 458px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/forecast/week/rizal_philippines_1691606?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });
    var markerrizal = new google.maps.Marker({
        position: new google.maps.LatLng(14.603745, 121.308409),
        map: mapw,
        icon: { url: brokenclouds, scaledSize: new google.maps.Size(60, 65) },
        title: 'Rizal'
    });
    markerrizal.addListener('click', function () {
        infowindow2.open(mapw, markerrizal);
    });
    //------------------------Cavite City---------------------------------//

    var contentString3 = '<iframe src="https://www.meteoblue.com/en/weather/widget/daily/cavite-city_philippines_1717641?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=1&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=1&layout=light"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups" style="width: 378px;height: 458px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/forecast/week/cavite-city_philippines_1717641?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });
    var markercavite = new google.maps.Marker({
        position: new google.maps.LatLng(14.479130, 120.896963),
        map: mapw,
        icon: { url: brokenclouds, scaledSize: new google.maps.Size(60, 65) },
        title: 'Cavite'
    });
    markercavite.addListener('click', function () {
        infowindow3.open(mapw, markercavite);
    });

    //--------------Quezon City-------------------------//

    var contentString4 = '<iframe src="https://www.meteoblue.com/en/weather/widget/daily/quezon_philippines_1692196?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=1&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=1&layout=light"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups" style="width: 378px;height: 458px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/forecast/week/quezon_philippines_1692196?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>';
    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4,
    });
    var markerquezon = new google.maps.Marker({
        position: new google.maps.LatLng(14.031391, 122.113091),
        map: mapw,
        icon: { url: fewclouds, scaledSize: new google.maps.Size(60, 65) },
        title: 'Quezon'
    });
    markerquezon.addListener('click', function () {
        infowindow4.open(mapw, markerquezon);
    });

    //-----Icon For Metro Manila----------------------//

    var contentString5 = '<iframe src="https://www.meteoblue.com/en/weather/widget/daily/manila_philippines_1701668?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=1&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=1&layout=light"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups" style="width: 378px;height: 458px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/forecast/week/manila_philippines_1701668?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>';
    var infowindow5 = new google.maps.InfoWindow({
        content: contentString5,
    });
    var markermetromanila = new google.maps.Marker({
        position: new google.maps.LatLng(14.5995, 120.9842),
        map: mapw,
        icon: { url: clearsky, scaledSize: new google.maps.Size(60, 65) },
        title: 'Metro Manila'
    });
    markermetromanila.addListener('click', function () {
        infowindow5.open(mapw, markermetromanila);
    });

    //-------------Icon For Bulacan------------------------//
    var contentString6 = '<iframe src="https://www.meteoblue.com/en/weather/widget/daily/bulacan_philippines_1723066?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=1&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=1&layout=light"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups" style="width: 378px;height: 458px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/forecast/week/bulacan_philippines_1723066?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>';
    var infowindow6 = new google.maps.InfoWindow({
        content: contentString6,
    });
    var markerbulcan = new google.maps.Marker({
        position: new google.maps.LatLng(14.794273, 120.879901),
        map: mapw,
        icon: { url: clearsky, scaledSize: new google.maps.Size(60, 65) },
        title: 'Bulcan'
    });
    markerbulcan.addListener('click', function () {
        infowindow6.open(mapw, markerbulcan);
    });

    //-----------------------Pampanga----------------------------//
    var contentString7 = '<iframe src="https://www.meteoblue.com/en/weather/widget/daily/pampanga_philippines_1695849?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=1&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=1&layout=light"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups" style="width: 378px;height: 458px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/forecast/week/pampanga_philippines_1695849?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>';
    var infowindow7 = new google.maps.InfoWindow({
        content: contentString7,
    });
    var markerpampanga = new google.maps.Marker({
        position: new google.maps.LatLng(15.079409, 120.619989),
        map: mapw,
        icon: { url: brokenclouds, scaledSize: new google.maps.Size(60, 65) },
        title: 'Pampanga'
    });
    markerpampanga.addListener('click', function () {
        infowindow7.open(mapw, markerpampanga);
    });

    //--------------Laguan-----------------------------------//
    var contentString8 = '<iframe src="https://www.meteoblue.com/en/weather/widget/daily/languan_philippines_1979711?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=1&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=1&layout=light"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups" style="width: 378px;height: 458px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/forecast/week/languan_philippines_1979711?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>';
    var infowindow8 = new google.maps.InfoWindow({
        content: contentString8,
    });
    var markerlaguna = new google.maps.Marker({
        position: new google.maps.LatLng(14.140663, 121.469177),
        map: mapw,
        icon: { url: brokenclouds, scaledSize: new google.maps.Size(60, 65) },
        title: 'Laguna'
    });
    markerlaguna.addListener('click', function () {
        infowindow8.open(mapw, markerlaguna);
    });

    //var cloudbatangas = "@Url.Content("/weatherdata/forecast/time[1]/clouds/@value;")";

    //var label = document.getElementById("<%=Label1.ClientID%>");
    //var cloudrizal = document.getElementById('Label30').innerText;
    //var cloudbulcan = document.getElementById('Label55').innerText;
    //var cloudmetromanila = document.getElementById('Label80').innerText;
    //var cloudpampanga = document.getElementById('Label105').innerText;
    //var cloudcavite = document.getElementById('Label130').innerText;
    //var cloudlaguna = document.getElementById('Label155').innerText;
    //var cloudquezon = document.getElementById('Label180').innerText;


    //var infoicon = [a, b, c, d, e, f, g, h, i];

    //var bulcanday1 = document.getElementById('Label55').innerText;
    //var bulcanday2 = document.getElementById('Label60').innerText;
    //var bulcanday3 = document.getElementById('Label65').innerText;
    //var bulcanday4 = document.getElementById('Label70').innerText;
    //var bulcanday5 = document.getElementById('Label75').innerText;

    //var metromaniladay1 = document.getElementById('Label80').innerText;
    //var metromaniladay2 = document.getElementById('Label85').innerText;
    //var metromaniladay3 = document.getElementById('Label90').innerText;
    //var metromaniladay4 = document.getElementById('Label95').innerText;
    //var metromaniladay5 = document.getElementById('Label100').innerText;

    //var pampangaday1 = document.getElementById('Label105').innerText;
    //var pampangaday2 = document.getElementById('Label110').innerText;
    //var pampangaday3 = document.getElementById('Label115').innerText;
    //var pampangaday4 = document.getElementById('Label120').innerText;
    //var pampangaday5 = document.getElementById('Label125').innerText;

    //var batangasday1 = document.getElementById('Label5').innerText;
    //var batangasday2 = document.getElementById('Label10').innerText;
    //var batangasday3 = document.getElementById('Label15').innerText;
    //var batangasday4 = document.getElementById('Label20').innerText;
    //var batangasday5 = document.getElementById('Label25').innerText;

    //var rizalday1 = document.getElementById('Label30').innerText;
    //var rizalday2 = document.getElementById('Label35').innerText;
    //var rizalday3 = document.getElementById('Label40').innerText;
    //var rizalday4 = document.getElementById('Label45').innerText;
    //var rizalday5 = document.getElementById('Label50').innerText;

    //var caviteday1 = document.getElementById('Label130').innerText;
    //var caviteday2 = document.getElementById('Label135').innerText;
    //var caviteday3 = document.getElementById('Label140').innerText;
    //var caviteday4 = document.getElementById('Label145').innerText;
    //var caviteday5 = document.getElementById('Label150').innerText;

    //var lagunaday1 = document.getElementById('Label155').innerText;
    //var lagunaday2 = document.getElementById('Label160').innerText;
    //var lagunaday3 = document.getElementById('Label165').innerText;
    //var lagunaday4 = document.getElementById('Label170').innerText;
    //var lagunaday5 = document.getElementById('Label175').innerText;

    //var quezonday1 = document.getElementById('Label180').innerText;
    //var quezonday2 = document.getElementById('Label185').innerText;
    //var quezonday3 = document.getElementById('Label190').innerText;
    //var quezonday4 = document.getElementById('Label195').innerText;
    //var quezonday5 = document.getElementById('Label200').innerText;

    //var infobatangas1;
    //var infobatangas2;
    //var infobatangas3;
    //var infobatangas4;
    //var infobatangas5;

    //var inforizal1;
    //var inforizal2;
    //var inforizal3;
    //var inforizal4;
    //var inforizal5;

    //var infometromanila1;
    //var infometromanila2;
    //var infometromanila3;
    //var infometromanila4;
    //var infometromanila5;

    //var infoquezon1;
    //var infoquezon2;
    //var infoquezon3;
    //var infoquezon4;
    //var infoquezon5;

    //var infolaguna1;
    //var infolaguna2;
    //var infolaguna3;
    //var infolaguna4;
    //var infolaguna5;

    //var infocavite1;
    //var infocavite2;
    //var infocavite3;
    //var infocavite4;
    //var infocavite5;

    //var infopampanga1;
    //var infopampanga2;
    //var infopampanga3;
    //var infopampanga4;
    //var infopampanga5;

    //var infobulcan1;
    //var infobulcan2;
    //var infobulcan3;
    //var infobulcan4;
    //var infobulcan5;

    //for (var j = 0; j < conditions.length; j++) {
    //    if (batangasday1 === conditions[j]) { infobatangas1 = infoicon[j]; break; }
    //    else { infobatangas3 = infoicon[4]; }
    //}

    //for (var j = 0; j < conditions.length; j++) {
    //    if (batangasday2 === conditions[j]) { infobatangas2 = infoicon[j]; break; }
    //    else { infobatangas3 = infoicon[4]; }
    //}

    //for (var j = 0; j < conditions.length; j++) {
    //    if (batangasday3 === conditions[j]) { infobatangas3 = infoicon[j]; break; }
    //    else { infobatangas3 = infoicon[4]; }
    //}

    //for (var j = 0; j < conditions.length; j++) {
    //    if (batangasday4 === conditions[j]) { infobatangas4 = infoicon[j]; break; }
    //    else { infobatangas4 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (batangasday5 === conditions[j]) { infobatangas5 = infoicon[j]; break; }
    //    else { infobatangas5 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (rizalday1 === conditions[j]) { inforizal1 = infoicon[j]; break; }
    //    else { inforizal1 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (rizalday2 === conditions[j]) { inforizal2 = infoicon[j]; break; }
    //    else { inforizal2 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (rizalday3 === conditions[j]) { inforizal3 = infoicon[j]; break; }
    //    else { inforizal3 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (rizalday4 === conditions[j]) { inforizal4 = infoicon[j]; break; }
    //    else { inforizal4 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (rizalday5 === conditions[j]) { inforizal5 = infoicon[j]; break; }
    //    else { inforizal5 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (bulcanday1 === conditions[j]) { infobulcan1 = infoicon[j]; break; }
    //    else { infobulcan1 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (bulcanday2 === conditions[j]) { infobulcan2 = infoicon[j]; break; }
    //    else { infobulcan2 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (bulcanday3 === conditions[j]) { infobulcan3 = infoicon[j]; break; }
    //    else { infobulcan3 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (bulcanday4 === conditions[j]) { infobulcan4 = infoicon[j]; break; }
    //    else { infobulcan4 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (bulcanday5 === conditions[j]) { infobulcan5 = infoicon[j]; break; }
    //    else { infobulcan5 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (metromaniladay1 === conditions[j]) { infometromanila1 = infoicon[j]; break; }
    //    else { infometromanila1 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (metromaniladay2 === conditions[j]) { infometromanila2 = infoicon[j]; break; }
    //    else { infometromanila2 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (metromaniladay3 === conditions[j]) { infometromanila3 = infoicon[j]; break; }
    //    else { infometromanila3 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (metromaniladay4 === conditions[j]) { infometromanila4 = infoicon[j]; break; }
    //    else { infometromanila4 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (metromaniladay5 === conditions[j]) { infometromanila5 = infoicon[j]; break; }
    //    else { infometromanila5 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (pampangaday1 === conditions[j]) { infopampanga1 = infoicon[j]; break; }
    //    else { infopampanga1 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (pampangaday2 === conditions[j]) { infopampanga2 = infoicon[j]; break; }
    //    else { infopampanga2 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (pampangaday3 === conditions[j]) { infopampanga3 = infoicon[j]; break; }
    //    else { infopampanga3 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (pampangaday4 === conditions[j]) { infopampanga4 = infoicon[j]; break; }
    //    else { infopampanga4 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (pampangaday5 === conditions[j]) { infopampanga5 = infoicon[j]; break; }
    //    else { infopampanga5 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (caviteday1 === conditions[j]) { infocavite1 = infoicon[j]; break; }
    //    else { infocavite1 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (caviteday2 === conditions[j]) { infocavite2 = infoicon[j]; break; }
    //    else { infocavite2 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (caviteday3 === conditions[j]) { infocavite3 = infoicon[j]; break; }
    //    else { infocavite3 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (caviteday4 === conditions[j]) { infocavite4 = infoicon[j]; break; }
    //    else { infocavite4 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (caviteday5 === conditions[j]) { infocavite5 = infoicon[j]; break; }
    //    else { infocavite5 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (lagunaday1 === conditions[j]) { infolaguna1 = infoicon[j]; break; }
    //    else { infolaguna1 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (lagunaday2 === conditions[j]) { infolaguna2 = infoicon[j]; break; }
    //    else { infolaguna2 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (lagunaday3 === conditions[j]) { infolaguna3 = infoicon[j]; break; }
    //    else { infolaguna3 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (lagunaday4 === conditions[j]) { infolaguna4 = infoicon[j]; break; }
    //    else { infolaguna4 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (lagunaday5 === conditions[j]) { infolaguna5 = infoicon[j]; break; }
    //    else { infolaguna5 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (quezonday1 === conditions[j]) { infoquezon1 = infoicon[j]; break; }
    //    else { infoquezon1 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (quezonday2 === conditions[j]) { infoquezon2 = infoicon[j]; break; }
    //    else { infoquezon2 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (quezonday3 === conditions[j]) { infoquezon3 = infoicon[j]; break; }
    //    else { infoquezon3 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (quezonday4 === conditions[j]) { infoquezon4 = infoicon[j]; break; }
    //    else { infoquezon4 = infoicon[4]; }
    //}
    //for (var j = 0; j < conditions.length; j++) {
    //    if (quezonday5 === conditions[j]) { infoquezon5 = infoicon[j]; break; }
    //    else { infoquezon5 = infoicon[4]; }
    //}

    //var contentString1 = ' <div>' + ' <img src="Clouds/bgc-meralco.ico" style="height:20px; width:20px" />' + '<b>Batangas </b>' + ' <table border="1" cellspacing="3" cellpadding="6">' +
    //   '<thead style="background-color:lightblue">' + ' <tr>' + '<td><b>Day' + '</td>' + ' <td><b>Temp &#8451' + '</td>' + '<td><b>Wind(MPH)' + '</td> ' + ' <td><b>Cloud' + '</td>' + '</tr>' + '</thead>' + ' <tbody>' +
    //   ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label1').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label2').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label4').innerText + '-' + document.getElementById('Label3').innerText + '</b></td>' + '<td><b>' + infobatangas1 + '</b></td>' + '</tr>' +
    //   ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label6').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label7').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label9').innerText + '-' + document.getElementById('Label8').innerText + '</b></td>' + '<td><b>' + infobatangas2 + '</b></td>' + '</tr>' +
    //   ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label11').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label12').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label14').innerText + '-' + document.getElementById('Label13').innerText + '</b></td>' + '<td><b>' + infobatangas3 + '</b></td>' + '</tr>' +
    //   ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label16').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label17').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label19').innerText + '-' + document.getElementById('Label18').innerText + '</b></td>' + '<td><b>' + infobatangas4 + '</b></td>' + '</tr>' +
    //   ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label21').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label22').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label24').innerText + '-' + document.getElementById('Label23').innerText + '</b></td>' + '<td><b>' + infobatangas5 + '</b></td>' + '</tr>' + '</tbody>' + '</table>' + '</div>';


    //var contentString2 = ' <div>' + ' <img src="Clouds/bgc-meralco.ico" style="height:20px; width:20px" />' + '<b>Rizal </b>' + ' <table border="1" cellspacing="3" cellpadding="6">' +
    //    '<thead style="background-color:lightblue">' + ' <tr>' + '<td><b>Day' + '</td>' + ' <td><b>Temp &#8451' + '</td>' + '<td><b>Wind(MPH)' + '</td> ' + ' <td><b>Cloud' + '</td>' + '</tr>' + '</thead>' + ' <tbody>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label26').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label27').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label29').innerText + '-' + document.getElementById('Label28').innerText + '</b></td>' + '<td><b>' + inforizal1 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label31').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label32').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label34').innerText + '-' + document.getElementById('Label33').innerText + '</b></td>' + '<td><b>' + inforizal2 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label36').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label37').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label39').innerText + '-' + document.getElementById('Label38').innerText + '</b></td>' + '<td><b>' + inforizal3 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label41').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label42').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label44').innerText + '-' + document.getElementById('Label43').innerText + '</b></td>' + '<td><b>' + inforizal4 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label46').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label47').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label49').innerText + '-' + document.getElementById('Label48').innerText + '</b></td>' + '<td><b>' + inforizal5 + '</b></td>' + '</tr>' + '</tbody>' + '</table>' + '</div>';


    //var contentString3 = ' <div>' + ' <img src="Clouds/bgc-meralco.ico" style="height:20px; width:20px" />' + '<b>Bulcan </b>' + ' <table border="1" cellspacing="3" cellpadding="6">' +
    //    '<thead style="background-color:lightblue">' + ' <tr>' + '<td><b>Day' + '</td>' + ' <td><b>Temp &#8451' + '</td>' + '<td><b>Wind(MPH)' + '</td> ' + ' <td><b>Cloud' + '</td>' + '</tr>' + '</thead>' + ' <tbody>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label51').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label52').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label54').innerText + '-' + document.getElementById('Label53').innerText + '</b></td>' + '<td><b>' + infobulcan1 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label56').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label57').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label59').innerText + '-' + document.getElementById('Label58').innerText + '</b></td>' + '<td><b>' + infobulcan2 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label61').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label62').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label64').innerText + '-' + document.getElementById('Label63').innerText + '</b></td>' + '<td><b>' + infobulcan3 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label66').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label67').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label69').innerText + '-' + document.getElementById('Label68').innerText + '</b></td>' + '<td><b>' + infobulcan4 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label71').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label72').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label74').innerText + '-' + document.getElementById('Label73').innerText + '</b></td>' + '<td><b>' + infobulcan5 + '</b></td>' + '</tr>' + '</tbody>' + '</table>' + '</div>';



    //var contentString4 = ' <div>' + ' <img src="Clouds/bgc-meralco.ico" style="height:20px; width:20px" />' + '<b>Metro Manila </b>' + ' <table border="1" cellspacing="3" cellpadding="6">' +
    //    '<thead style="background-color:lightblue">' + ' <tr>' + '<td><b>Day' + '</td>' + ' <td><b>Temp &#8451' + '</td>' + '<td><b>Wind(MPH)' + '</td> ' + ' <td><b>Cloud' + '</td>' + '</tr>' + '</thead>' + ' <tbody>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label76').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label77').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label79').innerText + '-' + document.getElementById('Label78').innerText + '</b></td>' + '<td><b>' + infometromanila1 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label81').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label82').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label84').innerText + '-' + document.getElementById('Label83').innerText + '</b></td>' + '<td><b>' + infometromanila2 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label86').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label87').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label89').innerText + '-' + document.getElementById('Label88').innerText + '</b></td>' + '<td><b>' + infometromanila3 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label91').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label91').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label94').innerText + '-' + document.getElementById('Label93').innerText + '</b></td>' + '<td><b>' + infometromanila4 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label96').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label97').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label99').innerText + '-' + document.getElementById('Label98').innerText + '</b></td>' + '<td><b>' + infometromanila5 + '</b></td>' + '</tr>' + '</tbody>' + '</table>' + '</div>';




    //var contentString5 = ' <div>' + ' <img src="Clouds/bgc-meralco.ico" style="height:20px; width:20px" />' + '<b>Pampanga </b>' + ' <table border="1" cellspacing="3" cellpadding="6">' +
    //    '<thead style="background-color:lightblue">' + ' <tr>' + '<td><b>Day' + '</td>' + ' <td><b>Temp &#8451' + '</td>' + '<td><b>Wind(MPH)' + '</td> ' + ' <td><b>Cloud' + '</td>' + '</tr>' + '</thead>' + ' <tbody>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label101').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label102').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label104').innerText + '-' + document.getElementById('Label103').innerText + '</b></td>' + '<td><b>' + infopampanga1 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label106').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label107').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label109').innerText + '-' + document.getElementById('Label108').innerText + '</b></td>' + '<td><b>' + infopampanga2 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label111').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label112').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label114').innerText + '-' + document.getElementById('Label113').innerText + '</b></td>' + '<td><b>' + infopampanga3 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label116').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label117').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label119').innerText + '-' + document.getElementById('Label118').innerText + '</b></td>' + '<td><b>' + infopampanga4 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label121').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label122').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label124').innerText + '-' + document.getElementById('Label123').innerText + '</b></td>' + '<td><b>' + infopampanga5 + '</b></td>' + '</tr>' + '</tbody>' + '</table>' + '</div>';



    //var contentString6 = ' <div>' + ' <img src="Clouds/bgc-meralco.ico" style="height:20px; width:20px" />' + '<b>Cavite </b>' + ' <table border="1" cellspacing="3" cellpadding="6">' +
    //    '<thead style="background-color:lightblue">' + ' <tr>' + '<td><b>Day' + '</td>' + ' <td><b>Temp &#8451' + '</td>' + '<td><b>Wind(MPH)' + '</td> ' + ' <td><b>Cloud' + '</td>' + '</tr>' + '</thead>' + ' <tbody>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label126').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label127').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label129').innerText + '-' + document.getElementById('Label128').innerText + '</b></td>' + '<td><b>' + infocavite1 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label131').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label132').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label134').innerText + '-' + document.getElementById('Label133').innerText + '</b></td>' + '<td><b>' + infocavite2 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label136').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label137').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label139').innerText + '-' + document.getElementById('Label138').innerText + '</b></td>' + '<td><b>' + infocavite3 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label141').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label142').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label144').innerText + '-' + document.getElementById('Label143').innerText + '</b></td>' + '<td><b>' + infocavite4 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label146').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label147').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label149').innerText + '-' + document.getElementById('Label148').innerText + '</b></td>' + '<td><b>' + infocavite5 + '</b></td>' + '</tr>' + '</tbody>' + '</table>' + '</div>';



    //var contentString7 = ' <div>' + ' <img src="Clouds/bgc-meralco.ico" style="height:20px; width:20px" />' + '<b>Laguna </b>' + ' <table border="1" cellspacing="3" cellpadding="6">' +
    //    '<thead style="background-color:lightblue">' + ' <tr>' + '<td><b>Day' + '</td>' + ' <td><b>Temp &#8451' + '</td>' + '<td><b>Wind(MPH)' + '</td> ' + ' <td><b>Cloud' + '</td>' + '</tr>' + '</thead>' + ' <tbody>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label151').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label152').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label154').innerText + '-' + document.getElementById('Label153').innerText + '</b></td>' + '<td><b>' + infolaguna1 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label156').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label157').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label159').innerText + '-' + document.getElementById('Label158').innerText + '</b></td>' + '<td><b>' + infolaguna2 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label161').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label162').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label164').innerText + '-' + document.getElementById('Label163').innerText + '</b></td>' + '<td><b>' + infolaguna3 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label166').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label167').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label169').innerText + '-' + document.getElementById('Label168').innerText + '</b></td>' + '<td><b>' + infolaguna4 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label171').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label172').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label174').innerText + '-' + document.getElementById('Label173').innerText + '</b></td>' + '<td><b>' + infolaguna5 + '</b></td>' + '</tr>' + '</tbody>' + '</table>' + '</div>';



    //var contentString8 = ' <div>' + ' <img src="Clouds/bgc-meralco.ico" style="height:20px; width:20px" />' + '<b>Quezon </b>' + ' <table border="1" cellspacing="3" cellpadding="6">' +
    //    '<thead style="background-color:lightblue">' + ' <tr>' + '<td><b>Day' + '</td>' + ' <td><b>Temp &#8451' + '</td>' + '<td><b>Wind(MPH)' + '</td> ' + ' <td><b>Cloud' + '</td>' + '</tr>' + '</thead>' + ' <tbody>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label176').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label177').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label179').innerText + '-' + document.getElementById('Label178').innerText + '</b></td>' + '<td><b>' + infoquezon1 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label181').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label182').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label184').innerText + '-' + document.getElementById('Label183').innerText + '</b></td>' + '<td><b>' + infoquezon2 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label186').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label187').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label189').innerText + '-' + document.getElementById('Label188').innerText + '</b></td>' + '<td><b>' + infoquezon3 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label191').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label192').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label194').innerText + '-' + document.getElementById('Label193').innerText + '</b></td>' + '<td><b>' + infoquezon4 + '</b></td>' + '</tr>' +
    //    ' <tr>' + ' <td style="background-color:lightblue"><b>' + document.getElementById('Label196').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label197').innerText + '</b></td>' + '  <td><b>' + document.getElementById('Label199').innerText + '-' + document.getElementById('Label198').innerText + '</b></td>' + '<td><b>' + infoquezon5 + '</b></td>' + '</tr>' + '</tbody>' + '</table>' + '</div>';



    //var infowindow1 = new google.maps.InfoWindow({
    //    content: contentString1,
    //});
    //var infowindow2 = new google.maps.InfoWindow({
    //    content: contentString2
    //});
    //var infowindow3 = new google.maps.InfoWindow({
    //    content: contentString3
    //});
    //var infowindow4 = new google.maps.InfoWindow({
    //    content: contentString4
    //});
    //var infowindow5 = new google.maps.InfoWindow({
    //    content: contentString5
    //});
    //var infowindow6 = new google.maps.InfoWindow({
    //    content: contentString6
    //});
    //var infowindow7 = new google.maps.InfoWindow({
    //    content: contentString7
    //});
    //var infowindow8 = new google.maps.InfoWindow({
    //    content: contentString8
    //});


    //var i;
    //var iconbatangas;
    //var iconrizal;
    //var iconbulcan;
    //var iconmetromanila;
    //var iconpampanga;
    //var iconcavite;
    //var iconlaguna;
    //var iconquezon;

    //for (i = 0; i < conditions.length; i++) {
    //    if (cloudbatangas === conditions[i]) { iconbatangas = icons[i]; break; }
    //    else { iconbatangas = icons[5]; }
    //}
    //for (i = 0; i < conditions.length; i++) {
    //    if (cloudrizal === conditions[i]) { iconrizal = icons[i]; break; }
    //    else { iconrizal = icons[5]; }
    //}
    //for (i = 0; i < conditions.length; i++) {
    //    if (cloudbulcan === conditions[i]) { iconbulcan = icons[i]; break; }
    //    else { iconbulcan = icons[5]; }
    //}
    //for (i = 0; i < conditions.length; i++) {
    //    if (cloudmetromanila === conditions[i]) { iconmetromanila = icons[i]; break; }
    //    else { iconmetromanila = icons[5]; }
    //}

    //for (i = 0; i < conditions.length; i++) {
    //    if (cloudpampanga === conditions[i]) { iconpampanga = icons[i]; break; }
    //    else { iconpampanga = icons[5]; }
    //}
    //for (i = 0; i < conditions.length; i++) {
    //    if (cloudcavite === conditions[i]) { iconcavite = icons[i]; break; }
    //    else { iconcavite = icons[5]; }
    //}
    //for (i = 0; i < conditions.length; i++) {
    //    if (cloudlaguna === conditions[i]) { iconlaguna = icons[i]; break; }
    //    else { iconlaguna = icons[5]; }
    //}
    //for (i = 0; i < conditions.length; i++) {
    //    if (cloudquezon === conditions[i]) { iconquezon = icons[i]; break; }
    //    else { iconquezon = icons[5]; }
    //}

    //var markerbatangas = new google.maps.Marker({
    //    position: new google.maps.LatLng(13.756465, 121.058308),
    //    map: mapw,
    //    icon: { url: iconbatangas, scaledSize: new google.maps.Size(60, 65) },
    //    title: 'Batangas'
    //});

    //markerbatangas.addListener('click', function () {
    //    //infowindow1.open(mapw, markerbatangas);
    //});

    //var markerrizal = new google.maps.Marker({
    //    position: new google.maps.LatLng(14.603745, 121.308409),
    //    map: mapw,
    //    icon: { url: iconrizal, scaledSize: new google.maps.Size(60, 65) },
    //    title: 'Rizal'
    //});
    //markerrizal.addListener('click', function () {
    //  //  infowindow2.open(mapw, markerrizal);
    //});


    //var markerbulcan = new google.maps.Marker({
    //    position: new google.maps.LatLng(14.794273, 120.879901),
    //    map: mapw,
    //    icon: { url: iconbulcan, scaledSize: new google.maps.Size(60, 65) },
    //    title: 'Bulcan'
    //});
    //markerbulcan.addListener('click', function () {
    //   // infowindow3.open(mapw, markerbulcan);
    //});

    //var markermetromanila = new google.maps.Marker({
    //    position: new google.maps.LatLng(14.609054, 121.022257),
    //    map: mapw,
    //    icon: { url: iconmetromanila, scaledSize: new google.maps.Size(60, 65) },
    //    title: 'Metro Manila'
    //});
    //markermetromanila.addListener('click', function () {
    //    //infowindow4.open(mapw, markermetromanila);
    //});

    //var markerpampanga = new google.maps.Marker({
    //    position: new google.maps.LatLng(15.079409, 120.619989),
    //    map: mapw,
    //    icon: { url: iconpampanga, scaledSize: new google.maps.Size(60, 65) },
    //    title: 'Pampanga'
    //});
    //markerpampanga.addListener('click', function () {
    //    //infowindow5.open(mapw, markerpampanga);
    //});

    //var markercavite = new google.maps.Marker({
    //    position: new google.maps.LatLng(14.479130, 120.896963),
    //    map: mapw,
    //    icon: { url: iconcavite, scaledSize: new google.maps.Size(60, 65) },
    //    title: 'Cavite'
    //});
    //markercavite.addListener('click', function () {
    //    //infowindow6.open(mapw, markercavite);
    //});
    //var markerlaguna = new google.maps.Marker({
    //    position: new google.maps.LatLng(14.140663, 121.469177),
    //    map: mapw,
    //    icon: { url: iconlaguna, scaledSize: new google.maps.Size(60, 65) },
    //    title: 'Laguna'
    //});
    //markerlaguna.addListener('click', function () {
    //    //infowindow7.open(mapw, markerlaguna);
    //});


    //var markerquezon = new google.maps.Marker({
    //    position: new google.maps.LatLng(14.031391, 122.113091),
    //    map: mapw,
    //    icon: { url: iconquezon, scaledSize: new google.maps.Size(60, 65) },
    //    title: 'Quezon'
    //});
    //markerquezon.addListener('click', function () {
    //    //infowindow8.open(mapw, markerquezon);
    //});

}

function followPath() {

    var countA2 = 0;
    var countB2 = 0;
    var countC2 = 0;

    window.setInterval(function () {
        countA2 = (countA2 + 1) % 200;
        var icons = polyA2.get('icons');
        icons[0].offset = (countA2 / 2) + '%';
        polyA2.set('icons', icons);
    }, 80);

    window.setInterval(function () {
        countB2 = (countB2 + 1) % 200;
        var icons = polyB2.get('icons');
        icons[0].offset = (countB2 / 2) + '%';
        polyB2.set('icons', icons);
    }, 80);

    window.setInterval(function () {
        countC2 = (countC2 + 1) % 200;
        var icons = polyC2.get('icons');
        icons[0].offset = (countC2 / 2) + '%';
        polyC2.set('icons', icons);
    }, 80);

}

google.maps.event.addDomListener(window, 'load', initialize);



function removeInitialLines() {
    polyA1.setMap(null);
    polyA2.setMap(null);
    polyA3.setMap(null);
    polyB1.setMap(null);
    polyB2.setMap(null);
    polyB3.setMap(null);
    polyC1.setMap(null);
    polyC2.setMap(null);
    polyC3.setMap(null);


}


function showPath(day) {
    for (var x = 0 ; x < 5 ; x++) {
        dayWise[x].setMap(null);
    }

    var i = day - 1;
    for (var counter = i; counter < 5; counter++) {
        dayWise[counter].setMap(map1);
    }
}


function day1Storm() {
    var cDay1 = 0;

    marker.setPosition(new google.maps.LatLng(9.9881682, 129.0993353));

    polyDay2.setOptions({
        icons: null
    });
    polyDay3.setOptions({
        icons: null
    });
    polyDay4.setOptions({
        icons: null
    });
    polyDay5.setOptions({
        icons: null
    });

    polyDay1.setOptions({
        icons: [{
            icon: lineSymbolDay,
            offset: '100%'
        }]
    });

    $('#dayinfo').html("DAY 1");

    removeInitialLines();

    showPath(1);

    window.setInterval(function () {
        cDay1 = (cDay1 + 1) % 200;
        var icons = polyDay1.get('icons');
        icons[0].offset = (cDay1 / 2) + '%';
        polyDay1.set('icons', icons);
    }, 80);


}
function day2Storm() {
    var cDay2 = 0;

    marker.setPosition(new google.maps.LatLng(10.6, 127.0));

    polyDay1.setOptions({
        icons: null
    });
    polyDay3.setOptions({
        icons: null
    });
    polyDay4.setOptions({
        icons: null
    });
    polyDay5.setOptions({
        icons: null
    });

    polyDay2.setOptions({
        icons: [{
            icon: lineSymbolDay,
            //			            offset: '100%'
        }]
    });

    $('#dayinfo').html("DAY 2");
    removeInitialLines();
    showPath(2);

    window.setInterval(function () {
        cDay2 = (cDay2 + 1) % 200;
        var icons = polyDay2.get('icons');
        icons[0].offset = (cDay2 / 2) + '%';
        polyDay2.set('icons', icons);
    }, 80);
}

function day3Storm() {
    var cDay3 = 0;

    marker.setPosition(new google.maps.LatLng(11.0750123, 124.7856626));

    polyDay1.setOptions({
        icons: null
    });
    polyDay2.setOptions({
        icons: null
    });
    polyDay4.setOptions({
        icons: null
    });
    polyDay5.setOptions({
        icons: null
    });

    polyDay3.setOptions({
        icons: [{
            icon: lineSymbolDay,
            offset: '100%'
        }]
    });

    $('#dayinfo').html("DAY 3");
    removeInitialLines();
    showPath(3);
    window.setInterval(function () {
        cDay3 = (cDay3 + 1) % 200;
        var icons = polyDay3.get('icons');
        icons[0].offset = (cDay3 / 2) + '%';
        polyDay3.set('icons', icons);
    }, 80);
}

function day4Storm() {
    var cDay4 = 0;

    marker.setPosition(new google.maps.LatLng(11.6553923, 122.0513009));

    polyDay1.setOptions({
        icons: null
    });
    polyDay2.setOptions({
        icons: null
    });
    polyDay3.setOptions({
        icons: null
    });
    polyDay5.setOptions({
        icons: null
    });

    polyDay4.setOptions({
        icons: [{
            icon: lineSymbolDay,
            offset: '100%'
        }]
    });

    $('#dayinfo').html("DAY 4");
    removeInitialLines();
    showPath(4);

    window.setInterval(function () {
        cDay4 = (cDay4 + 1) % 200;
        var icons = polyDay4.get('icons');
        icons[0].offset = (cDay4 / 2) + '%';
        polyDay4.set('icons', icons);
    }, 80);
}

function day5Storm() {
    var cDay5 = 0;

    marker.setPosition(new google.maps.LatLng(12.2735072, 119.5606272));

    polyDay1.setOptions({
        icons: null
    });
    polyDay2.setOptions({
        icons: null
    });
    polyDay3.setOptions({
        icons: null
    });
    polyDay4.setOptions({
        icons: null
    });

    polyDay5.setOptions({
        icons: [{
            icon: lineSymbolDay,
            offset: '100%'
        }]
    });

    $('#dayinfo').html("DAY 5");
    removeInitialLines();
    showPath(5);

    window.setInterval(function () {
        cDay5 = (cDay5 + 1) % 200;
        var icons = polyDay5.get('icons');
        icons[0].offset = (cDay5 / 2) + '%';
        polyDay5.set('icons', icons);
    }, 80);
}


//JQUERY begins here


// News Feed Scroll

var delayb4scroll = 2000 //Specify initial delay before marquee starts to scroll on page (2000 = 2 seconds)
var marqueespeed = 1 //Specify marquee scroll speed (larger is faster 1-10)
var pauseit = 1 //Pause marquee onMousever (0=no. 1=yes)?

var copyspeed = marqueespeed
var pausespeed = (pauseit == 0) ? copyspeed : 0
var actualheight = ''

function scrollmarquee() {
    if (parseInt(cross_marquee.style.top) > (actualheight * (-1) + 8)) //if scroller hasn't reached the end of its height
        cross_marquee.style.top = parseInt(cross_marquee.style.top) - copyspeed + "px" //move scroller upwards
    else //else, reset to original position
        cross_marquee.style.top = parseInt(marqueeheight) + 8 + "px"
}

function initializemarquee() {
    cross_marquee = document.getElementById("vmarquee")
    cross_marquee.style.top = 0
    marqueeheight = document.getElementById("marqueecontainer").offsetHeight
    actualheight = cross_marquee.offsetHeight //height of marquee content (much of which is hidden from view)
    if (window.opera || navigator.userAgent.indexOf("Netscape/7") != -1) { //if Opera or Netscape 7x, add scrollbars to scroll and exit
        cross_marquee.style.height = marqueeheight + "px"
        cross_marquee.style.overflow = "scroll"
        return
    }
    setTimeout('lefttime=setInterval("scrollmarquee()",30)', delayb4scroll)
}

if (window.addEventListener)
    window.addEventListener("load", initializemarquee, false)
else if (window.attachEvent)
    window.attachEvent("onload", initializemarquee)
else if (document.getElementById)
    window.onload = initializemarquee




var main = function () {

    $('.arrow-next').click(function () {

        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');

        //currentSlide.addClass('nextSlide');
        //nextSlide.removeClass('nextSlide');

        $('#stormInfo').toggleClass('hidden');

        if ($('#stormInfo').hasClass('hidden')) {

            $("#stormButton").prop('disabled', false);
            $("#weatherButton").prop('disabled', true);
        }
        else {

            $("#stormButton").prop('disabled', true);
            $("#weatherButton").prop('disabled', false);
        }

        google.maps.event.trigger(mapw, 'resize');


    });


    $('.arrow-prev').click(function () {

        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');

        //currentSlide.addClass('nextSlide');
        //nextSlide.removeClass('nextSlide');

        $('#stormInfo').toggleClass('hidden');

        if ($('#stormInfo').hasClass('hidden')) {

            $("#stormButton").prop('disabled', false);
            $("#weatherButton").prop('disabled', true);
        }
        else {

            $("#stormButton").prop('disabled', true);
            $("#weatherButton").prop('disabled', false);
        }

        google.maps.event.trigger(mapw, 'resize');
    });


    $("#stormButton").click(function () {

        //var currentSlide = $('.active-slide');
        //var prevSlide = currentSlide.prev();

        //if (prevSlide.length === 0) {
        //    prevSlide = $('.slide').last();
        //    prevDot = $('.dot').last();

        //}

        //var currentDot = $('.active-dot');
        //var prevDot = currentDot.prev();

        //currentDot.removeClass('active-dot');
        //prevDot.addClass('active-dot');

        //currentSlide.fadeOut(600).removeClass('active-slide');
        //prevSlide.fadeIn(600).addClass('active-slide');

        ////prevSlide.fadeIn(600).removeClass('nextSlide');
        ////currentSlide.fadeOut(600).addClass('nextSlide');

        //$('#stormInfo').toggleClass('hidden');

        //$("#stormButton").prop('disabled', true);
        //$("#weatherButton").prop('disabled', false);


        //google.maps.event.trigger(mapw, 'resize');


        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');

        //currentSlide.addClass('nextSlide');
        //nextSlide.removeClass('nextSlide');

        $('#stormInfo').toggleClass('hidden');

        $("#stormButton").prop('disabled', true);
        $("#weatherButton").prop('disabled', false);

        google.maps.event.trigger(mapw, 'resize');

        //alert("storm button called");

    });

    $("#weatherButton").click(function () {


        //    var currentSlide = $('.active-slide');
        //    var prevSlide = currentSlide.prev();

        //    var currentDot = $('.active-dot');
        //    var prevDot = currentDot.prev();

        //    if (prevSlide.length === 0) {
        //        prevSlide = $('.slide').last();
        //        prevDot = $('.dot').last();
        //    }

        //    currentDot.removeClass('active-dot');
        //    prevDot.addClass('active-dot');

        //    currentSlide.fadeOut(600).removeClass('active-slide');
        //    prevSlide.fadeIn(600).addClass('active-slide');

        //    //currentSlide.addClass('nextSlide');
        //    //prevSlide.removeClass('nextSlide');

        //    $('#stormInfo').toggleClass('hidden');

        //    $("#stormButton").prop('disabled', false);
        //    $("#weatherButton").prop('disabled', true);

        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');

        //currentSlide.addClass('nextSlide');
        //nextSlide.removeClass('nextSlide');

        $('#stormInfo').toggleClass('hidden');

        $("#stormButton").prop('disabled', false);
        $("#weatherButton").prop('disabled', true);

        google.maps.event.trigger(mapw, 'resize');

        //alert("weather button called");
    });
}

$(document).ready(main);


//var i;

//for (i = 1; i <= 8; i++) {
//    var windspeed = document.getElementById("weatherTable").rows[i].cells[4].innerText;

//    if (windspeed <= 1.5) {
//        document.getElementById("weatherTable").rows[i].cells[6].innerHTML = 'LOW';
//        document.getElementById("weatherTable").rows[i].cells[6].style.backgroundColor = "#83F52C";
//    }
//    else if (windspeed < 10 && windspeed > 1.5) {
//        document.getElementById("weatherTable").rows[i].cells[6].innerHTML = 'MODERATE';
//        document.getElementById("weatherTable").rows[i].cells[6].style.backgroundColor = "#FFCC11";
//    }
//    else {
//        document.getElementById("weatherTable").rows[i].cells[6].innerHTML = 'HIGH';
//        document.getElementById("weatherTable").rows[i].cells[6].style.backgroundColor = "red";
//    }
//}







