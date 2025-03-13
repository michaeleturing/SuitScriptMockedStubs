/**
 * mocks/N/record.js
 *
 * A simple mock for the N/record module with minimal logic to demonstrate loaded fields.
 */
define([], () => {
  // Include a record.Type object so code like record.Type.CUSTOMER can work.
  const Type = {
    CUSTOMER: 'customer'
    // You can add more if you like: CONTACT, INVOICE, etc.
  }

  function create (options) {
    // Return a mock record object
    return {
      id: null,
      type: options.type,
      fields: {},
      setValue: function (params) {
        this.fields[params.fieldId] = params.value
      },
      getValue: function (params) {
        return this.fields[params.fieldId]
      },
      save: function () {
        // Return a fake record ID
        this.id = this.id || Math.floor(Math.random() * 100000)
        return this.id
      }
    }
  }

  function load (options) {
    // Return a mock loaded record
    const mockRecord = {
      id: options.id,
      type: options.type,
      fields: {},
      setValue: function (params) {
        this.fields[params.fieldId] = params.value
      },
      getValue: function (params) {
        return this.fields[params.fieldId]
      },
      save: function () {
        return this.id
      }
    }

    // If it's a "customer", let's set a pretend "companyname"
    if (options.type === Type.CUSTOMER) {
      mockRecord.fields.companyname = 'Mock Customer #' + options.id
    }

    return mockRecord
  }

  return {
    Type: Type,
    create: create,
    load: load
  }
})
