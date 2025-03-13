/**
 * mocks/N/ui/serverWidget.js
 *
 * A simple mock for the N/ui/serverWidget module.
 */
define([], () => {
  function createForm (options) {
    // Return an object that mocks a form
    return {
      title: options.title,
      fields: [],
      addField: function (params) {
        const field = { id: params.id, label: params.label, type: params.type }
        this.fields.push(field)
        return field
      },
      addSubmitButton: function (params) {
        console.log(`Mock addSubmitButton: ${params.label}`)
      }
    }
  }

  return {
    createForm: createForm
  }
})
