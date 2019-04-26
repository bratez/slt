module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['js/*.js'],
                dest: 'no-babel.js'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        watch: {
            css: {
                files: 'sass/**/*.scss',
                tasks: ['compass']
            },
            scripts: {
                files: 'js/*.js',
                tasks: ['concat']
            },
            babel: {
                files: 'no-babel.js',
                tasks: ['babel']
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['@babel/preset-env', '@babel/preset-react']
            },
            dist: {
                files: {
                    'scripts.js': 'no-babel.js'
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default',['watch']);
}