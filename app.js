let clickValue;

let ratebtn = document.querySelectorAll(".btn-rate")
for(let i = 0; i < ratebtn.length; i++){
        ratebtn[i].addEventListener("click",()=>{
        clickValue = ratebtn[i].innerHTML
            console.log(clickValue)   
            if(clickValue == 'crash'){
                console.log(typeof(clickValue))
                let playAudio = new Audio('./sounds/crash.mp3')
                playAudio.play()
            }else if(clickValue == "bass"){
                let playAudio = new Audio('sounds/kick-bass.mp3')
                playAudio.play()
            }else if(clickValue == "snare"){
                let playAudio = new Audio('sounds/snare.mp3')
                playAudio.play()
            }else if(clickValue == "tom1"){
                let playAudio = new Audio('sounds/tom-1.mp3')
                playAudio.play()
            }else if(clickValue == "tom2"){
                let playAudio = new Audio('sounds/tom-2.mp3')
                playAudio.play()
            }else if(clickValue == "tom3"){
                let playAudio = new Audio('sounds/tom-3.mp3')
                playAudio.play()
            }else if(clickValue == "tom4"){
                let playAudio = new Audio('sounds/tom-4.mp3')
                playAudio.play()
            }
        })
    }