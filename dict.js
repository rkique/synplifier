
var terms = [
["plasmid", "A plasmid is a small circular fragment of DNA which can replicate independently of bacteria. Through the process of transformation, we can insert foreign plasmid -- and so, foreign DNA -- into bacteria like Escherichia coli."],   
["purification", "purification is x"],
["induction", "induction is x"],
["miniprep", "Minipreparation of plasmid DNA is a rapid, small-scale isolation of plasmid DNA from bacteria. It is based on the alkaline lysis method. The extracted plasmid DNA resulting from performing a **miniprep** is itself often called a 'miniprep'"]
]

let input = document.querySelector('input');
let log = document.getElementById('log');

input.oninput = handleInput;


function handleInput(e) {
    document.getElementById("header").textContent = ""
  document.getElementById("charcount").innerHTML = `${e.target.value}`;
  var matches = []
  for(i = 0; i<terms.length; i++)  
  {
      if(terms[i][0].startsWith(e.target.value) && e.target.value != ""){
          console.log("match")
          matches.push(terms[i])
      }
  }
  console.log(matches)
  displayMatches(matches)
}

function displayMatches(matches){
    let matchHTML = ""
    for(i = 0; i<matches.length; i++){
        matchHTML +="<h4>"
        matchHTML +=matches[i][0]
        matchHTML +="</h4>"
        matchHTML  +=matches[i][1]
    }
    console.log(matchHTML)
    document.getElementById("header").innerHTML = matchHTML
}