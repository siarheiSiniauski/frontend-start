var BlankonHumanResourcesAdditionalOptionSystemUsers = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonHumanResourcesAdditionalOptionSystemUsers.handleBtnAdd();
            BlankonHumanResourcesAdditionalOptionSystemUsers.handleUsers();
            BlankonHumanResourcesAdditionalOptionSystemUsers.handleUserRoles();
        },

        // =========================================================================
        // BUTTON ADD
        // =========================================================================
        handleBtnAdd: function () {
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var target = $(e.target).attr("href") // activated tab
                if(target == '#tab-users'){
                    $('.btn-add-users').show();
                    $('.btn-add-user-roles').hide();
                }
                if(target == '#tab-user-roles'){
                    $('.btn-add-users').hide();
                    $('.btn-add-user-roles').show();
                }
            });
        },

        // =========================================================================
        // SETTING USERS
        // =========================================================================
        handleUsers: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-users');

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
        // SETTING USER ROLES
        // =========================================================================
        handleUserRoles: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };
            var tableDom = $('#datatable-user-roles');

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 1,2 ] } ]
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
BlankonHumanResourcesAdditionalOptionSystemUsers.init();