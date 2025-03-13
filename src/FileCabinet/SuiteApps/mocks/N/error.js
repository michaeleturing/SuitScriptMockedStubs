/**
 * mocks/N/error.js
 *
 * A simple mock for the N/error module.
 */
define([], () => {
  function create (options) {
    // Just throw a JavaScript Error with the provided name/message
    const error = new Error(options.message)
    error.name = options.name
    return error
  }

  return {
    create: create
  }
})
