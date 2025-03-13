/**
 * mocks/N/log.js
 */
define([], () => {
  function debug (options) {
    console.log(`DEBUG: ${options.title}:`, options.details)
  }

  function error (options) {
    console.error(`ERROR: ${options.title}:`, options.details)
  }

  function audit (options) {
    console.log(`AUDIT: ${options.title}:`, options.details)
  }

  function emergency (options) {
    console.error(`EMERGENCY: ${options.title}:`, options.details)
  }

  return {
    debug: debug,
    error: error,
    audit: audit,
    emergency: emergency
  }
})
