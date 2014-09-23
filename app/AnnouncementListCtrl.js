(function () {
    'use strict';
    function AnnouncementListCtrl(AnnouncementDAO) {
      this.announcements = [];
      
      var announcementScope = this;
      AnnouncementDAO.query().then(function(data) {
        for(var i = 0; i < data.length; i++) {
          announcementScope.announcements.push(data[i]);
        }
      });
    }

    var module = angular.module("exerciseApp");
    module.controller('AnnouncementListCtrl', ['AnnouncementDAO',AnnouncementListCtrl]);

})();
