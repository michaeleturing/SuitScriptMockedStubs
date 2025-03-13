/**
 * mocks/N/query.js (AMD version)
 *
 * Mock of N/query module.
 * Provides functionality to create and run queries.
 */
define([], () => {
  /**
   * Creates a mock query object.
   * @param {Object} options - Query options or parameters
   * @return {Object} A mock query object with a run() method.
   */
  function create (options) {
    console.log('Mock query.create called with:', options)
    return {
      run: function () {
        console.log('Mock query.run invoked with options:', options)
        // Return a mock result set
        return {
          asMappedResults: function () {
            // Return an array of mock result objects
            return [
              { fieldName: 'id', value: 123 }, { fieldName: 'name', value: 'Mock Record' }
            ]
          },
          asResults: function () {
            // Return an array of arrays or custom structure
            return [[123, 'Mock Record']]
          }
        }
      }
    }
  }

  return {
    create: create
  }
})
