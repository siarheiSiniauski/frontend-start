var BlankonInvestorSign = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonInvestorSign.signBackstretch();
        },

        // =========================================================================
        // BACKSTRETCH
        // =========================================================================
        signBackstretch: function () {
            // Duration is the amount of time in between slides,
            // and fade is value that determines how quickly the next image will fade in
            $.backstretch([
                'http://themes.djavaui.com/blankon-fullpack-admin-theme/img/admin-special/investor/login/1.jpg',
                'http://themes.djavaui.com/blankon-fullpack-admin-theme/img/admin-special/investor/login/2.jpg'
            ], {duration: 5000, fade: 750});
        }

    };

}();

// Call main app init
BlankonInvestorSign.init();