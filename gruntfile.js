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
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false
      }
    },
    shell: {
      npmPublish: {
        command: 'npm publish --access public --//registry.npmjs.org/:_authToken=${NPM_TOKEN}'
      }
    }
  });

  // grunt.loadNpmTasks(`${parentPath}/grunt-ts`);
  // grunt.loadNpmTasks(`${parentPath}/grunt-contrib-clean`);
  // grunt.loadNpmTasks(`${parentPath}/grunt-contrib-copy`);
  // grunt.loadNpmTasks(`${parentPath}/grunt-contrib-watch`);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['clean', 'ts:app', 'eslint']);
  grunt.registerTask('publish', ['bump', 'shell:npmPublish']);
};
