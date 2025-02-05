var typingCache = ""
var previousCommands = 1
var messageStack = []
var FILES = {
  "README" : `
    Hey! Welcome to my personal website. You can use this terminal in order to navigate the website... Or well, at least figure out WHERE you can navigate. 
  `,
  "secret1" : 'L3phY2g=',
  "secret2" : ""
}

function zterminalInit(canvasElementId) {
    var previousOnLoad = window.onload

    window.onload = function() {
      previousOnLoad()

      var canvas = document.getElementById(canvasElementId);
      var ctx = canvas.getContext("2d");
      
      ctx.font = "5px Arial";
      ctx.fillText("user@zsite:", canvas.height, 64);

      window.addEventListener('keydown', function(event) {
        console.log("typing..")
        console.log(event.key); // Logs the pressed key
        if(/^[a-zA-Z0-9= /.]$/.test(event.key)){
          updateTypeCache(event.key)
        } else if(event.key == "Enter"){
          handleEnterKey()
        } else if(event.key == "Backspace"){
          handleBackSpace()
        }
      });

      // Run console listener
      consoleListener();
    };
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addMessage(message) {
  messageStack.push(message)
  typingCache = ""
}

function clearConsole(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  typingCache = ""
  messageStack = []
}

function helpToConsole(){
  addMessage(` -- 'clear':: clear the console`)
  addMessage(` -- 'help':: get info on methods`)
  addMessage(` -- 'ls':: list files`)
  addMessage(` -- 'cat $fileName':: output file content`)
  addMessage(` -- 'b64decode $str':: base64 decode a string`)
  addMessage(` -- 'nav $str':: navigate to another url on this site`)
  addMessage(`===== COMMANDS ======`)

}

function base64Decode(b64DecodeCmd){
  addMessage(`user@zsite: ${b64DecodeCmd} \\\\ i guess you could just use a b64 decoder for this :) lol`)
  addMessage(`-- ${atob(b64DecodeCmd.split(' ')[1])}.html`)
}

function navToAnotherSite(navCmd) {
  var destination = navCmd.split(' ')[1]
  var fullDest = window.location.href.replace(/\/[^\/]*$/, destination)
  alert(`Navigating to: '${fullDest}'`)

  window.location.href = fullDest
}

function catFile(catCmd){
  var fileToCat = catCmd.split(" ")[1]
  var message = `user@zsite: ${catCmd}`
  if(Object.keys(FILES).includes(fileToCat)){
    addMessage(message)
    addMessage(FILES[fileToCat])
  } else {
    message += " -- invalid file name provided"
    addMessage(message)
  }

}

function listFiles(){
  addMessage(`user@zsite: ls`)
  addMessage(`-- ${Object.keys(FILES).join(' ')}`)
}

function handleEnterKey(){
  var messageToSend = `user@zsite: ${typingCache}`
  
  switch (true) {
    case /clear/.test(typingCache):
      console.log("Clear console");
      clearConsole()
      break;
    case /help/.test(typingCache):
      console.log("help command");
      helpToConsole()
      break;
    case /ls/.test(typingCache):
      console.log("list command");
      listFiles()
      break;
    case /cat [a-zA-Z0-9 ]+$/.test(typingCache):
      console.log("cat command");
      catFile(typingCache)
      break;
    case /b64decode [a-zA-Z0-9= ]+$/.test(typingCache):
      console.log("b64decode command");
      base64Decode(typingCache)
      break;
    case /nav [/a-zA-Z0-9.]+$/.test(typingCache):
      console.log("nav command")
      navToAnotherSite(typingCache)
      break;
    default:
      console.log("Invalid command supplied");
      messageToSend += ' -- Invalid command supplied. type \'help\' for list of cmds'
      addMessage(messageToSend)
  }

}

function handleBackSpace(){
  typingCache = typingCache.substr(0, typingCache.length - 1)
}

function updateTypeCache(char){
  typingCache += char  
}

async function consoleListener(){
  var hasTab = false 
  var rectChar = "▮"
  while (true) {

    await sleep(500);
    console.log("wait..")
    var canvas = document.getElementById("myCanvas");
    
    var ctx = canvas.getContext("2d");
    var ratio = window.devicePixelRatio || 1;

    // Set canvas dimensions
    canvas.width = 800 * ratio;
    canvas.height = 400 * ratio;

    // Scale the context
    ctx.scale(ratio, ratio);

    var termMessage = "user@zsite:"
    if(!hasTab && typingCache == ""){
      hasTab = true
      termMessage += rectChar
    } else {
      hasTab = false 
    }
    termMessage += typingCache
    ctx.fillStyle = "#e339c7";

    //ctx.clearRect(0, 64 - 16, canvas.width, 390);   
    //console.log("clear rect")
    ctx.font = "16px Arial";
    
    ctx.fillText(termMessage, 0, 0 + (16 * (messageStack.length + 1)));
    var iterations = 1

    for(var i = 0; i < messageStack.length; i++){
      ctx.fillText(messageStack[i], 0, (16 * iterations));
      iterations+=1
    }
  }
}