# clone-do-Disney-+


module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',   // Pasta onde estão suas imagens originais
                    src: ['**/*.{png,jpg,jpeg,gif,svg}'], // Quais tipos de arquivos pegar
                    dest: 'dist/images/' // Para onde as imagens comprimidas vão
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['imagemin']);
};




/////////////////////////////////////
module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css' : 'src/styles/*.less'
                }
            },
            production: {
                options:{
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css' : 'src/styles/*.less'
                }
            },
            imagemin: {
                dynamic: {
                    files: [{
                        expand: true,
                        cwd: 'src/images/',   // Pasta onde estão suas imagens originais
                        src: ['**/*.{png,jpg,jpeg,gif,svg}'], // Quais tipos de arquivos pegar
                        dest: 'dist/images/' // Para onde as imagens comprimidas vão
                    }]
                }
        }
        }
    })



    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production', 'imagemin']);
}