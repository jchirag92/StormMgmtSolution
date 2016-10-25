var main = function () {

$(".clickable").click(function () {
    var id = $(this).attr('id');
    var target = '#' + id + 'collapsed';

    if ($(target).hasClass("out")) {
        $(target).addClass("in");
        $(target).removeClass("out");
    } else {
        $(target).addClass("out");
        $(target).removeClass("in");
    }
});


}
$(document).ready(main);