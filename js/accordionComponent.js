
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
    constructor(leaf, leaves, sepElements)
    {
        this.leaf = leaf;
        this.leaves = leaves;
        this.leafIsOpen = false;

        leaf.addEventListener("click", _ =>
        {
            if(window.innerWidth < 1000)
            {
                if(this.leafIsOpen) { this.closeLeaf(); }
                else if(!this.leafIsOpen) { this.openLeaf(); }
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
        let curHeight = this.leaf.offsetHeight;
        this.leaf.querySelector(".accordion-closed-display").classList.add("acc-hide");
        this.leaf.querySelector(".accordion-open-display").classList.remove("acc-hide");
        TweenMax.set(this.leaf, {height:"auto"});
        TweenMax.from(this.leaf, .5, {height: curHeight});
        

    }
    closeLeaf()
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

if(leaves) 
{
    teamAccordion = new Accordion(leaves);
    teamAccordion.accLeaves.forEach(accLeaf => 
    {   
        if(accLeaf.leafIsOpen) accLeaf.closeLeaf();
    });
}



let features = Array.from(document.querySelectorAll(".feature"));

let featureAccordion;

if(features) 
{
    featureAccordion = new Accordion(features);
    featureAccordion.accLeaves.forEach(accLeaf => 
    {   
        if(accLeaf.leafIsOpen) accLeaf.closeLeaf();
    });
}

let meetUsers = Array.from(document.querySelectorAll(".met-user-accordion"));

let meetUsersAccordion;

if(meetUsers) 
{
    meetUsersAccordion = new Accordion(meetUsers);
    meetUsersAccordion.accLeaves.forEach(accLeaf => 
    {   
        if(accLeaf.leafIsOpen) accLeaf.closeLeaf();
    });
}