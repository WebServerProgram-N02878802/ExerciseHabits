# FitnessApp

This is an angular 6 project hosted by the node webserver framework. 

# Directories

* dist
    Static files to be loaded

* e2e
    end to end testing - unused for this project

* node_modules
    npm-installed modules

* server
    index.js - initial controller used for parsing bodys in http requests
    * app
        controller.js - routes application requests to back-end functionality
        model.js - provides back-end functionality & temporary database


* src
    * app
        *components
            *app
                *dashboard - app home component (post-login)
                *map - app map component (feature 1/2)
                *todo - app todo component (feature 2/2)
            *home - component to introduce app
            *login - component to handle login
        *models
            app.ts - model containing structures for User, Map, and Todo
        *services
            app.service.ts - service file containing all app http requests
        misc files - app root files (ie. app.module, app.component, ect.)
        
    * assets - directory containing shared assets of the project
    * environments - directory containing files for the build configuration
    misc files - global styles, testing, index.html, resources 