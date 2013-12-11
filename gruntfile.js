module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// CONFIG ===================================/

		watch: {
		  imagemin: {
		    dynamic: {
		      files: [{
		        expand: true,
		        cwd: 'dev/img/',
		        src: ['dev/img/*.{png,jpg,gif}'],
		        dest: 'src/img/'
		      }]
		    }
		  },
			compass: {
				files: ['dev/sass/*.sass'],
				tasks: ['compass:dev']
			},
			js: {
				files: ['dev/js/*.js'],
				tasks: ['uglify']
			}
		},
		compass: {
			dev: {
				options: {              
					sassDir: ['dev/sass/'],
					cssDir: ['src/css/'],
					environment: 'development'
				}
			},
			prod: {
				options: {              
					sassDir: ['dev/sass/'],
					cssDir: ['src/css/'],
					environment: 'production'
				}
			},
		},
		uglify: {
			all: {
				files: {
					'src/js/min.js': [
					'dev/js/*.js']
					// 'js/*.js']
				}
			},
		},
	});

	// DEPENDENT PLUGINS =========================/

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// TASKS =====================================/

	grunt.registerTask('default', ['imagemin', 'compass:dev', 'uglify', 'watch']);

};