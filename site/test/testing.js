var testRegistry = {}
var testResults = {}

function assertEqual(expected, actual, message) {
  if (expected !== actual) {
    throw new Error(`Test failed: ${message} - Expected ${expected}, got ${actual}`);
  }
}

function assertTrue(result, message) {
  if (result != true) {
    throw new Error(`Test failed: ${message} - Expected ${expected}, got ${actual}`);
  }
}

/**
  * Register a new test function 
*/
function registerTest(testName, testFunction){
	testRegistry[testName] = function() { testFunction() }
}

/**
  * Iterate tests and execute them. Print results at the end
  *
**/
function executeTests() {

}

/**
  *
  *
*/
function testResultsOutput() { 

}