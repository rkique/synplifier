let diy = require('./app');

LBPowder = {x:100, y:100, qty: "500g",}
SOCPowder = {x: 700, y: 400, qty: "500g"}
LyoBL21 = {x:300, y: 300, qty: "700g"}
RTPowder = {x:400,y:500, qty: "200g"}

water1 = diy.water(200,200, "500ml")
water2 = diy.water(700,700, "500ml")
water3 = diy.water(700,700, "100ml")

C37block = {x: 400, y: 900, qty: "0ml"}
C4block = {x: 400, y: 1000, qty: "0ml"}
C42block = {x: 400, y: 1100, qty: "0ml"}
microtube1 = {x:0,y:100, qty: "0ml"}
plate1 = {x:100, y:0, qty: "0ml"}

//MAIN

//growth

LBPlate = diy.growBacteria(LBPowder, LyoBL21, water1, C37block, 3*60*60);
SOCPlate = diy.growBacteria(SOCPowder, LyoBL21, water2, C37block, 5*60*60);

//transformation
RT = diy.transfer(RTPowder,water3, "10g")
RTplate = diy.classicTransformBacteria(LBPlate, RT, microtube1, plate1, C4block, C42block, C37block);


