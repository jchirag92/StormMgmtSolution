
var main = function () {

    // localStorage.clear();

//    localStorage.removeItem('reportSubmit');

    $('#cancel1').click(function () {
        $('#forElectricService').addClass('hidden');
        $('#forOthers').addClass('hidden');
        $('#fillerImage').removeClass('hidden');
    });

    $('#cancel2').click(function () {
        $('#forElectricService').addClass('hidden');
        $('#forOthers').addClass('hidden');
        $('#fillerImage').removeClass('hidden');
    });
  

}
$(document).ready(main);

//var temp = "notnull";

function fillESUser1() {

    $('#contactNo').val("9673211853");
    $('#username').val("tcs1");
    $('#meterId').val("35974");
    $('#mailadd').val("user1@mail.com");

//    localStorage.setItem('reportSubmit', temp);
}

function fillESUser2() {

    $('#contactNo').val(localStorage.getItem('phonenum'));
    $('#username').val("tcs2");
    $('#meterId').val("78954");
    $('#mailadd').val("user2@mail.com");

   }

function fillOtherUser1() {

    $('#OcontactNo').val("9673211853");
    $('#Ousername').val("tcs1");
    $('#Omailadd').val("user1@mail.com");

//    localStorage.setItem('reportSubmit',temp);
}
function fillOtherUser2() {

    $('#OcontactNo').val(localStorage.getItem('phonenum'));
    $('#Ousername').val("tcs2");
    $('#Omailadd').val("user2@mail.com");

}

function removeReportShowStatus() {

    $('#forElectricService').addClass('hidden');
    $('#forOthers').addClass('hidden');
    $('#fillerImage').removeClass('hidden');
    $('#reportOutage').addClass('hidden');
    $('#statusOfReport').removeClass('hidden');

    var state = localStorage.getItem('reportSubmit');



    if (state != null) {

        $('#treportID').text("12859");
        $('#tLocation').text(localStorage.getItem('location'));
        $('#tZip').html(localStorage.getItem('zipcode'));
        $('#tCity').html(localStorage.getItem('city'));
        $('#tProvince').html(localStorage.getItem('province'));
        $('#tDescription').html(localStorage.getItem('description'));
        $('#tStatus').text("Work in Progress");

    }

    }


function removeStatusShowReport() 
    {
        $('#reportOutage').removeClass('hidden');
        $('#statusOfReport').addClass('hidden');

    }


    var loc;
    var zip;
    var city;
    var province;
    var description;
    var status;

    function submit1() {
        //var number = Math.round(Math.exp(Math.random() * Math.log(10000000 - 0 + 1))) + 0;
        //$.get("https://api-mapper.clicksend.com/http/v2/send.php?method=http&username=aditya0007&key=48D19352-6F7A-EA55-6D57-43A0DAE2B453&to=" + $('#contactNo').val() + "&message=hi%20" + $("#username").val() + ",%20your%20outage%20report%20has%20successfully%20received%20And%20your%20outage%20report%20number%20is%20PhReq" + number);
        loc = $('#location1').val();
        zip = $('#zip1').val();
        city = $('#city1').val();
        province = $('#province1').val()
        description = $('#description1').val();

        status ="electricServices";

        localStorage.setItem('location', loc);
        localStorage.setItem('zipcode', zip);
        localStorage.setItem('city', city);
        localStorage.setItem('province', province);
        localStorage.setItem('description', description);

        localStorage.setItem('reportSubmit', status);

        $('#forElectricService').addClass('hidden');
        $('#forOthers').addClass('hidden');
        $('#fillerImage').removeClass('hidden');

         }

function submit2() {
    //var number = Math.round(Math.exp(Math.random() * Math.log(10000000 - 0 + 1))) + 0;
    //$.get("https://api-mapper.clicksend.com/http/v2/send.php?method=http&username=aditya0007&key=48D19352-6F7A-EA55-6D57-43A0DAE2B453&to=" + $('#OcontactNo').val() + "&message=hi%20" + $("#Ousername").val() + ",%20your%20outage%20report%20has%20successfully%20received%20And%20your%20outage%20report%20number%20is%20PhReq" + number);
    loc = $('#location2').val();
    zip = $('#zip2').val();
    city = $('#city2').val();
    province = $('#province2').val()
    description = $('#description2').val();

    status ="others";

    localStorage.setItem('location', loc);
    localStorage.setItem('zipcode', zip);
    localStorage.setItem('city', city);
    localStorage.setItem('province', province);
    localStorage.setItem('description', description);

    localStorage.setItem('reportSubmit', status);

    $('#forElectricService').addClass('hidden');
    $('#forOthers').addClass('hidden');
    $('#fillerImage').removeClass('hidden');

}
