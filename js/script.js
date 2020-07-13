let comp = document.querySelector('.comp');

function moveDownComp(){
    let coordX = 0;
    let op = 0;
    let time = setInterval(frame, 10);
    
    function frame() {
        if (coordX == 100) {
            clearInterval(time);
        } else {
            coordX++;
            op = op + 0.01
            comp.style.left = coordX + 'px';
            comp.style.opacity = op;
       }
    }
}

setTimeout (moveDownComp, 500)

let map = document.querySelector('.map');

function moveDownMap(){
    let op = 0;
    let time = setInterval(frame4, 10);
    
    function frame4() {
        if (op == 1) {
            clearInterval(time);
        } else {
            op = op + 0.01
            map.style.opacity = op;
       }
    }
}

setTimeout (moveDownMap, 1200)

let pcomp = document.querySelector('.pcomp');

function moveDownPcomp(){
    let coordY = 120;
    let op = 0;
    let time = setInterval(frame, 10);
    
    function frame() {
        if (coordY == 180) {
            clearInterval(time);
        } else {
            coordY++;
            op = op + 0.02
            pcomp.style.top = coordY + 'px';
            pcomp.style.opacity = op;
       }
    }
}

setTimeout (moveDownPcomp, 1200)

let tax = document.querySelector('.tax');

function moveDownTax(){
    let coordX = 250;
    let op = 0;
	let time = setInterval(frame3, 10);
    
    function frame3() {
        if (coordX == 350) {
            clearInterval(time);
        } else {
            coordX++;
            op = op + 0.01
			tax.style.left = coordX + 'px';
            tax.style.opacity = op;
       }
    }
}

setTimeout (moveDownTax, 2000)

let cost = document.querySelector('.cost');

function moveDownCost(){
    let coordX = 200;
    let op = 0;
	let transform = 0;
    let time = setInterval(frame2, 10);
    
    function frame2() {
        if (coordX == 320) {
            clearInterval(time);
        } else {
            coordX++;
            op = op + 0.01
			transform = transform + 0.2
            cost.style.left = coordX + 'px';
            cost.style.opacity = op;
			cost.style.transform = 'rotate(-' + transform + 'deg)'
       }
    }
}

setTimeout (moveDownCost, 2500)

let pcost = document.querySelector('.pcost');

function moveDownPcost(){
    let coordY = 120;
    let op = 0;
    let time = setInterval(frame5, 10);
    
    function frame5() {
        if (coordY == 180) {
            clearInterval(time);
        } else {
            coordY++;
            op = op + 0.02
            pcost.style.top = coordY + 'px';
            pcost.style.opacity = op;
       }
    }
}

setTimeout (moveDownPcost, 3000)

let delivery = document.querySelector('.delivery');

function moveDownDelivery(){
    let coordX = 450;
    let op = 0;
	let time = setInterval(frame6, 10);
    
    function frame6() {
        if (coordX == 550) {
            clearInterval(time);
        } else {
            coordX++;
            op = op + 0.01
			delivery.style.left = coordX + 'px';
            delivery.style.opacity = op;
		}
    }
}

setTimeout (moveDownDelivery, 3000)

let pdelivery = document.querySelector('.pdelivery');

function moveDownPdelivery(){
    let coordY = 120;
    let op = 0;
    let time = setInterval(frame7, 10);
    
    function frame7() {
        if (coordY == 180) {
            clearInterval(time);
        } else {
            coordY++;
            op = op + 0.02
            pdelivery.style.top = coordY + 'px';
            pdelivery.style.opacity = op;
       }
    }
}

setTimeout (moveDownPdelivery, 3500)