/**
 * Keyboard Utility. Used for the terminal/mobile folks
 */

/**
 * Sets up a keyboard UI
 * @param keyboardID
 * @param targetInputDevice
 */
var eventCallback = null

function registerKeyboardEventCallback(callback){
    eventCallback = callback
}

function setupKeyboard(keyboardID, targetInputDevice, callback){
	const keyboardContainer = document.getElementById(keyboardID);
	console.log("Setup keyboard")
	console.log(keyboardContainer)
	var targetInput = null
	if(targetInputDevice != null){
	    targetInput = document.getElementById(targetInputDevice);
	}

	if(callback != null){
	    eventCallback = callback
	}

	const keys = [
		['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
		['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'],
		[' ', 'Backspace', 'Enter'] // Add more keys as needed
	];
	console.log("Adding keys")
	console.log(keyboardContainer)
	keys.forEach(row => {
		row.forEach(key => {
			const keyButton = document.createElement('div');
			keyButton.classList.add('key');
			keyButton.textContent = key;
			keyButton.addEventListener('click', () => {
				if (key === 'Backspace') {
				    if(targetInput != null){
					    targetInput.value = targetInput.value.slice(0, -1);
					}
					var event = document.createEvent("Event");

					if(eventCallback != null){
					    eventCallback('backspace', null)
					}keyboardCallback
				}
				else if(key === 'Enter'){
				    if(eventCallback != null){
					    eventCallback('Enter', null)
					}
				}
				else {
				    console.log("Key click event")
				    if(targetInput != null) {
					    targetInput.value += key;
					}

					if(eventCallback != null){
					    eventCallback('data', key)
					}
				}
			});

			keyboardContainer.appendChild(keyButton);
		});
	});
}

/**
 * Registers keyboard to setup on window load
 * @param keyboardContainer
 * @param targetInputDevice
 */
function registerKeyboard(keyboardContainer, targetInputDevice, eventCallback){
    console.log("Load keyboard")
	var onLoadKeyboardSetup = function () {
	    console.log("Call keyboard setup")
		setupKeyboard(keyboardContainer, targetInputDevice,eventCallback)
	}
	window.addEventListener('load', onLoadKeyboardSetup)
	window.attachEvent && window.attachEvent("onload",yourFunction);
}
