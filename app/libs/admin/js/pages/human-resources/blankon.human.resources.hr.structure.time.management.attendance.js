var BlankonHumanResourcesHrStructureTimeManagementAttendance = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonHumanResourcesHrStructureTimeManagementAttendance.handleTimeManagementAttendance();
        },

        // =========================================================================
        // TIME MANAGEMENT ATTENDANCE
        // =========================================================================
        handleTimeManagementAttendance: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-time-management-attendance');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 2,3 ] } ]
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
BlankonHumanResourcesHrStructureTimeManagementAttendance.init();