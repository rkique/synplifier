LB = new reagent("500g", "LB Powder", "dry")
E = new reagent("700g", "Lyophilized BL21", "dry")
RT = new reagent("200g", "RT Plasmid", "dry")
Bst = new reagent("200g", "Bst Plasmid", "dry")
Cas12a = new reagent("200g", "Cas12a Plasmid", "dry")
C37 = new reagent("0ml", "37C Heat Block", "tool")
C4 = new reagent("0ml", "4C Heat Block", "tool")
C42 = new reagent("0ml", "42C Heat Block", "tool")
C62 = new reagent("0ml", "62C Heat Block", "tool")
water = new reagent("500ml", "Water", "wet")
water2 = new reagent("500ml", "Water", "wet")
water3 = new reagent("500ml", "nuclease-free water", "wet")
IPTG = new reagent("500ml", "IPTG", "wet")
lyophilizer = new reagent("0ml", "Lyophilizer", "tool")
RNA = new reagent("200ml", "RNA sample", "wet")
gRNA = new reagent("200ul", "RNA guides", "wet")
buffer = new reagent("1000g", "buffer mix", "dry");
LAMPprimers = new reagent("100ul", "LAMP Primers", "wet");
FlowStrips = new reagent("0ml", "Lateral Flow Assay Strips", "dry");

//Replicates https://mammoth.bio/wp-content/uploads/2020/02/A-protocol-for-rapid-detection-of-the-2019-novel-coronavirus-SARS-CoV-2-using-CRISPR-diagnostics-SARS-CoV-2-DETECTR.pdf
//Extremely closely, with the exception of some lyophilized substitutes (freeze-dried) to reduce expenses and increase accessibility.
//reconstitute
microtubes = new reagent("0ml", "microtubes", "tool")
plates = new reagent("0ml", "plates", "tool");

//growth
LBPlate = growBacteria(LB, E, water, C37, 3 * 60 * 60);
LBPlate2 = growBacteria(LB, E, water2, C37, 3 * 60 * 60);
LBPlate3 = growBacteria(LB, E, water3, C37, 3 * 60 * 60);
//transform
RTplate = transform(LBPlate, RT, microtubes, plates, C4, C42, C37);
Bstplate = transform(LBPlate2, Bst, microtubes, plates, C4, C42, C37);
Cas12aplate = transform(LBPLate3, Cas12a, microtubes, plates, C4, C42, C37);
//induce 
RTplate = induceBacteria(RTplate, IPTG, C37);
RTproduct = lyophilize(RTplate, lyophilizer, 4*60*60)
Bstplate = induceBacteria(Bstplate, IPTG, C37);
Bstproduct = lyophilize(Bstplate, lyophilizer, 4*60*60)
Cas23aplate = induceBacteria(Cas12aplate, IPTG, C37);
Cas12aProduct = lyophilize(Cas12aplate, lyophilizer, 4*60*60)
//prepare RNP complex
RNP1 = transfer(water3, microtubes, "15.75ul")
RNP1 = transfer(buffer, microtubes, "2ul")
RNP1 = transfer(Cas12aProduct, microtubes, "1ul")
RNP1 = transfer(gRNA, microtubes, "1.25ul")
RNPcomplex = incubate(RNP1, C37, 30*60);
//RT-LAMP
RTLAMP = transfer(buffer, microtubes, "9.6ul")
RTLAMP = transfer(Bstproduct, microtubes, "1ul")
RTLAMP = transfer(RTproduct, microtubes, "0.5ul")
RTLAMP = transfer(water, microtubes, "3.87ul")
RTLAMP = transfer(RNA, microtubes, "5ul")
RTLAMP = incubate(RTLAMP, C62, 20*60);
Final = transfer(RTLAMP, RNPcomplex, "2ul");
Final = transfer(buffer,Final, "80ul");
//insert flow strip
Final = incubate(Final, C37, 10*60);
result = transfer(FlowStrips, Final, "0ml");





