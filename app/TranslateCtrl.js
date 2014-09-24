(function () {
    'use strict';
    function TranslateCtrl(gettextCatalog) {
      ///gettext('polski');
      ///gettext('angielski');
      ///gettext('niemiecki');
      
        var ctrl = this;
        ctrl.languages = [
            {value: 'pl', name: 'polski'},
            {value: 'en', name: 'angielski'},
            {value: 'de', name: 'niemiecki'}
        ];
        ctrl.setLanguage = function(lang) {
          gettextCatalog.setCurrentLanguage(lang);
        };
    }
    var module = angular.module('exerciseApp',['gettext']);
    module.controller('TranslateCtrl', ['gettextCatalog', TranslateCtrl]);
})();
