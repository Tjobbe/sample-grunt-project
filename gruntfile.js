module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// CONFIG ===================================/
		watch: {
			compass: {
				files: ['sass/*.sass'],
				tasks: ['compass:dev']
			},
			js: {
				files: ['js/*.js'],
				tasks: ['uglify']
			}
		},
		compass: {
			dev: {
				options: {              
					sassDir: ['sass'],
					cssDir: ['stylesheets'],
					environment: 'development'
				}
			},
			prod: {
				options: {              
					sassDir: ['styles/sass'],
					cssDir: ['styles/css'],
					environment: 'production'
				}
			},
		},
		uglify: {
			all: {
				files: {
					'js/min.js': [
					'js/*.js']
				}
			},
		},
	});

	// DEPENDENT PLUGINS =========================/

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// TASKS =====================================/

	grunt.registerTask('default', ['compass:dev', 'uglify', 'watch']);

};