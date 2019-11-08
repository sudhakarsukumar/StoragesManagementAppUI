// controller.js
angular
    .module('app')
    .config(function($mdIconProvider) {
        $mdIconProvider
            .icon('hangout', 'assets/img/hangout.svg', 24)
            .icon('mail', 'assets/img/mail.svg', 24)
            .icon('message', 'assets/img/message.svg', 24)
            .icon('copy2', 'assets/img/copy2.svg', 24)
            .icon('facebook', 'assets/img/facebook.svg', 24)
            .icon('twitter', 'assets/img/twitter.svg', 24);
    })
    .controller('driveCtrl', driveCtrl)
    .controller('folderCtrl', folderCtrl)
    .controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet, $mdToast) {
        $scope.alert = '';

        $scope.showGridBottomSheet = function() {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'views/bottom-sheet-grid-template.html',
                controller: 'GridBottomSheetCtrl',
                clickOutsideToClose: false
            }).then(function(clickedItem) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(clickedItem['name'] + ' clicked!')
                    .position('top right')
                    .hideDelay(1500)
                );
            }).catch(function(error) {
                // User clicked outside or hit escape
            });
        };

    })
    .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Hangout', icon: 'hangout' },
            { name: 'Mail', icon: 'mail' },
            { name: 'Message', icon: 'message' },
            { name: 'Copy', icon: 'copy2' },
            { name: 'Facebook', icon: 'facebook' },
            { name: 'Twitter', icon: 'twitter' },
        ];

        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
    .run(function($templateRequest) {

        var urls = [
            'assets/img/hangout.svg',
            'assets/img/mail.svg',
            'assets/img/message.svg',
            'assets/img/copy2.svg',
            'assets/img/facebook.svg',
            'assets/img/twitter.svg'
        ];

        angular.forEach(urls, function(url) {
            $templateRequest(url);
        });

    })

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