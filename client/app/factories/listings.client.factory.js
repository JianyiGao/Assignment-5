angular.module('listings').factory('Listings', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('https://cenbootcamp.herokuapp.com/listings');
      },

      create: function(listing) {
        return $http.post('https://cenbootcamp.herokuapp.com/listings', listing);
      },

      read: function(id) {
        return $http.get('https://cenbootcamp.herokuapp.com/listings' + id);
      },

      update: function(id, listing) {
        return $http.put('https://cenbootcamp.herokuapp.com/listings' + id, listing);
      },

      delete: function(id) {
        return $http.delete('https://cenbootcamp.herokuapp.com/listings' + id);
      }
    };

    return methods;
  }
]);
