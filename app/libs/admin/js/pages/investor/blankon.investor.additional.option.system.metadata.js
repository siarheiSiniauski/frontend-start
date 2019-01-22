var BlankonInvestorAdditionalOptionSystemMetadata = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonInvestorAdditionalOptionSystemMetadata.handleBtnAdd();
            BlankonInvestorAdditionalOptionSystemMetadata.handleSettingCountries();
            BlankonInvestorAdditionalOptionSystemMetadata.handleSettingProvince();
            BlankonInvestorAdditionalOptionSystemMetadata.handleSettingCurrencyTypes();
            BlankonInvestorAdditionalOptionSystemMetadata.handleSettingNationality();
        },

        // =========================================================================
        // BUTTON ADD
        // =========================================================================
        handleBtnAdd: function () {
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var target = $(e.target).attr("href") // activated tab
                if(target == '#tab-setting-countries'){
                    $('.btn-add-setting-countries').show();
                    $('.btn-add-setting-provinces').hide();
                    $('.btn-add-setting-currency-types').hide();
                    $('.btn-add-setting-nationality').hide();
                }
                if(target == '#tab-setting-provinces'){
                    $('.btn-add-setting-countries').hide();
                    $('.btn-add-setting-provinces').show();
                    $('.btn-add-setting-currency-types').hide();
                    $('.btn-add-setting-nationality').hide();
                }
                if(target == '#tab-setting-currency-types'){
                    $('.btn-add-setting-countries').hide();
                    $('.btn-add-setting-provinces').hide();
                    $('.btn-add-setting-currency-types').show();
                    $('.btn-add-setting-nationality').hide();
                }
                if(target == '#tab-setting-nationality'){
                    $('.btn-add-setting-countries').hide();
                    $('.btn-add-setting-provinces').hide();
                    $('.btn-add-setting-currency-types').hide();
                    $('.btn-add-setting-nationality').show();
                }
            });
        },

        // =========================================================================
        // SETTING COUNTRIES
        // =========================================================================
        handleSettingCountries: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-setting-countries');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 2 ] } ]
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
        // SETTING PROVINCE
        // =========================================================================
        handleSettingProvince: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-setting-province');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 3 ] } ]
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
        // SETTING CURRENCY TYPES
        // =========================================================================
        handleSettingCurrencyTypes: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-setting-currency-types');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 2 ] } ]
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
        // SETTING NATIONALITY
        // =========================================================================
        handleSettingNationality: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-setting-nationality');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 1 ] } ]
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
        }

    };

}();

// Call main app init
BlankonInvestorAdditionalOptionSystemMetadata.init();