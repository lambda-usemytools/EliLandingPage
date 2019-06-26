
let menuIcon = document.querySelector(".burger-icon");
let mobileMenu = document.querySelector(".mobile-menu");
let burgerLines = Array.from(document.querySelectorAll(".burger-line"));
let menuItems = Array.from(document.querySelectorAll(".mobile-menu-item"));
let menuIsOpen = false;
let menuCloseButton = document.querySelector(".mobile-menu-close");
menuIcon.addEventListener("click", _ =>
{
    mobileMenu.classList.add("mobile-menu-show");
    TweenMax.fromTo(mobileMenu, .5, {x:200}, {x:0})
    menuIsOpen = true;
})

document.querySelector("body").addEventListener("click", _ =>
{
    
    // if (menuIsOpen && (event.target !== mobileMenu && event.target !== menuIcon && !burgerLines.includes(event.target)))
    if((menuIsOpen && !menuItems.includes(event.target) && event.target != menuIcon) || (event.target === menuCloseButton))
    {
        event.preventDefault();
        let closeMenu = () => mobileMenu.classList.remove("mobile-menu-show");
        TweenMax.to(mobileMenu, .5, {x:200, onComplete: closeMenu});
        menuIsOpen = false;
    }
})
