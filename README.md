# MyLibrary App Project

## Purpose of the project

My Library App is a open-source personal educational app to demonstrate the use of modern technologies and frameworks all in one simple application. 

This is a Small Library APP.
 
Created using Single Page Application (SPA) and Angular 1.6, it connects to a REST Mock Web server with a NO-SQL database;

## Features of the Library
	
* All books have values for "title", "author" and "picture" and are stored in an json web-server.
* There  are functions for adding and removing a book from the library.
* Books are organized in alphabetic order

- You can search a desired book using the search bar
 	
    - The user interface includes the following:
    - Current listing of all the books in the library.
*   "Add Book" button that when clicked displays the "Add Book Form"
*   "Add Book Form" includes text fields for the "title" and "author" attributes of a book field.
*   "Add Book Form" includes a "Done" button that when clicked validates that values for "title" and "author" have 
       been provided. If these values are not entered an error message is displayed to the user. 
       If these values are entered then the "Book" is added to the "library" and the list on the ui is updated.
*   Way to remove a book using a garbage can icon, when clicked removes the book from the "library" and the UI.


### Installing

First, make sure that you have bower installed on your computer, from NPM (Node Package Modules)

Download the project or create a new folder on your computer, and clone it using git clone:

```
$ git clone https://fbadin@bitbucket.org/fbadin/mylibrary.git 
```

browse to public folder and execute
```
bower install
```

it will install all the dependencies of the project

after, you need to install the mock web server. We are using json-server

```
npm install json-server -g
```

now, browse to the root library folder, and execute the command to start the web server

```
json-server --watch db.json
```

Type the url http://localhost:3000/app/ on your browser and enjoy :)



## Built With

* [Angular 1.6](https://angularjs.org/) -  The base web framework used
* [JQuery](https://jquery.com/) - Making some scripting simplier
* [Bootstrap](http://getbootstrap.com/) - The UI library for the web responsive web app
* [Json-Server](http://www.betterpixels.co.uk/projects/2015/05/09/mock-up-your-rest-api-with-json-server/) - Mock up the REST API with JSON Server
* [Javascript](https://www.javascript.com/) - Javascript
* [HTML](http://html.com/) - HTML5
* [CSS](https://www.w3schools.com/cssref/) - CSS3
* [Bower](https://bower.io/) - A package manager to make easier project's dependencies
* [Font-Awesome Icons](http://fontawesome.io/icons/) - Icons to make it more elegant :)


## Versioning

I am using [Git]() for versioning it :)

## Authors

* **Fernando Badin** - *Initial work* 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Find more about my work on

http://www.fbadin.com