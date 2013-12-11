sample-grunt-project
====================

Uses compass and grunt to poll for changes and minify the js

===

By Tjobbe Andrews, hopefully it's of use.
twitter.com/tjobbe
==============================================

Uses grunt to watch this directory. Currently uses SASS syntax.
Edit config.rb to change this to SCSS if preferred.

I used the following article to create this, and you'll find more info here:
http://matthew-jackson.com/notes/development/grunt-workflow-for-sass-compass-and-js/

==============================================

Want to run this on your own projects?

- Install node, compass, grunt and anything else I've probably missed first (see the URL above) -

===

1) Create a package.json file by typing:

	|| $ npm init

Which will then guide you through creating a package.json file (delete the original first though)

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

===x===