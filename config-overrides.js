/* config-overrides.js */
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    alias({
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@constants': 'src/constants',
        '@data': 'src/data',
        '@containers': 'src/containers',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
        '@store': 'src/store',
        '@services': 'src/services',
    })(config);
    return config;
}
// '@hoc-helpers': 'src/hoc-helpers',
// '@context': 'src/context',
// '@hooks': 'src/hooks',