module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            express: {
                files: ['*.js'],
                tasks: ['jshint', 'express:dev'],
                options: {
                    spawn: false
                }
            }
        },
        jshint: {
            options: {
                node: true
            },
            all: {
                src: ['*.js']
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server.js',
                }
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', '', function() {
        var taskList = [
            'jshint',
            'express:dev',
            'watch'
        ];
        grunt.task.run(taskList);
    });
};