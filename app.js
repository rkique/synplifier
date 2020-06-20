//Laying out initial positions of reagents
LBPowder = {x:100, y:100, qty: "500g"}
SOCPowder = {x: 700, y: 400, qty: "500g"}
LyoBL21 = {x:300, y: 300, qty: "700g"}
water = {x: 200, y:200, qty: "500ml"}
C37block = {x: 400, y: 300, qty: null}

LBPlate = growBacteria(LBPowder, LyoBL21, water, C37block);
SOCPlate = growBacteria(SOCPowder, LyoBL21, water, C37block);

//A routine for growing bacteria
//mediaPowder: media in powder form (long term storage packets)
//lyobacteria: lyophilized (freeze-dried) bacteria
//water: purified and sterile water
//incubate_block: heat block at correct temperature for incubation

function growBacteria(mediaPowder, lyobacteria, water, incubate_block){
    //create lb media
    media = rehydrate(mediaPowder, water, "500g");
    //bacteria + media 1
    BacterialSuspension = rehydrate(media,lyobacteria, "100g");
    //bacteria + media 2
    BacterialCulture = rehydrate(BacterialSuspension, water, "400g");
    BacterialCulture = incubate(BacterialCulture, incubate_block, 10800);
    return BacterialCulture;
}

function rehydrate(constituent, liquid, amount){
    x1 = constituent.x;
    y1 = constituent.y;
    x2 = liquid.x;
    y2 = liquid.y;
    drawArrow(x1,y1,x2,y2, amount);
    product = {x: liquid.x, y: liquid.y, qty: liquid.qty}
    return product;
}

//culture: the culture to be incubated
//incubate_block: the incubation object at correct temperature for incubation
//s: the number of seconds to incubate for
function incubate(culture, incubate_block, s){
    drawArrow(culture.x, culture.y, incubate_block.x,incubate_block.y, "")
    startTimer(s)
    return culture;
}

//TODO: link to ECHOAR
//Draws an arrow from one position to another, specifying a quantity to be delivered
function drawArrow(x1,y1,x2,y2, amount){
    console.log("drawing arrow from ",x1,y1," to ",x2,y2," that specifies ", amount);
}

//TODO: link to ECHOAR
//Sets a timer for a number of seconds.
function startTimer(seconds){
    console.log("starting timer for ",seconds, " seconds")
}