
var terms = [

    ["plasmid", "A circular fragment of DNA which can replicate independently of bacteria. Through the process of transformation, we can insert foreign plasmid -- and so, foreign DNA -- into bacteria like Escherichia coli."],   
    ["purification", "protein purification is removing unwanted matter from expressed proteins."],
    ["miniprep", "Minipreparation of plasmid DNA is a rapid, small-scale isolation of plasmid DNA from bacteria. It is based on the alkaline lysis method. The extracted plasmid DNA resulting from performing a **miniprep** is itself often called a 'miniprep'"],
    ["bacteria", "Bacteria are small, microscopic organisms. The standard of synthetic biology is the bacterial strain _Escherichia coli_. This is due to its fast growth rate and a few other reasons, such as its safety."],
    ["ligation", "Joining, or 'gluing' two nucleic acid fragments."],
    ["DNA <em> deoxyribonucleic acid</em>", "A strand of molecules which contain instructions for the proteins which make up living things. Modifying it allows you to express (generate) different proteins."],
    ["induction", "induction is triggering expression within a bacteria, for example by adding IPTG to turn on the lac operon."],
    ["centrifuge", "A spinning machine with on its outside. It separates (centrifuges) bacteria from liquid culture"],
    ["gibson assembly", "A way to glue (ligate) DNA fragments together. Gibson requires an exonuclease, polymerase, and DNA ligase steps.", "https://www.neb.com/protocols/2012/12/11/gibson-assembly-protocol-e5510"],
    ["SLIC <em> sequence and ligation independent cloning</em>", "A way to glue (ligate) DNA fragments together. SLIC uses imprecise exonuclease activity.", "https://www.neb.com/applications/cloning-and-synthetic-biology/dna-assembly-and-cloning/golden-gate-assembly"],
    ["Golden Gate", "A way to glue (ligate) DNA fragments together.", "https://www.protocols.io/view/slic-protocol-6t3heqn"],
    ["pipette", "Like an eyedropper, except a pipette is precise enough to measure microliters of liquid."],
    ["gel electrophoresis", "A way to <b>measure</b> the length of DNA fragments in a sample. This is useful because it is a quick way to check if something went wrong."],
    ["nucleic acid", "D<b>NA</b> is a Nucleic Acid. Nucleic acid are formed from nucleotides. "],
    ["nucleotides", "Nucleotides are molecules that make up DNA, and store information. The four chemical bases provide this information"],
    ["bases", "There are four types of bases in DNA: Adenine (A), Cytosine (C), Guanine (G), Thymine (T). DNA is composed of these base pairs in series."],
    ["base pairs", "There are four base pairs possible: A-T, T-A, C-G, and G-C. This information is used"],
    ["DNA (replication)", "DNA is double stranded: DNA replication takes single strands and copies it to make two DNA molecules."],
    ["T4 Polymerase","T4 is a type of polymerase. It requires a template and a primer", "https://www.neb.com/products/m0203-t4-dna-polymerase#Product%20Information"],
    ["Bst Polymerase <em>extracted from Bacillus stearothermophilus </em>","Bst Polymerase is a type of polymerase used primarily for LAMP, a quick isothermal amplification method."],
    ["polymerase","Polymerase is an enyzme that attaches to single stranded template DNA and completes it by assembling a complementary strand. It is necessary for any amplification method, such as PCR or LAMP "],
    ["LAMP <em>Loop-Mediated Isothermal Amplification</em>","Loop-Mediated Isothermal Amplification is a way to copy DNA extremely fast. It forms barbell-like structures which allow for multiple replication sites. "],
    ["annealing", "cooling to let primers to attach to the ends of template DNA"],
    ["extending", "heating to let the polymerase create a new strand of DNA"],
    ["PCR <em>polymerase chain reaction</em>", "PCR is a way to copy DNA extremely fast. You heat and cool it in rapid cycles to get DNA to denature, anneal, and extend"],
    ["denaturing", "Heating a double stranded DNA fragment to split it into two single strands. For proteins in general, denaturing is the breaking of weak molecular links, and can lead to bad things."],
    ["TAE", "TAE is a buffer used for running DNA agarose gels."],
    ["Cas12b <em>CRISPR-associated protein</em>",   "A CRISPR Cas endonuclease which cuts DNA sequences matching a guide sequence."],
    ["Cas13 <em>CRISPR-associated protein</em>", "A unique CRISPR Cas endonuclease that targets RNA, not DNA. It cuts ALL nearby RNA when it finds an RNA sequence matching a guide sequence.", "https://www.cell.com/pb-assets/products/research-arc/infographics/CrisprVizInfo_vol1a.pdf"],
    ["CRISPR", "CRISPR refers to the DNA sequences which the CRISPR Cas system recognizes and cuts. Originally a defense mechanism within infections within cells."],
    ["Cas9 <em>CRISPR-associated protein</em>", "An endonuclease which can use RNA guides to identify and cleave DNA targets"],
    ["CRISPR Cas", "A family of CRISPR-associated proteins which can identify and cut DNA and RNA sequences"],
    ["guide sequence", "A guide sequence is a short strand of RNA used with endonucleases to target complementary sequences "],
    ["endonuclease", "An enzyme that cuts DNA or RNA."],
    ["autoclave","a machine used to sterilize dishes and tubes."],
    ["qPCR <em>quantitative polymerase chain reaction</em>","PCR with dye added to measure exactly how much replication is happening over time."],
    ["RT-PCR <em> reverse transcription polymerase chain reaction </em>","Using an enzyme to convert RNA back to DNA, and then PCRing the DNA as usual."],
    ["operon","A DNA sequence with a promoter. Allows you to express the sequence at will (?), for example by adding lactose."],
    ["lac operon","An operon which is activated by lactose. For example IPTG"],
    ["IPTG","A liquid used to induce expression through the lac operon"],
    ["reagent", "substance or mixture. Usually liquid or powder."],
    ["qRT-PCR <em> real-time quantitative polymerase chain reaction</em>", "RT in RT-PCR and qRT-PCR refer to different things. PCR that allows you to see amplification of DNA molecules in real-time by dying DNA. "],
    ["enzyme","Denoted by the suffix -ase, enzymes are proteins which fulfill specific functions within a cell."],
    ["proteins", "Proteins are macromolecules formed by amino acids."],
    ["amino acids", "Amino acids are organic compounds assembled by ribosomes into proteins based on RNA"],
    ["RNA", "RNA are single stranded temporary guides for ribosomes, transcribed from DNA."],
    ["histidine-tagged protein purification", "Adding a short sequence that expresses histidine residues to the end of a recombinant sequence. After the sequence is expressed, affinity chromatography can be used to select for only His-tagged proteins, the recombinant products that we want."],
    ["SDS Lysis Buffer <em> sodium dodecyl sulfate </em> ", "A buffer solution used for cell lysis (breaking open the cell walls)"],
    ["Western Blotting", "A way to identify a specific protein within a cell. Lysis, gel electrophoresis, and then blotting on paper. On paper, antibodies are used to detect a specific proteins"],
    ["protein purification", "There are many proteins in a cell. Purification is needed to get only the product proteins."],
    ["pellet", "The spinning of the centrifuge separates bacteria into a solid part (the pellet) and liquid (the supernatant)."],
    ["supernatant", "The clear liquid above the pellet produced by centrifugation"],
    ["resuspension", "After centrifugation, putting the bacterial pellet in clean-up solution, often known as solution 1"],
    ["solution 1", "A resuspension solution including Tris, EDTA, glucose and RNase A. It supports DNA degradation by DNases."],
    ["DNase", "An enzyme which degrades DNA. This is part of purification after a protein is expressed."],
    ["dNTPs", "Artificial nucleotides used in PCR to assemble new DNA strands"],
    ["primer", "A short sequence binding site for enzymes, used to start DNA sythesis."],
    ["sequence", "The sequence of nucleotides in a strand (DNA or RNA). The information encoded in nucleic acids"],
    ["expression (protein)", "generating a protein from a DNA blueprint. This involves first transcribing DNA into RNA, and then translating RNA instructions into amino acid chains, which form proteins."],
    ["transcription", "Copying DNA into expendable and single stranded RNA. Done by transcriptase"],
    ["recombinant", "DNA from multiple sources, or the resulting protein (e.g. jellyfish in bacterial cell)"],
    ["expression vector","A plasmid with an inducible promoter, a kind of template designed around expressing a custom DNA insert."],
    ["insert","The custom, artificial DNA sequence to be expressed in a plasmid"],
    ["backbone","The DNA template used to express an insert in a plasmid."],
    ["ligase","An enzyme which glues select DNA strands together."],
    ["strand displacement","the ability of an 'invading' polymerase to replace downstream DNA encountered while synthesising"],
    ["",""],
    ["",""]
]
//title linking
let titles = terms.map(term => term[0])
let description = terms.map(term => term[1])
let desc = description.map(string => string.replace(/(<([^>]+)>)/gi, ""))
newArray = []
for(i = 0; i<desc.length; i++)
{
    newArray.push([titles[i],desc[i]])
}
console.log(newArray)
//for each term...
for(i = 0; i<terms.length; i++)
{
    //go through titles
    for(j = 0; j<titles.length; j++)
    {
        formattedTerms = terms[i][1]
        if(formattedTerms.split(" ").includes(titles[j]))
        {
            replacementText = "<a href='#' onclick='forceSearch("+"`"+titles[j]+"`)'>"+titles[j]+"</a>"
            terms[i][1] = terms[i][1].split(titles[j]).join(replacementText)
        }
    }
}
console.log(titles)
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
    //create links
    
}