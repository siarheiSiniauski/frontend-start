var BlankonHumanResourcesAdminSystemJobDetailSetup = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonHumanResourcesAdminSystemJobDetailSetup.handleBtnAdd();
            BlankonHumanResourcesAdminSystemJobDetailSetup.handleJobTitles();
            BlankonHumanResourcesAdminSystemJobDetailSetup.handlePayGrades();
            BlankonHumanResourcesAdminSystemJobDetailSetup.handleEmploymentStatus();
        },

        // =========================================================================
        // BUTTON ADD
        // =========================================================================
        handleBtnAdd: function () {
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var target = $(e.target).attr("href") // activated tab
                if(target == '#tab-job-titles'){
                    $('.btn-add-job-titles').show();
                    $('.btn-add-pay-grades').hide();
                    $('.btn-add-employment-status').hide();
                }
                if(target == '#tab-pay-grades'){
                    $('.btn-add-job-titles').hide();
                    $('.btn-add-pay-grades').show();
                    $('.btn-add-employment-status').hide();
                }
                if(target == '#tab-employment-status'){
                    $('.btn-add-job-titles').hide();
                    $('.btn-add-pay-grades').hide();
                    $('.btn-add-employment-status').show();
                }
            });
        },

        // =========================================================================
        // JOB TITLES
        // =========================================================================
        handleJobTitles: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-job-titles');

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
        // PAY GRADES
        // =========================================================================
        handlePayGrades: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-pay-grades');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 1, 4 ] } ]
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
        // EMPLOYMENT STATUS
        // =========================================================================
        handleEmploymentStatus: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-employment-status');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 1,2,3 ] } ]
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
BlankonHumanResourcesAdminSystemJobDetailSetup.init();