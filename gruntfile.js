// const execSync = require('child_process').execSync;
// const semver = require('semver'); // Adiciona a importação do semver
// const path = require('path');

// module.exports = function(grunt) {
//   'use strict';

//   grunt.initConfig({
//     clean: ['./dist/**/*'],
//     ts: {
//       default: {
//         tsconfig: false
//       },
//       // options: {
//       //   fast: 'never'
//       // },
//       app: {
//         files: [
//           {
//             src: ['src/**/*.ts', '!src/.baseDir.ts'],
//             dest: './dist/lib'
//           }
//         ],
//         options: {
//           module: 'commonjs',
//           target: 'es6',
//           sourceMap: true,
//           declaration: true,
//           rootDir: 'src',
//           experimentalDecorators: true,
//           emitDecoratorMetadata: true,
//           outDir: './dist',
//         }
//       }
//     },
//     eslint: {
//       target: ['src/**/*.ts']
//     },
//     watch: {
//       ts: {
//         files: ['src/**/*.ts'],
//         tasks: ['ts']
//       }
//     },
//     bump: {
//       options: {
//         files: ['package.json'],
//         commit: false,
//         commitMessage: 'Release v%VERSION%',
//         commitFiles: ['package.json'],
//         createTag: false,
//         tagName: 'v%VERSION%',
//         tagMessage: 'Version %VERSION%',
//         push: false
//       }
//     },
//   });

//   grunt.loadNpmTasks('grunt-contrib-clean');
//   grunt.loadNpmTasks('grunt-ts');
//   grunt.loadNpmTasks('grunt-eslint');
//   grunt.loadNpmTasks('grunt-bump');
//   grunt.loadNpmTasks('grunt-contrib-copy');

//   grunt.registerTask('determineVersion', 'Determine the next version based on the parameter', function() {
//     const done = this.async();
//     const type = grunt.option('type'); // 'fix', 'feat', 'breaking'
//     let currentVersion;

//     try {
//       currentVersion = execSync('npm view . version').toString().trim();
//     } catch (error) {
//       grunt.log.writeln('Package not published yet, starting at version 0.0.0');
//       currentVersion = '0.0.0';
//     }

//     let newVersion;
//     if (type === 'feat') {
//       newVersion = semver.inc(currentVersion, 'minor');
//     } else if (type === 'breaking') {
//       newVersion = semver.inc(currentVersion, 'major');
//     } else {
//       newVersion = semver.inc(currentVersion, 'patch');
//     }

//     grunt.log.writeln('Current Version:', currentVersion);
//     grunt.log.writeln('New Version:', newVersion);

//     grunt.config.set('bump.options.version', newVersion);

//     done();
//   });

//   // Task to bump version
//   grunt.registerTask('bumpVersion', ['determineVersion', 'bump']);

//   grunt.registerTask('check', ['determineVersion']);

//   // Task to generate documentation using Compodoc from the parent folder
//   grunt.registerTask('generateDocs', function() {
//     const compodocPath = path.resolve(__dirname, '../node_modules/.bin/compodoc'); // Adjust the path to Compodoc
//     try {
//       execSync(`${compodocPath} -p tsconfig.json -d dist/documentation`, { stdio: 'inherit' }); // Output directly to dist/documentation
//       grunt.log.ok('Documentation generated successfully!');
//     } catch (error) {
//       grunt.log.error('Failed to generate documentation:', error);
//       return false;
//     }
//   });
  

//   grunt.registerTask('serveDocs', function() {
//     const compodocPath = path.resolve(__dirname, '../node_modules/.bin/compodoc'); // Path to Compodoc in parent folder
//     try {
//         execSync(`${compodocPath} -p tsconfig.json -s`, { stdio: 'inherit' });
//         grunt.log.ok('Compodoc is serving documentation at http://localhost:8080');
//     } catch (error) {
//         grunt.log.error('Failed to serve documentation:', error);
//         return false;
//     }
// });

//   // Task to publish without triggering the bumpVersion task again
//   grunt.registerTask('publish', function() {
//     try {
//       execSync('npm publish --access public --registry https://registry.npmjs.org/ --verbose', { stdio: 'inherit' });
//       grunt.log.ok('Package published successfully!');
//     } catch (error) {
//       grunt.log.error('Failed to publish:', error);
//       return false;
//     }
//   });

//   grunt.registerTask('check', ['determineVersion']);
//   grunt.registerTask('default', ['clean', 'ts:app', 'eslint']);
//   grunt.registerTask('deploy', ['bumpVersion', 'generateDocs', 'publish']);
// };
