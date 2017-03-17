'use strict';

angular.module('libraryApp')

        
    .controller('IndexController', ['$scope', 'booksFactory', function($scope, booksFactory) {
        
        $scope.orderby    = 'title';

        $scope.showBooks  = false;
        $scope.message    = "Loading ...";


        //get the list of books
        function loadLooks(){
            booksFactory.getBooks().query(
                function(response) {
                    $scope.books = response;
                    $scope.showBooks = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );  
        }

        loadLooks();
        

        $scope.addBook = function(){

            var book = {title:$scope.title, author:$scope.author, picture: 'images/book.jpeg'};

            //$scope.books.push(book);

            booksFactory.postBook().save(book);

            loadLooks();

            $scope.author = '';
            $scope.title = '';

        }

        //remove book from the scope        
        $scope.removeBook = function(book){

            booksFactory.deleteBook(book.id).delete();

            var index = $scope.books.indexOf(book);
            $scope.books.splice(index, 1);

            
        }
       

    }])

        
;
