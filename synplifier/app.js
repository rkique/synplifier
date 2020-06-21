var reagents = []

function reagent(x, y, qty) {
    this.x = x;
    this.y = y;
    this.qty = qty;
    reagents.push(this);
}

LBPowder = new reagent(100, 100, "500g")
SOCPowder = new reagent(700, 400, "500g")
LyoBL21 = new reagent(300, 300, "700g")
RTPowder = new reagent(400, 500, "200g")
water1 = new reagent(900, 200, "500ml")
water2 = new reagent(700, 700, "500ml")
water3 = new reagent(500, 900, "100ml")

C37block = new reagent(400, 900, "0ml")
C4block = new reagent(1000, 1000, "0ml")
C42block = new reagent(400, 1100, "0ml");
microtube1 = new reagent(0, 100, "0ml");
plate1 = new reagent(600, 200, "0ml");



var States = [];
var q = 0;
var w = 1200;
var h = 1200;
var BKG_COLOR = 200;
var TEXT_SIZE = 40;
var TEXT_COLOR = 100;
var STROKE_WEIGHT = 10;
var STROKE_COLOR = 0
//drawing
//TODO: implement TYPE

function setup() {
    //initArray = [LBPowder, SOCPowder, LyoBL21, RTPowder, water1, water2, water3, C37block, C4block, C42block, microtube1, plate1]
    createCanvas(w, h);
    angleMode(RADIANS)
    textSize(TEXT_SIZE);

    LBPlate = growBacteria(LBPowder, LyoBL21, water1, C37block, 3 * 60 * 60);
    SOCPlate = growBacteria(SOCPowder, LyoBL21, water2, C37block, 5 * 60 * 60);
    RT = transfer(RTPowder, water3, "10g")
    RTplate = transform(LBPlate, RT, microtube1, plate1, C4block, C42block, C37block);

    //colors
    colorMode(HSB, 100)
    colors = []
    for (i = 0; i < reagents.length; i++) {
        colors[i] = color(random(1, 100), 100, 100);
    }

}

function draw() {
    background(BKG_COLOR);
    for (i = 0; i < reagents.length; i++) {
        fill(colors[i])
        noStroke()
        circle(reagents[i].x, reagents[i].y, 100);
    }
    strokeWeight(STROKE_WEIGHT);
    stroke(STROKE_COLOR);
    drawState(States[q]);

}

function mouseClicked() {
    q = q + 1;
}

function Arrow(x1, y1, x2, y2, amount) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.amount = amount;
}

function Text(text) {
    this.text = text;
}

//growth
//A classic transformation routine from https://www.neb.com/protocols/2012/05/21/transformation-protocol
//BacterialPlate: plate of grown bacteria
//Plasmid: the plasmid to insert
//microtube: an intermediate tube for incubating
//plate: final plate object for transformed bacteria
//ice_block: ice block for heat shock
//hot_block: hot block for heat shock
//room_block: room temperature block

function transform(BacterialPlate, plasmid, microtube, plate, ice_block, hot_block, room_block) {
    competentLBPlate = heatShock(BacterialPlate, ice_block, hot_block, 5);

    //combine in microtube
    LBmicrotube = transfer(plasmid, microtube, "2ul")
    LBmicrotube = transfer(competentLBPlate, microtube, "50ul")

    //recovery and adding media
    incubate(LBmicrotube, ice_block, 30 * 60)
    heatShock(LBmicrotube, ice_block, hot_block, 1)
    LBmicrotube = transfer(media, LBmicrotube, "950ul");
    incubate(LBmicrotube, room_block, 60 * 60)
    plate = transfer(LBmicrotube, plate, "50ul");
    plate = incubate(plate, room_block, 24 * 60 * 60);
    return plate;
}

//A routine for growing bacteria from https://www.atcc.org/How_to_Revive_Cultures.aspx#:~:text=For%20freeze%20dried%20cultures%2C%20using,broth%20tube%20and%20mix%20well.
//mediaPowder: media in powder form (long term storage packets)
//lyobacteria: lyophilized (freeze-dried) bacteria
//water: purified and sterile water
//incubate_block: heat block at correct temperature for incubation

function growBacteria(mediaPowder, lyobacteria, water, incubate_block, incubate_s) {
    //create media
    media = transfer(mediaPowder, water, "500g");
    //bacteria + media 1
    BacterialSuspension = transfer(lyobacteria, media, "100g");
    //bacteria + media 2
    BacterialCulture = transfer(BacterialSuspension, water, "400g");
    BacterialCulture = incubate(BacterialCulture, incubate_block, incubate_s);
    return BacterialCulture;
}

function heatShock(BacterialCulture, ice_block, hot_block, intervals) {
    BacterialCulture = transfer(BacterialCulture, ice_block, "500ml");
    for (i = 0; i < intervals; i++) {
        incubate(BacterialCulture, ice_block, 30)
        incubate(BacterialCulture, hot_block, 120)
    }
    return BacterialCulture;
}

//Transfer a quantity of liquid.
function transfer(constituent, recipient, amount) {
    x1 = constituent.x;
    y1 = constituent.y;
    x2 = recipient.x;
    y2 = recipient.y;
    States.push(new Arrow(x1, y1, x2, y2, amount))
    totalQty = ul(recipient.qty) + ul(amount)
    product = new reagent(recipient.x, recipient.y, totalQty + "ul");
    return product;
}

//Sets a timer for a number of seconds.
function startTimer(seconds) {
    States.push(new Text("starting timer for " + seconds + " seconds"));
}

//Conversion function to ul (a thousandth of a milliliter)
//Supports g, ul, and ml
function ul(amount) {
    if (amount.includes("g")) {
        amount = 0;
    } else if (amount.includes("ul")) {
        //extract numerical quantity
        amount = parseInt(amount)
    } else if (amount.includes("ml")) {
        amount = parseInt(amount) * 1000;
    } else {
        alert("Invalid units!")
    }
    return amount;
    
}

//culture: the culture to be incubated
//incubate_block: the incubation object at correct temperature for incubation
//s: the number of seconds to incubate for

function incubate(culture, incubate_block, s) {
    //transfers the whole culture into the block
    transfer(culture, incubate_block, culture.qty)
    startTimer(s)
    return culture;
}

//TODO: link to ECHOAR
//Draws an arrow 
function drawState(Obj) {
    if (Obj instanceof Arrow) {
        var offset = 16;
        line(Obj.x1, Obj.y1, Obj.x2, Obj.y2);
            push() //start new drawing state
            var angle = atan2(Obj.y1 - Obj.y2, Obj.x1 - Obj.x2); 
            translate(Obj.x2, Obj.y2); 
            rotate(angle-HALF_PI);
            triangle(-offset*0.5, offset, offset*0.5, offset, 0, -offset/2);
            pop();
        fill(TEXT_COLOR)
        text(Obj.amount, (Obj.x1 + Obj.x2) / 2, (Obj.y1 + Obj.y2) / 2)
    } else if (Obj instanceof Text) {
        fill(TEXT_COLOR)
        text(Obj.text, w / 2, h / 2);
    } else {
        alert("objectbroken")
    }
}