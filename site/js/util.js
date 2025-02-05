function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function infoWriter(sentences, element){  
  var sentenceToPick = 0
  var elementToUpdate = document.getElementById(element)

  while (true) {

    console.log("Clear existing inner text")
    while(elementToUpdate.textContent != ""){
      elementToUpdate.textContent = elementToUpdate.textContent.substr(
        0, 
        elementToUpdate.textContent.length - 1
      )
      await sleep(100)
    }
    
    console.log("write new text")
    var sentenceToUse = sentences[sentenceToPick % sentences.length]
    sentenceToPick+=1
    var i = 0
    while(i < sentenceToUse.length){
      console.log(`add: ${sentenceToUse[i]}`)
      if(sentenceToUse[i] == ' '){
        sentenceToUse[i] = '&#160;'
        console.log("empty")
      }
      elementToUpdate.textContent += sentenceToUse[i]
      i+=1
      await sleep(100)
    }
    
    elementToUpdate.textContent += "|"
    var hasBar = true 
    for(var j = 0; j < 6; j++){
      await sleep(500);
      if(hasBar){
        elementToUpdate.textContent = elementToUpdate.textContent.substr(
          0
        , elementToUpdate.textContent.length - 1
        )
        hasBar = false 
      } else {
        hasBar = true 
        elementToUpdate.textContent += "|"
      }
    }

  }
}