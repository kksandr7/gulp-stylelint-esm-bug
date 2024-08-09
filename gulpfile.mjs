import gulp from 'gulp';
import gStylelintEsm from 'gulp-stylelint-esm';

const stylelint = () => {
  return gulp.src('fixtures/*.css')
    .pipe(gStylelintEsm({
      failAfterError: true,
      config: { rules: { 'color-hex-length': 'short' } },
      reporters: [{ formatter: 'string', console: true }],
    }))
    .pipe(gulp.dest('dist'));
};

export default stylelint;
