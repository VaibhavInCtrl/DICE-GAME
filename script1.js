var player1 = Math.floor(Math.random()*6)+1;
var player2 = Math.floor(Math.random()*6)+1;
console.log(player1,player2);
function winner(){
    
    if (player1 > player2){
        document.querySelector(".heading").innerText="Player 1 Wins !!! Refresh Again"
    }
    else if (player2 > player1){
        document.querySelector(".heading").innerText="Player 2 Wins !!! Refresh Again"
    }
    else {
        document.querySelector(".heading").innerText="Draw !!! Refresh Again"
    }

}
winner();

function imgChanger1(){
    if (player1 == "1"){
        document.querySelector("#image1").src = "dice1.png"
    }
    else if (player1 == "2"){
        document.querySelector("#image1").src = "dice2.png"
    }
    else if (player1 == "3"){
        document.querySelector("#image1").src = "dice3.png"
    }
    else if (player1 == "4"){
        document.querySelector("#image1").src = "dice4.png"
    }
    else if (player1 == "5"){
        document.querySelector("#image1").src = "dice5.png"
    }
    else if (player1 == "6"){
        document.querySelector("#image1").src = "dice6.png"
    }
}
imgChanger1();
function imgChanger2(){
    if (player2 == "1"){
        document.querySelector("#image2").src = "dice1.png"
    }
    else if (player2 == "2"){
        document.querySelector("#image2").src = "dice2.png"
    }
    else if (player2 == "3"){
        document.querySelector("#image2").src = "dice3.png"
    }
    else if (player2 == "4"){
        document.querySelector("#image2").src = "dice4.png"
    }
    else if (player2 == "5"){
        document.querySelector("#image2").src = "dice5.png"
    }
    else if (player2 == "6"){
        document.querySelector("#image2").src = "dice6.png"
    }
}
imgChanger2();
