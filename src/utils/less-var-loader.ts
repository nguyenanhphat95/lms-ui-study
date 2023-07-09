import lessToJs from 'less-vars-to-js'

function test(content) {
  return `module.exports = ${JSON.stringify(lessToJs(content))}`
}

export default test;
