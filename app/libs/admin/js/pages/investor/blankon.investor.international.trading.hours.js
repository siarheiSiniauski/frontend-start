var BlankonInvestorInternationalTradingHours = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonInvestorInternationalTradingHours.handleAdminReports();
            BlankonInvestorInternationalTradingHours.handleTimeZone();
        },

        // =========================================================================
        // ADMIN REPORTS
        // =========================================================================
        handleAdminReports: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-trading-hours');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 5 ] } ]
            } );
            tableDom.dataTable({
                autoWidth        : false,
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelperDom) {
                        responsiveHelperDom = new ResponsiveDatatablesHelper(tableDom, breakpointDefinition);
                    }
                },
                rowCallback    : function (nRow) {
                    responsiveHelperDom.createExpandIcon(nRow);
                },
                drawCallback   : function (oSettings) {
                    responsiveHelperDom.respond();
                }
            });
        },

        // =========================================================================
        // TIMEZONE // http://www.timeanddate.com
        // =========================================================================
        handleTimeZone: function () {
            $('#clock_au').jClocksGMT({ analog: false, timeformat: 'hh:mm:ss A', offset: '+8', skin: 2 });
            $('#clock_br').jClocksGMT({ analog: false, timeformat: 'hh:mm:ss A', offset: '-5', skin: 2 });
            $('#clock_ca').jClocksGMT({ analog: false, timeformat: 'hh:mm:ss A', offset: '-7', skin: 2 });
            $('#clock_cn').jClocksGMT({ analog: false, timeformat: 'hh:mm:ss A', offset: '+8', skin: 2 });
            $('#clock_de').jClocksGMT({ analog: false, timeformat: 'hh:mm:ss A', offset: '+2', skin: 2 });
            $('#clock_hk').jClocksGMT({ analog: false, timeformat: 'hh:mm:ss A', offset: '+8', skin: 2 });
            $('#clock_jp').jClocksGMT({ analog: false, timeformat: 'hh:mm:ss A', offset: '+9', skin: 2 });
            $('#clock_ru').jClocksGMT({ analog: false, timeformat: 'hh:mm:ss A', offset: '+3', skin: 2 });
            $('#clock_us').jClocksGMT({ analog: false, timeformat: 'hh:mm:ss A', offset: '-4', skin: 2 });
        }

    };

}();

// Call main app init
BlankonInvestorInternationalTradingHours.init();