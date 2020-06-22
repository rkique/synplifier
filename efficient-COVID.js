
petrii = Array(3).fill(growBacteria(LB,E,water,C37, 3*60*60))
plasmids = {RT, Bst, Cas12a}
//note to self: requires 4/37/42/62 Celcius heat block set

function myTransform(petri, plasmid){
    return transform(LBPlate, plasmid, microtubes, plates, C4, C42, C37)
}
function IPTGinduce(petri){
    return induceBacteria(petri, IPTG, C37)
}
petrii.forEach(function(petri, i) {petri = myTransform(petri,plasmid[i])});
petrii.forEach(function(petri) {petri = IPTGinduce(petri)});
petrii.forEach(function(petri) {petri = lyophilize(petri)});

for(i = 0; i< 3; i++)
{
RTLAMP(buffer, petrii[1], petrii[0], water, RNA,generateRNPs(water, buffer, petrii[2], gRNA));
}

//Generate RNPs, an important intermediate step to the diagnostic.
function generateRNPs(water, buffer, Cas12a, gRNA){
    RNP1 = transfer(water, microtubes, "15.75ul")
    RNP1 = transfer(buffer, microtubes, "2ul")
    RNP1 = transfer(Cas12a, microtubes, "1ul")
    RNP1 = transfer(gRNA, microtubes, "1.25ul")
 return incubate(RNP1, C37, 30*60);
}

//The final diagnostic
function RTLAMP(buffer, Bst, RT, water, RNA, RNPcomplex){
RTLAMP = transfer(buffer, microtubes, "9.6ul")
RTLAMP = transfer(Bst, microtubes, "1ul")
RTLAMP = transfer(RT, microtubes, "0.5ul")
RTLAMP = transfer(water, microtubes, "3.87ul")
RTLAMP = transfer(RNA, microtubes, "5ul")
RTLAMP = incubate(RTLAMP, C62, 20*60);
Final = transfer(RTLAMP, RNPcomplex, "2ul");
Final = transfer(buffer,Final, "80ul");
Final = incubate(Final, C37, 10*60);
result = transfer(FlowStrips, Final, "0ml");
} 