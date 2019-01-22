var BlankonInvestorDashboard = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var globalImgPath = BlankonApp.handleBaseURL()+'/img',
        globalDataPath = BlankonApp.handleBaseURL()+'/assets/admin/data';

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonInvestorDashboard.callModal();
            BlankonInvestorDashboard.sessionTimeout();
            BlankonInvestorDashboard.counterOverview();
            BlankonInvestorDashboard.sessionTimeout();
            BlankonInvestorDashboard.totalInvestments();
            BlankonInvestorDashboard.datatableMedianRaised();
        },

        // =========================================================================
        // CALL MODAL FIRST
        // =========================================================================
        callModal: function () {
            $('#modal-dashboard-investor').modal(
                {
                    show: true,
                    keyboard: false
                }
            );
            $('#modal-dashboard-investor').on('hidden.bs.modal', function (e) {
                BlankonInvestorDashboard.sessionTimeout();
            })
        },

        // =========================================================================
        // SESSION TIMEOUT
        // =========================================================================
        sessionTimeout: function () {
            if($('.demo-dashboard-session').length){
                $.sessionTimeout({
                    title: 'JUST DEMO Your session is about to expire!',
                    logoutButton: 'Logout',
                    keepAliveButton: 'Stay Connected',
                    message: 'Your session will be locked in 2 minute',
                    keepAliveUrl: '#',
                    logoutUrl: 'page-signin.html',
                    redirUrl: 'page-lock-screen.html',
                    ignoreUserActivity: true,
                    warnAfter: 120000,
                    redirAfter: 240000
                });
            }
        },

        // =========================================================================
        // COUNTER OVERVIEW
        // =========================================================================
        counterOverview: function () {
            if($('.counter').length){
                $('.counter').counterUp({
                    delay: 10,
                    time: 4000
                });
            }
        },

        // =========================================================================
        // TOTAL INVESTMENTS
        // =========================================================================
        totalInvestments: function () {
            var chart = c3.generate({
                bindto: '#total-investments',
                data: {
                    columns: [
                        ['InvestmentA', 30, 20, 50, 40, 60, 50],
                        ['InvestmentB', 200, 130, 90, 240, 130, 220],
                        ['InvestmentC', 300, 200, 160, 400, 250, 250],
                        ['InvestmentD', 200, 130, 90, 240, 130, 220],
                        ['InvestmentE', 130, 120, 150, 140, 160, 150]
                    ],
                    types: {
                        InvestmentA: 'bar',
                        InvestmentB: 'bar',
                        InvestmentC: 'spline',
                        InvestmentD: 'line',
                        InvestmentE: 'bar'
                    },
                    groups: [
                        ['data 1','data 2']
                    ]
                },
                color: {
                    pattern: ['#E9573F', '#00B1E1', '#37BC9B', '#906094', '#1F77B4']
                },
                axis: {
                    x: {
                        type: 'categorized'
                    }
                }
            });

            // Expand panel
            BlankonInvestorDashboard.expandPanel(chart);
        },

        expandPanel : function (selector) {
            $('[data-action=expand]').on('click', function(){
                if($(this).parents(".panel").hasClass('panel-fullsize'))
                {
                    setTimeout(function () {
                        selector.resize();
                    }, 1000);
                }
                else
                {
                    setTimeout(function () {
                        selector.resize();
                    }, 1000);
                }
            });
        },

        // =========================================================================
        // DATATABLE MEDIAN RAISED
        // =========================================================================
        datatableMedianRaised: function () {
            var responsiveHelperAjax = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };

            var tableAjax = $('#datatable-median-raised');

            // Using AJAX
            tableAjax.dataTable({
                autoWidth      : false,
                ajax           : globalDataPath+'/datatable-investor.json',
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelperAjax) {
                        responsiveHelperAjax = new ResponsiveDatatablesHelper(tableAjax, breakpointDefinition);
                    }
                },
                rowCallback    : function (nRow) {
                    responsiveHelperAjax.createExpandIcon(nRow);
                },
                drawCallback   : function (oSettings) {
                    responsiveHelperAjax.respond();
                }
            });

        }


    };

}();

// Call main app init
BlankonInvestorDashboard.init();
