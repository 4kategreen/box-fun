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

    //console.log(a.widgetId);
    //s.story = s.stories[storyId];
    console.log(s.widgetId);
    s.story = s.$parent.stories[s.widgetId - 1];
  }
  return {
    restrict: 'E',
    link: findSpaceInRow,
    template: '<div class="widget__container"><h4>{{story.headline}}</h4><p>{{story.abstract}}</p></div>',
    scope: {
      widgetId: '='
    }
  }
});

boxes.controller('widgetCtrl', function($scope, $http) {
  $scope.stories = [{"id":1,"headline":"ornare, libero at auctor ullamcorper, nisl arcu iaculis","abstract":"vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum","date":"01/01/14","type":"feature"},{"id":2,"headline":"vulputate ullamcorper magna. Sed eu eros. Nam consequat","abstract":"penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec","date":"12/14/13","type":"story"},{"id":3,"headline":"Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla","abstract":"ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra","date":"12/18/13","type":"feature-wide"},{"id":4,"headline":"vel, faucibus id, libero. Donec consectetuer mauris","abstract":"Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est.","date":"01/05/14","type":"feature-wide"},{"id":5,"headline":"enim. Etiam imperdiet dictum magna. Ut tincidunt orci","abstract":"faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales","date":"12/07/13","type":"story"},{"id":6,"headline":"mus. Donec dignissim magna","abstract":"ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus","date":"12/03/13","type":"feature"},{"id":7,"headline":"vulputate, posuere vulputate, lacus. Cras interdum. Nunc","abstract":"ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse","date":"12/28/13","type":"main"},{"id":8,"headline":"Fusce aliquet magna a neque.","abstract":"mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla","date":"01/04/14","type":"story"},{"id":9,"headline":"condimentum. Donec at arcu. Vestibulum ante ipsum primis in","abstract":"Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit,","date":"01/04/14","type":"story"},{"id":10,"headline":"nunc risus varius orci,","abstract":"ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero.","date":"12/17/13","type":"feature"},{"id":11,"headline":"lorem, eget mollis lectus pede et risus. Quisque libero lacus,","abstract":"auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam,","date":"12/20/13","type":"feature"},{"id":12,"headline":"nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc","abstract":"amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum","date":"12/11/13","type":"feature-wide"},{"id":13,"headline":"felis purus ac tellus. Suspendisse sed dolor. Fusce mi","abstract":"Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh.","date":"12/31/13","type":"feature-wide"},{"id":14,"headline":"ornare sagittis felis. Donec tempor, est ac mattis semper, dui","abstract":"tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque","date":"01/03/14","type":"story"},{"id":15,"headline":"eleifend vitae, erat. Vivamus nisi. Mauris","abstract":"auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede,","date":"12/14/13","type":"feature-wide"},{"id":16,"headline":"Morbi metus. Vivamus euismod urna. Nullam lobortis","abstract":"Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus","date":"12/26/13","type":"main"}];
});