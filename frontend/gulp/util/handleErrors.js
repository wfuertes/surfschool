var notify = require("gulp-notify");

module.exports = () => {
  var args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: "Compilation errors",
    message: 'Error: <%= error.message %>',
  }).apply(this, args);

  this.emit('end');
};
