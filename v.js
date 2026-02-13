// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const req=document.querySelector(".req");
const lyrics=document.querySelector(".lyrics");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
 

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

let yesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
       req.style.display="flex";
         var fah = new Audio("fahhhhh.mp3");
        fah.play();
    
    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

//YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yaaay 💖";

    var lov = new Audio("Levitating-(SambalpuriStar.In).mp3");
        lov.play();
    

    const data= [
    { text: "If you wanna run away with me, I know a galaxy",type:"word", startTime: 9 },
    { text: "And I can take you for a ride", type:"word",startTime: 11 },
    { text: "I had a premonition that we fell into a rhythm", type:"word",startTime: 14 },
    { text: "Where the music don't stop for life",type:"word", startTime: 16 },

    { text: "Glitter in the sky, glitter in my eyes",type:"word", startTime: 18 },
    { text: "Shining just the way I like",type:"word", startTime: 21 },
    { text: "If you're feeling like you need a little bit of company",type:"word", startTime: 23 },
    { text: "You met me at the perfect time",type:"word", startTime: 25 },

    { text: "You want me, I want you, baby", type:"word",startTime: 28 },
    { text: "My sugarboo, I'm levitating", type:"word",startTime: 30 },
    { text: "The Milky Way, we're renegading",type:"word", startTime: 33 },
    { text: "Yeah, yeah, yeah, yeah, yeah", type:"word",startTime: 35 },

    { text: "I got you, moonlight, you're my starlight",type:"word", startTime: 37 },
    { text: "I need you all night, come on, dance with me", type:"word",startTime: 41 },
    { text: "I'm levitating", type:"word",startTime: 46 },
     { text: "You,moonlight,you're my starlight(you're the moonlight)",type:"word", startTime: 46 },
    { text: "I need you all night, come on, dance with me", type:"word",startTime: 51 },
    { text: "I'm levitating", type:"word",startTime: 55 },


    // Continue same pattern for rest of lyrics...
    ];

const syncData = data.map ((lines)=>{
    return {text: lines.text ,time: lines.startTime};
});

syncData.forEach((item)=>{
    const spantag =document.createElement('div');
    spantag.innerText=item.text;
    lyrics.appendChild(spantag);
});
        lov.addEventListener('timeupdate',()=>
    {
       
        const currentTime = lov.currentTime;
        syncData.forEach((item, index) => {
            const spantag = lyrics.children[index];
            if(currentTime >= item.time){
               spantag.classList.add('active') ;
            }
          if (currentTime >= 60) {

           lov.pause();          // Stop
           
            Array.from(lyrics.children).forEach(child =>{
                child.classList.remove('active');
            });
             lov.currentTime = 0;  // Reset to beginning
           lov.play();           // Play again
         
                
        }
   

        });
       
      
    });


   
    
    catImg.src = "dancing bunny.gif";
    
    req.style.display="none";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

 