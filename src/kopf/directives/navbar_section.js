kopf.directive('ngNavbarSection', ['$location', 'ElasticService',
  function($location, ElasticService) {

    return {
      template: function(elem, attrs) {
        if (!attrs.version || ElasticService.versionCheck(attrs.version)) {
          var target = attrs.target;
          var text = attrs.text;
          var icon = attrs.icon;
          var click = attrs.click;
          if (!click) {
            return '<a href="#!' + target + '">' +
                '<i class="fa fa-fw ' + icon + '"></i> ' + text +
                '</a>';
          } else {
            return '<a href="javascript:void(0)" ng-click="' + click + '">' +
                '<i class="fa fa-fw ' + icon + '"></i> ' + text +
                '</a>';
          }
        }
        else {
          return '';
        }
      }
    };
  }

]);
