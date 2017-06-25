module.exports = function(grunt) {
  // project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          sourceMap: true,
          sourceMapName: 'js/map/bundle.map',
        },
        files: {
          'public/js/bundle.min.js': ['public/js/bundle.js']
        },
      },
    },
    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'public/css/maps/',
        },
        processors: [
          require('pixrem')(), 
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')()
        ],
      },
      dist: {
        src: 'public/css/*.css',
      },
    },
  });

  // Load the plugin that provides the post-css task
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task(s)
  grunt.registerTask('default', ['postcss', 'uglify']);
};
