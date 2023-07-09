const path = require('path');
const glob = require('glob');
const webpackConfig = require('./webpack.dev.js');
const pkg = require('./package.json');
const docGenerator = require('react-docgen-typescript');

function loadComponent() {
  const componentPaths = glob.sync(
    path.resolve(__dirname, 'src/components/*/index.{ts,tsx}')
  );
  const allComponents = componentPaths.reduce((acc, componentPath) => {
    const componentName = componentPath.replace(
      /^([\s\S]+)\/([a-zA-Z0-9]+)\/index.(tsx?)$/,
      '$2'
    );
    return Object.assign(acc, { [componentName]: componentPath });
  }, {});

  return allComponents;
}

function getExampleFilename(componentPath) {
  const result = componentPath.replace(/index.(js|jsx|ts|tsx)?$/, 'README.md');
  return result;
}

const sections = [
  {
    name: 'Introduction',
    exampleMode: 'expand',
    usageMode: 'expand',
    content: require.resolve('./help/README.md'),
    sectionDepth: 0,
    sections: [
      {
        name: 'Installation',
        content: require.resolve('./help/INSTALLATION.md')
      },
      {
        name: 'Contributing',
        content: require.resolve('./help/CONTRIBUTING.md')
      }
    ]
  },
  {
    name: 'Changelog',
    content: require.resolve('./help/CHANGELOG.md'),
    sectionDepth: 1
  },
  {
    name: 'Colors',
    content: 'docs/colors/README.md',
    exampleMode: 'collapse',
    usageMode: 'expand',
    sectionDepth: 0
  },
  {
    name: 'Icons',
    content: 'docs/icons/README.md',
    exampleMode: 'collapse',
    usageMode: 'expand',
    sectionDepth: 0
  },
  {
    name: 'Components',
    components: 'src/components/*/index.{js,jsx,ts,tsx}',
    exampleMode: 'collapse',
    usageMode: 'expand',
    sectionDepth: 1
  }
];

function getComponentPathLine(componentPath) {
  const dir = path.dirname(componentPath);
  const matches =
    dir.match(/(([\s\S]+)?-)?(([^/]+|[^src]+)\/)?([\s\S]+)\/([\s\S]+)$/) || [];

  if (!matches[4] || matches[4] === 'src') {
    return `import { ${matches[6]} } from '@fundoo/ui'`;
  }

  if (matches[4] === 'componse') {
    return `import ${matches[6]} from '@fundoo/${matches[4]}/components/${matches[6]}'`;
  }

  return `import { ${matches[6]} } from '@fundoo/${matches[4]}'`;
}

function resolveComponent(name) {
  return path.join(__dirname, `styleguide/components/${name}`);
}

const version = `v${pkg.version}`;
const propsParser = docGenerator.withCustomConfig('./tsconfig.json').parse;

module.exports = {
  serverPort: 9999,
  title: 'Fundoo React Lib Component',
  version,
  sections,
  getExampleFilename,
  handlers(componentpath) {
    require('react-docgen').defaultHandlers.concat(
      require('react-docgen-external-proptypes-handler')(componentpath),
      require('react-docgen-displayname-handler').createDisplayNameHandler(
        componentpath
      )
    );
  },
  require: [
    // path.join(__dirname, 'src/styles/index.less'),
    path.join(__dirname, 'styleguide/main.css'),
    path.join(__dirname, 'src/styles/variables.scss')
  ],
  template: {
    head: {
      links: []
    }
  },
  theme: {
    fontFamily: {
      base: '"Roboto", sans-serif'
    }
  },
  webpackConfig,
  pagePerSection: true,
  moduleAliases: {
    '@fundoo/styles': path.resolve(__dirname, 'src/styles'),
    '@App': path.resolve(__dirname, 'src'),
    '@fundoo/ui/components': path.resolve(__dirname, 'src/components')
  },
  context: loadComponent(),
  template: {
    container: 'root',
    trimWhitespace: true
  },
  propsParser,
  require: [
    path.join(__dirname, 'public/static/css/fonts.css'),
    path.join(__dirname, 'src/styles/global.scss'),
    path.join(__dirname, 'styleguide/polyfill')
  ],
  skipComponentsWithoutExample: false,
  styleguideComponents: {
    StyleGuideRenderer: resolveComponent('StyleGuideRenderer'),
    TableOfContentsRenderer: resolveComponent('TableOfContentsRenderer'),
    SectionsRenderer: resolveComponent('SectionsRenderer'),
    SectionRenderer: resolveComponent('SectionRenderer'),
    HeadingRenderer: resolveComponent('HeadingRenderer'),
    ParaRenderer: resolveComponent('ParaRenderer'),
    ComponentsListRenderer: resolveComponent('ComponentsListRenderer'),
    PlaygroundRenderer: resolveComponent('PlaygroundRenderer'),
    ReactComponentRenderer: resolveComponent('ReactComponentRenderer'),
    ExamplesRenderer: resolveComponent('ExamplesRenderer'),
    PropsRenderer: resolveComponent('PropsRenderer'),
    TabButtonRenderer: resolveComponent('TabButtonRenderer'),
    SearchBox: resolveComponent('SearchBox'),
    PathlineRenderer: resolveComponent('PathlineRenderer')
  },
  getComponentPathLine
};
