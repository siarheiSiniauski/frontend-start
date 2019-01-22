var BlankonHumanResourcesDashboard = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var globalImgPath = BlankonApp.handleBaseURL()+'/img';

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonHumanResourcesDashboard.callModal();
            BlankonHumanResourcesDashboard.sessionTimeout();
            BlankonHumanResourcesDashboard.manufacturePieChart();
            BlankonHumanResourcesDashboard.salesPieChart();
            BlankonHumanResourcesDashboard.engineeringPieChart();
            BlankonHumanResourcesDashboard.financialPieChart();
            BlankonHumanResourcesDashboard.numberEmployeeBySalary();
            BlankonHumanResourcesDashboard.engineeringDepartment();
            BlankonHumanResourcesDashboard.comparisonEmployee();
            BlankonHumanResourcesDashboard.numberEmployeeByYear();
        },

        // =========================================================================
        // CALL MODAL FIRST
        // =========================================================================
        callModal: function () {
            $('#modal-dashboard-human-resources').modal(
                {
                    show: true,
                    keyboard: false
                }
            );
            $('#modal-dashboard-human-resources').on('hidden.bs.modal', function (e) {
                BlankonHumanResourcesDashboard.sessionTimeout();
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
        // MANUFACTURE PIE CHART
        // =========================================================================
        manufacturePieChart: function(){
            var chart = c3.generate({
                bindto: '#manufacture-pie-chart',
                data: {
                    // iris data from R
                    columns: [
                        ['male', 50],
                        ['female', 50]
                    ],
                    type : 'pie'
                },
                color: {
                    pattern: ['#E9573F', '#00B1E1']
                },
                pie: {
                    onclick: function (d, i) { console.log(d, i); },
                    onmouseover: function (d, i) { console.log(d, i); },
                    onmouseout: function (d, i) { console.log(d, i); }
                },
                legend: {
                    show: false
                }
            });

            setTimeout(function () {
                chart.load({
                    columns: [
                        ["male", 60],
                        ["female", 40]
                    ]
                });
            }, 1500);

            // Expand panel
            BlankonHumanResourcesDashboard.expandPanel(chart);
        },

        // =========================================================================
        // SALES PIE CHART
        // =========================================================================
        salesPieChart: function(){
            var chart = c3.generate({
                bindto: '#sales-pie-chart',
                data: {
                    // iris data from R
                    columns: [
                        ['male', 50],
                        ['female', 50]
                    ],
                    type : 'pie'
                },
                color: {
                    pattern: ['#E9573F', '#00B1E1']
                },
                pie: {
                    onclick: function (d, i) { console.log(d, i); },
                    onmouseover: function (d, i) { console.log(d, i); },
                    onmouseout: function (d, i) { console.log(d, i); }
                },
                legend: {
                    show: false
                }
            });

            setTimeout(function () {
                chart.load({
                    columns: [
                        ["male", 30],
                        ["female", 70]
                    ]
                });
            }, 1500);

            // Expand panel
            BlankonHumanResourcesDashboard.expandPanel(chart);
        },

        // =========================================================================
        // ENGINEERING PIE CHART
        // =========================================================================
        engineeringPieChart: function(){
            var chart = c3.generate({
                bindto: '#engineering-pie-chart',
                data: {
                    // iris data from R
                    columns: [
                        ['male', 50],
                        ['female', 50]
                    ],
                    type : 'pie'
                },
                color: {
                    pattern: ['#E9573F', '#00B1E1']
                },
                pie: {
                    onclick: function (d, i) { console.log(d, i); },
                    onmouseover: function (d, i) { console.log(d, i); },
                    onmouseout: function (d, i) { console.log(d, i); }
                },
                legend: {
                    show: false
                }
            });

            setTimeout(function () {
                chart.load({
                    columns: [
                        ["male", 55],
                        ["female", 45]
                    ]
                });
            }, 1500);

            // Expand panel
            BlankonHumanResourcesDashboard.expandPanel(chart);
        },

        // =========================================================================
        // FINANCIAL PIE CHART
        // =========================================================================
        financialPieChart: function(){
            var chart = c3.generate({
                bindto: '#financial-pie-chart',
                data: {
                    // iris data from R
                    columns: [
                        ['male', 50],
                        ['female', 50]
                    ],
                    type : 'pie'
                },
                color: {
                    pattern: ['#E9573F', '#00B1E1']
                },
                pie: {
                    onclick: function (d, i) { console.log(d, i); },
                    onmouseover: function (d, i) { console.log(d, i); },
                    onmouseout: function (d, i) { console.log(d, i); }
                },
                legend: {
                    show: false
                }
            });

            setTimeout(function () {
                chart.load({
                    columns: [
                        ["male", 23],
                        ["female", 77]
                    ]
                });
            }, 1500);

            // Expand panel
            BlankonHumanResourcesDashboard.expandPanel(chart);
        },

        // =========================================================================
        // NUMBER EMPLOYEE BY SALARY
        // =========================================================================
        numberEmployeeBySalary: function () {
            var rawData = [
                [14000, 0],
                [9000, 1],
                [20000, 2],
                [25000, 3],
                [45000, 4],
                [50000, 5],
                [47000, 6]
            ];

            var dataSet = [
                { label: "Employee Salary", data: rawData, color: "#E8E800" }
            ];

            var ticks = [
                [0, "< $4000"], [1, "$4000 - $5000"], [2, "$5000 - $6000"], [3, "$6000 - $7000"], [4, "$7000 - $8000"], [5, "$8000 - $9000"], [6, "> $10000"]
            ];


            var options = {
                series: {
                    bars: {
                        show: true
                    }
                },
                bars: {
                    align: "center",
                    barWidth: 0.5,
                    horizontal: true,
                    fillColor: { colors: [{ opacity: 0.5 }, { opacity: 1}] },
                    lineWidth: 1
                },
                xaxis: {
                    axisLabel: "Unit",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 10,
                    max: 100000,
                    tickColor: "#EFEFEF",
                    tickFormatter: function (v, axis) {
                        return $.formatNumber(v, { format: "#,###", locale: "us" });
                    },
                    color:"#E8E800"
                },
                yaxis: {
                    axisLabel: "Employee Salary",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 3,
                    tickColor: "#EFEFEF",
                    ticks: ticks,
                    color:"black"
                },
                legend: {
                    noColumns: 0,
                    labelBoxBorderColor: "#EFEFEF",
                    position: "ne"
                },
                grid: {
                    hoverable: true,
                    borderWidth: 0
                }
            };

            $(document).ready(function () {
                $.plot($("#number-employee-salary-chart"), dataSet, options);
                $("#number-employee-salary-chart").UseTooltip();
            });



            var previousPoint = null, previousLabel = null;

            $.fn.UseTooltip = function () {
                $(this).bind("plothover", function (event, pos, item) {
                    if (item) {
                        if ((previousLabel != item.series.label) ||
                            (previousPoint != item.dataIndex)) {
                            previousPoint = item.dataIndex;
                            previousLabel = item.series.label;
                            $("#tooltip").remove();

                            var x = item.datapoint[0];
                            var y = item.datapoint[1];

                            var color = item.series.color;
                            //alert(color)
                            //console.log(item.series.xaxis.ticks[x].label);

                            showTooltip(item.pageX,
                                item.pageY,
                                color,
                                "<strong>" + item.series.label + "</strong><br>" + item.series.yaxis.ticks[y].label +
                                " : <strong>" + $.formatNumber(x, { format: "#,###", locale: "us" })  + "</strong> USD");
                        }
                    } else {
                        $("#tooltip").remove();
                        previousPoint = null;
                    }
                });
            };

            function showTooltip(x, y, color, contents) {
                $('<div id="tooltip">' + contents + '</div>').css({
                    position: 'absolute',
                    display: 'none',
                    top: y - 10,
                    left: x + 10,
                    border: '2px solid ' + color,
                    padding: '3px',
                    'font-size': '9px',
                    'border-radius': '5px',
                    'background-color': '#fff',
                    'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
                    opacity: 0.9
                }).appendTo("body").fadeIn(200);
            }
        },

        // =========================================================================
        // ENGINEERING DEPARTMENT
        // =========================================================================
        engineeringDepartment: function () {
            if($('#engineering-department-chart').length){
                var piedata = [
                    { label: "Engineer", data: [[1,40]], color: '#37BC9B'},
                    { label: "Engineer Professor", data: [[1,20]], color: '#8CC152'},
                    { label: "Engineer Assistant", data: [[1,50]], color: '#5577B4'},
                    { label: "Senior Engineer", data: [[1,90]], color: '#F6BB42'}
                ];

                function labelFormatter(label, series) {
                    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
                }

                $.plot('#engineering-department-chart', piedata, {
                    series: {
                        pie: {
                            show: true,
                            radius: 1,
                            label: {
                                show: true,
                                radius: 2/3,
                                formatter: labelFormatter,
                                threshold: 0.1
                            }
                        }
                    },
                    grid: {
                        hoverable: true,
                        clickable: true
                    }
                });

            }
        },

        // =========================================================================
        // COMPARISON OF EMPLOYEE
        // =========================================================================
        comparisonEmployee: function () {
            if($('#comparison-employee-chart').length){
                var radarChartData = {
                    labels : ["Communication Skills","Technical Knowledge","Team Work","Meeting Deadline","Problem Solving","Punctuality"],
                    datasets : [
                        {
                            fillColor : "rgba(220,220,220,0.5)",
                            strokeColor : "rgba(220,220,220,1)",
                            pointColor : "rgba(220,220,220,1)",
                            pointStrokeColor : "#fff",
                            data : [65,59,90,81,56,55]
                        },
                        {
                            fillColor : "rgba(151,187,205,0.5)",
                            strokeColor : "rgba(151,187,205,1)",
                            pointColor : "rgba(151,187,205,1)",
                            pointStrokeColor : "#fff",
                            data : [28,48,40,19,96,27]
                        }
                    ]

                };

                var myRadar = new Chart(document.getElementById("comparison-employee-chart").getContext("2d")).Radar(radarChartData,{
                    scaleShowLabels : false,
                    pointLabelFontSize : 10
                });
            }
        },

        // =========================================================================
        // NUMBER OF EMPLOYEE OF YEAR
        // =========================================================================
        numberEmployeeByYear: function () {
            if($('#number-employee-chart').length){
                var barChartData = {
                    labels : ["2010","2011","2012","2013","2014","2015"],
                    datasets : [
                        {
                            fillColor : "#906094",
                            strokeColor : "#906094",
                            data : [65,59,90,81,56,55]
                        }
                    ]

                };

                var myLine = new Chart(document.getElementById("number-employee-chart").getContext("2d")).Bar(barChartData);
            }
        },

        // =========================================================================
        // EXPAND TRIGGER PANEL
        // =========================================================================
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
        }


    };

}();

// Call main app init
BlankonHumanResourcesDashboard.init();
