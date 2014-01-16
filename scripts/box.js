var boxes = angular.module('boxes', []);

boxes.directive('widget', function() {
  var findSpaceInRow = function findSpaceInRow(s,e,a) {
    var top = e[0].offsetTop,
        height = e[0].offsetHeight;

    if (top === 0 && (height === 200 || height === 100)) {
      e.addClass('top');
    }
    if (top === 200 && height === 100) {
      e.addClass('top');
    }
    //console.log(e.parent.innerHeight());
  }
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="widget__container" ng-transclude></div>',
    link: findSpaceInRow,
    scope: {
      widgetSize: '@'
    }
  }
});