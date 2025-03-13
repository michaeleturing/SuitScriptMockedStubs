/**
 * mocks/N/search.js
 *
 * A simple mock for the N/search module.
 */
define([], () => {
  function create (options) {
    // options could be { type: 'customer', filters: [], columns: [] }
    // Mock returning a "search" object with a simple run method
    return {
      run: function () {
        // Return a mock object that has each() or getRange() etc.
        return {
          each: function (callback) {
            // We'll just pretend there's no data
            return true
          },
          getRange: function () {
            // Return an empty array
            return []
          }
        }
      }
    }
  }

  function lookupFields (options) {
    // Mock returning empty or dummy data
    return {}
  }

  return {
    create: create,
    lookupFields: lookupFields
  }
})
