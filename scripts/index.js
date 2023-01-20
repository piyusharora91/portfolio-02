$(window).load(function () {
    $('#menu').on('click', function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $('#mail').on('click', function () {
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