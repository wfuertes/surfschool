const dest = './dest';
const src = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },

    files: [
      `${dest}/**'`
    ]
  },

  markup: {
    src: `${src}/index.html`,
    less: `${src}/styles/**`,
    imgs: `${src}/img/**`,
    dest
  },

  browserify: {
    debug: true,
    bundleConfigs: [{
      entries: `${src}/index.jsx`,
      dest: `${dest}/js`,
      outputName: 'app.js'
    }],
    extensions: ['.jsx']
  },

  babel: {
    presets: ['latest', 'react']
  }

};
