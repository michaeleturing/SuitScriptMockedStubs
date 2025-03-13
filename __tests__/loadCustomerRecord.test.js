/**
 * loadCustomerRecord.test.js (Jest example)
 */
jest.mock('N/record', () => ({
  load: jest.fn(),
  Type: {
    CUSTOMER: 'customer'
  }
}))

jest.mock('N/log', () => ({
  debug: jest.fn()
}))

const record = require('N/record')
const log = require('N/log')
const { loadCustomerRecord } = require('../src/FileCabinet/SuiteApps/loadCustomerRecord') // Adjust path as needed

describe('loadCustomerRecord Tests', () => {
  it('should throw an error if no customerId is provided', () => {
    expect(() => loadCustomerRecord()).toThrow('Customer ID is required.')
  })

  it('should return the correct customer name for a valid ID', () => {
    record.load.mockReturnValue({
      getValue: jest.fn().mockReturnValue('Acme Corp')
    })

    const result = loadCustomerRecord(1234)

    expect(record.load).toHaveBeenCalledWith({
      type: record.Type.CUSTOMER,
      id: 1234
    })
    expect(result).toBe('Acme Corp')
    expect(log.debug).toHaveBeenCalledWith({
      title: 'Loaded Customer',
      details: 'Name: Acme Corp'
    })
  })
})
