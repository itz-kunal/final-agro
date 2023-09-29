const navLinks = document.querySelectorAll('.dropLink');
const dropDown=document.querySelectorAll('.dropdown')
let anchor = document.querySelectorAll('.dropItm a')


// function makeVisible(imgLink,value1Link,value1,value2Link,value2,value3Link,value3) {
//     let values=document.getElementsByClassName('dropItm')
//     let image=document.querySelector('.drop-img')
//     image.src = imgLink
//     dropDown.style.display='flex';

//     values[0].innerHTML=value1 
//     anchor[0].href=value1Link
//     values[1].innerHTML=value2 
//     anchor[1].href=value2Link
//     if(value3=='none'){
//         values[2].style.display='none';
//         anchor[2].href=value3Link
//     }else{
//         values[2].style.display='block'
//     }
//     dropDown.classList.toggle('active')

// }
// function keepIt(){
//     dropDown.style.display='flex';
// }

function makeHidden(){
    dropDown.style.display='none';
    
}
function visible(e){
    for(let i=0; i<dropDown.length; i++){
        // dropDown[i].style.display='none'
    dropDown[i].classList.toggle('none')

    }
    // dropDown[e].style.display='flex'
    dropDown[e].classList.toggle('active')
}


 // ------hamburger section-------------
 let hamburger = document.getElementsByClassName('hamburger')
 let menu = document.getElementById('menu');
 // menu.style.display='flex';
 function openMenu() {
     hamburger[0].style.display = 'none';
     hamburger[1].style.display = 'block'
     menu.style.display = 'flex';
 }
 // openMenu()
 function closeMenu() {
     hamburger[1].style.display = 'none';
     hamburger[0].style.display = 'block'
     menu.style.display = 'none'
 }

 let texts = document.getElementsByClassName('texts')
 let cards = document.getElementsByClassName('cards')
 let display = document.querySelector('.mid-content')
 let playstrip = document.getElementsByClassName('playstrip')
 let strip = document.getElementsByClassName('strip')

 let slides=document.querySelector('.slides')

 // ----------------------------function to change texts--------------------------
 function changeText(k) {
     display.innerHTML = texts[k].innerHTML

     for (let i = 0; i < cards.length; i++) {
         // -------------------setting other values as default------------------------
         cards[i].style.transform = 'scale(1)'
         playstrip[i].style.animation = 'none'
         strip[i].style.backgroundColor = 'rgba(255, 255, 255, 0.623)'
         playstrip[i].style.backgroundColor = 'transparent'
        //  slides[i].style.display='none';
     }

     // -------------------------setting new values-----------------------------            
     playstrip[k].style.animation = 'colorChange 8s linear forwards';
     playstrip[k].style.backgroundColor = '#fff';
     cards[k].style.transform = 'scale(1.2)'
 }

 let i = 0;
 // ---------------function to auto changeText-------------------------
 function autochange() {
     changeText(i);
     i++;
     if (i >= texts.length) {
         i = 0
     }
     setTimeout(autochange, 8000);
 }
 autochange()


 let j=0
 function changingbackVid(k){
    slides.src=`video-${k+1}.mp4`
 }
 
function autochangeImg() {
    changingbackVid(j);
    j++;
    if (j >= 6) {
        j = 0
    }
    setTimeout(autochangeImg, 8000);
}
autochangeImg()

 // --------------- changing header background ---------------------
 window.addEventListener("scroll", () => {
     let header = document.querySelector('header');
     let scroll = window.scrollY;
     let scrollAmount = 260;
     
     if (scroll > scrollAmount) {
         header.style.backgroundColor = " #0f4d0b";
     } else {
         header.style.backgroundColor = "transparent";
     }
     if(window.innerWidth<768){
         header.style.backgroundColor = " #0f4d0b";
     }

 })



//  ------------------for select links in nav bar--------------
function openSelect(e){
    let foropen=document.querySelectorAll('.nav-links .dropSlect')
    foropen[e].style.display='flex'
}

