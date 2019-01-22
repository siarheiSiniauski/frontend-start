var BlankonMarketingCampaignEventsNew = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonMarketingCampaignEventsNew.dateTimeEvents();
        },

        // =========================================================================
        // DATE & TIME EVENTS
        // =========================================================================
        dateTimeEvents: function () {
            $('.date-range-picker-time').daterangepicker({
                timePicker: true,
                timePickerIncrement: 30,
                locale: {
                    format: 'MM/DD/YYYY h:mm A'
                }
            });
        }

    };

}();

// Call main app init
BlankonMarketingCampaignEventsNew.init();