import gulp from 'gulp';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import {exec} from 'child_process';



gulp.task('build', (cb) => {

  webpack(webpackConfig, (err) => {
    cb();
    exec('npx styleguidist build');
  });



});
