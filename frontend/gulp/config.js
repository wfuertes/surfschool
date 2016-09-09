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
    src: `${src}/markup/**`,
    less: `${src}/styles/**`,
    dest
  },

  browserify: {
    debug: true,
    bundleConfigs: [{
      entries: `${src}/scripts/app/app.jsx`,
      dest: `${dest}/js`,
      outputName: 'app.js'
    }],
    extensions: ['.jsx']
  },

  babel: {
    presets: ['latest', 'react']
  }

};
