var FormCacheGroupController = function(cacheGroup, $scope, $uibModal, $anchorScroll, formUtils, stringUtils, locationUtils, cacheGroupService, typeService) {

    var deleteCacheGroup = function(cacheGroup) {
        cacheGroupService.deleteCacheGroup(cacheGroup.id)
            .then(function() {
                locationUtils.navigateToPath('/configure/cache-groups');
            });
    };

    var getCacheGroups = function() {
        cacheGroupService.getCacheGroups()
            .then(function(result) {
                $scope.cacheGroups = result;
            });
    };

    var getTypes = function() {
        typeService.getTypes()
            .then(function(result) {
                $scope.types = result;
            });
    };

    $scope.cacheGroupCopy = angular.copy(cacheGroup);

    $scope.cacheGroup = cacheGroup;

    $scope.props = [
        { name: 'id', type: 'number', required: true, readonly: true },
        { name: 'name', type: 'text', required: true, maxLength: 45 },
        { name: 'shortName', type: 'text', required: true, maxLength: 255 },
        { name: 'latitude', type: 'number', required: false, pattern: new RegExp('^[-+]?[0-9]*\.?[0-9]+$'), invalidMsg: 'Invalid coordinate' },
        { name: 'longitude', type: 'number', required: false, pattern: new RegExp('^[-+]?[0-9]*\.?[0-9]+$'), invalidMsg: 'Invalid coordinate' }
    ];

    $scope.labelize = stringUtils.labelize;

    $scope.update = function(cacheGroup) {
        cacheGroupService.updateCacheGroup(cacheGroup).
            then(function() {
                $scope.cacheGroupCopy = angular.copy(cacheGroup);
                $anchorScroll(); // scrolls window to top
            });
    };

    $scope.confirmDelete = function(cacheGroup) {
        var params = {
            title: 'Confirm Delete',
            message: 'This action CANNOT be undone. This will permanently delete ' + cacheGroup.name + '. Are you sure you want to delete ' + cacheGroup.name + '?'
        };
        var modalInstance = $uibModal.open({
            templateUrl: 'common/modules/dialog/confirm/dialog.confirm.tpl.html',
            controller: 'DialogConfirmController',
            size: 'md',
            resolve: {
                params: function () {
                    return params;
                }
            }
        });
        modalInstance.result.then(function() {
            deleteCacheGroup(cacheGroup);
        }, function () {
            // do nothing
        });
    };

    $scope.navigateToPath = locationUtils.navigateToPath;

    $scope.hasError = formUtils.hasError;

    $scope.hasPropertyError = formUtils.hasPropertyError;

    var init = function () {
        getCacheGroups();
        getTypes();
    };
    init();

};

FormCacheGroupController.$inject = ['cacheGroup', '$scope', '$uibModal', '$anchorScroll', 'formUtils', 'stringUtils', 'locationUtils', 'cacheGroupService', 'typeService'];
module.exports = FormCacheGroupController;