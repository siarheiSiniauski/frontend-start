var BlankonMarketingCampaignReportCustomersGraph = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonMarketingCampaignReportCustomersGraph.mapWorldMarkers();
            BlankonMarketingCampaignReportCustomersGraph.uniqueVisitors();
            BlankonMarketingCampaignReportCustomersGraph.visitsOverTime();
            BlankonMarketingCampaignReportCustomersGraph.newReturning();
            BlankonMarketingCampaignReportCustomersGraph.genderCustomers();
            BlankonMarketingCampaignReportCustomersGraph.ageCustomers();
        },

        // =========================================================================
        // WORLD MAP MARKERS
        // =========================================================================
        mapWorldMarkers: function () {
            $('#map-world-markers').vectorMap({
                map: 'world_mill_en',
                scaleColors: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                markerStyle: {
                    initial: {
                        fill: '#81B71A',
                        stroke: '#383f47'
                    }
                },
                backgroundColor: '#383f47',
                markers: [
                    {latLng: [41.90, 12.45], name: 'Vatican City = 34 Customers'},
                    {latLng: [43.73, 7.41], name: 'Monaco = 5 Customers'},
                    {latLng: [-0.52, 166.93], name: 'Nauru = 231 Customers'},
                    {latLng: [-8.51, 179.21], name: 'Tuvalu = 563 Customers'},
                    {latLng: [43.93, 12.46], name: 'San Marino = 34.900 Customers'},
                    {latLng: [47.14, 9.52], name: 'Liechtenstein = 44 Customers'},
                    {latLng: [7.11, 171.06], name: 'Marshall Islands = 11 Customers'},
                    {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis = 45.676 Customers'},
                    {latLng: [3.2, 73.22], name: 'Maldives = 77 Customers'},
                    {latLng: [35.88, 14.5], name: 'Malta = 2 Customers'},
                    {latLng: [12.05, -61.75], name: 'Grenada = 56 Customers'},
                    {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines = 34 Customers'},
                    {latLng: [13.16, -59.55], name: 'Barbados = 89 Customers'},
                    {latLng: [17.11, -61.85], name: 'Antigua and Barbuda = 34 Customers'},
                    {latLng: [-4.61, 55.45], name: 'Seychelles = 99 Customers'},
                    {latLng: [7.35, 134.46], name: 'Palau = 134 Customers'},
                    {latLng: [42.5, 1.51], name: 'Andorra = 563 Customers'},
                    {latLng: [14.01, -60.98], name: 'Saint Lucia = 321 Customers'},
                    {latLng: [6.91, 158.18], name: 'Federated States of Micronesia = 34 Customers'},
                    {latLng: [1.3, 103.8], name: 'Singapore = 564 Customers'},
                    {latLng: [1.46, 173.03], name: 'Kiribati = 784 Customers'},
                    {latLng: [-21.13, -175.2], name: 'Tonga = 444 Customers'},
                    {latLng: [15.3, -61.38], name: 'Dominica = 4 Customers'},
                    {latLng: [-20.2, 57.5], name: 'Mauritius = 7 Customers'},
                    {latLng: [26.02, 50.55], name: 'Bahrain = 785 Customers'},
                    {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe = 212 Customers'}
                ]
            });
        },

        // =========================================================================
        // UNIQUE VISITORS
        // =========================================================================
        uniqueVisitors: function () {
            $('#unique-visitors').sparkline('html',{
                type: 'line',
                height: '60px',
                defaultPixelsPerValue: 6,
                spotColor: '#FFFFFF',
                highlightSpotColor: '#FFFFFF',
                highlightLineColor: '#FFFFFF',
                fillColor: '#FFFFFF'
            });
        },

        // =========================================================================
        // VISITS OVER TIME
        // =========================================================================
        visitsOverTime: function () {
            var chart = c3.generate({
                bindto: '#visits-over-time',
                data: {
                    columns: [
                        ['data1', 300, 200, 160, 400, 250, 250],
                        ['data2', 200, 130, 90, 240, 130, 220]
                    ],
                    names: {
                        data1: 'Customer Visits',
                        data2: 'New Customers'
                    },
                    type: 'bar'
                },
                color: {
                    pattern: ['#3B5998', '#C4302B']
                },
                axis: {
                    x: {
                        type: 'categorized'
                    }
                }
            });

            // Expand panel
            BlankonMarketingCampaignReportCustomersGraph.expandPanel(chart);
        },

        // =========================================================================
        // NEW VS RETURNING
        // =========================================================================
        newReturning: function () {
            var chart = c3.generate({
                bindto: '#new-returning',
                data: {
                    // iris data from R
                    columns: [
                        ['data1', 120],
                        ['data2', 150]
                    ],
                    names: {
                        data1: 'Customer Visits',
                        data2: 'New Customers'
                    },
                    type : 'pie'
                },
                color: {
                    pattern: ['#3B5998', '#C4302B']
                },
                pie: {
                    onclick: function (d, i) { console.log(d, i); },
                    onmouseover: function (d, i) { console.log(d, i); },
                    onmouseout: function (d, i) { console.log(d, i); }
                }
            });

            // Expand panel
            BlankonMarketingCampaignReportCustomersGraph.expandPanel(chart);
        },

        // =========================================================================
        // GENDER CUSTOMERS
        // =========================================================================
        genderCustomers: function () {
            var chart = c3.generate({
                bindto: '#gender-customers',
                data: {
                    // iris data from R
                    columns: [
                        ['data1', 340],
                        ['data2', 210]
                    ],
                    names: {
                        data1: 'Male',
                        data2: 'Female'
                    },
                    type : 'pie'
                },
                color: {
                    pattern: ['#3B5998', '#C4302B']
                },
                pie: {
                    onclick: function (d, i) { console.log(d, i); },
                    onmouseover: function (d, i) { console.log(d, i); },
                    onmouseout: function (d, i) { console.log(d, i); }
                }
            });

            // Expand panel
            BlankonMarketingCampaignReportCustomersGraph.expandPanel(chart);
        },

        // =========================================================================
        // AGE CUSTOMERS
        // =========================================================================
        ageCustomers: function () {
            var chart = c3.generate({
                bindto: '#age-customers',
                data: {
                    // iris data from R
                    columns: [
                        ['data1', 120],
                        ['data2', 150],
                        ['data3', 103],
                        ['data4', 250],
                        ['data5', 170],
                        ['data6', 133],
                        ['data7', 158]
                    ],
                    names: {
                        data1: '18 - 20',
                        data2: '21 - 24',
                        data3: '25 - 34',
                        data4: '35 - 44',
                        data5: '45 - 54',
                        data6: '55 - 64',
                        data7: '65+'
                    },
                    type : 'pie'
                },
                pie: {
                    onclick: function (d, i) { console.log(d, i); },
                    onmouseover: function (d, i) { console.log(d, i); },
                    onmouseout: function (d, i) { console.log(d, i); }
                }
            });

            // Expand panel
            BlankonMarketingCampaignReportCustomersGraph.expandPanel(chart);
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
        }

    };

}();

// Call main app init
BlankonMarketingCampaignReportCustomersGraph.init();


