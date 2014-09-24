'use strict';

angular.module('itcApp').controller('TypeaheadCtrl', function ($filter,ContactDAO) {
    this.selected = undefined;

    this.getContacts=function(typedValue){
      return ContactDAO.getAll().then(function(data) {
        var array = [],
            contacts = data[0],
            length = contacts.length;
            console.log(typedValue);
        for(var i = 0; i < length; i++) {
          if(contacts[i].name.toLowerCase().search(typedValue.toLowerCase()) !== -1) {
            array.push(contacts[i]);
          }
        }
        return array;
      });
    };

    this.selectContact=function(item,model,label){
        this.selected=item;
    };
});