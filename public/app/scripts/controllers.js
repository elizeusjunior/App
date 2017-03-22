'use strict';

angular.module('libraryApp')

        
    .controller('IndexController', ['$scope', 'booksFactory', function($scope, booksFactory) {
        
        //get the list of books
        $scope.loadBooks = function(){
            
            booksFactory.getBooks().query( //query returns A array
                
                null, //params

                function(response) { //success
                    $scope.books = response;
                    $scope.showBooks = true;
                },
                function(response) { // error
                    $scope.message = 'Error: '+response.status + ' ' + response.statusText;
                }
            );  
        }

        $scope.addBook = function(){

            var book = {title:$scope.title, author:$scope.author, picture: 'images/book.jpeg'};

            booksFactory.postBook().save(
                null, //params
                book,

                function(response){
                    $scope.books.push(response); //response == book
                },
                function(response){
                    console.log('Error: '+response.status + ' ' + response.statusText)
                }
            );
            
            $scope.author   = '';
            $scope.title    = '';
            $scope.books    = [];
            
        };

        //remove book from the scope        
        $scope.removeBook = function(book){

            booksFactory.deleteBook(book.id).delete();

            var index = $scope.books.indexOf(book);
            $scope.books.splice(index, 1);

            
        };

        $scope.orderby    = 'title';

        $scope.showBooks  = false;
        $scope.message    = 'Loading ...';

        $scope.loadBooks();
       

    }])

        
;
