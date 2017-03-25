# MyLibrary App Project

## Purpose of the project

My Small Library App is a open-source, personal and educational app to demonstrate the use and integration of modern technologies and frameworks all in one simple application. 
 
Created using Single Page Application (SPA) and Angular 1.6, it connects to a REST Mock Web server with a NO-SQL database;

![alt text](https://code-maven.com/img/angularjs.png "AngularJS")


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

## App Components

![alt text](http://www.buddyget.net/static/img/mylibrary.png "Components Design")

### Installing

First, make sure that Nodejs installed, to use NPM (Node Package Modules)

Download the project or create a new folder on your computer, and clone it using git clone:

```
$ git clone https://fbadin@bitbucket.org/fbadin/mylibrary.git 
```

Thereafter, move to the public/ folder and do the following to install the node modules and the bower components:
```
npm install
bower install
```

Move to the app root folder, and execute the following command to start the web server:
```
json-server --watch db.json
```

Now your client application is ready. You can run the App and also, open the code in your text editor.


## Running the App. There are two ways to do it.

### 1 - Direct type the url on your web-browser
```
http://localhost:3000/app/
```

### 2 - Using Grunt.
![alt text](https://gruntjs.com/img/og.png "Grunt")

Go to public/ folder and type
```
grunt
```

Grunt is a javascript task runner which will generate a optimized package, deploy it into a dist folder and launch on your web-browser. 
There are other options to support you as well as: "Grunt test", to start Karma Unit tests, "Grunt dist", to only generate the package, "Grunt serve" to start-up the web-server, and "Grunt run", to quick generate the package deploy and start serving.

## Unit Tests using Karma.
![alt text](https://karma-runner.github.io/assets/img/banner.png "Karma")

To manually the Unit Test of the project, browse to public/test/ folder and type the command:

```
karma start karma.conf.js
``` 

## Built With

* [Angular 1.6](https://angularjs.org/) -  The base web framework used
* [JQuery](https://jquery.com/) - Making some scripting simplier
* [Bootstrap](http://getbootstrap.com/) - The UI library for the web responsive web app
* [Json-Server](http://www.betterpixels.co.uk/projects/2015/05/09/mock-up-your-rest-api-with-json-server/) - Mock up the REST API with JSON Server
* [Javascript](https://www.javascript.com/) - Javascript
* [HTML](http://html.com/) - HTML5
* [CSS](https://www.w3schools.com/cssref/) - CSS3
* [Bower](https://bower.io/) - A package manager to make easier project's dependencies
* [Font-Awesome Icons](http://fontawesome.io/icons/) - Fine icons to make it cool
* [Grunt](https://gruntjs.com/) - The JavaScript Task Runner
* [Karma](karma-runner.github.io) - Karma - Spectacular Test Runner for JavaScript
* [Yeoman](http://yeoman.io/) - The web scaffolding for modern apps.

The base of this project was generated using Yeoman. It is a great tool to start. 

## Versioning

I am using [Git]() for versioning it :)

## Authors

* **Fernando Badin** - *Initial work* 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Find more about my work on

http://www.fbadin.com