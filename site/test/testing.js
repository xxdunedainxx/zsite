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
	for (const test of Object.keys(testRegistry)) { 
		try {
			console.log(`Execute test '${test}'`)
			testRegistry[test]()
			console.log(`[PASS]:: '${test}'`)
			testResults[test] = "PASS"

		} catch(err) {
			console.log(`[FAIL]:: '${test}'`)
			testResults[test] = "FAIL"

		}
	}

}

/**
  *
  *
*/
function testResultsOutput() { 
		var passTests = []
		var failTests = []

		for (const test of Object.keys(testResults)) { 
			if(testResults[test] == "PASS"){
				passTests.push(test) 
			} else {
				failTests.push(test)
			}
		}
		console.log("==== PASSED TESTS === ")
		for(test  of passTests){
			console.log(test)
		}

		console.log("==== FAILED TESTS === ")
		for(test  of failTests){
			console.log(test)
		}

		console.log(`Pass %: ${(passTests.length / (failTests.length + passTests.length)) * 100}%`)
}