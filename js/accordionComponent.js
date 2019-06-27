
class Accordion
{
    constructor(leaves)
    {
        this.leaves = leaves;
        this.accLeaves = this.leaves.map(leaf => new AccordionLeaf(leaf, this));
    }
}

class AccordionLeaf
{
    constructor(leaf, leaves)
    {
        this.leaf = leaf;
        this.leaves = leaves;
        this.leafIsOpen = false;
        leaf.addEventListener("click", _ =>
        {
            if(window.innerWidth < 1000)
            {
                if(this.leafIsOpen) { this.closeLeaf(this.leaf); }
                else if(!this.leafIsOpen) { this.openLeaf(this.leaf); }
            }
        })
    }
    openLeaf()
    {
        this.leaves.accLeaves.forEach(leaf => 
        {
            if(leaf.leafIsOpen) leaf.closeLeaf();
        });
        this.leafIsOpen = true;
        //anim
        let curHeight = this.leaf.offsetHeight;
        this.leaf.querySelector(".accordion-closed-display").classList.add("acc-hide");
        this.leaf.querySelector(".accordion-open-display").classList.remove("acc-hide");
        TweenMax.set(this.leaf, {height:"auto"});
        TweenMax.from(this.leaf, .5, {height: curHeight});
    }
    closeLeaf(leaf)
    {
        this.leafIsOpen = false;
        
        //anim
        let curHeight = this.leaf.offsetHeight;
        
        
        this.leaf.querySelector(".accordion-closed-display").classList.remove("acc-hide");
        this.leaf.querySelector(".accordion-open-display").classList.add("acc-hide");
        
        TweenMax.set(this.leaf, {height:"auto"});
        TweenMax.from(this.leaf, .5, {height: curHeight});
        
    }
}

let leaves = Array.from(document.querySelectorAll(".team-member"));

let teamAccordion;
let accSizeFunc;
if(leaves) 
{
    teamAccordion = new Accordion(leaves);
    teamAccordion.accLeaves.forEach(accLeaf => 
    {   
        if(accLeaf.leafIsOpen) accLeaf.closeLeaf();
    });
    accSizeFunc = _ => teamAccordion.accLeaves.forEach(leaf => leaf.leafIsOpen = true);
}



let featureDetails = Array.from(document.querySelectorAll(".feature-details"));

let featureAccordion;

if(featureDetails) 
{
    featureAccordion = new Accordion(featureDetails);
    featureAccordion.accLeaves.forEach(accLeaf => 
    {   
        if(accLeaf.leafIsOpen) accLeaf.closeLeaf();
    });
    accSizeFunc = _ => featureDetails.accLeaves.forEach(leaf => leaf.leafIsOpen = true);
}