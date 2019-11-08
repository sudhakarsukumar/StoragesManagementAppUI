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
                controller: 'clouddriveCtrl',
                clickOutsideToClose: false
            }).then(function(clickedItem) {}).catch(function(error) {
                // User clicked outside or hit escape
            });
        };

    })
    .controller('clouddriveCtrl', function($scope, $mdBottomSheet) {
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

    }).controller('demoController', ['$scope', function($scope) {

        $scope.listImages = [
            { name: 'Image 1' },
            { name: 'Image 2' },
            { name: 'Image 3' },
            { name: 'Image 4' },
            { name: 'Image 5' }
        ];

        $scope.menuImages = [
            { name: 'My Image 1' },
            { name: 'My Image 2' },
            { name: 'My Image 3' },
            { name: 'My Image 4' },
            { name: 'My Image 5' }
        ];

        $scope.listSettings = {
            //settings,
            enhance: true, // More info about enhance: https://docs.mobiscroll.com/4-8-4/angularjs/listview#opt-enhance
            stages: [{ // More info about stages: https://docs.mobiscroll.com/4-8-4/angularjs/listview#opt-stages
                    percent: 25,
                    icon: 'link',
                    text: 'Get link',
                    action: function(event, inst) {
                        mobiscroll.toast({
                            message: 'Link copied'
                        });
                    }
                }, {
                    percent: 50,
                    icon: 'download',
                    text: 'Download',
                    action: function(event, inst) {
                        mobiscroll.toast({
                            message: 'Downloaded'
                        });
                    }
                }, {
                    percent: -25,
                    icon: 'print',
                    text: 'Print',
                    action: function(event, inst) {
                        mobiscroll.toast({
                            message: 'Printing...'
                        });
                    }
                },
                {
                    percent: -50,
                    icon: 'remove',
                    text: 'Delete',
                    confirm: true,
                    action: function(event, inst) {
                        $scope.$apply(function() {
                            $scope.listImages.splice(event.index, 1);
                        });
                    }
                }
            ]
        }

        $scope.menuSettings = {
            //settings,
            enhance: true, // More info about enhance: https://docs.mobiscroll.com/4-8-4/angularjs/listview#opt-enhance
            actions: [{ // More info about actions: https://docs.mobiscroll.com/4-8-4/angularjs/listview#opt-actions
                icon: 'link',
                action: function(event, inst) {
                    mobiscroll.toast({
                        message: 'Linked'
                    });
                }
            }, {
                icon: 'star3',
                action: function(event, inst) {
                    mobiscroll.toast({
                        message: 'Starred'
                    });
                }
            }, {
                icon: 'download',
                action: function(event, inst) {
                    mobiscroll.toast({
                        message: 'Downloaded'
                    });
                }
            }, {
                icon: 'print',
                action: function(event, inst) {
                    mobiscroll.toast({
                        message: 'Printing...'
                    });
                }
            }, {
                icon: 'remove',
                undo: true, // More info about undo: https://docs.mobiscroll.com/4-8-4/angularjs/listview#methods-undo
                action: function(event, inst) {
                    $scope.$apply(function() {
                        $scope.menuImages.splice(event.index, 1);
                    });
                }
            }]
        }

        $scope.formSettings = {
            lang: 'en', // Specify language like: lang: 'pl' or omit setting to use default
            theme: 'ios' // Specify theme like: theme: 'ios' or omit setting to use default
        };

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