//Laying out initial positions of reagents
LBPowder = {x:100, y:100, qty: "500g",}
SOCPowder = {x: 700, y: 400, qty: "500g"}
LyoBL21 = {x:300, y: 300, qty: "700g"}
RTPowder = {x:400,y:500, qty: "200g"}

water1 = water(200,200, "500ml")
water2 = water(700,700, "500ml")
water3 = water(700,700, "100ml")

C37block = {x: 400, y: 900, qty: "0ml"}
C4block = {x: 400, y: 1000, qty: "0ml"}
C42block = {x: 400, y: 1100, qty: "0ml"}
microtube1 = {x:0,y:100, qty: "0ml"}
plate1 = {x:100, y:0, qty: "0ml"}

//MAIN

//growth

LBPlate = growBacteria(LBPowder, LyoBL21, water1, C37block, 3*60*60);
SOCPlate = growBacteria(SOCPowder, LyoBL21, water2, C37block, 5*60*60);

//transformation
RT = transfer(RTPowder,water3, "10g")
RTplate = classicTransformBacteria(LBPlate, RT, microtube1, plate1, C4block, C42block, C37block);

//A classic transformation routine from https://www.neb.com/protocols/2012/05/21/transformation-protocol
//BacterialPlate: plate of grown bacteria
//Plasmid: the plasmid to insert
//microtube: an intermediate tube for incubating
//plate: final plate object for transformed bacteria
//ice_block: ice block for heat shock
//hot_block: hot block for heat shock
//room_block: room temperature block

function classicTransformBacteria(BacterialPlate, plasmid, microtube, plate, ice_block, hot_block, room_block){
competentLBPlate = heatShock(BacterialPlate, ice_block, hot_block, 5);
//combine in microtube
LBmicrotube = transfer(plasmid, microtube, "2ul")
LBmicrotube = transfer(competentLBPlate, microtube, "50ul")
//recovery and adding media
incubate(LBmicrotube, ice_block, 30*60)
heatShock(LBmicrotube, ice_block, hot_block, 1)
LBmicrotube = transfer(media, LBmicrotube, "950ul");
incubate(LBmicrotube, room_block, 60*60)
plate = transfer(LBmicrotube, plate, "50ul");
plate = incubate(plate, room_block, 24*60*60);
return plate;
}

//A routine for growing bacteria from https://www.atcc.org/How_to_Revive_Cultures.aspx#:~:text=For%20freeze%20dried%20cultures%2C%20using,broth%20tube%20and%20mix%20well.
//mediaPowder: media in powder form (long term storage packets)
//lyobacteria: lyophilized (freeze-dried) bacteria
//water: purified and sterile water
//incubate_block: heat block at correct temperature for incubation

function growBacteria(mediaPowder, lyobacteria, water, incubate_block, incubate_s){
    //create media
    media = transfer(mediaPowder, water, "500g");
    //bacteria + media 1
    BacterialSuspension = transfer(lyobacteria,media, "100g");
    //bacteria + media 2
    BacterialCulture = transfer(BacterialSuspension, water, "400g");
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

function transfer(constituent, recipient, amount){
    x1 = constituent.x;
    y1 = constituent.y;
    x2 = recipient.x;
    y2 = recipient.y;
    drawArrow(x1,y1,x2,y2, amount);
    totalQty = ul(recipient.qty)+ul(amount)
    product = {x: recipient.x, y: recipient.y, qty: totalQty+"ul"}
    return product;
}

function water(x, y, amount){
    return{x: x, y:y, qty: amount}
}

//Conversion function to ul (a thousandth of a milliliter)
//Supports g, ul, and ml
function ul(amount){
    if(amount.includes("g")){
        amount = 0;
    }
    else if(amount.includes("ul")){
        //extract numerical quantity
        amount = parseInt(amount)
    }
    else if(amount.includes("ml")){
        amount = parseInt(amount)*1000;
    }
    else{console.log("Invalid units!")}
    return amount;
}

//culture: the culture to be incubated
//incubate_block: the incubation object at correct temperature for incubation
//s: the number of seconds to incubate for
function incubate(culture, incubate_block, s){
    //transfers the whole culture into the block
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
