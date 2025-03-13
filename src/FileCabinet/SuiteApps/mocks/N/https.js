/**
 * mocks/N/https.js
 *
 * A simple mock for the N/https module.
 */
define([], () => {
  function get (options) {
    // Mock a simple GET request
    console.log(`Mock GET request to URL: ${options.url}`)
    return {
      code: 200,
      body: 'Mock GET response body'
    }
  }

  function post (options) {
    // Mock a simple POST request
    console.log(`Mock POST request to URL: ${options.url}, Payload: ${options.body}`)
    return {
      code: 200,
      body: 'Mock POST response body'
    }
  }

  return {
    get: get,
    post: post
  }
})
