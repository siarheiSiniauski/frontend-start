'use strict';
var BlankonEcommerceCustomerTicket = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonEcommerceCustomerTicket.chosenSelect();
        },

        // =========================================================================
        // CHOSEN SELECT
        // =========================================================================
        chosenSelect: function () {
            if($('.chosen-select').length){
                $('.chosen-select').chosen();
            }
        }

    };

}();

// Call main app init
BlankonEcommerceCustomerTicket.init();