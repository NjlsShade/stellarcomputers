
/* Nav fix for scrollreveal */
$(document).ready(function() {
        $('div.scroll').click(function() {
            window.scrollBy(0, 2);
            window.scrollBy(0, -2);
            window.scrollBy(0, 2);
            window.scrollBy(0, -2);
        });
});

/* Preload */
$(window).on('load', function() {
   $("#cover").fadeOut(500);
   /* Call ScrollReveal after preload completes */
   var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
   $(function() {
    if (!isMobile) {
        window.sr = ScrollReveal({
            distance: '32%'
        });
        sr.reveal('.from-left', {
            origin: 'left',
        });
        sr.reveal('.from-right', {
            origin: 'right',
        });
        sr.reveal('.from-top', {
            origin: 'top',
        });
        sr.reveal('.from-bottom', {
            origin: 'bottom',
        });
        sr.reveal('.from-logo', {
            origin: 'top',
        });
        sr.reveal('.from-footer', {
            origin: 'bottom',
        });
    }
})
});