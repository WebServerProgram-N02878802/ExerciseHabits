# FitnessApp

This is an angular 6 project hosted by the node webserver framework. 

# Features

* User Sign-in
* Dashboard with 2 apps:
    * Map - Interactive map that allows the user to place markers to map a route
    * Todo - Interactive todo list that allows the user to add and delete list items

* User data stored on server
* Map & Todo data pushed onto User's file both local & server 
* Map & Todo data pulled from User's file on server at login (no persistent database)


# Directories

* dist
    Static files to be loaded

* e2e
    end to end testing - unused for this project

* node_modules
    npm-installed modules

============================================================================
* server
    * index.js - initial controller used for parsing bodys in http requests
* server/app
    * controller.js - routes application requests to back-end functionality
    * model.js - provides back-end functionality & temporary database

============================================================================

============================================================================
* src/app/components
    * home - component to introduce app
    * login - component to handle login

* src/app/components/app
    * dashboard - app home component (post-login)
    * map - app map component (feature 1/2)
    * todo - app todo component (feature 2/2)

===========================================================================

===========================================================================
* src/app/models
    * app.ts - model containing structures for User, Map, and Todo

* src/app/services
    * app.service.ts - service file containing all app http requests

===========================================================================

* misc files - global styles, testing, index.html, resources, ect.