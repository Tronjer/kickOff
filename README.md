# kickOff v0.1.0

> Framework for Frontend Development powered by Grunt

> Includes Bootstrap, FontAwesome, Sass, Compass, Modernizr and jQuery

> A [Demo](http://matthias-kalden.de/kickoff) can be watched [here](http://matthias-kalden.de/kickoff)

## Features
- Compiling and concatenating of Sass files to CSS
- Linting and concenating of custom JavaScript and vendor libraries
- Optimizing of images
- Observing of file changes and immediately processing of updated code
- Express server on localhost with browser autoreload. No need to hit the refresh button anymore
- Clean production build with minified files for optimal performance
- Bootstrap, FontAwesome, Sass, Compass, Modernizr and jQuery on Board
- Compass Helper enabled

## Getting Started

kickOff requires [Ruby](http://www.ruby-lang.org/en/downloads), [Sass](http://sass-lang.com/tutorial.html"), [Compass](http://compass-style.org/install), [Node](http://nodejs.org) and [Grunt](http://gruntjs.com).

If you're on OS X or Linux you probably already have Ruby installed; test with
```shell
ruby -v
```
 in your terminal. When you've confirmed your Ruby installation, run
```shell
gem update --system && gem install compass
```
to install Compass and Sass.

Installing Node and NPM up is easy, as there are pre-built [packages](http://nodejs.org/download) for every platform available.

For getting up Grunt check out the [starting guide](http://gruntjs.com/getting-started).

After checking out kickOff move to the project folder in your console and run
```shell
npm install
```
to install all required Node modules.

## Up and Running

### Files and Stuff

**HTML:**
Once you got everything up and running, head to the /app folder of your kickoff project. There you find an index.html (this file) and 3 folders: css, img and js. Feel free to add aditional .html files inside /app or subdirectories (i.e. /app/views/, /app/views/partials/, etc.).

**CSS:**
Put your custom stylesheets as .scss partials (_filename.scss) under app/css/sass subdirectories. There exists already a Sass file structure with kind of a manifest file (_all.scss) in every subdir fo regsitering partials. If you don't know where to write your custom styles, app/sass/partials/_layout.scss would be a good starting point. Do not store additional files directly in /app/css as those won't get considered for compiling. You also can disable Bootstrap components and FontAwesome if that's too much overload for your project.

**JavaScript:**
Vendor libraries (i.e. jQuery, Modernizr) belong into /app/js/libs. Store your custom JavaScripts in /app/js/scripts.

**Images:**
Images belong into /app/img and have to be .png, .jpg or .gif in order to get optimized.

**Fonts:**
Place your webfonts in /app/css/fonts.

### Running Tasks

**Development:**
Move to the root of the project folder in your console and simply run
```shell
grunt
```
This compiles all .scss files in your Sass directories to /app/css/styles.css, JavaScript vendor files in /app/js/libs to /app/js/lib.js as well as those in app/js/scripts/js to /app/js/main.js and optimize your .png, .jpg and .gif located in /app/img. Every change to .html, .scss, and .js files is watched and triggers a compilation. Your browser will open a new window for localhost:3000 and shows every update immediately. Should you dislike the autoreload, open the Gruntfile.js in your project's root and set var server to false. To stop Grunt hit
```shell
Ctrl + C
```
in your console.

**Production:**
For a lean production build run
```shell
grunt --env=production
```
This will wipe/recreate the entire production folder (if existent) to resync with your app directory, and copy/minify all .html, .css, .js files, images and webfonts.

### Known Issues
kickOff observes any modification to your HTML, JS, CSS, and images. This not only implies amendments to existing files but also renaming, deleting and adding of new files. However, to trigger the watch tasks for JavaScript and images, there have to be at least one file in app/js/scripts, respectively app/img before you run grunt. This is an issue of the grunt-contrib-watch module and will hopefully adressed in one of the next releases.

## Release History
* 2014-05-23 v0.1.0 Initial release
