module.exports = {
  /**
  ** Starts an Express server to reload
  ** the page at any changes to
  ** .html, .css, .js or image files
  **/
  all: {
    options: {
      hostname: '0.0.0.0',
      bases: ['<%= config.app %>'],
      livereload: true,
    }
  }
};
