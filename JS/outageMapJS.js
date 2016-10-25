var markersArray = [];
var geocoder;
var map;

function initialize() {

    geocoder = new google.maps.Geocoder();

    google.maps.visualRefresh = true;
    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
      (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    if (isMobile) {
        var viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }

    var mapDiv = document.getElementById('cityOutages');

    mapDiv.style.width = isMobile ? '100%' : '100%';
    mapDiv.style.height = isMobile ? '100%' : '450px';

    map = new google.maps.Map(mapDiv, {
        center: new google.maps.LatLng(14.506433665842284, 121.17915006992187),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });



    var positions = [
        ['5th Street, East Grace Park, Caloocan, Metro Manila, Philippines',14.65334727086327, 120.98831176757812],
        ['63 Esteban Abada Street, Quezon City, Metro Manila, Philippines', 14.638731925960037, 121.07345581054688],
        ['Lawton Avenue, Taguig, Metro Manila, Philippines', 14.52509770109888, 121.02676391601562],
        ['Calawis Road, Antipolo, Rizal, Philippines', 14.648697039539401, 121.26434326171875]
    ];

    var positions1 = [
    ['5th Street, East Grace Park, Caloocan, Metro Manila, Philippines', 14.65334727086327, 120.97831176757812],
    ['63 Esteban Abada Street, Quezon City, Metro Manila, Philippines', 14.638731925960037, 121.06345581054688],
    ['Lawton Avenue, Taguig, Metro Manila, Philippines', 14.52509770109888, 121.01676391601562],
    ['Calawis Road, Antipolo, Rizal, Philippines', 14.648697039539401, 121.25434326171875]
    ];



    var typenew = 'IMG/poweroutageNEW.png';
    var typeassign = 'IMG/assigned.png';
    var typeresolve = 'IMG/letter_r.png';

    var statunplan = 'IMG/letter_u.png';
    var statplan = 'IMG/letter_p.png';

    var markertype1 = new google.maps.Marker({
            position:new google.maps.LatLng(positions[0][1], positions[0][2]),
       //   map: map,
            title: positions[0][0],
            icon : typenew
        });
      

         var markerstatus1 = new google.maps.Marker({
             position:new google.maps.LatLng(positions1[0][1], positions1[0][2]),
      //      map: map,
            title: positions[0][0],
            icon : statunplan
        });

         var markertype2 = new google.maps.Marker({
            position:new google.maps.LatLng(positions[1][1], positions[1][2]),
      //      map: map,
            title: positions[1][0],
            icon : typeassign
        });

        var markerstatus2 = new google.maps.Marker({
            position:new google.maps.LatLng(positions1[1][1], positions1[1][2]),
       //     map: map,
            title: positions[1][0],
            icon : statplan

        });

        var markertype3 = new google.maps.Marker({
            position:new google.maps.LatLng(positions[2][1], positions[2][2]),
        //    map: map,
            title: positions[2][0],
            icon : typeresolve
        });

        var markerstatus3 = new google.maps.Marker({
            position:new google.maps.LatLng(positions1[2][1], positions1[2][2]),
        //    map: map,
            title: positions[2][0],
            icon : statplan
        });

        var markertype4= new google.maps.Marker({
            position: new google.maps.LatLng(positions[3][1], positions[3][2]),
        //    map: map,
            title: positions[3][0],
            icon: typeassign
           
        });

        var markerstatus4 = new google.maps.Marker({
            position: new google.maps.LatLng(positions1[3][1], positions1[3][2]),
        //    map: map,    
            title: positions[3][0],
            icon: statplan
        });

//        markersArray.push(markerstatus1);
//        markersArray.push(markerstatus2);
//        markersArray.push(markerstatus3);
//        markersArray.push(markerstatus4);

//        markersArray.push(markertype1);
//        markersArray.push(markertype2);
//        markersArray.push(markertype3);
//        markersArray.push(markertype4);


//    for( i = 0; i < positions.length; i++ ) {
//        var position = new google.maps.LatLng(positions[i][1], positions[i][2]);
//        bounds.extend(position);
//        marker = new google.maps.Marker({
//            position: position,
//            map: map,
//            title: positions[i][0]
//        });

//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//            return function() {
//                infoWindow.setContent(infoWindowContent[i][0]);
//                infoWindow.open(map, marker);
//            }
//        })(marker, i));


    layerCity = new google.maps.FusionTablesLayer({
       // map: map,
        heatmap: { enabled: false },
        query: {
            select: "col5\x3e\x3e0",
            from: "19nHU2NcdGSeOzDfOTQacBOdZ_YMTimkNXFlPeSpU",
            where: ""
            
        },
        options: {
            styleId: 3,
            templateId: 3
        }
    });

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));

    layerProvince = new google.maps.FusionTablesLayer({
        map: map,
        heatmap: { enabled: false },
        query: {
            select: "col2",
            from: "1r26ZVVPEZ2qdsOivF9UmrFrl34LUMh3uJ6Zvb7Wu",
            where: ""
        },
        options: {
            styleId: 3,
            templateId: 5
        }
    });

    google.maps.event.addListener(markertype1, 'click', function () {
        document.getElementById("areaName").innerHTML = positions[0][0];
        
        document.getElementById("outageID").innerHTML = "1583090";
        document.getElementById("outageType").innerHTML = "Unplanned";
        document.getElementById("status").innerHTML = "New";

        document.getElementById("crewId").innerHTML = "-";
        document.getElementById("startTime").innerHTML = "15:30";
        document.getElementById("etrPlan").innerHTML = "-";
        document.getElementById("crewStatus").innerHTML = "Not Assigned";
        document.getElementById("timeCrew").innerHTML = "-";
        document.getElementById("etrActual").innerHTML = "-";

    });

    google.maps.event.addListener(markertype2, 'click', function () {
        document.getElementById("areaName").innerHTML = positions[1][0];

        document.getElementById("outageID").innerHTML = "1583091";
        document.getElementById("outageType").innerHTML = "Planned";
        document.getElementById("status").innerHTML = "Assigned";

        document.getElementById("crewId").innerHTML = "15";
        document.getElementById("startTime").innerHTML = "07:45";
        document.getElementById("etrPlan").innerHTML = "08:00";
        document.getElementById("crewStatus").innerHTML = "Assigned";

        document.getElementById("timeCrew").innerHTML = "20 mins";
        document.getElementById("etrActual").innerHTML = "08:20";

    });

    google.maps.event.addListener(markertype3, 'click', function () {

        document.getElementById("areaName").innerHTML = positions[2][0];

        document.getElementById("outageID").innerHTML = "1583092";
        document.getElementById("outageType").innerHTML = "Planned";
        document.getElementById("status").innerHTML = "Resolved";


        document.getElementById("crewId").innerHTML = "10";
        document.getElementById("startTime").innerHTML = "10:00";
        document.getElementById("etrPlan").innerHTML = "10:35";
        document.getElementById("crewStatus").innerHTML = "Assigned";

        document.getElementById("timeCrew").innerHTML = "10 mins";
        document.getElementById("etrActual").innerHTML = "10:50";

    });

    google.maps.event.addListener(markertype4, 'click', function () {

        document.getElementById("areaName").innerHTML = positions[3][0];

        document.getElementById("outageID").innerHTML = "1583093";
        document.getElementById("outageType").innerHTML = "Planned";
        document.getElementById("status").innerHTML = "Assigned";


        document.getElementById("crewId").innerHTML = "16";
        document.getElementById("startTime").innerHTML = "14:00";
        document.getElementById("etrPlan").innerHTML = "14:20";
        document.getElementById("crewStatus").innerHTML = "Assigned";

        document.getElementById("timeCrew").innerHTML = "15 mins";
        document.getElementById("etrActual").innerHTML = "14:35";

    });

    google.maps.event.addListener(markerstatus1, 'click', function () {

        document.getElementById("areaName").innerHTML = positions[0][0];

        document.getElementById("outageID").innerHTML = "1583090";
        document.getElementById("outageType").innerHTML = "Unplanned";
        document.getElementById("status").innerHTML = "New";

        document.getElementById("crewId").innerHTML = "-";
        document.getElementById("startTime").innerHTML = "15:30";
        document.getElementById("etrPlan").innerHTML = "-";
        document.getElementById("crewStatus").innerHTML = "Not Assigned";
        document.getElementById("timeCrew").innerHTML = "-";
        document.getElementById("etrActual").innerHTML = "-";

    });

    google.maps.event.addListener(markerstatus2, 'click', function () {
        document.getElementById("areaName").innerHTML = positions[1][0];

        document.getElementById("outageID").innerHTML = "1583091";
        document.getElementById("outageType").innerHTML = "Planned";
        document.getElementById("status").innerHTML = "Assigned";

        document.getElementById("crewId").innerHTML = "15";
        document.getElementById("startTime").innerHTML = "07:45";
        document.getElementById("etrPlan").innerHTML = "08:00";
        document.getElementById("crewStatus").innerHTML = "Assigned";

        document.getElementById("timeCrew").innerHTML = "20 mins";
        document.getElementById("etrActual").innerHTML = "08:20";

    });

    google.maps.event.addListener(markerstatus3, 'click', function () {

        document.getElementById("areaName").innerHTML = positions[2][0];
        document.getElementById("outageID").innerHTML = "1583092";
        document.getElementById("outageType").innerHTML = "Planned";
        document.getElementById("status").innerHTML = "Resolved";


        document.getElementById("crewId").innerHTML = "10";
        document.getElementById("startTime").innerHTML = "10:00";
        document.getElementById("etrPlan").innerHTML = "10:35";
        document.getElementById("crewStatus").innerHTML = "Assigned";

        document.getElementById("timeCrew").innerHTML = "10 mins";
        document.getElementById("etrActual").innerHTML = "10:50";

    });

    google.maps.event.addListener(markerstatus4, 'click', function () {
        document.getElementById("areaName").innerHTML = positions[3][0];

        document.getElementById("outageID").innerHTML = "1583093";
        document.getElementById("outageType").innerHTML = "Planned";
        document.getElementById("status").innerHTML = "Assigned";


        document.getElementById("crewId").innerHTML = "16";
        document.getElementById("startTime").innerHTML = "14:00";
        document.getElementById("etrPlan").innerHTML = "14:20";
        document.getElementById("crewStatus").innerHTML = "Assigned";

        document.getElementById("timeCrew").innerHTML = "15 mins";
        document.getElementById("etrActual").innerHTML = "14:35";

    });

    google.maps.event.addListener(map, 'zoom_changed', function () {
        var zoomVal = map.getZoom();

        if (zoomVal <= 8) {

      //      $('#OutageInfo').addClass('hidden');

            layerCity.setMap(null);
           
            layerProvince.setMap(map);

            markerstatus1.setMap(null);
            markerstatus2.setMap(null);
            markerstatus3.setMap(null);
            markerstatus4.setMap(null);

            markertype1.setMap(null);
            markertype2.setMap(null);
            markertype3.setMap(null);
            markertype4.setMap(null);

            document.getElementById("l1").innerHTML = "0 to 30";
            document.getElementById("l2").innerHTML = "31 to 60";
            document.getElementById("l3").innerHTML = "61 to 90";
            document.getElementById("l4").innerHTML = "91 to 150";
            document.getElementById("l5").innerHTML = ">150";


            document.getElementById("i1").innerHTML = null;
            document.getElementById("i2").innerHTML = null;
            document.getElementById("i3").innerHTML = null;
            document.getElementById("i4").innerHTML = null;
            document.getElementById("i5").innerHTML = null;


            $('#i1').css("background-color", "#ff9900");
            $('#i1').addClass('googft-legend-swatch');

            $('#i2').css("background-color", "#ffff00");
            $('#i2').addClass('googft-legend-swatch');

            $('#i3').css("background-color", "#00ffff");
            $('#i3').addClass('googft-legend-swatch');

            $('#i4').css("background-color", "#0000ff");
            $('#i4').addClass('googft-legend-swatch');

            $('#i5').css("background-color", "#9900ff");
            $('#i5').addClass('googft-legend-swatch');

        }
        else if (zoomVal > 8 && zoomVal < 10) {

        //    $('#OutageInfo').addClass('hidden');

            layerProvince.setMap(null);
            //    layerMarkerPlan.setMap(null);
            //    layerMarkerStatus.setMap(null);
            layerCity.setMap(map);

            markerstatus1.setMap(null);
            markerstatus2.setMap(null);
            markerstatus3.setMap(null);
            markerstatus4.setMap(null);

            markertype1.setMap(null);
            markertype2.setMap(null);
            markertype3.setMap(null);
            markertype4.setMap(null);

            document.getElementById("l1").innerHTML = "0 to 4";
            document.getElementById("l2").innerHTML = "5 to 9";
            document.getElementById("l3").innerHTML = "10 to 19";
            document.getElementById("l4").innerHTML = "20 to 29";
            document.getElementById("l5").innerHTML = ">30";

            document.getElementById("i1").innerHTML = null;
            document.getElementById("i2").innerHTML = null;
            document.getElementById("i3").innerHTML = null;
            document.getElementById("i4").innerHTML = null;
            document.getElementById("i5").innerHTML = null;

            $('#i1').css("background-color", "#ff9900");
            $('#i1').addClass('googft-legend-swatch');

            $('#i2').css("background-color", "#ffff00");
            $('#i2').addClass('googft-legend-swatch');

            $('#i3').css("background-color", "#00ffff");
            $('#i3').addClass('googft-legend-swatch');

            $('#i4').css("background-color", "#0000ff");
            $('#i4').addClass('googft-legend-swatch');

            $('#i5').css("background-color", "#9900ff");
            $('#i5').addClass('googft-legend-swatch');



        }
        else if (zoomVal >= 10) {

           $('#OutageInfo').removeClass('hidden');

            layerProvince.setMap(null);
            layerCity.setMap(null);

            markerstatus1.setMap(map);
            markerstatus2.setMap(map);
            markerstatus3.setMap(map);
            markerstatus4.setMap(map);

            markertype1.setMap(map);
            markertype2.setMap(map);
            markertype3.setMap(map);
            markertype4.setMap(map);

            document.getElementById("l1").innerHTML = "New";
            document.getElementById("l2").innerHTML = "Resolved";
            document.getElementById("l3").innerHTML = "Assigned";
            document.getElementById("l4").innerHTML = "Planned";
            document.getElementById("l5").innerHTML = "Unplanned";

          

            $('#i1').css("background-color", "");
            $('#i1').removeClass('googft-legend-swatch');

            $('#i2').css("background-color", "");
            $('#i2').removeClass('googft-legend-swatch');

            $('#i3').css("background-color", "");
            $('#i3').removeClass('googft-legend-swatch');

            $('#i4').css("background-color", "");
            $('#i4').removeClass('googft-legend-swatch');

            $('#i5').css("background-color", "");
            $('#i5').removeClass('googft-legend-swatch');


            document.getElementById("i1").innerHTML = "<img src='IMG/poweroutageNEW.png'>";
            document.getElementById("i2").innerHTML = "<img src='IMG/letter_r.png'>";
            document.getElementById("i3").innerHTML = "<img src='IMG/assigned.png'>";
            document.getElementById("i4").innerHTML = "<img src='IMG/letter_p.png'>";
            document.getElementById("i5").innerHTML = "<img src='IMG/letter_u.png'>";


        }

    });

    if (isMobile) {
        var legend = document.getElementById('googft-legend');
        var legendOpenButton = document.getElementById('googft-legend-open');
        var legendCloseButton = document.getElementById('googft-legend-close');
        legend.style.display = 'none';
        legendOpenButton.style.display = 'block';
        legendCloseButton.style.display = 'block';
        legendOpenButton.onclick = function () {
            legend.style.display = 'block';
            legendOpenButton.style.display = 'none';
        }
        legendCloseButton.onclick = function () {
            legend.style.display = 'none';
            legendOpenButton.style.display = 'block';
        }
    }
}
google.maps.event.addDomListener(window, 'load', initialize);





function codeAddress() {
    
    var address = document.getElementById('searchonMap').value + " Philippines";
   
    geocoder.geocode({ 'address': address }, function (results, status) {
        
        if (status == google.maps.GeocoderStatus.OK) {
        
            map.setCenter(results[0].geometry.location);
            
                            var marker = new google.maps.Marker({
                                map: map,
                                position: results[0].geometry.location
                            });
        }
        else {
            alert('Invalid Location : ' + status);
        }
    });
}



// JQuery Begins here

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

        currentSlide.fadeOut(500).removeClass('active-slide');
        nextSlide.fadeIn(500).addClass('active-slide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

    });

    $('.arrow-prev').click(function () {

        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        currentSlide.fadeOut(500).removeClass('active-slide');
        prevSlide.fadeIn(500).addClass('active-slide');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
}
$(document).ready(main);

