// a comment

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
            if(this.leafIsOpen) { this.closeLeaf(this.leaf); }
            else if(!this.leafIsOpen) { this.openLeaf(this.leaf); }
        })
    }
    openLeaf()
    {
        this.leaves.accLeaves.forEach(leaf => leaf.closeLeaf());
        this.leafIsOpen = true;
        this.leaf.style.height = "auto";
        this.leaf.querySelector(".accordion-closed-display").classList.add("acc-hide");
        this.leaf.querySelector(".accordion-open-display").classList.remove("acc-hide")

        function swapOpen(elem)
        {
            this.leaf.querySelector(".accordion-closed-display").classList.add("acc-hide");
            this.leaf.querySelector(".accordion-open-display").classList.remove("acc-hide");
        }
        // TweenMax.set(this.leaf, {height: 30});
        TweenMax.fromTo(this.leaf, .7, {opacity: 0, }, {opacity: 1, height:"auto", });
        // let tlOpen = new TimelineMax();
        // tlOpen.to(this.leaf, .7, )


    }
    closeLeaf(leaf)
    {
        this.leaf.querySelector(".accordion-closed-display").classList.remove("acc-hide");
        this.leaf.querySelector(".accordion-open-display").classList.add("acc-hide");
        // this.leaf.style.height = "3.9rem";
        this.leafIsOpen = false;
        
    }
}

let leaves = Array.from(document.querySelectorAll(".team-member"));

let teamAccordion;
if(leaves) teamAccordion = new Accordion(leaves);
teamAccordion.accLeaves.forEach(accLeaf => 
{   if(accLeaf.leafIsOpen) accLeaf.closeLeaf();
});

