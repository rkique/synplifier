var reagents = []
var States = [];
var q = 0;
var w = 1050;
var h = 700;
var BKG_COLOR = 70;
var TEXT_SIZE = 14;
var TEXT_COLOR = 0;
var TEXT_OFFSET = 30;
var STROKE_WEIGHT = 10; 
var STROKE_COLOR = 0;
var Canvas_X_Offset = 630;
function reagent(qty="0g",name,type="dry") {
    this.x = 0;
    this.y = 0;
    this.qty = qty;
    this.name = name;
    this.type = type;
    this.hue = 0;
    reagents.push(this);
}
/*
LBPowder = new reagent("500g", "LB Powder", "dry")
SOCPowder = new reagent("500g", "SOC Powder", "dry")
LyoBL21 = new reagent("700g", "Lyophilized BL21", "dry")
RTPowder = new reagent("200g", "RT Powder", "dry")
water1 = new reagent("500ml", "500ml water","wet")
water2 = new reagent("500ml", "500ml water","wet")
water3 = new reagent("100ml", "100ml water","wet")
C37block = new reagent("0ml", "37C Heat Block", "tool")
C4block = new reagent("0ml", "4C Heat Block", "tool")
C42block = new reagent("0ml", "42C Heat Block", "tool")
microtube1 = new reagent("0ml", "microtube", "tool")
plate1 = new reagent("0ml", "plate", "tool");*/


/*
States.push(new Text("START"));

LBPlate = growBacteria(LBPowder, LyoBL21, water1, C37block, 3 * 60 * 60);
SOCPlate = growBacteria(SOCPowder, LyoBL21, water2, C37block, 5 * 60 * 60);
RT = transfer(RTPowder, water3, "10g")
RTplate = transform(LBPlate, RT, microtube1, plate1, C4block, C42block, C37block);

States.push(new Text("END"));*/

//drawing
function setup() {
    cnv = createCanvas(w, h);
    cnv.position(Canvas_X_Offset, 0);
    angleMode(RADIANS)
    rectMode(CENTER)
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    colorMode(HSB, 100)
    textFont('Georgia');
}
var dry = [];
var wet = [];
var tool = [];
function draw() {
    if(reagents.length >0 && dry.length == 0){
            for(let i=0; i<reagents.length; i++)
            {
                if (reagents[i].type=="dry")
                    dry.push(reagents[i])
                else if (reagents[i].type == "wet"){
                    wet.push(reagents[i])
                }
                else {tool.push(reagents[i])}
            }
            //setup reagents
            if(dry[0].hue == 0){
                for(i = 0; i< dry.length; i++){
                        dry[i].hue = (i/dry.length)*(1/3)
                        dry[i].x = 100
                        dry[i].y = ((i+1)/(dry.length+2))*w
                    }
                for(i = 0; i< wet.length; i++)
                    {
                        wet[i].hue =  1/3+(i/wet.length)*(1/3)
                        wet[i].x = 300
                        wet[i].y = ((i+1)/(wet.length+2))*w
                    }
                for(i = 0; i< tool.length; i++){
                    {
                        tool[i].hue = 2/3+(i/tool.length)*(1/3)
                        tool[i].x = 500
                        tool[i].y = ((i+1)/(tool.length+2))*w
                    }
                }
            }
            }
            background(BKG_COLOR);
            noStroke()
            strokeWeight(0);
            //this was so annoying to set up and inefficient but so worth it
            for(i = 0; i< dry.length; i++){
                    fill(color(dry[i].hue*100,100,100))
                    tx = dry[i].x
                    ty = dry[i].y
                    rect(tx, ty, 60,40)
                    fill(TEXT_COLOR)
                    text(dry[i].name, tx, ty+TEXT_OFFSET);
                }
            for(i = 0; i< wet.length; i++)
                {
                    fill(color(wet[i].hue*100,100,100))
                    tx = wet[i].x
                    ty = wet[i].y
                    circle(tx,ty, 50,50)
                    fill(TEXT_COLOR)
                    text(wet[i].name, tx, ty+TEXT_OFFSET);
                }
            for(i = 0; i< tool.length; i++){
                {
                    fill(color(tool[i].hue*100,100,100))
                    tx = tool[i].x
                    ty = tool[i].y
                    triangle(tx-40, ty-20, tx,ty+20, tx+40, ty-20)
                    fill(TEXT_COLOR)
                    text(tool[i].name, tx, ty+TEXT_OFFSET);
                }
            }
        strokeWeight(STROKE_WEIGHT);
        stroke(STROKE_COLOR);

    if(States === undefined || States.length == 0)
    {
        console.log("states undefined")
        return;
    }else{
    if(q < States.length){
        console.log("drawing States");
        fill(TEXT_COLOR)
        strokeWeight(0);
        text(q+1+"/"+(States.length-1)+" frames ", 45, 10);
        if (States[q] instanceof Text && States[q].seconds > 0) {
            console.log("timer")
            if (frameCount % 60 == 0 && States[q].seconds-- > 0) {
                States[q].seconds--;
            }
            text(new Date(States[q].seconds * 1000).toISOString().substr(11, 8), w - 60, 10);
        }
        fill(STROKE_COLOR)
        strokeWeight(10);
        drawState(States[q])};
    } 
}

function mouseClicked() {
    if(q< States.length && mouseX > 0 && mouseY > 0)
    {
    q = q + 1;
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW && q > 0) {
      q = q-1;
    } else if (keyCode === RIGHT_ARROW && q < States.length) {
      q = q+1;
    }
  }
function Arrow(x1, y1, x2, y2, amount) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.amount = amount;
}

function Text(text, seconds) {
    this.text = text;
    this.seconds = seconds;
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

function induceBacteria(BacterialCulture, inducer, heat_block, induction_time) {
        BacterialCulture = transfer(inducer, BacterialCulture, parseInt(BacterialCulture.qty) / 10);
        return incubate(BacterialCulture, heat_block, 4 * 60 * 60)

    }

    //lyophilizaton for preservation
    function lyophilizePreserve(BacterialCulture, lyophilizer, lyoprotectant) {
        BacterialCulture = transfer(lyoprotectant, BacterialCulture, "100ml");
        return lyophilize(BacterialCulture, lyophilizer);
    }

    //lyophilization on strong defaults, meant for cellular collapse and extraction
    function lyophilize(BacterialCulture, lyophilizer, s = 30 * 60 * 60) {
        product = incubate(BacterialCulture, lyophilizer, s)
        product.type = "dry";
        return product;
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
    return recipient;
}

//Sets a timer for a number of seconds.
function startTimer(seconds) {
States.push(new Text("Please wait for the time specified. This is part of the protocol.", seconds));
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
        console.log("Invalid units!")
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
        strokeWeight(0);
        text(Obj.amount, (Obj.x1 + Obj.x2) / 2, (Obj.y1 + Obj.y2) / 2 + 20)
    } else if (Obj instanceof Text) {
        fill(TEXT_COLOR)
        strokeWeight(0);
        text(Obj.text, w/2, 10);
    } else {    
        console.log("objectbroken")
    }
}