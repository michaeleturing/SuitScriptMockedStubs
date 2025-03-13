/**
 * mocks/ClientScript.js
 *
 * Stub for a NetSuite Client Script. Typically in NetSuite, you define
 * functions like pageInit, fieldChanged, saveRecord, etc. They won't
 * behave normally outside the NetSuite browser client environment, but
 * here's a minimal AMD module that returns some placeholders.
 */
define([], () => {
  function pageInit (context) {
    console.log('Mock pageInit called.', context)
  }

  function fieldChanged (context) {
    console.log('Mock fieldChanged called.', context)
  }

  function saveRecord (context) {
    console.log('Mock saveRecord called.', context)
    return true
  }

  // Return the typical exported entry points for client scripts
  return {
    pageInit: pageInit,
    fieldChanged: fieldChanged,
    saveRecord: saveRecord
  }
})
