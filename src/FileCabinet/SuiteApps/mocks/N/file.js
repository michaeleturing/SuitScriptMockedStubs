/**
 * mocks/N/file.js
 *
 * A simple mock for the N/file module.
 */
define([], () => {
  function create (options) {
    return {
      name: options.name,
      fileType: options.fileType,
      contents: options.contents,
      folder: options.folder || 0,
      save: function () {
        // Return a fake internalId
        return Math.floor(Math.random() * 900000) + 100000
      }
    }
  }

  function load (options) {
    // Return a mock file object
    return {
      id: options.id,
      name: 'MockFile.txt',
      getContents: function () {
        return 'Mock file contents'
      }
    }
  }

  return {
    create: create,
    load: load
  }
})
