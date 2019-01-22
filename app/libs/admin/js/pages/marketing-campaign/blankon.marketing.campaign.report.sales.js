var BlankonMarketingCampaignReportSales = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonMarketingCampaignReportSales.salesOverview();
            BlankonMarketingCampaignReportSales.pieChartSales();
            BlankonMarketingCampaignReportSales.weeklyReport();
            BlankonMarketingCampaignReportSales.bestSeller();
        },

        // =========================================================================
        // SALES OVERVIEW
        // =========================================================================
        salesOverview: function () {
            $(window).resize(function() {
                window.area.redraw();
            });
            function morrisArea(){
                window.area = Morris.Area({
                    element: 'sales-overview',
                    data: [
                        { y: '2017-09-10 04:01', a: 105, b:450, c:2402},
                        { y: '2017-09-11 10:45', a: 230, b:670, c:1320},
                        { y: '2017-09-12 05:45', a: 560, b:203, c:340},
                        { y: '2017-09-13 05:55', a: 650, b:908, c:450},
                        { y: '2017-09-14 03:45', a: 1290, b:3200, c:340}],
                    xkey: 'y',
                    ykeys: ['a', 'b', 'c'],
                    labels: ['Credit Sales', 'Channel Sales', 'Direct Sales'],
                    lineColors: ['#EC1561', '#FF9939', '#2BAB51'],
                    lineWidth: '2px',
                    hideHover: true,
                    resize: true,
                    xLabels: ['day'],
                    xLabelFormat: function(x) {
                        return x.toDateString();
                    }
                });
            }
            morrisArea();
        },

        expandPanel : function () {
            $('[data-action=expand]').on('click', function(){
                window.area.redraw();
            });
        },

        // =========================================================================
        // PIE CHART SALES
        // =========================================================================
        pieChartSales: function () {
            $('.easy-pie-chart .percentage').easyPieChart();
        },

        // =========================================================================
        // WEEKLY REPORT
        // =========================================================================
        weeklyReport: function () {
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
                { label: "Sales Income", data: rawData, color: "#E8E800" }
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
                    axisLabel: "Sales Income",
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
                $.plot($("#weekly-report-chart"), dataSet, options);
                $("#weekly-report-chart").UseTooltip();
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
        // BEST SELLER
        // =========================================================================
        bestSeller: function () {
            if($('#best-seller-chart').length){
                var piedata = [
                    { label: "Product A", data: [[1,40]], color: '#37BC9B'},
                    { label: "Product B", data: [[1,20]], color: '#8CC152'},
                    { label: "Product C", data: [[1,50]], color: '#5577B4'},
                    { label: "Product D", data: [[1,90]], color: '#F6BB42'}
                ];

                function labelFormatter(label, series) {
                    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
                }

                $.plot('#best-seller-chart', piedata, {
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
        }

    };

}();

// Call main app init
BlankonMarketingCampaignReportSales.init();












