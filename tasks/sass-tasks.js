module.exports = {
  /**
  ** Imports Boostrap related .sccs files from bower_components,
  ** sets fonts- and image paths for Compass URL helpers,
  ** compiles all .scss files.
  **
  **/
  dev: {
    options: {
    importPath: '<%= config.bootstrapPath %>/stylesheets',
    sassDir: '<%= config.app %>/css/sass',
    cssDir: '<%= config.app %>/css',
    fontsDir: '<%= config.app %>/css/fonts',
    imagesDir: '<%= config.app %>/img',
    outputStyle: 'nested',
    relativeAssets: true
    }
  },
  dist: {
    options: {
      importPath: '<%= config.bootstrapPath %>/stylesheets',
      sassDir: '<%= config.app %>/css/sass',
      cssDir: '<%= config.dist %>/css',
      fontsDir: '<%= config.dist %>/css/fonts',
      imagesDir: '<%= config.dist %>/img',
      outputStyle: 'compressed',
      relativeAssets: true
    }
  }
};
