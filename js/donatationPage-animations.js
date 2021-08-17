const headingText = document.querySelector(".header-text");
const bodyText = document.querySelector(".body-text");
const payBtn = document.querySelector(".payment-section");
const container = document.querySelector(".box-container");
const timeline = new TimelineMax({ delay: 0.2 });

window.onload = () => {
    if (window.innerWidth < 600) {
        timeline.fromTo(container, 0.5, { width: "0%", opacity: 0 }, { width: "80%", opacity: 1 });
    } else {
        timeline.fromTo(container, 0.5, { width: "0%", opacity: 0 }, { width: "50%", opacity: 1 });
    }
    timeline.fromTo(headingText, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
    timeline.fromTo(bodyText, 0.5, { opacity: 0 }, { opacity: 1 });
    timeline.fromTo(payBtn, 0.5, { opacity: 0 }, { opacity: 1 });
}
