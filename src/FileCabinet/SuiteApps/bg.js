/**
 * bg.js
 *
 * Allows execution of SuiteScript-like modules from the command line.
 * Includes mocks for common NetSuite modules.
 */

const requirejs = require('requirejs')

// Retrieve command-line arguments
const args = process.argv.slice(2)

if (args.length < 2) {
  console.error('Usage: node bg.js <SuiteScriptModule> <FunctionName> [FunctionArgs...]')
  process.exit(1)
}

const [suiteScriptModule, functionName, ...functionArgs] = args

// Configure RequireJS
requirejs.config({
  nodeRequire: require,
  baseUrl: __dirname,
  paths: {
    // Map NetSuite modules to local mocks
    'N/search': 'mocks/N/search',
    'N/record': 'mocks/N/record',
    'N/error': 'mocks/N/error',
    'N/email': 'mocks/N/email',
    'N/log': 'mocks/N/log',
    'N/ui/serverWidget': 'mocks/N/ui/serverWidget',
    'N/https': 'mocks/N/https',
    'N/file': 'mocks/N/file',
    'N/runtime': 'mocks/N/runtime',
    'N/serverWidget': 'mocks/N/serverWidget',

    // Script "modules"
    ClientScript: 'mocks/ClientScript',
    MassUpdateScript: 'mocks/MassUpdateScript',
    ScheduledScript: 'mocks/ScheduledScript'
  }
})

// Dynamically load the requested module
requirejs([suiteScriptModule], (module) => {
  if (!module) {
    console.error(`Module "${suiteScriptModule}" could not be loaded.`)
    process.exit(1)
  }

  if (typeof module[functionName] !== 'function') {
    console.error(`Function "${functionName}" not found in module "${suiteScriptModule}".`)
    process.exit(1)
  }

  // Parse function arguments
  const parsedArgs = functionArgs.map(arg => {
    try {
      // Attempt to parse as JSON
      return JSON.parse(arg)
    } catch (err) {
      // If JSON parsing fails, try parsing as a number
      const num = Number(arg)
      return isNaN(num) ? arg : num
    }
  })

  try {
    // Execute the specified function with arguments
    const result = module[functionName](...parsedArgs)
    console.log('Result:', result)
  } catch (error) {
    console.error('Error executing function:', error)
  }
})
