const donateBtn = document.getElementById("donate-btn");
const nav = document.getElementById("navbar");
  
const textHeader = document.querySelector(".text-header");
const textSubheader = document.querySelector(".text-subheader");

const timeline = new TimelineMax({delay : 0.2});

window.onload = () =>{
    timeline.fromTo(nav , 0.5 , {y : -50,opacity:0}, {y:0,opacity :1});
    if (window.innerWidth < 600) {
        textHeader.classList.toggle("animate1");
        textSubheader.classList.toggle("animate2");
    } else {
        timeline.fromTo(textHeader, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
        timeline.fromTo(textSubheader, 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
    }
    timeline.fromTo(donateBtn , 0.5, { opacity: 0 }, { opacity: 1 });
}

console.log(window.innerWidth)
