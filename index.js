$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    $('#mail').click(function () {
        const mail_text = $('#mail span').text();
        if (mail_text) {
            navigator.clipboard.writeText(mail_text).then(() => {
                alert('Mail Copied');
            })
                .catch(() => {
                    alert('Failed To Copy Mail To Clipboard');
                });
        }
    });
});