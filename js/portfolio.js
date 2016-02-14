/*
 * Open the drawer when the menu ison is clicked.
 * reference: http://www.hongkiat.com/blog/responsive-web-nav/
 */
$(function() {
    var pull = $('#pull');

    menu = $('nav ul');
    menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });


});

/* when window is resized and width is  > 320 then show all menu items */

$(window).resize(function() {
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});
