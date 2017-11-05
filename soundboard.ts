/**
 * Authors: Jack, Peter, and Dom
 * Date: 11-04-2017
 * 
 * Soundboard.ts
 * 
 * HackNC 2017 
 * 
 * No audio files or pictures are our own
 */


console.log("Hello World");

let sound: HTMLAudioElement = new Audio();
let pic: HTMLImageElement = new Image();
let oldpics: HTMLImageElement[] = new Array;
let lastSound: HTMLAudioElement = new Audio();
let master: HTMLAudioElement = new Audio();
master = new Audio("./goodmansnothot/Instrumental.mp3");
master.volume = .5;
let onoff: boolean = false;



function main(): void {



    window.onkeydown = function(event: KeyboardEvent): void{


        if (event.keyCode === 65) {
            sound =  new Audio("./goodmansnothot/mansnothot.mp3");
            
            addPicture("./bigshaq.jpg");
            
        }else if (event.keyCode === 83) {
            sound = new Audio("./goodmansnothot/yo.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 68) {
            sound = new Audio("./goodmansnothot/andapootpo.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 70) {
            sound = new Audio("./goodmansnothot/bigshaq.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 71) {
            sound = new Audio("./goodmansnothot/bigshaqpt2.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 72) {
            sound = new Audio("./goodmansnothot/boom.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 74) {
            sound = new Audio("./goodmansnothot/boompt2.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 75) {
            sound = new Audio("./goodmansnothot/just sauce.mp3");
            addPicture("./images/bigshaq.jpg");
        }else if (event.keyCode === 76) {
            sound = new Audio("./goodmansnothot/yo.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 186) {
            sound = new Audio("./goodmansnothot/cootcootcootcootpoompoom.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 222) {
            sound = new Audio("./goodmansnothot/no ketchup.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 13) {
            sound = new Audio("./goodmansnothot/ok.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 81) {
            sound = new Audio("./goodmansnothot/persparation ting.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 87) {
            sound = new Audio("./goodmansnothot/poompoom.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 69) {
            sound = new Audio("./goodmansnothot/popx4.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 82) {
            sound = new Audio("./goodmansnothot/quackquackquack.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 84) {
            sound = new Audio("./goodmansnothot/quick mafs.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 89) {
            sound = new Audio("./goodmansnothot/ricekrispies.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 85) {
            sound = new Audio("./goodmansnothot/scoopnoon.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 73) {
            sound = new Audio("./goodmansnothot/skeepeepeepopop.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 79) {
            sound = new Audio("./goodmansnothot/skeeya.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 80) {
            sound = new Audio("./goodmansnothot/take off ya jacket.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 90) {
            sound = new Audio("./goodmansnothot/ting goes skkkra.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 88) {
            sound = new Audio("./goodmansnothot/trapondaroad.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 67) {
            sound = new Audio("./goodmansnothot/yadfunno.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 86) {
            sound = new Audio("./goodmansnothot/llama toes.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 66) {
            sound = new Audio("./goodmansnothot/frisbee.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 78) {
            sound = new Audio("./goodmansnothot/look at ya nose.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 77) {
            sound = new Audio("./goodmansnothot/man can neva be hot.mp3");
            addPicture("./bigshaq.jpg");
        }else if (event.keyCode === 32) {
            
            if (onoff) {
                onoff = false;
                master.pause();
                
            }else {
                onoff = true;                
                master.volume = .5;
                master.play();
                
            }
        }
        sound.play();
        sound.onended = deletePics;
        lastSound.onended = null;
        lastSound = sound;
        
        

    }
}




function addPicture(src: string): void {
    pic = new Image();
    pic.src = src;
    document.body.appendChild(pic);
    oldpics.push(pic);

}

function deletePics(): void {
    while (oldpics.length !== 0) { 
        document.body.removeChild(oldpics[oldpics.length - 1]);
        oldpics.pop();

    }
}

main();