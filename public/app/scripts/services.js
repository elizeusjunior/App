'use strict';

angular.module('libraryApp')
        .constant('baseURL','http://localhost:3000/')
        .service('booksFactory', [ 'baseURL', '$resource', function(baseURL, $resource) {
        
            this.getBooks = function(){
                return $resource(baseURL+'books');
            };


            this.postBook = function(){
                return $resource(baseURL+'books');
            };

            this.deleteBook = function(id){
                return $resource(baseURL+'books/'+id, null,  { 'delete': { method:'DELETE' }} );
            };            

        }])
        

;
