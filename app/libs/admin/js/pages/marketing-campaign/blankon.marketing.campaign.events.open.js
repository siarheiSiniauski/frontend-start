var BlankonMarketingCampaignEventsOpen = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonMarketingCampaignEventsOpen.openEvents();
            BlankonMarketingCampaignEventsOpen.marketChartWidget();
            BlankonMarketingCampaignEventsOpen.salesChart();
            BlankonMarketingCampaignEventsOpen.marketStatus();
            BlankonMarketingCampaignEventsOpen.miniStat();
        },

        // =========================================================================
        // OPEN EVENTS
        // =========================================================================
        openEvents: function () {
            (function($, window, document, undefined) {
                'use strict';

                // init cubeportfolio
                $('#js-grid-open-events').cubeportfolio({
                    layoutMode: 'slider',
                    drag: false,
                    auto: true,
                    autoTimeout: 3000,
                    autoPauseOnHover: true,
                    showNavigation: false,
                    showPagination: false,
                    rewindNav: true,
                    scrollByPage: false,
                    gridAdjustment: 'responsive',
                    mediaQueries: [{
                        width: 1500,
                        cols: 5
                    }, {
                        width: 1100,
                        cols: 4
                    }, {
                        width: 800,
                        cols: 4
                    }, {
                        width: 480,
                        cols: 2
                    }, {
                        width: 320,
                        cols: 1
                    }],
                    gapHorizontal: 0,
                    gapVertical: 5,
                    caption: 'opacity',
                    displayType: 'fadeIn',
                    displayTypeSpeed: 100,
                });
            })(jQuery, window, document);
        },

        // =========================================================================
        // MARKET CHART
        // =========================================================================
        marketChartWidget: function () {
            $(window).resize(function() {
                window.line.redraw();
            });
            function marketChart(){
                window.line = Morris.Line({
                    element: 'market-chart',
                    data: [
                        { y: '2008', a: 30, b: 20, c: 10 },
                        { y: '2009', a: 20,  b: 50, c: 67 },
                        { y: '2010', a: 25,  b: 40, c: 32 },
                        { y: '2011', a: 27,  b: 60, c: 78 },
                        { y: '2012', a: 34,  b: 50, c: 12 },
                        { y: '2013', a: 40,  b: 70, c: 78 },
                        { y: '2014', a: 41, b: 60, c: 52 }
                    ],
                    xkey: 'y',
                    ykeys: ['a', 'b', 'c'],
                    labels: ['General Tickets', 'VIP Tickets', 'VVIP Tickets'],
                    lineColors: ['#8CC152', '#F6BB42', '#906094'],
                    pointFillColors: ['#8CC152', '#F6BB42', '#906094'],
                    pointStrokeColors: ['#FFFFFF'],
                    lineWidth: '5px',
                    hideHover: true,
                    grid: false,
                    gridTextColor: '#FFFFFF',
                    resize: true,
                    redraw: true
                });
            }
            marketChart();
        },

        // =========================================================================
        // SALES CHART
        // =========================================================================
        salesChart: function () {
            $('#market-today-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
            $('#market-average-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
            $('#market-total-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
        },

        // =========================================================================
        // MARKET STATUS
        // =========================================================================
        marketStatus: function () {
            var piedata = [
                { label: "General Tickets", data: [[1,40]], color: '#906094'},
                { label: "VIP Tickets", data: [[1,20]], color: '#8CC152'},
                { label: "VVIP Tickets", data: [[1,50]], color: '#F6BB42'}
            ];

            function labelFormatter(label, series) {
                return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
            }

            $.plot('#market-status-chart', piedata, {
                series: {
                    pie: {
                        show: true,
                        radius: 500,
                        label: {
                            show: true,
                            radius: 2/3,
                            formatter: labelFormatter,
                            threshold: 0.1
                        }
                    }
                },
                legend: {
                    show: false
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            });
        },

        // =========================================================================
        // MINI STAT GRAPH
        // =========================================================================
        miniStat: function () {
            $('#sparkline').sparkline('html',{
                type: 'bar',
                barColor: '#FFFFFF',
                height: '50px',
                barWidth: '5px'
            });
            $('#sparkline2').sparkline('html',{
                type: 'line',
                height: '60px',
                defaultPixelsPerValue: 6,
                spotColor: '#FFFFFF',
                highlightSpotColor: '#FFFFFF',
                highlightLineColor: '#FFFFFF',
                fillColor: '#FFFFFF'
            });
        }

    };

}();

// Call main app init
BlankonMarketingCampaignEventsOpen.init();