function repeatMessage(message, repeatCount){
  let messageToShow = "";
  for (let index = 0; index < repeatCount; index++) {
      messageToShow += message; 
  }
  return messageToShow;
}

module.exports = {
  repeatMessage
}