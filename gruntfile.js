const execSync = require('child_process').execSync;
const semver = require('semver'); // Adiciona a importação do semver

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    clean: ['./dist/**/*'],
    ts: {
      default: {
        tsconfig: false
      },
      options: {
        fast: 'never'
      },
      app: {
        files: [
          {
            src: ['src/**/*.ts', '!src/.baseDir.ts'],
            dest: './dist'
          }
        ],
        options: {
          module: 'commonjs',
          target: 'es6',
          sourceMap: true,
          declaration: true,
          rootDir: 'src',
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          outDir: './dist',
        }
      }
    },
    eslint: {
      target: ['src/**/*.ts']
    },
    watch: {
      ts: {
        files: ['src/**/*.ts'],
        tasks: ['ts']
      }
    },
    bump: {
      options: {
        files: ['package.json'],
        commit: false,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: false,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('determineVersion', 'Determine the next version based on the parameter', function() {
    const done = this.async();
    const type = grunt.option('type'); // 'fix', 'feat', 'breaking'
    let currentVersion;

    try {
      currentVersion = execSync('npm view . version').toString().trim();
    } catch (error) {
      grunt.log.writeln('Package not published yet, starting at version 0.0.0');
      currentVersion = '0.0.0';
    }

    let newVersion;
    if (type === 'feat') {
      newVersion = semver.inc(currentVersion, 'minor');
    } else if (type === 'breaking') {
      newVersion = semver.inc(currentVersion, 'major');
    } else {
      newVersion = semver.inc(currentVersion, 'patch');
    }

    grunt.log.writeln('Current Version:', currentVersion);
    grunt.log.writeln('New Version:', newVersion);

    grunt.config.set('bump.options.version', newVersion);

    done();
  });

  // Task to bump version
  grunt.registerTask('bumpVersion', ['determineVersion', 'bump']);

  grunt.registerTask('check', ['determineVersion']);

  // Task to publish without triggering the bumpVersion task again
  grunt.registerTask('publish', function() {
    try {
      execSync('npm publish --access public --registry https://registry.npmjs.org/ --verbose', { stdio: 'inherit' });
      grunt.log.ok('Pacote publicado com sucesso!');
    } catch (error) {
      grunt.log.error('Falha ao publicar:', error);
      return false;
    }
  });

  grunt.registerTask('default', ['clean', 'ts:app', 'eslint']);
  grunt.registerTask('check', ['determineVersion']);
  grunt.registerTask('deploy', ['bumpVersion','publish']);
};
