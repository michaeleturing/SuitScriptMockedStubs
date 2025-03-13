// mySuiteScript.js
define([], () => {
  /**
   * Sums the amounts in the given transactions array.
   * @param {Object[]} transactions - Array of transaction objects
   * @param {number|string} transactions[].amount - The amount field in each transaction
   * @return {number} The sum of all transaction amounts
   */
  function sumTransactionAmounts (transactions) {
    if (!transactions || !Array.isArray(transactions)) {
      return 0
    }

    return transactions.reduce((acc, txn) => {
      // Safely convert txn.amount to a number
      const parsedAmount = Number(txn && txn.amount) || 0
      return acc + parsedAmount
    }, 0)
  }

  /**
   * Greets a user by name.
   * @param {string} name - The name of the user
   * @return {string} Greeting message
   */
  function greet (name) {
    return `Hello, ${name}!`
  }

  return {
    sumTransactionAmounts: sumTransactionAmounts,
    greet: greet
  }
})
