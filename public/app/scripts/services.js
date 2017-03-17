'use strict';

angular.module('libraryApp')
        .constant('baseURL','http://localhost:3000/')
        .service('booksFactory', [ 'baseURL', '$resource', function(baseURL, $resource) {
        
            this.getBooks = function(){
                return $resource(baseURL+"books", null,  { 'save': { method:'POST' }} );
            }

            this.postBook = function(){
                return $resource(baseURL+"books", null,  { 'save': { method:'POST' }} );
            }

            this.deleteBook = function(id){
                return $resource(baseURL+"books/"+id, null,  { 'delete': { method:'DELETE' }} );
            }            

        }])
        

;
