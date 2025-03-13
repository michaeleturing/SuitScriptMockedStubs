/**
 * mocks/MassUpdateScript.js
 *
 * Stub for a NetSuite Mass Update Script. Typically, you define a
 * function called each() which NetSuite calls for each record.
 */
define([], () => {
  function each (params) {
    console.log('Mock each called for Mass Update:', params)
  }

  return {
    each: each
  }
})
