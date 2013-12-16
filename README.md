sample-grunt-project
====================

Uses compass and grunt to poll for changes and minify the js and images

https://github.com/Tjobbe/sample-grunt-project

NOTE:
This git repo WILL be expanded upon as time progresses.

---
Upcoming improvements:
---
https://github.com/gruntjs/grunt-contrib-connect Or https://github.com/shakyShane/grunt-browser-sync
https://github.com/zonak/grunt-ftp-deploy
https://github.com/iclanzan/grunt-git-deploy

==============================================

Uses grunt to watch this directory. Currently uses SASS syntax.
Edit config.rb to change this to SCSS if preferred.

I used the following article to create this, and you'll find more info here:
http://24ways.org/2013/grunt-is-not-weird-and-hard/
http://matthew-jackson.com/notes/development/grunt-workflow-for-sass-compass-and-js/

==============================================

Want to run this on your own projects?

- Install node, compass, grunt and anything else I've probably missed first (see the URLs above) -

==============================================


1) Create a package.json file by typing:

	|| $ npm init

Which will then guide you through creating a package.json file - just hit enter for each step if you're not sure.


5) Set up node for this folder, we need a node_modules folder in order for this to actually work so type:

	|| $ npm install grunt --save-dev


6) now install the grunt plugins, in the default case you'll need to type the following:

	|| $ npm install grunt-contrib-watch --save-dev
	|| $ npm install grunt-contrib-compass --save-dev
	|| $ npm install grunt-contrib-uglify --save-dev
	|| $ npm install grunt-contrib-imagemin --save-dev

This will automagically update the package.json file for you.

- you probably want to restart your terminal window at this stage.


7) Good To Go, just type:

	|| $ grunt

and it will minify your css, js & images and watch for any changes to your sass files.

===x===