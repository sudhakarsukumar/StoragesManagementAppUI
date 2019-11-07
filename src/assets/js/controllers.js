// controller.js
angular
    .module('app')
    .controller('metricCtrl', metricCtrl)
    .controller('sessionCtrl', sessionCtrl)
    .controller('sessionOverviewCtrl', sessionOverviewCtrl)
    .controller('BroswesrViewsCtrl', BroswesrViewsCtrl)
    .controller('cardChartCtrl3', cardChartCtrl3)


//convert Hex to RGBA
function convertHex(hex, opacity) {
    hex = hex.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
}

metricCtrl.$inject = ['$scope'];

function metricCtrl($scope) {
    $scope.metrics = [{
            'id': 1,
            'title': 'Total Sessions',
            'count': '2100',
            'status': 14,
        },
        {
            'id': 2,
            'title': 'Total Visitors',
            'count': '1228',
            'status': -3,
        },
        {
            'id': 3,
            'title': 'Time Spent / HR',
            'count': '6.92',
            'status': 1,
        },
        {
            'id': 4,
            'title': 'Avg. Requests Received',
            'count': '2.3',
            'status': 21,
        }
    ];
    $scope.selected = 0;

    $scope.select = function(index) {
        $scope.selected = index;
    };
}

sessionCtrl.$inject = ['$scope'];

function sessionCtrl($scope) {
    $scope.sessions = [{
            'id': 1,
            'title': 'TOP PLATFORM',
            'company': 'WINDOWS',
            'count': '1833',
            'logo': 'assets/img/windows.svg',
        },
        {
            'id': 2,
            'title': 'TOP SOURCES',
            'company': 'STACK OVERFLOW',
            'count': '420',
            'logo': 'assets/img/stack.png',
        },
        {
            'id': 3,
            'title': 'TOP BROWSER',
            'company': 'CHROME',
            'count': '2010',
            'logo': 'assets/img/chrome.svg',
        },
        {
            'id': 4,
            'title': 'TOP MAILBOX',
            'company': 'OUTLOOK',
            'count': '326',
            'logo': 'assets/img/outlook.svg',
        }
    ];
    $scope.selected = 0;

    $scope.select = function(index) {
        $scope.selected = index;
    };
    $(document).ready(function() {
        $('.session_list').slick({
            infinite: false,
            slidesToShow: 3,
            dots: false,
            arrows: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $(window).scroll(function() {
            var sticky = $('.app-header'),
                scroll = $(window).scrollTop();

            if (scroll >= 5) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
        });
    });
}
sessionOverviewCtrl.$inject = ['$scope'];

function sessionOverviewCtrl($scope) {

    var data1 = [300, 350, 0, 0, 120, 118, 130, 190, 140, 230, 218, 288, 320, 280];

    $scope.labels = ['15\nSun', '16\nMon', '17\nTue', '18\nWed', '19\nThu', '20\nFri', '21\nSat', '22\nSun', '23\nMon', '24\nTue', '25\nWed', '26\nhu', '27\nFri', '28\nSat'];
    $scope.series = ['Current'];
    $scope.data = [data1];
    $scope.colors = [{
        backgroundColor: 'transparent',
        borderColor: '#6b75ca',
        pointHoverBackgroundColor: '#fff',
    }, ];
    $scope.options = {
        tooltips: {
            backgroundColor: '#fff',
            titleFontColor: '#393c51',
            callbacks: {
                label: function(tooltipItem, data) {
                    //return text to render for an individual item in the tooltip
                    return 'Sessions Overview';
                },
                labelColor: function(tooltipItem, chart) {
                    return {
                        backgroundColor: '#6b75ca'
                    }
                },
                labelTextColor: function(tooltipItem, chart) {
                    return {
                        backgroundColor: '#9297b6'
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                    color: '#9297b6'
                },

                ticks: {
                    // callback: function(value) {
                    //     return value.charAt(0);
                    // }
                    fontColor: '#9297b6'
                }
            }],
            yAxes: [{

                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: 100,
                    max: 400,
                    fontColor: '#9297b6'
                },

            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
    }
}

BroswesrViewsCtrl.$inject = ['$scope'];

function BroswesrViewsCtrl($scope) {
    $scope.labels = ["Firefox", "Explorer", "Chrome", "Safari"];

    $scope.data = [
        [33, 30, 38, 23]
    ];
    $scope.options = {

        legengs: false,
        scale: {
            gridLines: {
                circular: true,
            },
            ticks: {
                beginAtZero: true,
                max: 40,
                min: 0,
                stepSize: 10,
            }
        }
    }
}

cardChartCtrl3.$inject = ['$scope'];

function cardChartCtrl3($scope) {

    $scope.labels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    $scope.data = [
        [78, 81, 80, 45, 34, 12, 40]
    ];
    $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
    ];
    $scope.colors = [{
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255)',
    }];
    $scope.options = {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    fontSize: '8',
                    fontColor: '#858ed6'
                }
            }],
            yAxes: [{
                display: false
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
            },
        },
    }
}