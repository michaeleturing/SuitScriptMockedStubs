/**
 * loadCustomerRecord.js
 *
 * @NApiVersion 2.x
 * @NModuleScope Public
 */
define(['N/record', 'N/log'], (record, log) => {
  /**
     * Loads a customer record by ID and logs the customer's name.
     * @param {number} customerId - The internal ID of the customer
     * @return {string} The customer's name
     */
  function loadCustomerRecord (customerId) {
    if (!customerId) {
      throw new Error('Customer ID is required.')
    }

    // Example of how you might load a NetSuite "customer" record
    const customerRec = record.load({
      type: record.Type.CUSTOMER, // or 'customer' in some code
      id: customerId
    })

    const customerName = customerRec.getValue({ fieldId: 'companyname' })

    log.debug({
      title: 'Loaded Customer',
      details: 'Name: ' + customerName
    })

    return customerName
  }

  return {
    loadCustomerRecord: loadCustomerRecord
  }
})
