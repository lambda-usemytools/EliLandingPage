// Home Page js file


// Mobile Nav Menu


//load anim.

TweenMax.fromTo(".product-features", .5, {y:80, opacity: 0}, {y:0, opacity: 1, delay: 0.5, ease:Back.easeOut});
TweenMax.fromTo(".arrow-up", 0.5, {y: 80, opacity: 0}, {y: 0, opacity: 1, delay: .5, ease:Back.easeOut});



// Hover anim for feature cards

let yMoveUp = -10;
let yMoveDown = 7;
if (window.matchMedia("(max-width: 1439px)")) { yMoveUp = -6; yMoveDown = 5; }
else if (window.matchMedia("(max-width: 799px)")) { yMoveUp = -10; yMoveDown = 7; }

let featureCards = document.querySelectorAll(".feature");

featureCards.forEach(card => card.addEventListener("mouseover", _ => 
{
    TweenMax.to(card, 0.5, {y: yMoveUp, scale: 1.03, boxShadow: '0 0 20px rgba(0,0,0,0.4)'});
}));

featureCards.forEach(card => card.addEventListener("mouseleave", _ => 
{
    TweenMax.to(card, 0.5, {y: yMoveDown, scale: 1.03, boxShadow: '0 0 20px rgba(0,0,0,0)'});
}));




// Button hover effect

let joinBtns = Array.from(document.querySelectorAll(".join-today-button"));

if(document.querySelector(".sign-up-now-button"))
{
    joinBtns.push(document.querySelector(".sign-up-now-button"));
}

joinBtns.forEach(btn => btn.addEventListener("mouseenter", _ =>
{
    btn.style.border = "3px solid cyan";
    btn.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
}))

joinBtns.forEach(btn => btn.addEventListener("mouseleave", _ =>
{
    btn.style.border = "3px solid transparent";
    btn.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
}))




// Meet Users Section based on Width
// Also How it works section width resize

let mUserFlex = document.querySelector(".meet-users-div");
let mUserAccordion = document.querySelector(".meet-users-accordion");
let howItWorksTabs = document.querySelector(".how-it-works-top").querySelectorAll(".tabs-link");


function sizeCheckAccordion()
{
    if(window.innerWidth < 1000)
    {
        mUserFlex.classList.add("meet-users-hidden");
        mUserAccordion.classList.remove("meet-users-hidden");
        howItWorksTabs.forEach(tab => tab.classList.remove("hide-tabs"));
    }
    if(window.innerWidth >= 1000)
    {
        mUserFlex.classList.remove("meet-users-hidden");
        mUserAccordion.classList.add("meet-users-hidden");
        howItWorksTabs.forEach(tab => tab.classList.add("hide-tabs"));
    }
}

window.addEventListener("load", _ =>
{
    sizeCheckAccordion();
});


window.onresize = sizeCheckAccordion;



