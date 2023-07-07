/**
 *              Color Game Algorithm
 *  1. start - player makes a bet by choosing his desired color
 *  2. The moderator now rolls the dice
 *  3. If the dice appeared the same as the players' bet, the player is granted twice the bet or trice depending on the result of the dices
 *  4. else if the dice hasnt shown the players' bet, the player loses his or her bet
 *  5. repeat until the player losses all of his/her balance
 *
 *          1. make the random function to display random color for the roll
 *          2. make the interface for the user 
 *          3. make the bet function
 *          4. make the calculate the winning prize and losses  
 *          
 */



console.log("hello")



var WhiteCounter = 0;
var BlueCounter = 0;
var RedCounter = 0;
var GreenCounter = 0;
var PurpleCounter = 0;
var PinkCounter = 0;


var TotalWin = 0;
var TotalLoss = 0;
var Balance = 100;
var TotalBet = 0;    



 function Reset() {

     Balance = 100;
     TotalBet = 0;
     TotalLoss = 0;
     document.getElementById("Balance").innerHTML = Balance;
     document.getElementById("Win").innerHTML = TotalWin;
     document.getElementById("Loss").innerHTML = TotalLoss;
     console.log("The balance, amount won and amount loss has been reset.")
 }


function calculateBal(){
  Balance = Balance + TotalWin;
  Balance = Balance - TotalLoss;
      document.getElementById("Balance").innerHTML = Balance;
    document.getElementById("Win").innerHTML = TotalWin;
    document.getElementById("Loss").innerHTML = TotalLoss;
    

}
  

function checkBalance(){
    if(TotalBet > Balance){
        alert("Your balance is not enough");
    }
    else
    return;

}

function hulog(){
    

    var Whitebet = document.getElementById("WhiteBet").value;
    var Bluebet = document.getElementById("BlueBet").value;
    var Pinkbet = document.getElementById("PinkBet").value;
    var Greenbet = document.getElementById("GreenBet").value;
    var Redbet = document.getElementById("RedBet").value;
    var Purplebet = document.getElementById("PurpleBet").value;
    
    var randomcolor1 = Math.floor(Math.random()*5);
    var randomcolor2 = Math.floor(Math.random()*5);
    var randomcolor3 = Math.floor(Math.random()*5);

    var firstdice = document.getElementById("winner1");
    var seconddice = document.getElementById("winner2");
    var thirddice = document.getElementById("winner3");
  
    TotalBet = +Whitebet + +Bluebet + +Pinkbet + +Greenbet + +Redbet + +Purplebet;
    checkBalance(TotalBet)
    //first dice

    switch(randomcolor1){
        case 0:
            firstdice.style.backgroundColor = "white";
            WhiteCounter++;
            break;
        case 1:
            firstdice.style.backgroundColor = "#5E5EF7"; //blue
            BlueCounter++;
            break;
        case 2:
            firstdice.style.backgroundColor = "#FD5E5E"; //red
            RedCounter++;
            break;
        case 3:
            firstdice.style.backgroundColor = "#327532"; //green
            GreenCounter++;
            break;
        case 4:
            firstdice.style.backgroundColor = "#F57288";//pink
            PinkCounter++;
            break;
        case 5:
            firstdice.style.backgroundColor = "#F15EF1";//purple
            PurpleCounter++;
            break;
        case 6:
            firstdice.style.backgroundColor = "black";
            console.log("catch error")
            break;

    }




    //second dice
    switch(randomcolor2){
        case 0:
            seconddice.style.backgroundColor = "white";
            WhiteCounter++;
            break;
        case 1:
            seconddice.style.backgroundColor = "#5E5EF7"; //blue
            BlueCounter++;
            break;
        case 2:
            seconddice.style.backgroundColor = "#FD5E5E"; //red
            RedCounter++;
            break;
        case 3:
            seconddice.style.backgroundColor = "#327532"; //green
            GreenCounter++;
            break;
        case 4:
            seconddice.style.backgroundColor = "#F57288";//pink
            PinkCounter++;
            break;
        case 5:
            seconddice.style.backgroundColor = "#F15EF1";//purple
            PurpleCounter++;
            break;
        case 6:
            seconddice.style.backgroundColor = "black";
            console.log("catch error")
            break;

    }
    
    //third dice
    switch(randomcolor3){
        case 0:
            thirddice.style.backgroundColor = "white";
            WhiteCounter++;
            break;
        case 1:
            thirddice.style.backgroundColor = "#5E5EF7"; //blue
            BlueCounter++;
            break;
        case 2:
            thirddice.style.backgroundColor = "#FD5E5E"; //red
            RedCounter++;
            break;
        case 3:
            thirddice.style.backgroundColor = "#327532"; //green
            GreenCounter++;
            break;
        case 4:
            thirddice.style.backgroundColor = "#F57288";//pink
            PinkCounter++;
            break;
        case 5:
            thirddice.style.backgroundColor = "#F15EF1";//purple
            PurpleCounter++;
            break;
        case 6:
            thirddice.style.backgroundColor = "black";
            console.log("catch error")
            break;

    }
   


                        /** White  */

                switch(WhiteCounter){
                    case 0:
                        TotalLoss = +TotalLoss + +Whitebet;
                        console.log("From white bet you lost "+Whitebet)
                    break;
                    case 1:
                        Whitebet = Whitebet*2;
                        TotalWin = TotalWin + Whitebet;
                        console.log("The bet of the user White is now "+Whitebet)
                    break;
                    case 2:
                        Whitebet = Whitebet*3;
                        TotalWin = TotalWin + Whitebet;
                        console.log("The bet of the user White is now "+Whitebet)
                    break;
                    case 3:
                        Whitebet = Whitebet*4;
                        TotalWin = TotalWin + Whitebet;
                        console.log("The bet of the user White is now "+Whitebet)
                    break;
                    case 4:
                        console.log("white catch error")
                    break;
                }

                WhiteCounter = 0;
                
                    

                    /** Blue */
                
                    switch(BlueCounter){
                        case 0:
                            TotalLoss = +TotalLoss + +Bluebet;
                            console.log("From Blue bet you lost "+Bluebet)
                        break;
                        case 1:
                            Bluebet = Bluebet*2;
                            TotalWin = TotalWin + Bluebet;
                            console.log("The bet of the user Blue is now "+Bluebet)
                        break;
                        case 2:
                            Bluebet = Bluebet*3;
                            TotalWin = TotalWin + Bluebet;
                            console.log("The bet of the user Blue is now "+Bluebet)
                        break;
                        case 3:
                            Bluebet = Bluebet*4;
                            TotalWin = TotalWin + Bluebet;
                            console.log("The bet of the user Blue is now "+Bluebet)
                        break;
                        case 4:
                            console.log("Blue catch error")
                        break;
                    }
                                    
                    BlueCounter = 0;
                
                    /** Red */
                    switch(RedCounter){
                        case 0:
                            TotalLoss = +TotalLoss + +Redbet;
                            console.log("From Red bet you lost "+Redbet)
                        break;
                        case 1:
                            Redbet = Redbet*2;
                            TotalWin = TotalWin + Redbet;
                            console.log("The bet of the user Red is now "+Redbet)
                        break;
                        case 2:
                            Redbet = Redbet*3;
                            TotalWin = TotalWin + Redbet;
                            console.log("The bet of the user Red is now "+Redbet)
                        break;
                        case 3:
                            Redbet = Redbet*4;
                            TotalWin = TotalWin + Redbet;
                            console.log("The bet of the user Red is now "+Redbet)
                        break;
                        case 4:
                            console.log("Red catch error")
                        break;
                    }
                             
                    RedCounter = 0;
               
                    
                    /** Green */
                    switch(GreenCounter){
                        case 0:
                            TotalLoss = +TotalLoss + +Greenbet;
                            console.log("From Green bet you lost "+Greenbet)
                        break;
                        case 1:
                            Greenbet = Greenbet*2;
                            TotalWin = TotalWin + Greenbet;
                            console.log("The bet of the user Green is now "+Greenbet)
                        break;
                        case 2:
                            Greenbet = Greenbet*3;
                            TotalWin = TotalWin + Greenbet;
                            console.log("The bet of the user Green is now "+Greenbet)
                        break;
                        case 3:
                            Greenbet = Greenbet*4;
                            TotalWin = TotalWin + Greenbet;
                            console.log("The bet of the user Green is now "+Greenbet)
                        break;
                        case 4:
                            console.log("Green catch error")
                        break;
                    }
                   
                    GreenCounter = 0;
                
                    /** Pink */
                    switch(PinkCounter){
                        case 0:
                            TotalLoss = +TotalLoss + +Pinkbet;
                            console.log("From Pink  bet you lost "+Pinkbet)
                        break;
                        case 1:
                            Pinkbet = Pinkbet*2;
                            TotalWin = TotalWin + Pinkbet;
                            console.log("The bet of the user Pink is now "+Pinkbet)
                        break;
                        case 2:
                            Pinkbet = Pinkbet*3;
                            TotalWin = TotalWin + Pinkbet;
                            console.log("The bet of the user Pink is now "+Pinkbet)
                        break;
                        case 3:
                            Pinkbet = Pinkbet*4;
                            TotalWin = TotalWin + Pinkbet;
                            console.log("The bet of the user Pink is now "+Pinkbet)
                        break;
                        case 4:
                            console.log("Pink catch error")
                        break;
                    }
                    PinkCounter = 0;
                
                    /** Purple */
                    switch(PurpleCounter){
                        case 0:
                            TotalLoss = +TotalLoss + +Purplebet;
                            console.log("From Purple bet you lost "+Purplebet)
                        break;
                        case 1:
                            Purplebet = Purplebet*2;
                            TotalWin = TotalWin + Purplebet;
                            console.log("The bet of the user Purple is now "+Purplebet)
                        break;
                        case 2:
                            Purplebet = Purplebet*3;
                            TotalWin = TotalWin + Purplebet;
                            console.log("The bet of the user Purple is now "+Purplebet)
                        break;
                        case 3:
                            Purplebet = Purplebet*4;
                            TotalWin = TotalWin + Purplebet;
                            console.log("The bet of the user Purple is now "+Purplebet)
                        break;
                        case 4:
                            console.log("Purple catch error")
                        break;
                    }

                    PurpleCounter = 0;
                
                    calculateBal(TotalWin, TotalLoss)
                console.log("The user won a total prize of "+TotalWin)
                console.log("The user lost a total amount of "+TotalLoss)

                TotalWin = 0;
                TotalLoss = 0;

                
}//end of hulog function



const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
    
    
    



/**
 * bet function algorithm
 * 
 *  1. checks the user input from the text boxes
 *  2. store the user input to a variable array bet
 *  3. compare the bet to the winning color 
 *  4. 
 * 
 */
    

    // var winner1 = document.getElementById("winner1").innerText;
    // var winner2 = document.getElementById("winner2");
    // var winner3 = document.getElementById("winner3");


    // winner1.style.backgroundColor= "#000"
    
    // const roll = document.getElementById("roll");

    // function winningcombo(){
    //     var firstcolor = Math.random * 6;
    //     var secondcolor = Math.random * 6;
    //     var thirdcolor = Math.random * 6;

    //     if(firstcolor == 1){

    //         winner1.style.background="#eee"
    //     }
    //     else if(firstcolor == 2){

    //     }
    // }

    // roll.addEventListener('click', ()=>{
    //     winningcombo();
    // })


