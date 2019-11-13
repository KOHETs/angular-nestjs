module.exports = {
  name: 'angular-nest',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-nest',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
