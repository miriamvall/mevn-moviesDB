# MOVIES database

This is a CRUD (Create, Read, Update, Delete) web app built with the MEVN stack, which implements a REST API on its back-end part.

* MongoDB (using the mongoose module on Node.js) to store the movies data
* Express.js, a web application framework for Node.js
* [Vue.js](https://vuejs.org/), a progressive framework for building user interfaces. The front-end part of the app is built with the help of [Vue Cli](https://cli.vuejs.org/), a standard tooling for Vue.js development.
* Node.js

It manages the movies recently watched by the user, who can give them a rating. It acts as a database where the information about each movie (which includes the title, director, year, summary and user's rating) is stored and able to be changed over time.

[Bootstrap](https://getbootstrap.com/) and [BootstrapVue](https://bootstrap-vue.org/) were used for the overall styling.

MongoDB must be installed and running for the application to work properly, as well as the other used frameworks of the development stack, including NPM.
To run the back-end server, execute "node server.js" on the command line.

### The functionalities of the app include:

* Visualizing a list with the movies the user has watched
* Adding a new movie to the list of watched movies and giving it a rating ranging from 1 to 5
* Modifying the information about a movie
* Seeing the complete details of each movie, if desired
* Filtering movies according to their director
* Ordering movies depending on their year, their title (alphabetically) or their rating

### Some app screenshots

![homepage](https://github.com/miriamvall/mevn-moviesDB/blob/master/screenshots/homepage.png)

![createmovie](https://github.com/miriamvall/mevn-moviesDB/blob/master/screenshots/createmovie.png)

![movielist](https://github.com/miriamvall/mevn-moviesDB/blob/master/screenshots/movielist.png)

![moviesfiltered](https://github.com/miriamvall/mevn-moviesDB/blob/master/screenshots/filteredmovies.png)

![moviesordered](https://github.com/miriamvall/mevn-moviesDB/blob/master/screenshots/movielist2.png)

![moviedetails](https://github.com/miriamvall/mevn-moviesDB/blob/master/screenshots/moviedetails.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
