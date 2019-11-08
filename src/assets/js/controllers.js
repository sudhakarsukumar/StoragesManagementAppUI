// controller.js
angular
    .module('app')
    .controller('driveCtrl', driveCtrl)
    .controller('folderCtrl', folderCtrl)
    .controller('clouddrive', function($scope, $timeout, $mdBottomSheet, $mdToast) {
        $scope.alert = '';

        $scope.showGridBottomSheet = function() {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'views/drive.html',
                clickOutsideToClose: false
            }).then(function(clickedItem) {}).catch(function(error) {
                // User clicked outside or hit escape
            });
        };

    })
    .controller('filesController', ['$scope', function($scope) {

        $scope.files = [
            { id: 1, name: 'Brandbook', extension: 'PDF', path: 'Dropbox/Projects/Ei/Brandbook.pdf' },
            { id: 2, name: 'Logo', extension: 'ai', path: 'Dropbox/Fitness-Tech/Logo.ai' },
            { id: 3, name: 'Landing Page', extension: 'sketch', path: 'Dropbox/Development/New/Landing Page.sketch' },
            { id: 4, name: 'Dashboard', extension: 'sketch', path: 'Dropbox/Development/New/Dashboard.sketch' }
        ];

        $scope.menuSettings = {
            //settings,
            enhance: true,
            actions: [{
                icon: 'download',
                action: function(event, inst) {
                    mobiscroll.toast({
                        message: 'Downloaded'
                    });
                }
            }, {
                icon: 'link',
                action: function(event, inst) {
                    mobiscroll.toast({
                        message: 'Linked'
                    });
                }
            }, {
                icon: 'remove',
                undo: true,
                action: function(event, inst) {
                    $scope.$apply(function() {
                        $scope.menuImages.splice(event.index, 1);
                    });
                }
            }]
        }


    }])

driveCtrl.$inject = ['$scope'];

function driveCtrl($scope) {
    $scope.drives = [{
            'id': 1,
            'title': 'Dropbox',
            'used': '65',
            'max': '100',
            'logo': 'assets/img/dropbox.svg',
        },
        {
            'id': 2,
            'title': 'Google Drive',
            'used': '5',
            'max': '15',
            'logo': 'assets/img/google.svg',
        },
        {
            'id': 3,
            'title': 'Onedrive',
            'used': '2',
            'max': '10',
            'logo': 'assets/img/onedrive.svg',
        }
    ];
    $scope.selected = 0;

    $scope.select = function(index) {
        $scope.selected = index;
    };
    $(document).ready(function() {
        $('.drive_list').slick({
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
    });
}
folderCtrl.$inject = ['$scope'];

function folderCtrl($scope) {
    $scope.drives = [{
            'id': 1,
            'title': 'Dropbox',
            'used': '65',
            'max': '100',
            'logo': 'assets/img/dropbox.svg',
        },
        {
            'id': 2,
            'title': 'Google Drive',
            'used': '5',
            'max': '15',
            'logo': 'assets/img/google.svg',
        },
        {
            'id': 3,
            'title': 'Onedrive',
            'used': '2',
            'max': '10',
            'logo': 'assets/img/onedrive.svg',
        }
    ];
    $scope.selected = 0;

    $scope.select = function(index) {
        $scope.selected = index;
    };
    $(document).ready(function() {
        $('.folders').slick({
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
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
}