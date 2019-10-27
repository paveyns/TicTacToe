drawboard();
var x = -1;
var y = -1;
playerturn = 'X';
const boardstate = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

function drawmove(){
    //left column
    if(0 < x && x < 100){
        if(0 < y && y < 100){
            if(boardstate[0][0] == null){
                if(playerturn == 'X'){boardstate[0][0] = 'X';drawx(25,25);}else{boardstate[0][0] = 'O';drawo(25,25);}    
            }
            else{alert("Space already chosen")}      
        }
        if(100 < y && y < 200){
            if(boardstate[1][0] == null){
                if(playerturn == 'X'){boardstate[1][0] = 'X';drawx(25,125);}else{boardstate[1][0] = 'O';drawo(25,125);}
            }
            else{alert("Space already chosen")}
        }
        if(200 < y && y < 300){
            if(boardstate[2][0] == null){
                if(playerturn == 'X'){boardstate[2][0] = 'X';drawx(25,225);}else{boardstate[2][0] = 'O';drawo(25,225);}
            }
            else{alert("Space already chosen")}
        }
    }
    //middle column
    if(100 < x && x < 200){
        if(0 < y && y < 100){
            if(boardstate[0][1] == null){
                if(playerturn == 'X'){drawx(125,25);boardstate[0][1] = 'X';}else{drawo(125,25);boardstate[0][1] = 'O';}  
            }
            else{alert("Space already chosen")}     
        }
        if(100 < y && y < 200){
            if(boardstate[1][1] == null){
                if(playerturn == 'X'){drawx(125,125);boardstate[1][1] = 'X';}else{drawo(125,125);boardstate[1][1] = 'O';}
            }
            else{alert("Space already chosen")}
        }
        if(200 < y && y < 300){
            if(boardstate[2][1] == null){
                if(playerturn == 'X'){drawx(125,225);boardstate[2][1] = 'X';}else{drawo(125,225);boardstate[2][1] = 'O';}
            }
            else{alert("Space already chosen")}
        }
    }
    //right column
    if(200 < x && x < 300){
        if(0 < y && y < 100){
            if(boardstate[0][2] == null){
                if(playerturn == 'X'){drawx(225,25);boardstate[0][2] = 'X';}else{drawo(225,25);boardstate[0][2] = 'O';}  
            }
            else{alert("Space already chosen")}     
        }
        if(100 < y && y < 200){
            if(boardstate[1][2] == null){
                if(playerturn == 'X'){drawx(225,125);boardstate[1][2] = 'X';}else{drawo(225,125);boardstate[1][2] = 'O';}
            }
            else{alert("Space already chosen")}
        }
        if(200 < y && y < 300){
            if(boardstate[2][2] == null){
                if(playerturn == 'X'){drawx(225,225);boardstate[2][2] = 'X';}else{drawo(225,225);boardstate[2][2] = 'O';}
            }
            else{alert("Space already chosen")}
        }
    }
    console.log(boardstate);
}

function drawx(xcord,ycord){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(xcord,ycord);
    ctx.lineTo(xcord+50,ycord+50);
    ctx.stroke();
    ctx.moveTo(xcord,ycord+50);
    ctx.lineTo(xcord+50,ycord);
    ctx.stroke();

    playerturn = 'O';
}

function drawo(xcord,ycord){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(xcord+25, ycord+25, 30, 0, 2 * Math.PI);
    ctx.stroke();

    playerturn = 'X';
}

//unused, original method i tried. 
//This worked for most cases but for some reason had issues i could not track down, so i changed to the method used in checkWin()
function oldcheckWin(){ 
    if(boardstate[0][0] != null){
        if(boardstate[0][0] == boardstate[1][1] && boardstate[0][0] == boardstate[2][2]){endgame();}
        if(boardstate[0][0] == boardstate[0][1] && boardstate[0][0] == boardstate[0][2]){endgame();}
        if(boardstate[0][0] == boardstate[1][0] && boardstate[0][0] == boardstate[2][0]){endgame();}
    }
    if(boardstate[1][0] != null){
        if(boardstate[1][0] == boardstate[1][1] && boardstate[1][0] == boardstate[1][2]){endgame();}
    }
    if(boardstate[2][0] != null){
        if(boardstate[2][0] == boardstate[1][1] && boardstate[2][0] == boardstate[0][2]){endgame();}
        if(boardstate[2][0] == boardstate[2][1] && boardstate[2][0] == boardstate[2][2]){endgame();}
    }
    if(boardstate[0][1] != null){
        if(boardstate[0][1] == boardstate[1][1] && boardstate[0][1] == boardstate[2][1]){endgame();}
    }
    if(boardstate[0][2] != null){
        if(boardstate[0][2] == boardstate[1][2] && boardstate[0][1] == boardstate[2][2]){endgame();}
    }
}

function checkWin(){
    for(var i = 0; i < boardstate.length; i++) {
        if(boardstate[i][0] != null && boardstate[i][0] == boardstate[i][1] && boardstate[i][1] == boardstate[i][2]) {endgame();}      
    }
    for(var j = 0; j < boardstate.length; j++) {
        if(boardstate[0][j] != null && boardstate[0][j] == boardstate[1][j] && boardstate[1][j] == boardstate[2][j]) {endgame();}
    }
    if(boardstate[0][0] != null && boardstate[0][0] == boardstate[1][1] && boardstate[1][1] == boardstate[2][2]) {endgame();}
    if(boardstate[0][2] != null && boardstate[0][2] == boardstate[1][1] && boardstate[1][1] == boardstate[2][0]) {endgame();}
    checkTie();
}

function checkTie(){
    for(var i = 0; i < boardstate.length; i++) {
        for(var j = 0; j < boardstate[i].length; j++)
            if(boardstate[i][j] == null) {return;}
    } 
    tiegame();
}

function getClickPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const clickx = event.clientX - rect.left
    const clicky = event.clientY - rect.top
    x = clickx;
    y = clicky;
    console.log(clickx+","+clicky);
    drawmove();
}
const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', function(e) {
    getClickPosition(canvas, e)
    checkWin();
})

function endgame() {  
    if(playerturn = 'X'){playerturn = 'O';} 
    if(playerturn = 'O'){playerturn = 'X';}
    confirm(playerturn+" Wins!");
    startnew();
}
function tiegame() {  
    confirm("It's a Tie!");
    startnew();
}

function startnew() {
    document.getElementById("newgamemodal").hidden = false;
}

function drawboard() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
        ctx.moveTo(0,100);
        ctx.lineTo(300,100);
        ctx.stroke();
        ctx.moveTo(0,200);
        ctx.lineTo(300,200);
        ctx.stroke();
        ctx.moveTo(100,0);
        ctx.lineTo(100,300);
        ctx.stroke();
        ctx.moveTo(200,0);
        ctx.lineTo(200,300);
        ctx.stroke();
}



