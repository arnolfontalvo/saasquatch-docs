import config from '../config';
import gulp from 'gulp';
import path from 'path';
import watch from 'gulp-watch';

var watchTask = function() {
  var watchableTasks = ['images', 'css'];

  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName];
    if(task) {
      var glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
      watch(glob, function() {
       require('./' + taskName)();
      });
    }
  });
};

gulp.task('watch', ['browserSync'], watchTask);
export default watchTask;
