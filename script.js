if ($(".home-cursor").length == 1) {
  var typed_strings = "Front-End Developer, Android Developer, Learner";
  var typed = new Typed(".home-cursor", {
    strings: typed_strings.split(", "),
    typeSpeed: 60,
    loop: true,
    backDelay: 900,
    backSpeed: 30,
  });
}

if ($(".about-cursor").length == 1) {
  var typed_strings = "Front-End Developer, Android Developer, Learner";
  var typed = new Typed(".about-cursor", {
    strings: typed_strings.split(", "),
    typeSpeed: 60,
    loop: true,
    backDelay: 900,
    backSpeed: 30,
  });
}

$(window).scroll(function () {
  // sticky navbar on scroll script
  if (this.scrollY > 20) {
    $(".navbar").addClass("sticky");
  } else {
    $(".navbar").removeClass("sticky");
  }

  // scroll-up button show/hide script
  if (this.scrollY > 300) {
    $(".scroll-up-btn").addClass("show");
  } else {
    $(".scroll-up-btn").removeClass("show");
  }
});

// slide-up script
$(".scroll-up-btn").click(function () {
  $("html").animate({ scrollTop: 0 });
  // removing smooth scroll on slide-up button click
  $("html").css("scrollBehavior", "auto");
});

$(".navbar .menu li a").click(function () {
  // applying again smooth scroll on menu items click
  $("html").css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$(".menu-btn").click(function () {
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

let resumeButton = document.getElementById("resumeButton");
let linkedinButton = document.getElementById("linkedinButton");
let storeApp = document.getElementById("StoreApp");
let socialApp = document.getElementById("SocialApp");
let googleBookApp = document.getElementById("googleBookApp");
let musicalWorld = document.getElementById("musicalWorld");
let sudokuSolver = document.getElementById("sudokuSolver");
let twitter = document.getElementById("twitter");
let linkedin = document.getElementById("linkedin");
let github = document.getElementById("github");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

resumeButton.addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1026XOxI3cj-OCIXqASBCg192wniS-ZSE/view?usp=sharing"
  );
});

linkedinButton.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/rahul-a-146561107/");
});

storeApp.addEventListener("click", () => {
  window.open("https://github.com/rahul-aggarwal000005/Store-App");
});

socialApp.addEventListener("click", () => {
  window.open("https://github.com/rahul-aggarwal000005/Social-App");
});

googleBookApp.addEventListener("click", () => {
  window.open("https://github.com/rahul-aggarwal000005/Google-Books-App-");
});

musicalWorld.addEventListener("click", () => {
  window.open("https://github.com/rahul-aggarwal000005/Musical-World");
});

sudokuSolver.addEventListener("click", () => {
  window.open("https://github.com/rahul-aggarwal000005/Sudoku-Solver");
});

twitter.addEventListener("click", () => {
  window.open("https://twitter.com/Rahul_9818");
});

linkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/rahul-a-146561107/");
});

github.addEventListener("click", () => {
  window.open("https://github.com/rahul-aggarwal000005");
});

document.getElementById("form-submit").addEventListener('submit',(e)=>{
  document.getElementById("main-subject").value = document.getElementById("subject").value;
})