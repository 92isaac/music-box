let clickValue;

let ratebtn = document.querySelectorAll(".btn-rate")
for(let i = 0; i < ratebtn.length; i++){
        ratebtn[i].addEventListener("click",()=>{
        clickValue = ratebtn[i].innerHTML
            console.log(clickValue)   
            if(clickValue == 'd'){
                console.log(typeof(clickValue))
                let playAudio = new Audio()
                playAudio.play()
            }else if(clickValue == "r"){
                let playAudio = new Audio()
                playAudio.play()
            }
        })
    }