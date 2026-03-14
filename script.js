
let playerscore=0;
let computerscore=0;
let result;
let buttons=document.querySelectorAll(".mybutton");

for (let i=0;i<buttons.length;i++)
{ 
    buttons[i].addEventListener("click",function(){
        let playerChoice=this.id;
        playGame(playerChoice);
    });
}

function playGame(playerChoice)
{
    const options=["rock","paper","scissors"];
    let computerChoice=options[Math.floor(Math.random()*3)];
    if (playerChoice=="rock")
    {
        if (computerChoice=="rock") result="Draw";
        else if (computerChoice=="paper") computerscore++, result="Lose";
        else playerscore++, result="Win";
    }
    else if (playerChoice=="paper")
    {
        if (computerChoice=="paper") result="Draw";
        else if (computerChoice=="scissors") computerscore++, result="Lose";
        else playerscore++, result="Win";
    }
    else
    {
        if (computerChoice=="scissors") result="Draw";
        else if (computerChoice=="rock") computerscore++, result="Lose";
        else playerscore++, result="Win";
    }
    document.getElementById("result").innerHTML=
    " You chose: " + playerChoice + 
    "<br> Computer chose: " + computerChoice + 
    "<br> RESULT " + result +
    "<br> Score:" + " YOU " + playerscore + " COMPUTER " + computerscore;
}
