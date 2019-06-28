// About Page js file

let teamBig = document.querySelectorAll(".accordion-open-display");
let teamSmall = document.querySelectorAll(".accordion-closed-display");

function sizeCheckAccordion()
{

    if(leaves) 
    {
        
        teamAccordion.accLeaves.forEach(accLeaf => 
        {   
            if(accLeaf.leafIsOpen) accLeaf.closeLeaf();
        });
    }

    if(window.innerWidth < 1000)
    {
        teamBig.forEach(member => member.classList.add("acc-hide"));
        teamSmall.forEach(member => member.classList.remove("acc-hide"));
    }
    if(window.innerWidth >= 1000)
    {
        teamBig.forEach(member => member.classList.remove("acc-hide"));
        teamSmall.forEach(member => member.classList.add("acc-hide"));
        
    }
}

window.addEventListener("load", _ =>
{
    sizeCheckAccordion();
});


// let lock = false;

window.addEventListener("resize", _ =>
{
// if(!lock) 
// {
    // lock = true;
    sizeCheckAccordion();
    // setTimeout( _ => lock = false, 200);
// }
});