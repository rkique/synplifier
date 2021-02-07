/*
TODO:
add tags
add visuals/representation schema

*/
/*
terms = [
    {"short":"plasmid", "definition":"A circular fragment of DNA which can replicate independently of bacteria. Through the process of transformation, we can insert foreign plasmid -- and so, foreign DNA -- into bacteria like Escherichia coli.", "img":"https://cdn.kastatic.org/googleusercontent/Vyfw8D9Vm1uyG0WZzonRLPvOep5nABNAk3tiENOIjsJpWU7bnTFob_mbTeCZpzCghLZaFkG8KQEqRmBaTDdsRuNONQ"},
   
    {"short":"purification", "definition":"protein purification is removing unwanted matter from expressed proteins."},

    {"short":"miniprep", "definition":"Minipreparation of plasmid DNA is a rapid, small-scale isolation of plasmid DNA from bacteria. It is based on the alkaline lysis method. The extracted plasmid DNA resulting from performing a **miniprep** is itself often called a 'miniprep'"},

    {"short":"bacteria", "definition":"Bacteria are small, microscopic organisms. The standard of synthetic biology is the bacterial strain _Escherichia coli_. This is due to its fast growth rate and a few other reasons, such as its safety.", "img":"https://i.pinimg.com/564x/1f/d5/fa/1fd5fa1765e5681634bb9ba260780f50.jpg"},

    {"short":"ligation", "definition":"Joining, or 'gluing' two nucleic acid fragments.","outlink": "https://www.khanacademy.org/science/biology/biotech-dna-technology/dna-cloning-tutorial/a/restriction-enzymes-dna-ligase", "img":"https://cdn.kastatic.org/ka-perseus-images/90e028bc741c4da8d623219daa1c5e8f933019ee.png"},

    {"short":"DNA <em> deoxyribonucleic acid</em>", "definition":"A strand of molecules which contain instructions for the proteins which make up living things. Modifying it allows you to express (generate) different proteins."},

    {"short":"induction", "definition":"induction is triggering expression within a bacteria, for example by adding IPTG to turn on the lac operon."},

    {"short":"centrifuge", "definition":"A spinning machine. It separates (centrifuges) bacteria from liquid culture", "img": "https://us.vwr.com/stibo/bigweb/std.lang.all/58/17/24125817.jpg"},

    {"short":"gibson assembly", "definition":"A way to glue (ligate) DNA fragments together. Gibson requires an exonuclease, polymerase, and DNA ligase steps.", "outlink":"https://www.neb.com/protocols/2012/12/11/gibson-assembly-protocol-e5510"},

    {"short":"SLIC <em> sequence and ligation independent cloning</em>", "definition":"A way to glue (ligate) DNA fragments together. SLIC uses imprecise exonuclease activity.", "outlink":"https://www.neb.com/applications/cloning-and-synthetic-biology/dna-assembly-and-cloning/golden-gate-assembly"},

    {"short":"Golden Gate", "definition":"A way to glue (ligate) DNA fragments together.", "outlink":"https://www.protocols.io/view/slic-protocol-6t3heqn"},

    {"short":"pipette", "definition":"Like an eyedropper, but precise enough to measure microliters of liquid."},

    {"short":"gel electrophoresis", "definition":"A way to <b>measure</b> the length of DNA fragments in a sample. This is useful because it is a quick way to check if something went wrong."},

    {"short":"nucleic acid", "definition":"D<b>NA</b> is a Nucleic Acid. Nucleic acid are formed from nucleotides. "},

    {"short":"nucleotides", "definition":"Nucleotides are molecules that make up DNA, and store information. The four chemical bases provide this information"},

    {"short":"bases", "definition":"There are four types of bases in DNA: Adenine (A), Cytosine (C), Guanine (G), Thymine (T). DNA is composed of these base pairs in series."},

    {"short":"base pairs", "definition":"There are four base pairs possible: A-T, T-A, C-G, and G-C. This information is used"},

    {"short":"DNA (replication)", "definition":"DNA is double stranded: DNA replication takes single strands and copies it to make two DNA molecules."},

    {"short":"T4 Polymerase", "definition":"T4 is a type of polymerase. It requires a template and a primer","outlink": "https://www.neb.com/products/m0203-t4-dna-polymerase#Product%20Information"},

    {"short":"Bst Polymerase <em>extracted from Bacillus stearothermophilus </em>", "definition":"Bst Polymerase is a type of polymerase used primarily for LAMP, a quick isothermal amplification method."},

    {"short":"polymerase", "definition":"Polymerase is an enyzme that attaches to single stranded template DNA and completes it by assembling a complementary strand. It is necessary for any amplification method, such as PCR or LAMP."},

    {"short":"LAMP <em>Loop-Mediated Isothermal Amplification</em>", "definition":"Loop-Mediated Isothermal Amplification is a way to copy DNA extremely fast. It forms barbell-like structures which allow for multiple replication sites. ", "outlink": "https://www.neb.com/applications/dna-amplification-pcr-and-qpcr/isothermal-amplification/loop-mediated-isothermal-amplification-lamp"},

    {"short":"annealing", "definition":"cooling to let primers to attach to the ends of template DNA"},

    {"short":"extending", "definition":"heating to let the polymerase create a new strand of DNA"},

    {"short":"PCR <em>polymerase chain reaction</em>", "definition":"PCR is a way to copy DNA extremely fast. You heat and cool it in rapid cycles to get DNA to denature, anneal, and extend"},

    {"short":"denaturing", "definition":"Heating a double stranded DNA fragment to split it into two single strands. For proteins in general, denaturing is the breaking of weak molecular links, and can lead to bad things."},

    {"short":"TAE", "definition":"TAE is a buffer used for running DNA agarose gels."},

    {"short":"Cas12b <em>CRISPR-associated protein</em>", "definition":"A CRISPR Cas endonuclease which cuts DNA sequences matching a guide sequence."},

    {"short":"Cas13 <em>CRISPR-associated protein</em>", "definition":"A unique CRISPR Cas endonuclease that targets RNA, not DNA. It cuts ALL nearby RNA when it finds an RNA sequence matching a guide sequence.","outlink":"https://www.sciencedirect.com/topics/neuroscience/guide-rna"},

    {"short":"CRISPR", "definition":"CRISPR refers to the DNA sequences which the CRISPR Cas system recognizes and cuts. Originally a defense mechanism within infections within cells."},

    {"short":"Cas9 <em>CRISPR-associated protein</em>", "definition":"An endonuclease which can use RNA guides to identify and cleave DNA targets"},

    {"short":"CRISPR Cas", "definition":"A family of CRISPR-associated proteins which can identify and cut DNA and RNA sequences"},

    {"short":"guide sequence", "definition":"A guide sequence is a short strand of RNA used with endonucleases to target complementary sequences "},

    {"short":"endonuclease", "definition":"An enzyme that cuts DNA or RNA."},

    {"short":"autoclave", "definition":"a machine used to sterilize dishes and tubes."},

    {"short":"qPCR <em>quantitative polymerase chain reaction</em>", "definition":"PCR with dye added to measure exactly how much replication is happening over time."},

    {"short":"RT-PCR <em> reverse transcription polymerase chain reaction </em>", "definition":"Using an enzyme to convert RNA back to DNA, and then PCRing the DNA as usual."},

    {"short":"operon", "definition":"A DNA sequence with a promoter. Allows you to express the sequence at will (?), for example by adding lactose."},

    {"short":"lac operon", "definition":"An operon which is activated by lactose. For example IPTG"},

    {"short":"IPTG", "definition":"A liquid used to induce expression through the lac operon"},

    {"short":"reagent", "definition":"substance or mixture. Usually liquid or powder."},

    {"short":"qRT-PCR <em> real-time quantitative polymerase chain reaction</em>", "definition":"RT in RT-PCR and qRT-PCR refer to different things. PCR that allows you to see amplification of DNA molecules in real-time by dying DNA. ", "img":"https://upload.wikimedia.org/wikipedia/commons/4/4e/Qpcr-cycling.png"},

    {"short":"enzyme", "definition":"Denoted by the suffix -ase, enzymes are proteins which fulfill specific functions within a cell."},

    {"short":"proteins", "definition":"Proteins are macromolecules formed by amino acids."},

    {"short":"amino acids", "definition":"Amino acids are organic compounds assembled by ribosomes into proteins based on RNA"},

    {"short":"RNA", "definition":"RNA are single stranded temporary guides for ribosomes, transcribed from DNA."},

    {"short":"histidine-tagged protein purification", "definition":"Adding a short sequence that expresses histidine residues to the end of a recombinant sequence. After the sequence is expressed, affinity chromatography can be used to select for only His-tagged proteins, the recombinant products that we want."},

    {"short":"SDS Lysis Buffer <em> sodium dodecyl sulfate </em> ", "definition":"A buffer solution used for cell lysis (breaking open the cell walls)"},

    {"short":"Western Blotting", "definition":"A way to identify a specific protein within a cell. Lysis, gel electrophoresis, and then blotting on paper. On paper, antibodies are used to detect a specific proteins"},

    {"short":"protein purification", "definition":"There are many proteins in a cell. Purification is needed to get only the product proteins."},

    {"short":"pellet", "definition":"The spinning of the centrifuge separates bacteria into a solid part (the pellet) and liquid (the supernatant)."},

    {"short":"supernatant", "definition":"The clear liquid above the pellet produced by centrifugation"},

    {"short":"resuspension", "definition":"After centrifugation, putting the bacterial pellet in clean-up solution, often known as solution 1"},

    {"short":"solution 1", "definition":"A resuspension solution including Tris, EDTA, glucose and RNase A. It supports DNA degradation by DNases."},

    {"short":"DNase", "definition":"An enzyme which degrades DNA. This is part of purification after a protein is expressed."},

    {"short":"dNTPs", "definition":"Artificial nucleotides used in PCR to assemble new DNA strands"},

    {"short":"primer", "definition":"A short sequence binding site for enzymes, used to start DNA sythesis."},

    {"short":"sequence", "definition":"The sequence of nucleotides in a strand (DNA or RNA). The information encoded in nucleic acids"},

    {"short":"expression (protein)", "definition":"generating a protein from a DNA blueprint. This involves first transcribing DNA into RNA, and then translating RNA instructions into amino acid chains, which form proteins."},

    {"short":"transcription", "definition":"Copying DNA into expendable and single stranded RNA. Done by transcriptase"},

    {"short":"recombinant", "definition":"DNA from multiple sources, or the resulting protein (e.g. jellyfish in bacterial cell)"},

    {"short":"expression vector", "definition":"A plasmid with an inducible promoter, a kind of template designed around expressing a custom DNA insert."},

    {"short":"insert", "definition":"The custom, artificial DNA sequence to be expressed in a plasmid"},

    {"short":"backbone", "definition":"The DNA template used to express an insert in a plasmid."},

    {"short":"ligase", "definition":"An enzyme which glues select DNA strands together."},

    {"short":"strand displacement", "definition":"the ability of an 'invading' polymerase to replace downstream DNA encountered while synthesising"},

    {"short":"", "definition":""},

    {"short":"", "definition":""}
    ]*/

//title linking
let shorts = terms.map(term => term.short)

let aliases = terms.map(term => term.aliases)

let definitions = terms.map(term => term.definition)

let desc = definitions.map(string => string.replace(/(<([^>]+)>)/gi, ""))

//for each term's definition
for (i = 0; i < terms.length; i++) {
    //go through shorts and make links
    for (j = 0; j < shorts.length; j++) {
        formattedTerms = terms[i].definition;
        badStrings = ["", "-"]
        //if short is EXACTLY a bad string
        if (!badStrings.includes(shorts[j])) {

            //search WORDS for existing WORDS (no)
            if (formattedTerms.includes(shorts[j]) || formattedTerms.includes(aliases[j])) {

                replacementText = "<a href='#' onclick='forceSearch(" + "`" + shorts[j] + "`)'>" + shorts[j] + "</a>"
                terms[i].definition = terms[i].definition.split(shorts[j]).join(replacementText)
            }
        }
    }
}

let input = document.querySelector('input');
let log = document.getElementById('log');

input.oninput = handleInput;

function forceSearch(search) {
    document.getElementById("search").value = search
    matches = updateResults(search)
    displayMatches(matches)
}

function handleInput(e) {
    matches = updateResults(e.target.value)
    displayMatches(matches)
}

function updateResults(text) {
    matches = []
    document.getElementById("header").textContent = ""
    for (i = 0; i < terms.length; i++) {
        isMatch = false;
        termBank = []
        standardizedSearchTerm = text.toLowerCase()
        //adding the short
        short = terms[i].short.toLowerCase()

        if (short.startsWith(standardizedSearchTerm)) {
            matches.push(terms[i])
        }
        //adding the aliases (currently too slow)
        /*
        if(false){
        termBank.concat(terms[i].aliases.split(",").forEach(s => s.toLowerCase()))
        }
        //if any terms in term bank starts with the search term
        for(i = 0; i < termBank.length; i++)
        {
            if(termBank[i].startsWith(standardizedSearchTerm)){
                isMatch = true;
            }
        }
        */
    }
    return matches;
}

function displayMatches(matches) {
    let matchHTML = ""
    for (i = 0; i < matches.length; i++) {

        //height of images, in pixels
        imgHeight = 150
        thisMatch = matches[i]
        //use the img flex-box layout
        if (typeof thisMatch.img !== 'undefined') {
            //flexbox display visual and match side by side
            matchHTML += "<div class='entry'>"
            matchHTML += "<div class='entry-left'>"
            matchHTML += "<a href='" + thisMatch.img + "'>" + "<img style='height:" + imgHeight + "px'; src='" + thisMatch.img + "'></a>"
            matchHTML += "</div>"
            matchHTML += "<div class='entry-right'>"
            matchHTML += "<h4>"
            matchHTML += thisMatch.short

            if (typeof thisMatch.aliases !== 'undefined') {
                matchHTML += "<em> " + thisMatch.aliases + " </em>"
            }

            matchHTML += "</h4>"
            matchHTML += thisMatch.definition

            //add external definition pills 
            if (typeof thisMatch.outlink !== 'undefined') {

                matchHTML += "<div class='outlink'>"
                matchHTML += "<a target=' blank' rel='noopener noreferrer' href='" + thisMatch.outlink + "'>"
                matchHTML += "view on " + thisMatch.outlink.split("www.").join(".").split(".")[1]
                matchHTML += "</a>"
                matchHTML += "</div>"
            }

            matchHTML += "</div>"
            matchHTML += "</div>"
        }
        //use the no-img simple layout
        else {
            matchHTML += "<div class='text-entry'>"
            matchHTML += "<h4>"

            matchHTML += thisMatch.short
            if (typeof thisMatch.aliases !== 'undefined') {
                matchHTML += "<em> " + thisMatch.aliases + " </em>"
            }

            matchHTML += "</h4>"

            matchHTML += thisMatch.definition
            //add external definition pills
            if (typeof thisMatch.outlink !== 'undefined') {
                matchHTML += "<div class='outlink'>"
                matchHTML += "<a target=' blank' rel='noopener noreferrer' href='" + thisMatch.outlink + "'>"
                matchHTML += "view on " + thisMatch.outlink.split("www.").join(".").split(".")[1]
                matchHTML += "</a>"
                matchHTML += "</div>"
            }
            matchHTML += "</div>"
        }

    }
    document.getElementById("header").innerHTML = matchHTML
    //create links


}