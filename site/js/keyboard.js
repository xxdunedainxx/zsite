
function registerKeyboard(keyboardContainer, targetInputDevice){
	var previousWindowOnLoad = window.onload
	window.onload = function() {
		previousWindowOnLoad()

		const keyboardContainer = document.getElementById(keyboardContainer);
		const targetInput = document.getElementById(targetInputDevice);

		const keys = [
		  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
		  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'],
		  [' ', 'Backspace'] // Add more keys as needed
		];
		console.log("Adding keys")
		console.log(keyboardContainer)
		keys.forEach(row => {
		  row.forEach(key => {
		    const keyButton = document.createElement('div');
		    keyButton.classList.add('key');
		    keyButton.textContent = key;
		    console.log(keyButton)

		    keyButton.addEventListener('click', () => {
		      if (key === 'Backspace') {
		        targetInput.value = targetInput.value.slice(0, -1);
		      } else {
		        targetInput.value += key;
		      }
		    });

		    keyboardContainer.appendChild(keyButton);
		  });
		});
	}
}
