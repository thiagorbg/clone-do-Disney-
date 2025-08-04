module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // LESS
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        // IMAGEMIN
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,jpeg,gif,svg}'],
                    dest: 'dist/images/'
                }]
            }

            
        },
        watch: {
            files:['src/styles/*.less'],
            tasks:['less:development']
        },
        copy: {
            html: {
                files: [
            {
                expand: true,
                cwd: 'src/',              // a partir da raiz do projeto
                src: ['index.html'],   // ajusta se tiver mais HTMLs
                dest: 'dist/'
            }
        ]
        }
    }
    });

    // Carregar plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Tarefas nomeadas para ficar fácil de usar
    
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'imagemin', 'copy:html']);
};
