var BlankonHumanResourcesAdditionalOptionSubordinates = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonHumanResourcesAdditionalOptionSubordinates.handleTimeManagementProjects();
        },

        // =========================================================================
        // TIME MANAGEMENT PROJECTS
        // =========================================================================
        handleTimeManagementProjects: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-subordinates');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 4,5,6,7,8 ] } ]
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
BlankonHumanResourcesAdditionalOptionSubordinates.init();