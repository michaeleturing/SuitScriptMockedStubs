/**
 * mocks/ScheduledScript.js
 *
 * Stub for a NetSuite Scheduled Script. Typically, you define an execute()
 * function that NetSuite calls for scheduled execution.
 */
define([], () => {
  function execute (context) {
    console.log('Mock scheduled script execute called.', context)
  }

  return {
    execute: execute
  }
})
