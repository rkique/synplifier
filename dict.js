
var terms = [

["plasmid", "A plasmid is a small circular fragment of DNA which can replicate independently of bacteria. Through the process of transformation, we can insert foreign plasmid -- and so, foreign DNA -- into bacteria like Escherichia coli."],   
["purification", "purification is x"],
["miniprep", "Minipreparation of <a href='#' onclick='forceSearch(`plasmid`)'>plasmid</a> DNA is a rapid, small-scale isolation of plasmid DNA from bacteria. It is based on the alkaline lysis method. The extracted plasmid DNA resulting from performing a **miniprep** is itself often called a 'miniprep'"],
["bacteria", "Bacteria are small, microscopic organisms. The standard of synthetic biology is the bacterial strain _Escherichia coli_. This is due to its fast growth rate and a few other reasons, such as its safety."],
["ligation", "Joining, or 'gluing' two nucleic acid fragments."],
["DNA", "A strand of molecules which contain instructions for the proteins which make up living things. Modifying it allows you to express (generate) different proteins."],
["induction", "induction is triggering expression within a bacteria, for example through lactose and the lac operon"],
["centrifuge", "A centrifuge separates DNA from other products within bacteria"],
["gibson assembly", "A way to glue (ligate) DNA fragments together. Gibson requires an exonuclease, polymerase, and DNA ligase steps.", "https://www.neb.com/protocols/2012/12/11/gibson-assembly-protocol-e5510"],
["SLIC", "A way to glue (ligate) DNA fragments together. SLIC uses imprecise exonuclease activity.", "https://www.neb.com/applications/cloning-and-synthetic-biology/dna-assembly-and-cloning/golden-gate-assembly"],
["Golden Gate", "A way to glue (ligate) DNA fragments together.", "https://www.protocols.io/view/slic-protocol-6t3heqn"],
["pipette", "Like an eyedropper, except a pipette is precise enough to measure microliters of liquid."],
["gel electrophoresis", "A way to <b>measure</b> the length of DNA fragments in a sample. This is useful because it is a quick way to check if something went wrong."],
["nucleic acid", "D<b>NA</b> is a Nucleic Acid. Nucleic acid are formed from nucleotides. "],
["nucleotides", "Nucleotides are molecules that make up DNA, and store information. The four chemical bases provide this information"],
["bases", "There are four types of bases in DNA: Adenine (A), Cytosine (C), Guanine (G), Thymine (T). DNA is composed of these base pairs in series."],
["base pairs", "There are four base pairs possible: A-T, T-A, C-G, and G-C. This information is used"],
["DNA (replication)", "DNA is double stranded: DNA replication takes single strands and copies it to make two DNA molecules."],
["T4 Polymerase","T4 is a type of polymerase. It requires a template and a primer", "https://www.neb.com/products/m0203-t4-dna-polymerase#Product%20Information"],
["Bst Polymerase","Bst Polymerase is a type of polymerase used primarily for LAMP, a quick isothermal amplification method."],
["Polymerase","Polymerase is an enyzme that copies DNA molecules. It is necessary for any amplification method, like PCR or LAMP "],
["LAMP","Loop-Mediated Isothermal Amplification is a way to copy DNA extremely fast. It forms barbell-like structures which allow for multiple replication sites. "],
["Annealing", "Cooling to let primers to attach to the template DNA"],
["Extending", "heating to let the polymerase create a new strand of DNA"],
["PCR", "PCR is a way to copy DNA extremely fast. You make it hotter and colder in rapid cycles to get DNA to denature, anneal, and extend"],
["Denaturing", "Heating a double stranded DNA fragment to split it into two single strands. For proteins in general, denaturing is the breaking of weak molecular links, and can lead to bad things."],
["", ""],
["", ""],
["", ""],
["", ""],
["", ""]
]

let input = document.querySelector('input');
let log = document.getElementById('log');

input.oninput = handleInput;

function forceSearch(search){
    document.getElementById("search").value = search
    matches = updateResults(search)
    displayMatches(matches)
}

function handleInput(e) {
    matches = updateResults(e.target.value)
  displayMatches(matches)
}
function updateResults(text){
    matches = []
    document.getElementById("header").textContent = ""
  document.getElementById("charcount").innerHTML = `${text.length}`;
  for(i = 0; i<terms.length; i++)  
  {
      standardizedTerm = terms[i][0].toLowerCase()
      standardizedSearchTerm = text.toLowerCase()
      if(standardizedTerm.startsWith(standardizedSearchTerm) && text != ""){
          matches.push(terms[i])
      }
  }
  return matches;
}

function displayMatches(matches){
    let matchHTML = ""
    for(i = 0; i<matches.length; i++){
        matchHTML +="<h4>"
        matchHTML +=matches[i][0]
        matchHTML +="</h4>"
        matchHTML  +=matches[i][1]
    }
    document.getElementById("header").innerHTML = matchHTML
}