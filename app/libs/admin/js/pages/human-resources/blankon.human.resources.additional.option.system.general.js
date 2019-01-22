var BlankonHumanResourcesAdditionalOptionSystemGeneral = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonHumanResourcesAdditionalOptionSystemGeneral.handleBtnAdd();
            BlankonHumanResourcesAdditionalOptionSystemGeneral.handleSettingCompany();
            BlankonHumanResourcesAdditionalOptionSystemGeneral.handleSettingSystem();
            BlankonHumanResourcesAdditionalOptionSystemGeneral.handleSettingEmail();
            BlankonHumanResourcesAdditionalOptionSystemGeneral.handleSettingAttendance();
            BlankonHumanResourcesAdditionalOptionSystemGeneral.handleSettingOther();
        },

        // =========================================================================
        // BUTTON ADD
        // =========================================================================
        handleBtnAdd: function () {
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var target = $(e.target).attr("href") // activated tab
                if(target == '#tab-setting-company'){
                    $('.btn-add-setting-company').show();
                    $('.btn-add-setting-system').hide();
                    $('.btn-add-setting-email').hide();
                    $('.btn-add-setting-attendance').hide();
                    $('.btn-add-setting-other').hide();
                }
                if(target == '#tab-setting-system'){
                    $('.btn-add-setting-company').hide();
                    $('.btn-add-setting-system').show();
                    $('.btn-add-setting-email').hide();
                    $('.btn-add-setting-attendance').hide();
                    $('.btn-add-setting-other').hide();
                }
                if(target == '#tab-setting-email'){
                    $('.btn-add-setting-company').hide();
                    $('.btn-add-setting-system').hide();
                    $('.btn-add-setting-email').show();
                    $('.btn-add-setting-attendance').hide();
                    $('.btn-add-setting-other').hide();
                }
                if(target == '#tab-setting-attendance'){
                    $('.btn-add-setting-company').hide();
                    $('.btn-add-setting-system').hide();
                    $('.btn-add-setting-email').hide();
                    $('.btn-add-setting-attendance').show();
                    $('.btn-add-setting-other').hide();
                }
                if(target == '#tab-setting-other'){
                    $('.btn-add-setting-company').hide();
                    $('.btn-add-setting-system').hide();
                    $('.btn-add-setting-email').hide();
                    $('.btn-add-setting-attendance').hide();
                    $('.btn-add-setting-other').show();
                }
            });
        },

        // =========================================================================
        // SETTING COMPANY
        // =========================================================================
        handleSettingCompany: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-setting-company');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 0,1,2,3 ] } ]
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
        // SETTING SYSTEM
        // =========================================================================
        handleSettingSystem: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-setting-system');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 2, 3 ] } ]
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
        // SETTING EMAIL
        // =========================================================================
        handleSettingEmail: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-setting-email');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 2, 3 ] } ]
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
        // SETTING ATTENDANCE
        // =========================================================================
        handleSettingAttendance: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-setting-attendance');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 2, 3 ] } ]
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
        // SETTING OTHER
        // =========================================================================
        handleSettingOther: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-setting-other');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 2, 3 ] } ]
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
BlankonHumanResourcesAdditionalOptionSystemGeneral.init();