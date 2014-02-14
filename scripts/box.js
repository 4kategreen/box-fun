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
  $scope.stories = [{"id":1,"headline":"Ornare, libero at auctor ullamcorper, nisl arcu iaculis","abstract":"Vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum.","date":"01/01/14","type":"feature"},{"id":2,"headline":"Vulputate ullamcorper magna. Sed eu eros. Nam consequat.","abstract":"Penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec.","date":"12/14/13","type":"story"},{"id":3,"headline":"Vivamus molestie dapibus ligula aliquam erat volutpat","abstract":"Ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut.","date":"12/18/13","type":"feature-wide"},{"id":4,"headline":"Vel, faucibus id, libero donec consectetuer mauris","abstract":"Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est.","date":"01/05/14","type":"feature-wide"},{"id":5,"headline":"Etiam imperdiet dictum magna ut tincidunt orci","abstract":"Faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales.","date":"12/07/13","type":"story"},{"id":6,"headline":"Donec dignissim magna","abstract":"Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula.","date":"12/03/13","type":"feature"},{"id":7,"headline":"Vulputate, posuere vulputate, lacus cras interdum","abstract":"Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse.","date":"12/28/13","type":"main"},{"id":8,"headline":"Fusce aliquet magna a neque.","abstract":"Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla.","date":"01/04/14","type":"story"},{"id":9,"headline":"Donec at arcu vestibulum ante ipsum primis in","abstract":"Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus.","date":"01/04/14","type":"story"},{"id":10,"headline":"Nunc risus varius orci","abstract":"Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero.","date":"12/17/13","type":"feature"},{"id":11,"headline":"Lorem, eget mollis lectus pede et risus quisque libero lacus","abstract":"Auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui.","date":"12/20/13","type":"feature"},{"id":12,"headline":"Nascetur ridiculus mus donec dignissim magna a tortor","abstract":"Amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum.","date":"12/11/13","type":"feature-wide"},{"id":13,"headline":"Felis purus ac tellus suspendisse sed dolor fusce mi","abstract":"Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper.","date":"12/31/13","type":"feature-wide"},{"id":14,"headline":"Ornare sagittis felis donec tempor, est ac mattis semper","abstract":"Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque.","date":"01/03/14","type":"story"},{"id":15,"headline":"Eleifend vitae, erat vivamus nisi","abstract":"Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede.","date":"12/14/13","type":"feature-wide"},{"id":16,"headline":"Morbi metus vivamus euismod urna nullam lobortis","abstract":"Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus","date":"12/26/13","type":"main"}];
});