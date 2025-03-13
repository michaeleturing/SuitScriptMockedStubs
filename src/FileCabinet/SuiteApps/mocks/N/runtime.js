/**
 * mocks/N/runtime.js
 *
 * A simple mock for the N/runtime module.
 */
define([], () => {
  /**
     * Returns a mock current script object.
     * Example usage in SuiteScript: runtime.getCurrentScript()
     */
  function getCurrentScript () {
    return {
      id: 'customscript_mockscript',
      deploymentId: 'customdeploy_mockscript'
    }
  }

  /**
     * Returns a mock current user object.
     * Example usage: runtime.getCurrentUser()
     */
  function getCurrentUser () {
    return {
      id: 12345,
      name: 'Mock User'
    }
  }

  /**
     * Returns a mock current session.
     * Example usage: runtime.getCurrentSession()
     */
  function getCurrentSession () {
    return {
      id: 'mockSessionId12345',
      userAgent: 'MockAgent/1.0'
    }
  }

  /**
     * Example "executionContext" property (or function) indicating how code is executed.
     * e.g., 'USERINTERFACE', 'SCHEDULED', 'MAPREDUCE', etc.
     */
  const ContextType = {
    USER_INTERFACE: 'USERINTERFACE',
    MAP_REDUCE: 'MAPREDUCE',
    SCHEDULED: 'SCHEDULED',
    CSV_IMPORT: 'CSVIMPORT'
    // Add more contexts as needed
  }

  /**
     * Returns a mock execution context, e.g. always "USERINTERFACE".
     */
  function executionContext () {
    return ContextType.USER_INTERFACE
  }

  return {
    getCurrentScript: getCurrentScript,
    getCurrentUser: getCurrentUser,
    getCurrentSession: getCurrentSession,
    executionContext: executionContext,
    ContextType: ContextType
  }
})
