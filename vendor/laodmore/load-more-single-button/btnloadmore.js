
/* Button Load more - v1.0.0 - 2018-02-28
* Copyright (c) 2018 NTTPS; */

(function ($) {
    $.fn.btnLoadmore = function (options) {
        var defaults = {
                showItem: 6,
                whenClickBtn: 3,
                textBtn: 'Loadmore ...',
                classBtn : '',
                setCookies: false,
                delayToScroll: 2000,

            },
            options = $.extend(defaults, options);

        this.each(function () {

            var $this = $(this),
                $childrenClass = $($this.children());

            // Get Element Of contents to hide
            $childrenClass.hide();

            //Show Element from Options
            $childrenClass.slice(0, defaults.showItem).show();
            
            $(document).on('click', '.textBTn', function (e) {
                e.preventDefault();
                $childrenClass.filter(':hidden').slice(0, defaults.whenClickBtn).slideDown();
                if ($childrenClass.filter(":hidden").length == 0) {
                    $(".textBTn").fadeOut('slow');
                }
                scrollDown();
               
            });

            // function scrollDown() {
            //     $('html, body').animate({
            //         scrollTop: $childrenClass.filter(":visible").last().offset().top
            //     }, defaults.delayToScroll);
            // }
        });

        

    }
}(jQuery));