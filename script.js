let userCount=0;
let compCount=0;

window.addEventListener("load",()=>{if(localStorage.getItem("userCount")){
    userCount=localStorage.getItem("userCount");
    compCount=localStorage.getItem("compCount");
    updateScore();
}
})


const a=document.querySelectorAll(".choice");
a.forEach((element) => {element.addEventListener("click",userClicked)
});

function userClicked(e){
    a.forEach((element) => {element.removeEventListener("click",userClicked)
    });
    const choice=e.target;
   const userIdHolder = choice.getAttribute("title");

   const compIdHolder = ["rock","paper","scissors"][Math.floor(Math.random()*3)];

   document.querySelector(`#${userIdHolder}`).style.scale="1.2";
   document.querySelector(`#${userIdHolder}`).style.backgroundColor="blue";
   

   

   checkWin(userIdHolder,compIdHolder);
}

function checkWin(a,b){
    if(a===b){
        document.querySelector("#msg").innerHTML="DRAW - Retry";
        document.querySelector(`#${a}`).style.backgroundColor="purple";
        document.querySelector(`#msg`).style.backgroundColor="yellow";
        document.querySelector(`#msg`).style.color="black";
        ["rock","paper","scissors"].forEach((item)=>{
            if(b!==item){
                document.querySelector(`#${item}`).style.opacity="0";
            }
        });
    }
    else{

        document.querySelector(`#${b}`).style.backgroundColor="red";
        document.querySelector(`#${b}`).style.scale="1.2";

        if(a==="rock"){
            if(b==="scissors"){
                document.querySelector("#msg").innerHTML="U won this time - next move";
                document.querySelector(`#msg`).style.backgroundColor="green";
                userCount++;
                document.querySelector(`#paper`).style.opacity="0";
            }
            else{
                document.querySelector("#msg").innerHTML="U lost this time - Retry";
                document.querySelector(`#msg`).style.backgroundColor="red";
                compCount++;
                document.querySelector(`#scissors`).style.opacity="0";
            }
        }
        else if(a==="paper"){
            if(b==="rock"){
                document.querySelector("#msg").innerHTML="U won this time - next move";
                document.querySelector(`#msg`).style.backgroundColor="green";
                userCount++;
                document.querySelector(`#scissors`).style.opacity="0";
            }
            else{
                document.querySelector("#msg").innerHTML="U lost this time - Retry";
                document.querySelector(`#msg`).style.backgroundColor="red";
                compCount++;
                document.querySelector(`#rock`).style.opacity="0";
            }
        }
        else if(a==="scissors"){
            if(b==="paper"){
                document.querySelector("#msg").innerHTML="U won this time - next move";
                document.querySelector(`#msg`).style.backgroundColor="green";
                userCount++;
                document.querySelector(`#rock`).style.opacity="0";
            }
            else{
                document.querySelector("#msg").innerHTML="U lost this time - Retry";
                document.querySelector(`#msg`).style.backgroundColor="red";
                compCount++;
                document.querySelector(`#paper`).style.opacity="0";
            }
        }
    }
    updateScore();
    checkFinalWin();
}

function updateScore(){
    localStorage.setItem("userCount",userCount);
    document.querySelector("#user-score").innerHTML=`${userCount}`;
    localStorage.setItem("compCount",compCount);
    document.querySelector("#comp-score").innerHTML=`${compCount}`;
}

function checkFinalWin(){
    if(userCount==5){
        alert("YOU FINALLY WON");
        memClear();
    }
    if(compCount==5){
        alert("YOU LOST (BLNT)");
        memClear();
    }
}

function memClear(){
    localStorage.clear();
    location.reload();
}