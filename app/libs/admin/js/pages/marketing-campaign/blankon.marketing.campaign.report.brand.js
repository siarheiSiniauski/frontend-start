var BlankonMarketingCampaignReportBrand = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonMarketingCampaignReportBrand.brandReportList();
        },

        // =========================================================================
        // TOTAL SALES BY PRODUCT
        // =========================================================================
        totalSalesProductChart: function () {
            var chart = c3.generate({
                bindto: '#total-sales-product-chart',
                data: {
                    // iris data from R
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                        ['data3', 150]
                    ],
                    names: {
                        data1: 'a.com',
                        data2: 'b.com',
                        data3: 'c.com'
                    },
                    type : 'donut'
                },
                color: {
                    pattern: ['#E9573F', '#00B1E1', '#37BC9B']
                },
                donut: {
                    title: "$55.980",
                    onclick: function (d, i) { console.log(d, i); },
                    onmouseover: function (d, i) { console.log(d, i); },
                    onmouseout: function (d, i) { console.log(d, i); }
                }
            });
        },

        // =========================================================================
        // TOTAL SALES BY CHANNEL
        // =========================================================================
        totalSalesChannelChart: function () {
            var chart = c3.generate({
                bindto: '#total-sales-channel-chart',
                data: {
                    // iris data from R
                    columns: [
                        ['data1', 56],
                        ['data2', 110],
                        ['data3', 130]
                    ],
                    names: {
                        data1: 'a.com',
                        data2: 'b.com',
                        data3: 'c.com'
                    },
                    type : 'donut'
                },
                color: {
                    pattern: ['#E9573F', '#00B1E1', '#37BC9B']
                },
                donut: {
                    title: "$255.780",
                    onclick: function (d, i) { console.log(d, i); },
                    onmouseover: function (d, i) { console.log(d, i); },
                    onmouseout: function (d, i) { console.log(d, i); }
                }
            });
        },

        // =========================================================================
        // TOTAL SALES BY PARTNER
        // =========================================================================
        totalSalesPartnerChart: function () {
            var chart = c3.generate({
                bindto: '#total-sales-partner-chart',
                data: {
                    // iris data from R
                    columns: [
                        ['data1', 110],
                        ['data2', 67],
                        ['data3', 98]
                    ],
                    names: {
                        data1: 'a.com',
                        data2: 'b.com',
                        data3: 'c.com'
                    },
                    type : 'donut'
                },
                color: {
                    pattern: ['#E9573F', '#00B1E1', '#37BC9B']
                },
                donut: {
                    title: "$35.555",
                    onclick: function (d, i) { console.log(d, i); },
                    onmouseover: function (d, i) { console.log(d, i); },
                    onmouseout: function (d, i) { console.log(d, i); }
                }
            });
        },

        // =========================================================================
        // SALES VOLUME CHART
        // =========================================================================
        salesVolumeChart: function () {
            var chart = c3.generate({
                bindto: '#c3js-area-chart',
                data: {
                    x: 'x',
                    columns: [
                        ['x', '2017-01-01', '2017-01-02', '2017-01-03', '2017-01-04', '2017-01-05', '2017-01-06'],
                        ['data1', 30, 200, 100, 400, 150, 250]
                    ],
                    names: {
                        data1: 'Total Volume'
                    },
                },
                axis: {
                    x: {
                        type: 'timeseries',
                        tick: {
                            format: '%Y-%m-%d'
                        }
                    }
                },
                color: {
                    pattern: ['#00B1E1']
                }
            });
        },

        // =========================================================================
        // BRAND REPORT LIST
        // =========================================================================
        brandReportList: function () {
            (function($, window, document, undefined) {
                'use strict';

                // init cubeportfolio
                $('#grid-container').cubeportfolio({
                    filters: '#filters-container',
                    layoutMode: 'grid',
                    defaultFilter: '.all',
                    animationType: 'sequentially',
                    gapHorizontal: 50,
                    gapVertical: 40,
                    gridAdjustment: 'responsive',
                    loadMore: '#js-loadMore-brand',
                    loadMoreAction: 'click',
                    mediaQueries: [{
                        width: 800,
                        cols: 3
                    }, {
                        width: 500,
                        cols: 2
                    }, {
                        width: 320,
                        cols: 1
                    }],
                    caption: 'fadeIn',
                    displayType: 'lazyLoading',
                    displayTypeSpeed: 100,

                    // singlePage popup
                    singlePageDelegate: '.cbp-singlePage',
                    singlePageDeeplinking: true,
                    singlePageStickyNavigation: true,
                    singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
                    singlePageCallback: function(url, element) {
                        // to update singlePage content use the following method: this.updateSinglePage(yourContent)
                        var t = this;

                        $.ajax({
                            url: url,
                            type: 'GET',
                            dataType: 'html',
                            timeout: 10000
                        })
                            .done(function(result) {
                                t.updateSinglePage(result);
                                alert('Get data sales done');
                                BlankonMarketingCampaignReportBrand.totalSalesProductChart();
                                BlankonMarketingCampaignReportBrand.totalSalesChannelChart();
                                BlankonMarketingCampaignReportBrand.totalSalesPartnerChart();
                                BlankonMarketingCampaignReportBrand.salesVolumeChart();
                            })
                            .fail(function() {
                                t.updateSinglePage('AJAX Error! Please refresh the page!');
                            });
                    },
                });

            })(jQuery, window, document);
        }

    };

}();

// Call main app init
BlankonMarketingCampaignReportBrand.init();