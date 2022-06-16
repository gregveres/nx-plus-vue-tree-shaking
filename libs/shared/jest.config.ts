module.exports = {
  displayName: 'shared',
  preset: '../../jest.preset.ts',
  transform: {
    '^.+.vue$': '@vue/vue2-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/libs/shared',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'libs/shared/tsconfig.spec.json',
      babelConfig: 'libs/shared/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'libs/shared/tsconfig.spec.json',
      babelConfig: 'libs/shared/babel.config.js',
    },
  },
};
