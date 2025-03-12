/**
 * @module logInventoryCounts.test
 * 
 * Unit tests for the logInventoryCounts module.
 * 
 * Assumptions:
 * - The mock implementation of NetSuite modules behaves as expected.
 * 
 * Limitations:
 * - The tests do not cover integration with the actual NetSuite environment.
 */

const logInventoryCounts = require('../src/FileCabinet/SuiteApps/com.turing.12345/myFile.js');
const { record, query, log } = require('N');

jest.mock('N/record');
jest.mock('N/query');
jest.mock('N/log');

describe('logInventoryCounts', () => {
    
    /**
     * Test case for successful execution of the script.
     */
    test('execute - successful execution', async () => {
        // Arrange
        query.runSuiteQL.mockResolvedValue({
            asMappedResults: jest.fn().mockReturnValue([
                { id: 1, name: 'Warehouse A' },
                { id: 2, name: 'Warehouse B' }
            ])
        });
        query.runSuiteQL.mockResolvedValueOnce({
            asMappedResults: jest.fn().mockReturnValue([{ totalAvailable: 100 }])
        }).mockResolvedValueOnce({
            asMappedResults: jest.fn().mockReturnValue([{ totalAvailable: 50 }])
        });

        // Act
        await logInventoryCounts.execute({ type: 'scheduled' });

        // Assert
        expect(log.audit).toHaveBeenCalledWith(expect.objectContaining({
            title: 'Inventory Count for Warehouse A',
            details: 'Total Inventory: 100'
        }));
        expect(log.audit).toHaveBeenCalledWith(expect.objectContaining({
            title: 'Inventory Count for Warehouse B',
            details: 'Total Inventory: 50'
        }));
    });

    /**
     * Test case for handling invalid location ID.
     */
    test('getInventoryCount - invalid location ID', async () => {
        // Arrange
        const invalidLocationId = null;

        // Act & Assert
        await expect(logInventoryCounts.getInventoryCount(invalidLocationId))
            .rejects.toThrow('Invalid location ID');
    });

    /**
     * Test case for logging with no available inventory.
     */
    test('execute - no inventory available', async () => {
        // Arrange
        query.runSuiteQL.mockResolvedValue({
            asMappedResults: jest.fn().mockReturnValue([{ id: 1, name: 'Warehouse A' }])
        });
        query.runSuiteQL.mockResolvedValueOnce({
            asMappedResults: jest.fn().mockReturnValue([{ totalAvailable: 0 }])
        });

        // Act
        await logInventoryCounts.execute({ type: 'scheduled' });

        // Assert
        expect(log.audit).toHaveBeenCalledWith(expect.objectContaining({
            title: 'Inventory Count for Warehouse A',
            details: 'Total Inventory: 0'
        }));
    });
});