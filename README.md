# SuitScriptMockedStubs

## Usage Example
Example 1
cd to '/src/FileCabinet/SuiteApps'
node bg.js mySuiteScript sumTransactionAmounts '[{"amount":10},{"amount":20},{"amount":"30"},{"amount":"invalid"}]'

Example 2
cd to '/src/FileCabinet/SuiteApps'
node bg.js mySuiteScript greet 'Mike'

Example 3
cd to '/src/FileCabinet/SuiteApps'
node bg.js loadCustomerRecord loadCustomerRecord '123'

Example 4.
to run tests with jest
'npm test'

Example 1: Sum Transaction Amounts
Objective: Execute the sumTransactionAmounts function with an array of transactions.
`node bg.js mySuiteScript sumTransactionAmounts '[{"amount":10},{"amount":20},{"amount":"30"},{"amount":"invalid"}]'
`
Example 2 Demo: Output string
`node bg.js mySuiteScript greet 'Mike'`

Example 3 Using two of the mocked SuiteScript Libraries
`node bg.js loadCustomerRecord loadCustomerRecord '123' `

## Explanation:
•	Param 1: mySuiteScript (the SuiteScript module file without the .js extension).
•	Param 2: sumTransactionAmounts (the function to execute).
•	Param 3: '[{"amount":10},{"amount":20},{"amount":"30"},{"amount":"invalid"}]' (a JSON string representing the transactions array).

## NetSuite modules Mocked
N/search
N/record
N/error
N/email
N/log
N/ui/serverWidget
Client Script
Mass Update Script
N/https
Scheduled Script
N/file

## Directory structure
project/
├─ bg.js
├─ mySuiteScript.js
└─ mocks/
├─ N
│   ├─ record.js
│   ├─ search.js
│   ├─ error.js
│   ├─ email.js
│   ├─ log.js
│   ├─ ui
│   │   └─ serverWidget.js
│   ├─ https.js
│   └─ file.js
├─ ClientScript.js
├─ MassUpdateScript.js
└─ ScheduledScript.js



