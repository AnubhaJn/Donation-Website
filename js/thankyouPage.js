const paymentSuccessHeader = document.querySelector(".payment-successful");
const paymentQuote = document.querySelector(".payment-quote");
const container = document.querySelector(".box-container");
const timeline = new TimelineMax({ delay: 0.2 });
const redirect = document.querySelector(".redirecting");

window.onload = () => {
  if (window.innerWidth < 600) {
    timeline.fromTo(
      container,
      0.5,
      { width: "0%", opacity: 0 },
      { width: "80%", opacity: 1 }
    );
  } else {
    timeline.fromTo(
      container,
      0.5,
      { width: "0%", opacity: 0 },
      { width: "50%", opacity: 1 }
    );
  }
  timeline.fromTo(
    paymentSuccessHeader,
    0.5,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1 }
  );
  timeline.fromTo(paymentQuote, 0.5, { opacity: 0 }, { opacity: 1 });
  timeline.fromTo(redirect, 0.5, { opacity: 0 }, { opacity: 1 }, 2);

  setInterval(function () {
    window.location.replace("index.html");
  }, 9000);
};
