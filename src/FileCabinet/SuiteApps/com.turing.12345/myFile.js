/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 * 
 * This script logs inventory counts across all locations daily.
 * 
 * @module logInventoryCounts
 * 
 * Assumptions:
 * - The script runs daily as a scheduled script.
 * - The script has permissions to access inventory records.
 * 
 * Limitations:
 * - It does not handle locations with no inventory.
 */

define(['N/record', 'N/query', 'N/log'], function(record, query, log) {
    
    /**
     * Logs inventory counts across all locations.
     * 
     * @function execute
     * @param {Object} context - The script execution context
     * @param {string} context.type - The type of execution (scheduled, etc.)
     * @throws {Error} Will throw an error if there are issues with loading records.
     */
    async function execute(context) {
        try {
            const locations = await getLocations();
            for (const location of locations) {
                const inventoryCount = await getInventoryCount(location.id);
                logInventory(location.name, inventoryCount);
            }
        } catch (error) {
            log.error({
                title: 'Error executing script',
                details: error.message
            });
        }
    }

    /**
     * Fetches all locations from the system.
     * 
     * @function getLocations
     * @returns {Promise<Array>} A promise that resolves to an array of location objects.
     */
    async function getLocations() {
        const queryText = `
            SELECT id, name 
            FROM location 
            WHERE isInactive = 'F'
        `;
        const results = await query.runSuiteQL({ query: queryText });
        return results.asMappedResults();
    }

    /**
     * Fetches the inventory count for a given location.
     * 
     * @function getInventoryCount
     * @param {number} locationId - The internal ID of the location
     * @returns {Promise<number>} A promise that resolves to the inventory count.
     * @throws {Error} Will throw an error if the locationId is invalid.
     */
    async function getInventoryCount(locationId) {
        if (!locationId) {
            throw new Error('Invalid location ID');
        }
        
        const queryText = `
            SELECT SUM(quantityavailable) as totalAvailable 
            FROM inventory 
            WHERE location = ${locationId}
        `;
        const results = await query.runSuiteQL({ query: queryText });
        return results.asMappedResults()[0]?.totalAvailable || 0;
    }

    /**
     * Logs the inventory count for a location.
     * 
     * @function logInventory
     * @param {string} locationName - The name of the location
     * @param {number} inventoryCount - The inventory count
     */
    function logInventory(locationName, inventoryCount) {
        log.audit({
            title: `Inventory Count for ${locationName}`,
            details: `Total Inventory: ${inventoryCount}`
        });
    }

    return {
        execute: execute
    };
});