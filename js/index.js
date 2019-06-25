// Home Page js file

// Mobile Nav Menu


//load anim.

TweenMax.fromTo(".product-features", .8, {y:80, opacity: 0}, {y:0, opacity: 1, delay: 0.5, ease:Back.easeOut});
TweenMax.fromTo(".arrow-up", 0.8, {y: 80, opacity: 0}, {y: 0, opacity: 1, delay: .5, ease:Back.easeOut});


//hover anim for feature cards

// let featureCards = document.querySelectorAll(".feature");

// featureCards.forEach(card => card.addEventListener("mouseover", _ => 
// {
//     TweenMax.to(card, 0.5, {y: -10, scale: 1.03, boxShadow: '0 0 20px rgba(0,0,0,0.4)'});
// }));

// featureCards.forEach(card => card.addEventListener("mouseleave", _ => 
// {
//     TweenMax.to(card, 0.5, {y: 7, scale: 1.03, boxShadow: '0 0 20px rgba(0,0,0,0)'});
// }));

