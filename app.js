const images=document.querySelectorAll(".img");
let yoursScore=document.querySelector("#yours");
let compScore=document.querySelector("#comp");
let userScore=0;
let computerScore=0;
const generateCompChoice=()=>{
    let option=["rock","paper","scissor"];
    const randomIndex=Math.floor(Math.random()*3);
    return option[randomIndex];
}
const playGame=(userChoice)=>{
    const computerChoice=generateCompChoice();
    if(userChoice===computerChoice)
    {
        document.querySelector(".msg").innerText="Game Has Drawn";

    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissor"?false:true;
        }
        else{
            userWin=computerChoice==="rock"?false:true;
        }
        if(userWin===true){
            userScore++;
            yoursScore.innerText=userScore;
            document.querySelector(".msg").innerText="User Won";  
        }
        else{
            computerScore++;
            compScore.innerText=computerScore;
            
            document.querySelector(".msg").innerText="Computer Won";
        }
    }



}



images.forEach((image)=>{
    image.addEventListener("click",(e)=>{
        const userChoice=image.getAttribute("id");
        document.querySelector(".msg").innerText="";

        playGame(userChoice);


    })
})