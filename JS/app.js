//setup user information 
let userName = prompt("Tell me your name :");
let wlc = document.querySelector(".wlc").innerText;
document.querySelector(".wlc").innerText = wlc +" " + userName;
let msg = document.querySelector(".msg_h2").innerText;
document.querySelector(".msg_h2").innerText = userName + " " + msg;
let userScore = 1;
let compScore = 1;

// game's  Code
let array = ["rock", "paper", "scissor"];
function myGame(yourChoice){
    let userGuess = yourChoice;
    let i = Math.floor(Math.random() * 3);
    let cmpGuess = array[i];
    if (cmpGuess == userGuess) {
        document.querySelector(".msg_h2").innerText = userName + " " + "Match is Draw. Let's play again";
        document.querySelector(".msg_p").innerText = `Your weapon was ${userGuess} and computer weapon was ${cmpGuess}. So that this match is draw.`;
        document.querySelector(".msg_h2").classList.add("initial");
        document.querySelector(".msg_h2").classList.remove("wrong", "right");
    }else if(cmpGuess == "rock" && userGuess == "paper") {
        document.querySelector(".msg_h2").innerText = userName + " " + "you win this match. Let's play again";
        document.querySelector(".user_S").innerText = userScore++;
        document.querySelector(".msg_h2").classList.add("right");
        document.querySelector(".msg_h2").classList.remove("initial", "wrong");
        document.querySelector(".msg_p").innerText = `Your weapon was ${userGuess} and computer weapon was ${cmpGuess}. So that this match is your's.`;
    }else if(cmpGuess == "rock" && userGuess == "scissor"){
        document.querySelector(".msg_h2").innerText = userName + " " + "you lose this match. Try again";
        document.querySelector(".comp_S").innerText = compScore++;
        document.querySelector(".msg_h2").classList.add("wrong");
        document.querySelector(".msg_h2").classList.remove("initial", "right");
        document.querySelector(".msg_p").innerText = `Your weapon was ${userGuess} and computer weapon was ${cmpGuess}. So you lose this match.`;
    }else if(cmpGuess == "scissor" && userGuess == "rock"){
        document.querySelector(".msg_h2").innerText = userName + " " + "you win this match. Let's play again";
        document.querySelector(".user_S").innerText = userScore++;
        document.querySelector(".msg_h2").classList.add("right");
        document.querySelector(".msg_h2").classList.remove("initial", "wrong");
        document.querySelector(".msg_p").innerText = `Your weapon was ${userGuess} and computer weapon was ${cmpGuess}. So that this match is your's.`;
    }else if(cmpGuess == "paper" && userGuess == "scissor"){
        document.querySelector(".msg_h2").innerText = userName + " " + "you win this match. Let's play again";
        document.querySelector(".user_S").innerText = userScore++;
        document.querySelector(".msg_h2").classList.add("right");
        document.querySelector(".msg_h2").classList.remove("initial", "wrong");
        document.querySelector(".msg_p").innerText = `Your weapon was ${userGuess} and computer weapon was ${cmpGuess}. So that this match is your's.`;
    }else if(cmpGuess == "scissor" && userGuess == "paper"){
        document.querySelector(".msg_h2").innerText = userName + " " + "you lose this match. Try again";
        document.querySelector(".comp_S").innerText = compScore++;
        document.querySelector(".msg_h2").classList.add("wrong");
        document.querySelector(".msg_h2").classList.remove("initial", "right");
        document.querySelector(".msg_p").innerText = `Your weapon was ${userGuess} and computer weapon was ${cmpGuess}. So you lose this match.`;
    }else if(cmpGuess == "paper" && userGuess == "rock"){
        document.querySelector(".msg_h2").innerText = userName + " " + "you lose this match. Try again";
        document.querySelector(".comp_S").innerText = compScore++;
        document.querySelector(".msg_h2").classList.add("wrong");
        document.querySelector(".msg_h2").classList.remove("initial", "right");
        document.querySelector(".msg_p").innerText = `Your weapon was ${userGuess} and computer weapon was ${cmpGuess}. So you lose this match.`;
    }else{
        console.log("Nothing");
    }

}
let choice ="";
document.querySelector(".rock").addEventListener("click",()=>{
    choice = document.querySelector(".rock").getAttribute("class");
    setTimeout(()=>{
        myGame(choice);
    },2500);
    document.querySelector(".msg_h2").innerText = "Please wait Computer is guessing....."
});
document.querySelector(".rock").addEventListener("mouseover",()=> {
    document.querySelector(".rock").style.border = "1px solid black"
});
document.querySelector(".rock").addEventListener("mouseleave",()=> {
    document.querySelector(".rock").style.border = "0px solid black"
});


document.querySelector(".paper").addEventListener("click",()=>{
    choice = document.querySelector(".paper").getAttribute("class");
    setTimeout(()=>{
        myGame(choice);
    },2500);
    document.querySelector(".msg_h2").innerText = "Please wait Computer is guessing....."
});
document.querySelector(".paper").addEventListener("mouseover",()=> {
    document.querySelector(".paper").style.border = "1px solid black"
});
document.querySelector(".paper").addEventListener("mouseleave",()=> {
    document.querySelector(".paper").style.border = "0px solid black"
});




document.querySelector(".scissor").addEventListener("click",()=>{
    choice = document.querySelector(".scissor").getAttribute("class");
    setTimeout(()=>{
        myGame(choice);
    },2500);
    document.querySelector(".msg_h2").innerText = "Please wait Computer is guessing....."
});
document.querySelector(".scissor").addEventListener("mouseover",()=> {
    document.querySelector(".scissor").style.border = "1px solid black"
});
document.querySelector(".scissor").addEventListener("mouseleave",()=> {
    document.querySelector(".scissor").style.border = "0px solid black"
});
