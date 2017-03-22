'use strict';

describe('IndexController', function () {

  // load the controller's module
  beforeEach(module('libraryApp'));

  var IndexController, scope, $httpBackend;

  //workaround for Karma/ui-router conflict
  beforeEach(module(function($urlRouterProvider) {
  
    $urlRouterProvider.deferIntercept();
  
  }));

  // Initialize the controllers and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, booksFactory) {
    
    // place here mocked dependencies
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET("http://localhost:3000/books").respond(

      [
        {
          "id": 0,
          "title": "The Lord of the Rings",
          "author": "J.R.R. Tolkien",
          "picture": "images/lor.jpg"
        },
        {
          "id": 1,
          "title": "A Game of Thrones",
          "author": "George R.R. Martin",
          "picture": "images/got.jpg"
        }
      ]


    );

    scope = $rootScope.$new();
    
    IndexController = $controller('IndexController', {
      $scope: scope,
      booksFactory: booksFactory
    });
    
    $httpBackend.flush();

  }));

  it('should order by title', function () {
    
    expect(scope.orderby).toBe('title');
  
  });

  it('should have showBooks as true', function () {

    expect(scope.showBooks).toBeTruthy()

  });

  it('should have a list of books', function () {
    
    expect(scope.books).toBeDefined();
    expect(scope.books.length).toBe(2);
  
  });

});
