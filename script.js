const container = document.querySelector(".container");
const weaponsBox = container.querySelector(".weapon_box");
const weapons = weaponsBox.querySelectorAll(".weapons div");
const btn = container.querySelector(".btn");
const app_title = container.querySelector(".app_title");

const choices = container.querySelector(".choices");
const gameWrapper = choices.querySelector(".gameImgWrapper");
const player_choice = gameWrapper.querySelector(".player_choice");
const Computer_choice = gameWrapper.querySelector(".Computer_choice");

//selecting score boxes
let Win = container.querySelector(".Win");
let Loose = container.querySelector(".Loose");
let Draw = container.querySelector(".Draw");

//generate random num for comp
const computer_weapons = ["Rock","Paper","Scissor"];
let randomNumber = Math.floor(Math.random()*computer_weapons.length);
let ComputerWeapon = computer_weapons[randomNumber];
const ComputerImg = gameWrapper.querySelector(".ComputerImg");



let PlayerImg = gameWrapper.querySelector(".PlayerImg");




const results = {
    RockRock: "Draw",
    RockPaper: "Loose",
    RockScissor: "Win",
    PaperRock: "Win",
    PaperPaper: "Draw",
    PaperScissor:"Loose",
    ScissorRock: "Loose",
    ScissorPaper: "Win",
    ScissorScissor: "Draw"
}

let w = 0;
let l = 0;
let d = 0;


//generate a random value for computer and on the basis of that assign a value to computer
function ComputerSelectedWeapon(){
    weapons.forEach(i => {
        
        if(i.classList.contains(ComputerWeapon)){
           let src = i.firstElementChild.src;
           ComputerImg.src = src;
        }
    });
}










//to get the src out of shitttttt
// console.log(gameWrapper.children[1].children[0].src);
// console.log(gameWrapper)








//add click functionality on the Weapons
weapons.forEach(i => {
    i.addEventListener("click",(e)=>{

        //hide weapon show play
        weaponsBox.classList.add("hide");
        choices.classList.remove("hide");

        // add active class for 1 sec
        setTimeout(()=>{
            player_choice.classList.add("active");
            Computer_choice.classList.add("active");


        },1000);
        //pause the shake hand animation after 3.5s
        setTimeout(()=>{
            player_choice.style.animationPlayState = "paused";
            Computer_choice.style.animationPlayState = "paused";
            
            //add the player selected src
            // let PlayerImg = gameWrapper.querySelector(".PlayerImg");  //declare it outside the loop
            let src = e.target.src;
            PlayerImg.src =src;

            //call the computer weapon function 
            ComputerSelectedWeapon();

            // show result
        let HumanNum = i.className;
        let WhoWin = HumanNum + ComputerWeapon;
        console.log(WhoWin);
        console.log(results[WhoWin]);
        let mainResult = results[WhoWin];
       

        if(Win.classList.contains(mainResult)){
            ++w;
            Win.firstElementChild.innerText =w;
            console.log(Win.firstElementChild.innerText);
            app_title.innerText = "🎉 Boom! You crushed the computer!";
    
        }
        else  if(Loose.classList.contains(mainResult)){
            ++l;
            Loose.firstElementChild.innerText =l;
            app_title.innerText = "🤖 Better luck next time";

        }
        else{
            ++d;
            Draw.firstElementChild.innerText =d;
            app_title.innerText = "😐 It’s a tie! Great minds think alike!";
        }

        //add play button
        setTimeout(()=>{
          btn.classList.remove("hide");
        },1500)



        },3500)

        


    })
});



function PlayAgain(){

    //refresh heading
    app_title.innerText ="Rock Paper Scissor";
    //hide play button
    btn.classList.add("hide");
    //show the wepons      //hide the play
    weaponsBox.classList.remove("hide");
    choices.classList.add("hide");

    //set my choise and computer choice to rock
    PlayerImg.src = "rock.png";
    ComputerImg.src = "rock.png";

    //remove active class 
    player_choice.classList.remove("active");
    Computer_choice.classList.remove("active");
    //play animation
    player_choice.style.animationPlayState = "running";
    Computer_choice.style.animationPlayState = "running";
}














