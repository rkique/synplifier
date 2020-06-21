//Laying out initial positions of reagents
LBPowder = {x:100, y:100, qty: "500g"}
SOCPowder = {x: 700, y: 400, qty: "500g"}
LyoBL21 = {x:300, y: 300, qty: "700g"}
water = {x: 200, y:200, qty: "500ml"}
C37block = {x: 400, y: 900, qty: "0ml"}
C4block = {x: 400, y: 1000, qty: "0ml"}
C42block = {x: 400, y: 1100, qty: "0ml"}
microtube1 = {x:0,y:100, qty: "0ml"}
plate1 = {x:100, y:0, qty: "0ml"}
RT = {x:400,y:500, qty: "200ml"}

//MAIN

//growth
LBPlate = growBacteria(LBPowder, LyoBL21, water, C37block, 3*60*60);
SOCPlate = growBacteria(SOCPowder, LyoBL21, water, C37block, 5*60*60);

//transformation
classictransformBacteria(LBPlate, RT, microtube1, plate1, C4block, C42block, C37block);



function classictransformBacteria(BacterialPlate, plasmid, microtube, plate, ice_block, hot_block, room_block){
competentLBPlate = heatShock(BacterialPlate, ice_block, hot_block, 5);
LBmicrotube = transfer(plasmid, microtube, "2ul")
LBmicrotube = transfer(competentLBPlate, microtube, "50ul")
incubate(LBmicrotube, ice_block, 30*60)
heatShock(LBmicrotube, ice_block, hot_block, 1)
LBmicrotube = transfer(media, LBmicrotube, "950ul");
incubate(LBmicrotube, room_block, 60*60)
plate = transfer(LBmicrotube, plate, "50ul");
plate = incubate(plate, room_block, 24*60*60);
return plate;
}

//A routine for growing bacteria
//mediaPowder: media in powder form (long term storage packets)
//lyobacteria: lyophilized (freeze-dried) bacteria
//water: purified and sterile water
//incubate_block: heat block at correct temperature for incubation
function growBacteria(mediaPowder, lyobacteria, water, incubate_block, incubate_s){
    //create media
    media = transfer(mediaPowder, water, "500g");
    //bacteria + media 1
    BacterialSuspension = transfer(media,lyobacteria, "100g");
    //bacteria + media 2
    BacterialCulture = transfer(BacterialSuspension, water, "400g");
    console.log('x')
    BacterialCulture = incubate(BacterialCulture, incubate_block, incubate_s);
    return BacterialCulture;
}

function heatShock(BacterialCulture, ice_block, hot_block, intervals){
    BacterialCulture = transfer(BacterialCulture, ice_block, "500ml");
    for(i = 0; i< intervals; i++)
    {
    incubate(BacterialCulture, ice_block, 30)
    incubate(BacterialCulture, hot_block, 120)
    }
    return BacterialCulture;
}

function transfer(constituent, liquid, amount){
    x1 = constituent.x;
    y1 = constituent.y;
    x2 = liquid.x;
    y2 = liquid.y;
    drawArrow(x1,y1,x2,y2, amount);
    product = {x: liquid.x, y: liquid.y, qty: amount}
    return product;
}

//culture: the culture to be incubated
//incubate_block: the incubation object at correct temperature for incubation
//s: the number of seconds to incubate for
function incubate(culture, incubate_block, s){
    console.log('hello')
    transfer(culture, incubate_block, culture.qty)
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
