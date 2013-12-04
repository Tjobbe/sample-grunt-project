sample-grunt-project
====================

Uses compass and grunt to poll for changes and minify the js

===

Made by Tjobbe Andrews, hopefully it's of use.
twitter.com/tjobbe
==============================================

Uses grunt to watch this directory. Currently uses SASS syntax.
Edit config.rb to change this to SCSS if preferred.

More info here: http://matthew-jackson.com/notes/development/grunt-workflow-for-sass-compass-and-js/

==============================================

cd to this directory (command line) then do

	|| $ grunt

To poll for changes to the /sass/screen.sass file,
anything in the js/ folder and minify that shit.

===

Want to run this on your own projects?

- Install node, compass, grunt and anything else I've probably missed first (see the URL above) -

===

1) Create a new directory using compass

'compass create' from within an existing dir or 'compass create projectName' to create a new dir from scratch (or just copy this directory and rename it).

2) Copy the gruntfile.js.

3) Edit the config.rb file for any sass / compass related stuff

4) Create a package.json file by typing:

	|| $ npm init

Which will then guide you through creating a package.json file

5) Set up node for this folder, we need a node_modules folder in order for this to actually work so type:

	|| $ npm install grunt --save-dev

6) now install the grunt plugins, in the default case you'll need to type the following:

	|| $ npm install grunt-contrib-watch --save-dev
	|| $ npm install grunt-contrib-compass --save-dev
	|| $ npm install grunt-contrib-uglify --save-dev
	|| $ npm install grunt-style-injector --save-dev

This will automagically update the package.json file for you.

7) Good To Go, just type:

	|| $ grunt

and it will minify your css, js and watch for any changes to your sass files.