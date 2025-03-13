/**
 * mocks/N/serverWidget.js
 *
 * A simple mock for the N/serverWidget module.
 * (Note that in actual SuiteScript, this is typically "N/ui/serverWidget".)
 */
define([], () => {
  /**
     * Creates a mock Form object.
     * e.g.: serverWidget.createForm({ title: 'My Form' })
     */
  function createForm (options) {
    return {
      title: options.title,
      fields: [],
      addField: function (params) {
        const field = {
          id: params.id,
          label: params.label,
          type: params.type
        }
        this.fields.push(field)
        return field
      },
      addSubmitButton: function (params) {
        console.log(`Mock addSubmitButton called with label: ${params.label}`)
      }
    }
  }

  /**
     * Creates a mock List object.
     * e.g.: serverWidget.createList({ title: 'My List' })
     */
  function createList (options) {
    return {
      title: options.title,
      columns: [],
      addColumn: function (params) {
        const column = {
          id: params.id,
          type: params.type,
          label: params.label
        }
        this.columns.push(column)
      }
    }
  }

  /**
     * Common field types, for convenience.
     * Usage: form.addField({ id: 'custpage_myfield', type: serverWidget.FieldType.TEXT, label: 'My Field' })
     */
  const FieldType = {
    TEXT: 'TEXT',
    EMAIL: 'EMAIL',
    SELECT: 'SELECT',
    CHECKBOX: 'CHECKBOX'
    // Add more as needed
  }

  // Export the module's API
  return {
    createForm: createForm,
    createList: createList,
    FieldType: FieldType
  }
})
