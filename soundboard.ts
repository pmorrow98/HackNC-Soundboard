/**
 * Authors: Jack, Peter, and Dom
 * Date: 11-04-2017
 * 
 * Soundboard.ts
 * 
 * HackNC 2017 
 * 
 * No audio files are our own
 */


console.log("Hello World");

let sound: HTMLAudioElement = new Audio();


function main(): void {
    window.onkeydown = function(event: KeyboardEvent): void{
        if (event.keyCode === 65) {
            sound =  new Audio("fire-truck-air-horn_daniel-simion.mp3");
            sound.play();
        }else if (event.keyCode === 83) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 68) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 70) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 71) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 72) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 74) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 75) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 76) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 186) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 222) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 13) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 81) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 87) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 69) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 82) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 84) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 89) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 85) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 73) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 79) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 80) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 90) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 88) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 67) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 86) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 66) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 78) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }else if (event.keyCode === 77) {
            sound = new Audio("front-desk-bells-daniel_simon.mp3");
            sound.play();
        }

    }
}
main();